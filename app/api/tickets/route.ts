import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { customerAuthOptions } from "@/lib/customerAuth";
import { prisma } from "@/lib/prisma";
import { TICKET_CATEGORIES } from "@/lib/tickets";
import { sendMail, ticketCreatedCustomerEmail, ticketCreatedAdminEmail } from "@/lib/mail";

type AttachmentInput = { url: string; fileName: string; fileType: string; fileSize: number };

export async function GET() {
    const session = await getServerSession(customerAuthOptions);
    if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const accountId = (session.user as { accountId: string }).accountId;

    const tickets = await prisma.ticket.findMany({
        where: { customerId: accountId },
        orderBy: { lastActivityAt: "desc" },
        include: {
            messages: {
                where: { senderType: "admin", isReadByCustomer: false },
                select: { id: true },
            },
        },
    });

    return NextResponse.json({
        tickets: tickets.map((t) => ({ ...t, unreadCount: t.messages.length, messages: undefined })),
    });
}

export async function POST(req: Request) {
    const session = await getServerSession(customerAuthOptions);
    if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const customerId = (session.user as { id: string }).id;
    const accountId = (session.user as { accountId: string }).accountId;

    const body = await req.json();
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const category = typeof body.category === "string" ? body.category : "";
    const link = typeof body.link === "string" && body.link.trim() ? body.link.trim() : null;
    const attachments: AttachmentInput[] = Array.isArray(body.attachments) ? body.attachments : [];

    if (!subject) {
        return NextResponse.json({ error: "Subject is required" }, { status: 400 });
    }
    if (!message) {
        return NextResponse.json({ error: "Please describe the problem" }, { status: 400 });
    }
    if (!TICKET_CATEGORIES.includes(category as (typeof TICKET_CATEGORIES)[number])) {
        return NextResponse.json({ error: "Please choose a valid category" }, { status: 400 });
    }

    const customer = await prisma.customer.findUnique({ where: { id: customerId } });
    if (!customer) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const ticket = await prisma.ticket.create({
        data: {
            customerId: accountId,
            subject,
            category,
            link,
            messages: {
                create: {
                    senderType: "customer",
                    senderName: customer.name,
                    message,
                    isReadByAdmin: false,
                    isReadByCustomer: true,
                    attachments: {
                        create: attachments.map((a) => ({
                            fileName: a.fileName,
                            fileUrl: a.url,
                            fileType: a.fileType,
                            fileSize: a.fileSize,
                        })),
                    },
                },
            },
        },
    });

    const notifyEmail = process.env.TICKET_NOTIFY_EMAIL || process.env.ADMIN_EMAIL;
    await Promise.all([
        sendMail({
            to: customer.email,
            subject: `Ticket received: ${subject}`,
            html: ticketCreatedCustomerEmail(subject, ticket.id),
        }),
        sendMail({
            to: notifyEmail,
            subject: `New ticket: ${subject}`,
            html: ticketCreatedAdminEmail(subject, customer.name, ticket.id),
        }),
    ]);

    return NextResponse.json({ ticket }, { status: 201 });
}
