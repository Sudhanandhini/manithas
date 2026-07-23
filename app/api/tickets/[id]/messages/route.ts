import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { customerAuthOptions } from "@/lib/customerAuth";
import { prisma } from "@/lib/prisma";
import { sendMail, ticketReplyAdminEmail } from "@/lib/mail";

type AttachmentInput = { url: string; fileName: string; fileType: string; fileSize: number };

export async function POST(req: Request, { params }: { params: { id: string } }) {
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

    const body = await req.json();
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const attachments: AttachmentInput[] = Array.isArray(body.attachments) ? body.attachments : [];

    if (!message) {
        return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const customer = await prisma.customer.findUnique({ where: { id: customerId } });

    await prisma.ticketMessage.create({
        data: {
            ticketId: ticket.id,
            senderType: "customer",
            senderName: customer?.name || "Customer",
            message,
            isReadByCustomer: true,
            isReadByAdmin: false,
            attachments: {
                create: attachments.map((a) => ({
                    fileName: a.fileName,
                    fileUrl: a.url,
                    fileType: a.fileType,
                    fileSize: a.fileSize,
                })),
            },
        },
    });

    const nextStatus = ["Resolved", "Waiting for Customer"].includes(ticket.status) ? "Open" : ticket.status;

    await prisma.ticket.update({
        where: { id: ticket.id },
        data: { lastActivityAt: new Date(), status: nextStatus },
    });

    const notifyEmail = process.env.TICKET_NOTIFY_EMAIL || process.env.ADMIN_EMAIL;
    await sendMail({
        to: notifyEmail,
        subject: `New reply: ${ticket.subject}`,
        html: ticketReplyAdminEmail(ticket.subject, customer?.name || "Customer", ticket.id),
    });

    return NextResponse.json({ ok: true }, { status: 201 });
}
