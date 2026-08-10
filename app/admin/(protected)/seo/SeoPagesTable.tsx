"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { SeoPage } from "@prisma/client";
import Pagination, { PAGE_SIZE } from "@/src/components/Pagination/Pagination";

const TYPE_OPTIONS = ["All", "Page", "Blog", "Solution", "Landing"];

export default function SeoPagesTable({ pages }: { pages: SeoPage[] }) {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("All");
    const [page, setPage] = useState(1);

    const filteredPages = useMemo(() => {
        const query = search.trim().toLowerCase();
        return pages.filter((p) => {
            const matchesType = type === "All" || p.type === type;
            const matchesSearch =
                !query ||
                p.label.toLowerCase().includes(query) ||
                p.slug.toLowerCase().includes(query) ||
                (p.title ?? "").toLowerCase().includes(query);
            return matchesType && matchesSearch;
        });
    }, [pages, search, type]);

    useEffect(() => {
        setPage(1);
    }, [search, type]);

    const totalPages = Math.max(1, Math.ceil(filteredPages.length / PAGE_SIZE));
    const pagedPages = filteredPages.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    return (
        <div className="admin-card">
            <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
                <input
                    type="text"
                    placeholder="Search by page, slug, or title..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ flex: 1, minWidth: 220 }}
                />
                <select value={type} onChange={(e) => setType(e.target.value)} style={{ minWidth: 160 }}>
                    {TYPE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                            {option === "All" ? "All Types" : option}
                        </option>
                    ))}
                </select>
            </div>

            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Page</th>
                        <th>Slug</th>
                        <th>Type</th>
                        <th>Title</th>
                        <th>Indexing</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {pagedPages.map((p) => (
                        <tr key={p.id}>
                            <td>{p.label}</td>
                            <td>
                                <code>{p.slug}</code>
                            </td>
                            <td>{p.type}</td>
                            <td>{p.title || <em>not set</em>}</td>
                            <td>{p.noindex ? "noindex" : "indexed"}</td>
                            <td>
                                <Link href={`/admin/seo/${p.id}`} className="admin-btn-sm">
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                    {filteredPages.length === 0 && (
                        <tr>
                            <td colSpan={6}>{pages.length === 0 ? "No pages yet." : "No pages match your filter."}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
    );
}
