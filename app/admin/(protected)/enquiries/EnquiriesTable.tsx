"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { Enquiry } from "@prisma/client";
import Pagination, { PAGE_SIZE } from "@/src/components/Pagination/Pagination";
import { ENQUIRY_STATUSES, enquirySourceLabel } from "@/lib/enquiries";

export default function EnquiriesTable({ enquiries }: { enquiries: Enquiry[] }) {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [source, setSource] = useState("");
    const [busyId, setBusyId] = useState<string | null>(null);
    const [page, setPage] = useState(1);

    const sources = useMemo(() => Array.from(new Set(enquiries.map((e) => e.source))), [enquiries]);

    const filtered = useMemo(() => {
        const query = search.trim().toLowerCase();
        return enquiries.filter((e) => {
            if (status && e.status !== status) return false;
            if (source && e.source !== source) return false;
            if (!query) return true;
            return [e.name, e.email, e.phone, e.need, e.interest].filter(Boolean).some((v) => (v as string).toLowerCase().includes(query));
        });
    }, [enquiries, search, status, source]);

    useEffect(() => {
        setPage(1);
    }, [search, status, source]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    async function handleStatusChange(enquiry: Enquiry, newStatus: string) {
        setBusyId(enquiry.id);
        const res = await fetch(`/api/admin/enquiries/${enquiry.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: newStatus }),
        });
        setBusyId(null);
        if (!res.ok) {
            window.alert("Could not update status.");
            return;
        }
        router.refresh();
    }

    async function handleDelete(enquiry: Enquiry) {
        if (!window.confirm(`Delete the enquiry from "${enquiry.name}"? This cannot be undone.`)) return;
        setBusyId(enquiry.id);
        const res = await fetch(`/api/admin/enquiries/${enquiry.id}`, { method: "DELETE" });
        setBusyId(null);
        if (!res.ok) {
            window.alert("Could not delete enquiry.");
            return;
        }
        router.refresh();
    }

    return (
        <div className="admin-card">
            <div style={{ marginBottom: 16, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                <input
                    type="text"
                    placeholder="Search by name, email, or requirement..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ width: "100%", maxWidth: 360 }}
                />
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="">All statuses</option>
                    {ENQUIRY_STATUSES.map((s) => (
                        <option key={s} value={s}>
                            {s}
                        </option>
                    ))}
                </select>
                <select value={source} onChange={(e) => setSource(e.target.value)}>
                    <option value="">All forms</option>
                    {sources.map((s) => (
                        <option key={s} value={s}>
                            {enquirySourceLabel(s)}
                        </option>
                    ))}
                </select>
            </div>

            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Looking For</th>
                        <th>Interest</th>
                        <th>Form</th>
                        <th>Status</th>
                        <th>Received</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {paged.map((enquiry) => (
                        <tr key={enquiry.id}>
                            <td>{enquiry.name}</td>
                            <td>{enquiry.email}</td>
                            <td>{enquiry.phone || <em>&mdash;</em>}</td>
                            <td style={{ maxWidth: 280 }}>{enquiry.need}</td>
                            <td>{enquiry.interest || <em>&mdash;</em>}</td>
                            <td>{enquirySourceLabel(enquiry.source)}</td>
                            <td>
                                <select
                                    value={enquiry.status}
                                    disabled={busyId === enquiry.id}
                                    onChange={(e) => handleStatusChange(enquiry, e.target.value)}
                                >
                                    {ENQUIRY_STATUSES.map((s) => (
                                        <option key={s} value={s}>
                                            {s}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td>{enquiry.createdAt.toISOString().slice(0, 16).replace("T", " ")}</td>
                            <td>
                                <button
                                    type="button"
                                    className="admin-btn-sm"
                                    disabled={busyId === enquiry.id}
                                    onClick={() => handleDelete(enquiry)}
                                >
                                    {busyId === enquiry.id ? "..." : "Delete"}
                                </button>
                            </td>
                        </tr>
                    ))}
                    {filtered.length === 0 && (
                        <tr>
                            <td colSpan={9}>{enquiries.length === 0 ? "No enquiries yet." : "No enquiries match your search."}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
    );
}
