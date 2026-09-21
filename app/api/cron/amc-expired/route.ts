import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendMail, amcExpiredEmail } from "@/lib/mail";

function isAuthorized(req: Request) {
    const secret = process.env.CRON_SECRET;
    if (!secret) return false;
    const url = new URL(req.url);
    const key = url.searchParams.get("key") || req.headers.get("x-cron-secret");
    return key === secret;
}

// Triggered by an external cron job (e.g. cPanel Cron Jobs) hitting this URL
// once a day. Emails each customer whose AMC has already expired, once per
// expiry (amcExpiredNotifiedAt gates re-sending until the AMC is renewed,
// which resets it - see app/api/admin/customers/[id]/route.ts).
export async function GET(req: Request) {
    if (!isAuthorized(req)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const now = new Date();

    const customers = await prisma.customer.findMany({
        where: {
            amcDateTo: { lt: now },
            amcExpiredNotifiedAt: null,
            email: { not: null },
        },
    });

    const notified: string[] = [];
    for (const customer of customers) {
        if (!customer.email || !customer.amcDateTo) continue;

        await sendMail({
            to: customer.email,
            subject: "Your AMC has expired",
            html: amcExpiredEmail(customer.name, customer.amcDateTo),
        });

        await prisma.customer.update({
            where: { id: customer.id },
            data: { amcExpiredNotifiedAt: now },
        });

        notified.push(customer.id);
    }

    return NextResponse.json({ checked: customers.length, notified });
}
