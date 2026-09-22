import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { customerAuthOptions } from "@/lib/customerAuth";
import { prisma } from "@/lib/prisma";
import PaginationLinks, { PAGE_SIZE } from "@/src/components/Pagination/PaginationLinks";
import { statusPillClass, priorityPillClass } from "@/lib/tickets";

export const dynamic = "force-dynamic";

export default async function DashboardTicketsPage({ searchParams }: { searchParams: { page?: string } }) {
    const session = await getServerSession(customerAuthOptions);
    if (!session?.user) {
        redirect("/login");
    }
    const accountId = (session.user as { accountId: string }).accountId;
    const page = Math.max(1, Number(searchParams.page) || 1);

    const where = { customerId: accountId };
    const [totalCount, tickets] = await Promise.all([
        prisma.ticket.count({ where }),
        prisma.ticket.findMany({
            where,
            orderBy: { lastActivityAt: "desc" },
            skip: (page - 1) * PAGE_SIZE,
            take: PAGE_SIZE,
            include: {
                messages: {
                    where: { senderType: "admin", isReadByCustomer: false },
                    select: { id: true },
                },
            },
        }),
    ]);
    const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

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
                            <th>Ticket ID</th>
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
                                    <span className="admin-table-id">#{ticket.ticketNumber}</span>
                                </td>
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
                                <td>
                                    <span className="admin-table-chip">{ticket.category}</span>
                                </td>
                                <td>
                                    <span className={`ticket-meta-pill ${statusPillClass(ticket.status)}`}>{ticket.status}</span>
                                </td>
                                <td>
                                    <span className={`ticket-meta-pill ${priorityPillClass(ticket.priority)}`}>{ticket.priority}</span>
                                </td>
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
                                <td colSpan={7}>No tickets yet. Raise one whenever you need support.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <PaginationLinks page={page} totalPages={totalPages} basePath="/dashboard" searchParams={searchParams} />
            </div>
        </>
    );
}
