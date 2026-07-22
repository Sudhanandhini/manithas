import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import AdminTicketDetail from "./AdminTicketDetail";

export const dynamic = "force-dynamic";

export default async function AdminTicketDetailPage({ params }: { params: { id: string } }) {
    const ticket = await prisma.ticket.findUnique({
        where: { id: params.id },
        include: {
            customer: true,
            messages: { orderBy: { createdAt: "asc" }, include: { attachments: true } },
        },
    });

    if (!ticket) {
        notFound();
    }

    await prisma.ticketMessage.updateMany({
        where: { ticketId: ticket.id, senderType: "customer", isReadByAdmin: false },
        data: { isReadByAdmin: true },
    });

    return <AdminTicketDetail ticket={JSON.parse(JSON.stringify(ticket))} />;
}
