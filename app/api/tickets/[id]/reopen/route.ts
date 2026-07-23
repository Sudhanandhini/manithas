import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { customerAuthOptions } from "@/lib/customerAuth";
import { prisma } from "@/lib/prisma";
import { CLOSED_STATUSES } from "@/lib/tickets";
import { sendMail, ticketReopenedAdminEmail } from "@/lib/mail";

export async function POST(_req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(customerAuthOptions);
    if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const customerId = (session.user as { id: string }).id;
    const accountId = (session.user as { accountId: string }).accountId;

    const ticket = await prisma.ticket.findUnique({ where: { id: params.id } });
    if (!ticket || ticket.customerId !== accountId) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    if (!CLOSED_STATUSES.includes(ticket.status as (typeof CLOSED_STATUSES)[number])) {
        return NextResponse.json({ error: "Only resolved or closed tickets can be reopened" }, { status: 400 });
    }

    const customer = await prisma.customer.findUnique({ where: { id: customerId } });

    await prisma.ticketMessage.create({
        data: {
            ticketId: ticket.id,
            senderType: "customer",
            senderName: customer?.name || "Customer",
            message: "The customer reopened this ticket - the issue was not resolved.",
            isReadByCustomer: true,
            isReadByAdmin: false,
        },
    });

    await prisma.ticket.update({
        where: { id: ticket.id },
        data: { status: "Reopened", lastActivityAt: new Date() },
    });

    const notifyEmail = process.env.TICKET_NOTIFY_EMAIL || process.env.ADMIN_EMAIL;
    await sendMail({
        to: notifyEmail,
        subject: `Ticket reopened: ${ticket.subject}`,
        html: ticketReopenedAdminEmail(ticket.subject, customer?.name || "Customer", ticket.id),
    });

    return NextResponse.json({ ok: true });
}
