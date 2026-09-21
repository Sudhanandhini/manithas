import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { customerAuthOptions } from "@/lib/customerAuth";
import { prisma } from "@/lib/prisma";

const AMC_WINDOW_DAYS = 15;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

export async function GET() {
    const session = await getServerSession(customerAuthOptions);
    if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const accountId = (session.user as { accountId: string }).accountId;

    const now = new Date();
    const windowEnd = new Date(now.getTime() + AMC_WINDOW_DAYS * MS_PER_DAY);

    const [account, ticketsWithUnread] = await Promise.all([
        prisma.customer.findUnique({
            where: { id: accountId },
            select: { amcDateTo: true },
        }),
        prisma.ticket.findMany({
            where: { customerId: accountId, messages: { some: { senderType: "admin", isReadByCustomer: false } } },
            orderBy: { lastActivityAt: "desc" },
            select: {
                id: true,
                subject: true,
                messages: { where: { senderType: "admin", isReadByCustomer: false }, select: { id: true } },
            },
            take: 20,
        }),
    ]);

    const amcExpiring =
        account?.amcDateTo && account.amcDateTo >= now && account.amcDateTo <= windowEnd
            ? {
                  amcDateTo: account.amcDateTo,
                  daysLeft: Math.ceil((account.amcDateTo.getTime() - now.getTime()) / MS_PER_DAY),
              }
            : null;

    const tickets = ticketsWithUnread.map((t) => ({
        id: t.id,
        subject: t.subject,
        unreadCount: t.messages.length,
    }));

    return NextResponse.json({
        amc: amcExpiring,
        tickets,
        totalCount: (amcExpiring ? 1 : 0) + tickets.length,
    });
}
