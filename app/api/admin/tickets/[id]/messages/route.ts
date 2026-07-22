import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { sendMail, ticketReplyCustomerEmail } from "@/lib/mail";

type AttachmentInput = { url: string; fileName: string; fileType: string; fileSize: number };

export async function POST(req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const ticket = await prisma.ticket.findUnique({ where: { id: params.id }, include: { customer: true } });
    if (!ticket) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const body = await req.json();
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const attachments: AttachmentInput[] = Array.isArray(body.attachments) ? body.attachments : [];

    if (!message) {
        return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    await prisma.ticketMessage.create({
        data: {
            ticketId: ticket.id,
            senderType: "admin",
            senderName: "Support",
            message,
            isReadByAdmin: true,
            isReadByCustomer: false,
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

    const nextStatus = ["New", "Open"].includes(ticket.status) ? "In Progress" : ticket.status;

    await prisma.ticket.update({
        where: { id: ticket.id },
        data: { lastActivityAt: new Date(), status: nextStatus },
    });

    await sendMail({
        to: ticket.customer.email,
        subject: `New reply: ${ticket.subject}`,
        html: ticketReplyCustomerEmail(ticket.subject, ticket.id),
    });

    return NextResponse.json({ ok: true }, { status: 201 });
}
