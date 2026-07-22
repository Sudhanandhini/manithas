import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminCustomersPage() {
    const customers = await prisma.customer.findMany({ orderBy: { createdAt: "desc" } });

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <p className="admin-title">Customers</p>
                <Link href="/admin/customers/new" className="admin-btn">
                    + Add Customer
                </Link>
            </div>

            <div className="admin-card">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Company</th>
                            <th>Created</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id}>
                                <td>
                                    <code>{customer.username}</code>
                                </td>
                                <td>{customer.name}</td>
                                <td>{customer.email || <em>&mdash;</em>}</td>
                                <td>{customer.companyName || <em>&mdash;</em>}</td>
                                <td>{customer.createdAt.toISOString().slice(0, 10)}</td>
                                <td>
                                    <Link href={`/admin/customers/${customer.id}`} className="admin-btn-sm">
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        {customers.length === 0 && (
                            <tr>
                                <td colSpan={6}>No customers yet.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
