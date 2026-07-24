"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@prisma/client";

const STATUS_OPTIONS = ["All", "Published", "Draft"];

export default function BlogPostsTable({ posts }: { posts: BlogPost[] }) {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");

    const filteredPosts = useMemo(() => {
        const query = search.trim().toLowerCase();
        return posts.filter((post) => {
            const matchesStatus = status === "All" || (status === "Published" ? post.published : !post.published);
            const matchesSearch =
                !query ||
                [post.title, post.slug].filter(Boolean).some((value) => (value as string).toLowerCase().includes(query));
            return matchesStatus && matchesSearch;
        });
    }, [posts, search, status]);

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

            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Status</th>
                        <th>Published</th>
                        <th>Indexing</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {filteredPosts.map((post) => (
                        <tr key={post.id}>
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
                            <td>
                                <Link href={`/admin/blog/${post.id}`} className="admin-btn-sm">
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                    {filteredPosts.length === 0 && (
                        <tr>
                            <td colSpan={7}>{posts.length === 0 ? "No blog posts yet." : "No posts match your filter."}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
