import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { customerAuthOptions } from "@/lib/customerAuth";
import { prisma } from "@/lib/prisma";
import NewTicketForm from "./NewTicketForm";

export const dynamic = "force-dynamic";

export default async function NewTicketPage() {
    const session = await getServerSession(customerAuthOptions);
    if (!session?.user) {
        redirect("/login");
    }
    const accountId = (session.user as { accountId: string }).accountId;

    const account = await prisma.customer.findUnique({ where: { id: accountId }, select: { driveLink: true } });

    return (
        <>
            <p className="admin-title" style={{ marginBottom: 20 }}>
                Raise A New Ticket
            </p>
            <div className="admin-card">
                <NewTicketForm driveLink={account?.driveLink ?? null} />
            </div>
        </>
    );
}
