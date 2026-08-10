"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Customer } from "@prisma/client";
import Pagination, { PAGE_SIZE } from "@/src/components/Pagination/Pagination";

export default function CustomersTable({ customers }: { customers: Customer[] }) {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [page, setPage] = useState(1);

    const filteredCustomers = useMemo(() => {
        const query = search.trim().toLowerCase();
        if (!query) return customers;
        return customers.filter((customer) =>
            [customer.username, customer.name, customer.email, customer.companyName]
                .filter(Boolean)
                .some((value) => (value as string).toLowerCase().includes(query))
        );
    }, [customers, search]);

    useEffect(() => {
        setPage(1);
    }, [search]);

    const totalPages = Math.max(1, Math.ceil(filteredCustomers.length / PAGE_SIZE));
    const pagedCustomers = filteredCustomers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    async function handleDelete(customer: Customer) {
        if (!window.confirm(`Delete customer "${customer.username}"? This cannot be undone.`)) return;
        setDeletingId(customer.id);
        const res = await fetch(`/api/admin/customers/${customer.id}`, { method: "DELETE" });
        setDeletingId(null);

        if (!res.ok) {
            window.alert("Could not delete customer. They may still have open tickets.");
            return;
        }

        router.refresh();
    }

    return (
        <div className="admin-card">
            <div style={{ marginBottom: 16 }}>
                <input
                    type="text"
                    placeholder="Search by username, name, email, or company..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ width: "100%", maxWidth: 360 }}
                />
            </div>

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
                    {pagedCustomers.map((customer) => (
                        <tr key={customer.id}>
                            <td>
                                <code>{customer.username}</code>
                            </td>
                            <td>{customer.name}</td>
                            <td>{customer.email || <em>&mdash;</em>}</td>
                            <td>{customer.companyName || <em>&mdash;</em>}</td>
                            <td>{customer.createdAt.toISOString().slice(0, 10)}</td>
                            <td style={{ display: "flex", gap: 8 }}>
                                <Link href={`/admin/customers/${customer.id}`} className="admin-btn-sm">
                                    Edit
                                </Link>
                                <button
                                    type="button"
                                    className="admin-btn-sm"
                                    disabled={deletingId === customer.id}
                                    onClick={() => handleDelete(customer)}
                                >
                                    {deletingId === customer.id ? "Deleting..." : "Delete"}
                                </button>
                            </td>
                        </tr>
                    ))}
                    {filteredCustomers.length === 0 && (
                        <tr>
                            <td colSpan={6}>{customers.length === 0 ? "No customers yet." : "No customers match your search."}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
    );
}
