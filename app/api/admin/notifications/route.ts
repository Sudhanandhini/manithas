import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const AMC_WINDOW_DAYS = 15;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const now = new Date();
    const windowEnd = new Date(now.getTime() + AMC_WINDOW_DAYS * MS_PER_DAY);

    const [amcCustomers, ticketsWithUnread] = await Promise.all([
        prisma.customer.findMany({
            where: { amcDateTo: { gte: now, lte: windowEnd }, disabled: false },
            orderBy: { amcDateTo: "asc" },
            select: { id: true, name: true, companyName: true, amcDateTo: true },
            take: 20,
        }),
        prisma.ticket.findMany({
            where: { messages: { some: { senderType: "customer", isReadByAdmin: false } } },
            orderBy: { lastActivityAt: "desc" },
            include: {
                customer: { select: { name: true } },
                messages: { where: { senderType: "customer", isReadByAdmin: false }, select: { id: true } },
            },
            take: 20,
        }),
    ]);

    const amc = amcCustomers.map((c) => ({
        id: c.id,
        name: c.companyName || c.name,
        amcDateTo: c.amcDateTo,
        daysLeft: c.amcDateTo ? Math.ceil((c.amcDateTo.getTime() - now.getTime()) / MS_PER_DAY) : null,
    }));

    const tickets = ticketsWithUnread.map((t) => ({
        id: t.id,
        subject: t.subject,
        customerName: t.customer.name,
        unreadCount: t.messages.length,
    }));

    return NextResponse.json({
        amc,
        tickets,
        totalCount: amc.length + tickets.length,
    });
}
