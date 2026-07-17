"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { BlogPost, Category } from "@prisma/client";
import ImageField from "../../ImageField";
import CategoryPicker from "../CategoryPicker";

export default function BlogEditForm({ post, categories }: { post: BlogPost; categories: Category[] }) {
    const router = useRouter();
    const [form, setForm] = useState({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt ?? "",
        content: post.content,
        image: post.image ?? "",
        largeImage: post.largeImage ?? "",
        author: post.author,
        categories: post.categories ?? "",
        tags: post.tags ?? "",
        metaTitle: post.metaTitle ?? "",
        metaDescription: post.metaDescription ?? "",
        published: post.published,
        publishedAt: post.publishedAt.toISOString().slice(0, 10),
        noindex: post.noindex,
    });
    const originalPublishedAt = post.publishedAt;
    const [saving, setSaving] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [saved, setSaved] = useState(false);

    function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
        setForm((prev) => ({ ...prev, [key]: value }));
        setSaved(false);
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setSaving(true);
        setError(null);
        setSaved(false);

        // The date input only edits the calendar day - carry over the original
        // time-of-day (in UTC) so saving doesn't silently reset it to midnight,
        // which would otherwise scramble the newest-first ordering on /blog-grid.
        const [year, month, day] = form.publishedAt.split("-").map(Number);
        const publishedAt = new Date(originalPublishedAt);
        publishedAt.setUTCFullYear(year, month - 1, day);

        const res = await fetch(`/api/admin/blog/${post.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...form, publishedAt: publishedAt.toISOString() }),
        });

        setSaving(false);

        if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            setError(data.error || "Could not save changes.");
            return;
        }

        setSaved(true);
        router.refresh();
    }

    async function handleDelete() {
        if (!window.confirm("Delete this blog post? This cannot be undone.")) {
            return;
        }
        setDeleting(true);
        const res = await fetch(`/api/admin/blog/${post.id}`, { method: "DELETE" });
        setDeleting(false);

        if (!res.ok) {
            setError("Could not delete post.");
            return;
        }

        router.push("/admin/blog");
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="admin-error">{error}</div>}
            {saved && <div className="admin-success">Saved.</div>}

            <div style={{ display: "flex", gap: 12 }}>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="status">Status</label>
                    <select
                        id="status"
                        value={form.published ? "published" : "draft"}
                        onChange={(e) => update("published", e.target.value === "published")}
                    >
                        <option value="published">Published</option>
                        <option value="draft">Draft</option>
                    </select>
                    <small>Draft posts are hidden from /blog-grid and won&apos;t be findable at their URL.</small>
                </div>

                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="publishedAt">Publish date</label>
                    <input
                        id="publishedAt"
                        type="date"
                        required
                        value={form.publishedAt}
                        onChange={(e) => update("publishedAt", e.target.value)}
                    />
                    <small>Newest publish date shows first on /blog-grid.</small>
                </div>
            </div>

            <div className="admin-field">
                <label htmlFor="title">Title</label>
                <input id="title" type="text" required value={form.title} onChange={(e) => update("title", e.target.value)} />
            </div>

            <div className="admin-field">
                <label htmlFor="slug">URL slug</label>
                <input id="slug" type="text" required value={form.slug} onChange={(e) => update("slug", e.target.value)} />
                <small>Site URL: /blog-details/{form.slug || "..."}</small>
            </div>

            <div className="admin-field">
                <label htmlFor="excerpt">Excerpt (summary shown on the blog grid)</label>
                <textarea id="excerpt" rows={2} value={form.excerpt} onChange={(e) => update("excerpt", e.target.value)} />
            </div>

            <div className="admin-field">
                <label htmlFor="content">Content (HTML or plain text)</label>
                <textarea id="content" rows={10} required value={form.content} onChange={(e) => update("content", e.target.value)} />
            </div>

            <ImageField
                id="image"
                label="Thumbnail image (grid card)"
                value={form.image}
                onChange={(url) => update("image", url)}
            />

            <ImageField
                id="largeImage"
                label="Hero image (details page)"
                value={form.largeImage}
                onChange={(url) => update("largeImage", url)}
            />

            <div className="admin-field">
                <label htmlFor="author">Author</label>
                <input id="author" type="text" value={form.author} onChange={(e) => update("author", e.target.value)} />
            </div>

            <CategoryPicker
                categories={categories}
                value={form.categories}
                onChange={(value) => update("categories", value)}
            />

            <div className="admin-field">
                <label htmlFor="tags">Tags</label>
                <input
                    id="tags"
                    type="text"
                    placeholder="comma, separated, tags"
                    value={form.tags}
                    onChange={(e) => update("tags", e.target.value)}
                />
            </div>

            <div className="admin-field">
                <label htmlFor="metaTitle">SEO title tag</label>
                <input
                    id="metaTitle"
                    type="text"
                    value={form.metaTitle}
                    onChange={(e) => update("metaTitle", e.target.value)}
                />
                <small>Leave blank to fall back to the title above.</small>
            </div>

            <div className="admin-field">
                <label htmlFor="metaDescription">SEO meta description</label>
                <textarea
                    id="metaDescription"
                    rows={2}
                    value={form.metaDescription}
                    onChange={(e) => update("metaDescription", e.target.value)}
                />
                <small>Leave blank to fall back to the excerpt above.</small>
            </div>

            <div className="admin-field">
                <div className="admin-checkbox-row">
                    <input
                        id="noindex"
                        type="checkbox"
                        checked={form.noindex}
                        onChange={(e) => update("noindex", e.target.checked)}
                    />
                    <label htmlFor="noindex" style={{ margin: 0 }}>
                        Hide from search engines (noindex)
                    </label>
                </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
                <button className="admin-btn" type="submit" disabled={saving}>
                    {saving ? "Saving..." : "Save changes"}
                </button>
                <button
                    className="admin-btn-secondary"
                    type="button"
                    disabled={deleting}
                    onClick={handleDelete}
                    style={{ padding: "10px 18px", borderRadius: 6 }}
                >
                    {deleting ? "Deleting..." : "Delete post"}
                </button>
            </div>
        </form>
    );
}
