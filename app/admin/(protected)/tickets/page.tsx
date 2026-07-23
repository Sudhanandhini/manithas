import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { TICKET_STATUSES, TICKET_PRIORITIES, TICKET_CATEGORIES } from "@/lib/tickets";
import TicketTabs from "./TicketTabs";

export const dynamic = "force-dynamic";

type SearchParams = {
    status?: string;
    priority?: string;
    category?: string;
    q?: string;
    sort?: string;
};

function buildOrderBy(sort?: string) {
    switch (sort) {
        case "oldest":
            return [{ createdAt: "asc" as const }];
        case "priority":
            return [{ priority: "asc" as const }];
        case "status":
            return [{ status: "asc" as const }];
        default:
            return [{ lastActivityAt: "desc" as const }];
    }
}

export default async function AdminTicketsPage({ searchParams }: { searchParams: SearchParams }) {
    const { status, priority, category, q, sort } = searchParams;

    const tickets = await prisma.ticket.findMany({
        where: {
            ...(status ? { status } : {}),
            ...(priority ? { priority } : {}),
            ...(category ? { category } : {}),
            ...(q
                ? {
                      OR: [
                          { id: { contains: q } },
                          { subject: { contains: q } },
                          { customer: { name: { contains: q } } },
                          { customer: { email: { contains: q } } },
                          { assignedTo: { contains: q } },
                      ],
                  }
                : {}),
        },
        orderBy: buildOrderBy(sort),
        include: {
            customer: true,
            messages: { where: { senderType: "customer", isReadByAdmin: false }, select: { id: true } },
        },
    });

    return (
        <>
            <TicketTabs />

            <p className="admin-title" style={{ marginBottom: 20 }}>
                Support Tickets
            </p>

            <div className="admin-card" style={{ marginBottom: 20 }}>
                <form method="get" style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "flex-end" }}>
                    <div className="admin-field" style={{ marginBottom: 0 }}>
                        <label>Search</label>
                        <input type="text" name="q" defaultValue={q} placeholder="Ticket ID, subject, customer, email, assignee" />
                    </div>
                    <div className="admin-field" style={{ marginBottom: 0 }}>
                        <label>Status</label>
                        <select name="status" defaultValue={status || ""}>
                            <option value="">All</option>
                            {TICKET_STATUSES.map((s) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="admin-field" style={{ marginBottom: 0 }}>
                        <label>Priority</label>
                        <select name="priority" defaultValue={priority || ""}>
                            <option value="">All</option>
                            {TICKET_PRIORITIES.map((p) => (
                                <option key={p} value={p}>
                                    {p}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="admin-field" style={{ marginBottom: 0 }}>
                        <label>Category</label>
                        <select name="category" defaultValue={category || ""}>
                            <option value="">All</option>
                            {TICKET_CATEGORIES.map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="admin-field" style={{ marginBottom: 0 }}>
                        <label>Sort</label>
                        <select name="sort" defaultValue={sort || "latest"}>
                            <option value="latest">Latest activity</option>
                            <option value="oldest">Oldest first</option>
                            <option value="priority">Priority</option>
                            <option value="status">Status</option>
                        </select>
                    </div>
                    <button className="admin-btn" type="submit">
                        Filter
                    </button>
                    <Link href="/admin/tickets" className="admin-btn-secondary" style={{ padding: "10px 18px", borderRadius: 6 }}>
                        Reset
                    </Link>
                </form>
            </div>

            <div className="admin-card">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Customer</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Priority</th>
                            <th>Assigned To</th>
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
                                                background: "#a4262c",
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
                                    {ticket.customer.name}
                                    <br />
                                    <small>{ticket.customer.email}</small>
                                </td>
                                <td>{ticket.category}</td>
                                <td>{ticket.status}</td>
                                <td>{ticket.priority}</td>
                                <td>{ticket.assignedTo || <em>&mdash;</em>}</td>
                                <td>{ticket.lastActivityAt.toISOString().slice(0, 16).replace("T", " ")}</td>
                                <td>
                                    <Link href={`/admin/tickets/${ticket.id}`} className="admin-btn-sm">
                                        Open
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        {tickets.length === 0 && (
                            <tr>
                                <td colSpan={8}>No tickets match these filters.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
