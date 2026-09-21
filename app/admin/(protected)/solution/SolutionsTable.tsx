"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Solution } from "@prisma/client";
import Pagination, { PAGE_SIZE } from "@/src/components/Pagination/Pagination";

const STATUS_OPTIONS = ["All", "Published", "Draft"];

export default function SolutionsTable({ solutions }: { solutions: Solution[] }) {
    const [items, setItems] = useState(solutions);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");
    const [page, setPage] = useState(1);
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
    const [bulkSaving, setBulkSaving] = useState(false);
    const [bulkError, setBulkError] = useState("");

    useEffect(() => {
        setItems(solutions);
    }, [solutions]);

    const filteredSolutions = useMemo(() => {
        const query = search.trim().toLowerCase();
        return items.filter((solution) => {
            const matchesStatus =
                status === "All" || (status === "Published" ? solution.published : !solution.published);
            const matchesSearch =
                !query ||
                [solution.title, solution.slug, solution.client, solution.categories]
                    .filter(Boolean)
                    .some((value) => (value as string).toLowerCase().includes(query));
            return matchesStatus && matchesSearch;
        });
    }, [items, search, status]);

    useEffect(() => {
        setPage(1);
    }, [search, status]);

    useEffect(() => {
        setSelectedIds(new Set());
    }, [search, status]);

    const totalPages = Math.max(1, Math.ceil(filteredSolutions.length / PAGE_SIZE));
    const pagedSolutions = filteredSolutions.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    const allFilteredSelected = filteredSolutions.length > 0 && filteredSolutions.every((s) => selectedIds.has(s.id));
    const someSelected = selectedIds.size > 0;

    function toggleSelectAll() {
        if (allFilteredSelected) {
            setSelectedIds(new Set());
        } else {
            setSelectedIds(new Set(filteredSolutions.map((s) => s.id)));
        }
    }

    function toggleRow(id: string) {
        setSelectedIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    }

    async function applyBulkUpdate(patch: { noindex?: boolean; nofollow?: boolean }) {
        if (selectedIds.size === 0) return;
        setBulkSaving(true);
        setBulkError("");
        const ids = Array.from(selectedIds);
        try {
            const res = await fetch("/api/admin/solution", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ids, ...patch }),
            });
            if (!res.ok) {
                throw new Error("Failed to update case studies");
            }
            setItems((prev) => prev.map((s) => (ids.includes(s.id) ? { ...s, ...patch } : s)));
            setSelectedIds(new Set());
        } catch {
            setBulkError("Failed to update selected case studies. Please try again.");
        } finally {
            setBulkSaving(false);
        }
    }

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

            {someSelected && (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        marginBottom: 16,
                        flexWrap: "wrap",
                        padding: "10px 12px",
                        background: "rgba(0,0,0,0.04)",
                        borderRadius: 8,
                    }}
                >
                    <span>{selectedIds.size} selected</span>
                    <button
                        type="button"
                        className="admin-btn-sm"
                        disabled={bulkSaving}
                        onClick={() => applyBulkUpdate({ noindex: false })}
                    >
                        Mark as Indexed
                    </button>
                    <button
                        type="button"
                        className="admin-btn-sm"
                        disabled={bulkSaving}
                        onClick={() => applyBulkUpdate({ noindex: true })}
                    >
                        Mark as Noindex
                    </button>
                    <button
                        type="button"
                        className="admin-btn-sm"
                        disabled={bulkSaving}
                        onClick={() => applyBulkUpdate({ nofollow: false })}
                    >
                        Mark as Follow
                    </button>
                    <button
                        type="button"
                        className="admin-btn-sm"
                        disabled={bulkSaving}
                        onClick={() => applyBulkUpdate({ nofollow: true })}
                    >
                        Mark as Nofollow
                    </button>
                    <button
                        type="button"
                        className="admin-btn-sm"
                        disabled={bulkSaving}
                        onClick={() => setSelectedIds(new Set())}
                    >
                        Clear selection
                    </button>
                    {bulkSaving && <span>Saving...</span>}
                    {bulkError && <span style={{ color: "crimson" }}>{bulkError}</span>}
                </div>
            )}

            <table className="admin-table">
                <thead>
                    <tr>
                        <th style={{ width: 32 }}>
                            <input
                                type="checkbox"
                                checked={allFilteredSelected}
                                onChange={toggleSelectAll}
                                aria-label="Select all case studies"
                            />
                        </th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Client</th>
                        <th>Categories</th>
                        <th>Status</th>
                        <th>Published</th>
                        <th>Indexing</th>
                        <th>Following</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {pagedSolutions.map((solution) => (
                        <tr key={solution.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedIds.has(solution.id)}
                                    onChange={() => toggleRow(solution.id)}
                                    aria-label={`Select ${solution.title}`}
                                />
                            </td>
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
                            <td>{solution.nofollow ? "nofollow" : "follow"}</td>
                            <td>
                                <Link href={`/admin/solution/${solution.id}`} className="admin-btn-sm">
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                    {filteredSolutions.length === 0 && (
                        <tr>
                            <td colSpan={10}>{items.length === 0 ? "No case studies yet." : "No case studies match your filter."}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
    );
}
