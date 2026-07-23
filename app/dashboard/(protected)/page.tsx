import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { customerAuthOptions } from "@/lib/customerAuth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function DashboardTicketsPage() {
    const session = await getServerSession(customerAuthOptions);
    if (!session?.user) {
        redirect("/login");
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

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <p className="admin-title">My Tickets</p>
                <Link href="/dashboard/new" className="admin-btn">
                    + New Ticket
                </Link>
            </div>

            <div className="admin-card">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Priority</th>
                            <th>Last Activity</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket) => (
                            <tr key={ticket.id}>
                                <td>
                                    {ticket.subject}
                                    {ticket.messages.length > 0 && (
                                        <span
                                            style={{
                                                marginLeft: 8,
                                                background: "#2952e3",
                                                color: "#fff",
                                                borderRadius: 999,
                                                padding: "1px 8px",
                                                fontSize: 11,
                                            }}
                                        >
                                            {ticket.messages.length} new
                                        </span>
                                    )}
                                </td>
                                <td>{ticket.category}</td>
                                <td>{ticket.status}</td>
                                <td>{ticket.priority}</td>
                                <td>{ticket.lastActivityAt.toLocaleString("en-US", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}</td>
                                <td>
                                    <Link href={`/dashboard/${ticket.id}`} className="admin-btn-sm">
                                        View
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        {tickets.length === 0 && (
                            <tr>
                                <td colSpan={6}>No tickets yet. Raise one whenever you need support.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
