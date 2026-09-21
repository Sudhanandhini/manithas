"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@prisma/client";
import Pagination, { PAGE_SIZE } from "@/src/components/Pagination/Pagination";

const STATUS_OPTIONS = ["All", "Published", "Draft"];

export default function BlogPostsTable({ posts }: { posts: BlogPost[] }) {
    const [items, setItems] = useState(posts);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");
    const [page, setPage] = useState(1);
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
    const [bulkSaving, setBulkSaving] = useState(false);
    const [bulkError, setBulkError] = useState("");

    useEffect(() => {
        setItems(posts);
    }, [posts]);

    const filteredPosts = useMemo(() => {
        const query = search.trim().toLowerCase();
        return items.filter((post) => {
            const matchesStatus = status === "All" || (status === "Published" ? post.published : !post.published);
            const matchesSearch =
                !query ||
                [post.title, post.slug].filter(Boolean).some((value) => (value as string).toLowerCase().includes(query));
            return matchesStatus && matchesSearch;
        });
    }, [items, search, status]);

    useEffect(() => {
        setPage(1);
    }, [search, status]);

    useEffect(() => {
        setSelectedIds(new Set());
    }, [search, status]);

    const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
    const pagedPosts = filteredPosts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    const allFilteredSelected = filteredPosts.length > 0 && filteredPosts.every((p) => selectedIds.has(p.id));
    const someSelected = selectedIds.size > 0;

    function toggleSelectAll() {
        if (allFilteredSelected) {
            setSelectedIds(new Set());
        } else {
            setSelectedIds(new Set(filteredPosts.map((p) => p.id)));
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
            const res = await fetch("/api/admin/blog", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ids, ...patch }),
            });
            if (!res.ok) {
                throw new Error("Failed to update posts");
            }
            setItems((prev) => prev.map((p) => (ids.includes(p.id) ? { ...p, ...patch } : p)));
            setSelectedIds(new Set());
        } catch {
            setBulkError("Failed to update selected posts. Please try again.");
        } finally {
            setBulkSaving(false);
        }
    }

    return (
        <div className="admin-card">
            <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
                <input
                    type="text"
                    placeholder="Search by title or slug..."
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
                                aria-label="Select all posts"
                            />
                        </th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Status</th>
                        <th>Published</th>
                        <th>Indexing</th>
                        <th>Following</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {pagedPosts.map((post) => (
                        <tr key={post.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedIds.has(post.id)}
                                    onChange={() => toggleRow(post.id)}
                                    aria-label={`Select ${post.title}`}
                                />
                            </td>
                            <td>
                                {post.image ? (
                                    <img className="admin-table-thumb" src={post.image} alt={post.title} />
                                ) : (
                                    <span className="admin-table-thumb-empty">No image</span>
                                )}
                            </td>
                            <td>{post.title}</td>
                            <td>
                                <code>/blog-details/{post.slug}</code>
                            </td>
                            <td>{post.published ? "Published" : "Draft"}</td>
                            <td>{post.publishedAt.toISOString().slice(0, 10)}</td>
                            <td>{post.noindex ? "noindex" : "indexed"}</td>
                            <td>{post.nofollow ? "nofollow" : "follow"}</td>
                            <td>
                                <Link href={`/admin/blog/${post.id}`} className="admin-btn-sm">
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                    {filteredPosts.length === 0 && (
                        <tr>
                            <td colSpan={9}>{items.length === 0 ? "No blog posts yet." : "No posts match your filter."}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
    );
}
