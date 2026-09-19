import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendMail, amcExpiryReminderEmail } from "@/lib/mail";

const REMINDER_WINDOW_DAYS = 15;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

function isAuthorized(req: Request) {
    const secret = process.env.CRON_SECRET;
    if (!secret) return false;
    const url = new URL(req.url);
    const key = url.searchParams.get("key") || req.headers.get("x-cron-secret");
    return key === secret;
}

// Triggered by an external cron job (e.g. cPanel Cron Jobs) hitting this URL
// once a day. Emails each customer whose AMC expires within the next 15 days,
// once per expiry (amcReminderSentAt gates re-sending until the AMC is renewed).
export async function GET(req: Request) {
    if (!isAuthorized(req)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const now = new Date();
    const windowEnd = new Date(now.getTime() + REMINDER_WINDOW_DAYS * MS_PER_DAY);

    const customers = await prisma.customer.findMany({
        where: {
            amcDateTo: { gte: now, lte: windowEnd },
            amcReminderSentAt: null,
            email: { not: null },
        },
    });

    const notified: string[] = [];
    for (const customer of customers) {
        if (!customer.email || !customer.amcDateTo) continue;
        const daysLeft = Math.ceil((customer.amcDateTo.getTime() - now.getTime()) / MS_PER_DAY);

        await sendMail({
            to: customer.email,
            subject: `Your AMC expires in ${daysLeft} day${daysLeft === 1 ? "" : "s"}`,
            html: amcExpiryReminderEmail(customer.name, customer.amcDateTo, daysLeft),
        });

        await prisma.customer.update({
            where: { id: customer.id },
            data: { amcReminderSentAt: now },
        });

        notified.push(customer.id);
    }

    return NextResponse.json({ checked: customers.length, notified });
}
