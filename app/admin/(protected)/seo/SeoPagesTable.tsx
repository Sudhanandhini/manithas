"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { SeoPage } from "@prisma/client";

const TYPE_OPTIONS = ["All", "Page", "Blog", "Solution", "Landing"];

export default function SeoPagesTable({ pages }: { pages: SeoPage[] }) {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("All");

    const filteredPages = useMemo(() => {
        const query = search.trim().toLowerCase();
        return pages.filter((page) => {
            const matchesType = type === "All" || page.type === type;
            const matchesSearch =
                !query ||
                page.label.toLowerCase().includes(query) ||
                page.slug.toLowerCase().includes(query) ||
                (page.title ?? "").toLowerCase().includes(query);
            return matchesType && matchesSearch;
        });
    }, [pages, search, type]);

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
                    {filteredPages.map((page) => (
                        <tr key={page.id}>
                            <td>{page.label}</td>
                            <td>
                                <code>{page.slug}</code>
                            </td>
                            <td>{page.type}</td>
                            <td>{page.title || <em>not set</em>}</td>
                            <td>{page.noindex ? "noindex" : "indexed"}</td>
                            <td>
                                <Link href={`/admin/seo/${page.id}`} className="admin-btn-sm">
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
        </div>
    );
}
