import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { TICKET_STATUSES, TICKET_PRIORITIES, TICKET_CATEGORIES, CLOSED_STATUSES } from "@/lib/tickets";
import { sendMail, ticketStatusChangedEmail } from "@/lib/mail";

export async function GET(_req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const ticket = await prisma.ticket.findUnique({
        where: { id: params.id },
        include: {
            customer: true,
            messages: { orderBy: { createdAt: "asc" }, include: { attachments: true } },
        },
    });
    if (!ticket) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    await prisma.ticketMessage.updateMany({
        where: { ticketId: ticket.id, senderType: "customer", isReadByAdmin: false },
        data: { isReadByAdmin: true },
    });

    return NextResponse.json({ ticket });
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const data: Record<string, unknown> = {};

    if ("status" in body) {
        if (!TICKET_STATUSES.includes(body.status)) {
            return NextResponse.json({ error: "Invalid status" }, { status: 400 });
        }
        data.status = body.status;
    }
    if ("priority" in body) {
        if (!TICKET_PRIORITIES.includes(body.priority)) {
            return NextResponse.json({ error: "Invalid priority" }, { status: 400 });
        }
        data.priority = body.priority;
    }
    if ("category" in body) {
        if (!TICKET_CATEGORIES.includes(body.category)) {
            return NextResponse.json({ error: "Invalid category" }, { status: 400 });
        }
        data.category = body.category;
    }

    const existing = await prisma.ticket.findUnique({ where: { id: params.id }, include: { customer: true } });
    if (!existing) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const ticket = await prisma.ticket.update({ where: { id: params.id }, data });

    if (data.status && CLOSED_STATUSES.includes(data.status as (typeof CLOSED_STATUSES)[number]) && existing.status !== data.status) {
        await sendMail({
            to: existing.customer.email,
            subject: `Ticket ${data.status}: ${ticket.subject}`,
            html: ticketStatusChangedEmail(ticket.subject, data.status as string, ticket.id),
        });
    }

    return NextResponse.json({ ticket });
}
