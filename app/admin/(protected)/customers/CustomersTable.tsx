"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Customer } from "@prisma/client";

export default function CustomersTable({ customers }: { customers: Customer[] }) {
    const [search, setSearch] = useState("");

    const filteredCustomers = useMemo(() => {
        const query = search.trim().toLowerCase();
        if (!query) return customers;
        return customers.filter((customer) =>
            [customer.username, customer.name, customer.email, customer.companyName]
                .filter(Boolean)
                .some((value) => (value as string).toLowerCase().includes(query))
        );
    }, [customers, search]);

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
                    {filteredCustomers.map((customer) => (
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
                    {filteredCustomers.length === 0 && (
                        <tr>
                            <td colSpan={6}>{customers.length === 0 ? "No customers yet." : "No customers match your search."}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
