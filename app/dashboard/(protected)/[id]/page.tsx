import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { customerAuthOptions } from "@/lib/customerAuth";
import { prisma } from "@/lib/prisma";
import TicketDetailClient from "./TicketDetailClient";

export const dynamic = "force-dynamic";

export default async function CustomerTicketDetailPage({ params }: { params: { id: string } }) {
    const session = await getServerSession(customerAuthOptions);
    if (!session?.user) {
        redirect("/login");
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
        notFound();
    }

    await prisma.ticketMessage.updateMany({
        where: { ticketId: ticket.id, senderType: "admin", isReadByCustomer: false },
        data: { isReadByCustomer: true },
    });

    return <TicketDetailClient ticket={JSON.parse(JSON.stringify(ticket))} />;
}
