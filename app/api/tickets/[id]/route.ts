import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { customerAuthOptions } from "@/lib/customerAuth";
import { prisma } from "@/lib/prisma";

export async function GET(_req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(customerAuthOptions);
    if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const accountId = (session.user as { accountId: string }).accountId;

    const ticket = await prisma.ticket.findUnique({
        where: { id: params.id },
        include: {
            messages: {
                orderBy: { createdAt: "asc" },
                include: { attachments: true },
            },
        },
    });

    if (!ticket || ticket.customerId !== accountId) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    await prisma.ticketMessage.updateMany({
        where: { ticketId: ticket.id, senderType: "admin", isReadByCustomer: false },
        data: { isReadByCustomer: true },
    });

    return NextResponse.json({ ticket });
}
