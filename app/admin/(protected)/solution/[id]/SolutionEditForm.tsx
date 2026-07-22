"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { Solution } from "@prisma/client";
import ImageField from "../../ImageField";

export default function SolutionEditForm({ solution }: { solution: Solution }) {
    const router = useRouter();
    const [form, setForm] = useState({
        title: solution.title,
        slug: solution.slug,
        excerpt: solution.excerpt ?? "",
        content: solution.content,
        image: solution.image ?? "",
        largeImage: solution.largeImage ?? "",
        client: solution.client ?? "",
        categories: solution.categories ?? "",
        awards: solution.awards ?? "",
        ctaText: solution.ctaText ?? "",
        ctaLink: solution.ctaLink ?? "",
        subContentTitle: solution.subContentTitle ?? "",
        subContentText: solution.subContentText ?? "",
        galleryImageOne: solution.galleryImageOne ?? "",
        galleryImageTwo: solution.galleryImageTwo ?? "",
        galleryImageThree: solution.galleryImageThree ?? "",
        metaTitle: solution.metaTitle ?? "",
        metaDescription: solution.metaDescription ?? "",
        published: solution.published,
        publishedAt: solution.publishedAt.toISOString().slice(0, 10),
        noindex: solution.noindex,
    });
    const originalPublishedAt = solution.publishedAt;
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
        // which would otherwise scramble the newest-first ordering on /solution.
        const [year, month, day] = form.publishedAt.split("-").map(Number);
        const publishedAt = new Date(originalPublishedAt);
        publishedAt.setUTCFullYear(year, month - 1, day);

        const res = await fetch(`/api/admin/solution/${solution.id}`, {
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
        if (!window.confirm("Delete this solution? This cannot be undone.")) {
            return;
        }
        setDeleting(true);
        const res = await fetch(`/api/admin/solution/${solution.id}`, { method: "DELETE" });
        setDeleting(false);

        if (!res.ok) {
            setError("Could not delete solution.");
            return;
        }

        router.push("/admin/solution");
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
                    <small>Draft solutions are hidden from /solution and won&apos;t be findable at their URL.</small>
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
                    <small>Newest publish date shows first on /solution.</small>
                </div>
            </div>

            <div className="admin-field">
                <label htmlFor="title">Title</label>
                <input id="title" type="text" required value={form.title} onChange={(e) => update("title", e.target.value)} />
            </div>

            <div className="admin-field">
                <label htmlFor="slug">URL slug</label>
                <input id="slug" type="text" required value={form.slug} onChange={(e) => update("slug", e.target.value)} />
                <small>Site URL: /solution-details/{form.slug || "..."}</small>
            </div>

            <div className="admin-field">
                <label htmlFor="excerpt">Excerpt (summary shown on the solution grid)</label>
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

            <h3 style={{ fontSize: 15, marginTop: 32, marginBottom: 4 }}>Details page — project info</h3>
            <small style={{ display: "block", marginBottom: 16 }}>
                Shown in the &quot;About the project&quot; panel on the details page. Leave any of these blank to hide that row.
            </small>

            <div style={{ display: "flex", gap: 12 }}>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="client">Client</label>
                    <input id="client" type="text" value={form.client} onChange={(e) => update("client", e.target.value)} />
                </div>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="categories">Categories</label>
                    <input
                        id="categories"
                        type="text"
                        placeholder="comma, separated, categories"
                        value={form.categories}
                        onChange={(e) => update("categories", e.target.value)}
                    />
                </div>
            </div>

            <div className="admin-field">
                <label htmlFor="awards">Awards</label>
                <input id="awards" type="text" value={form.awards} onChange={(e) => update("awards", e.target.value)} />
            </div>

            <div style={{ display: "flex", gap: 12 }}>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="ctaText">CTA button text</label>
                    <input
                        id="ctaText"
                        type="text"
                        placeholder="Go to link"
                        value={form.ctaText}
                        onChange={(e) => update("ctaText", e.target.value)}
                    />
                </div>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="ctaLink">CTA button link</label>
                    <input id="ctaLink" type="text" value={form.ctaLink} onChange={(e) => update("ctaLink", e.target.value)} />
                </div>
            </div>

            <h3 style={{ fontSize: 15, marginTop: 32, marginBottom: 4 }}>Details page — highlight section</h3>
            <small style={{ display: "block", marginBottom: 16 }}>
                The callout block shown below the hero image (e.g. &quot;Digital Marketing.&quot;). Leave blank to hide it.
            </small>

            <div className="admin-field">
                <label htmlFor="subContentTitle">Highlight title</label>
                <input
                    id="subContentTitle"
                    type="text"
                    value={form.subContentTitle}
                    onChange={(e) => update("subContentTitle", e.target.value)}
                />
            </div>

            <div className="admin-field">
                <label htmlFor="subContentText">Highlight text</label>
                <textarea
                    id="subContentText"
                    rows={3}
                    value={form.subContentText}
                    onChange={(e) => update("subContentText", e.target.value)}
                />
            </div>

            <h3 style={{ fontSize: 15, marginTop: 32, marginBottom: 4 }}>Details page — gallery</h3>
            <small style={{ display: "block", marginBottom: 16 }}>
                Shown below the highlight section. Leave any blank to omit them; the gallery is hidden entirely if none are set.
            </small>

            <ImageField
                id="galleryImageOne"
                label="Gallery image 1"
                value={form.galleryImageOne}
                onChange={(url) => update("galleryImageOne", url)}
            />
            <ImageField
                id="galleryImageTwo"
                label="Gallery image 2"
                value={form.galleryImageTwo}
                onChange={(url) => update("galleryImageTwo", url)}
            />
            <ImageField
                id="galleryImageThree"
                label="Gallery image 3 (full width)"
                value={form.galleryImageThree}
                onChange={(url) => update("galleryImageThree", url)}
            />

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
                    {deleting ? "Deleting..." : "Delete solution"}
                </button>
            </div>
        </form>
    );
}
