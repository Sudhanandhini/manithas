"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Solution } from "@prisma/client";

const STATUS_OPTIONS = ["All", "Published", "Draft"];

export default function SolutionsTable({ solutions }: { solutions: Solution[] }) {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");

    const filteredSolutions = useMemo(() => {
        const query = search.trim().toLowerCase();
        return solutions.filter((solution) => {
            const matchesStatus =
                status === "All" || (status === "Published" ? solution.published : !solution.published);
            const matchesSearch =
                !query ||
                [solution.title, solution.slug, solution.client, solution.categories]
                    .filter(Boolean)
                    .some((value) => (value as string).toLowerCase().includes(query));
            return matchesStatus && matchesSearch;
        });
    }, [solutions, search, status]);

    return (
        <div className="admin-card">
            <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
                <input
                    type="text"
                    placeholder="Search by title, slug, client, or category..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ flex: 1, minWidth: 220 }}
                />
                <select value={status} onChange={(e) => setStatus(e.target.value)} style={{ minWidth: 160 }}>
                    {STATUS_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                            {option === "All" ? "All Statuses" : option}
                        </option>
                    ))}
                </select>
            </div>

            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Client</th>
                        <th>Categories</th>
                        <th>Status</th>
                        <th>Published</th>
                        <th>Indexing</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {filteredSolutions.map((solution) => (
                        <tr key={solution.id}>
                            <td>
                                {solution.image ? (
                                    <img className="admin-table-thumb" src={solution.image} alt={solution.title} />
                                ) : (
                                    <span className="admin-table-thumb-empty">No image</span>
                                )}
                            </td>
                            <td>{solution.title}</td>
                            <td>
                                <code>/solution-details/{solution.slug}</code>
                            </td>
                            <td>{solution.client || <em>&mdash;</em>}</td>
                            <td>{solution.categories || <em>&mdash;</em>}</td>
                            <td>{solution.published ? "Published" : "Draft"}</td>
                            <td>{solution.publishedAt.toISOString().slice(0, 10)}</td>
                            <td>{solution.noindex ? "noindex" : "indexed"}</td>
                            <td>
                                <Link href={`/admin/solution/${solution.id}`} className="admin-btn-sm">
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                    {filteredSolutions.length === 0 && (
                        <tr>
                            <td colSpan={9}>{solutions.length === 0 ? "No case studies yet." : "No case studies match your filter."}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
