"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { SeoPage } from "@prisma/client";
import Pagination, { PAGE_SIZE } from "@/src/components/Pagination/Pagination";

const TYPE_OPTIONS = ["All", "Page", "Blog", "Solution", "Landing"];

export default function SeoPagesTable({ pages }: { pages: SeoPage[] }) {
    const [items, setItems] = useState(pages);
    const [search, setSearch] = useState("");
    const [type, setType] = useState("All");
    const [page, setPage] = useState(1);
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
    const [bulkSaving, setBulkSaving] = useState(false);
    const [bulkError, setBulkError] = useState("");

    useEffect(() => {
        setItems(pages);
    }, [pages]);

    const filteredPages = useMemo(() => {
        const query = search.trim().toLowerCase();
        return items.filter((p) => {
            const matchesType = type === "All" || p.type === type;
            const matchesSearch =
                !query ||
                p.label.toLowerCase().includes(query) ||
                p.slug.toLowerCase().includes(query) ||
                (p.title ?? "").toLowerCase().includes(query);
            return matchesType && matchesSearch;
        });
    }, [items, search, type]);

    useEffect(() => {
        setPage(1);
    }, [search, type]);

    useEffect(() => {
        setSelectedIds(new Set());
    }, [search, type]);

    const totalPages = Math.max(1, Math.ceil(filteredPages.length / PAGE_SIZE));
    const pagedPages = filteredPages.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    const allFilteredSelected = filteredPages.length > 0 && filteredPages.every((p) => selectedIds.has(p.id));
    const someSelected = selectedIds.size > 0;

    function toggleSelectAll() {
        if (allFilteredSelected) {
            setSelectedIds(new Set());
        } else {
            setSelectedIds(new Set(filteredPages.map((p) => p.id)));
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
            const res = await fetch("/api/admin/seo", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ids, ...patch }),
            });
            if (!res.ok) {
                throw new Error("Failed to update pages");
            }
            setItems((prev) => prev.map((p) => (ids.includes(p.id) ? { ...p, ...patch } : p)));
            setSelectedIds(new Set());
        } catch {
            setBulkError("Failed to update selected pages. Please try again.");
        } finally {
            setBulkSaving(false);
        }
    }

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
                                aria-label="Select all pages"
                            />
                        </th>
                        <th>Page</th>
                        <th>Slug</th>
                        <th>Type</th>
                        <th>Title</th>
                        <th>Indexing</th>
                        <th>Following</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {pagedPages.map((p) => (
                        <tr key={p.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedIds.has(p.id)}
                                    onChange={() => toggleRow(p.id)}
                                    aria-label={`Select ${p.label}`}
                                />
                            </td>
                            <td>{p.label}</td>
                            <td>
                                <code>{p.slug}</code>
                            </td>
                            <td>{p.type}</td>
                            <td>{p.title || <em>not set</em>}</td>
                            <td>{p.noindex ? "noindex" : "indexed"}</td>
                            <td>{p.nofollow ? "nofollow" : "follow"}</td>
                            <td>
                                <Link href={`/admin/seo/${p.id}`} className="admin-btn-sm">
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                    {filteredPages.length === 0 && (
                        <tr>
                            <td colSpan={8}>{items.length === 0 ? "No pages yet." : "No pages match your filter."}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
    );
}
