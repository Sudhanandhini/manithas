"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { SeoPage } from "@prisma/client";

export default function SeoEditForm({ page }: { page: SeoPage }) {
    const router = useRouter();
    const [form, setForm] = useState({
        title: page.title ?? "",
        description: page.description ?? "",
        keywords: page.keywords ?? "",
        ogTitle: page.ogTitle ?? "",
        ogDescription: page.ogDescription ?? "",
        ogImage: page.ogImage ?? "",
        canonicalUrl: page.canonicalUrl ?? "",
        noindex: page.noindex,
        nofollow: page.nofollow,
    });
    const [saving, setSaving] = useState(false);
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

        const res = await fetch(`/api/admin/seo/${page.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        setSaving(false);

        if (!res.ok) {
            setError("Could not save changes.");
            return;
        }

        setSaved(true);
        router.refresh();
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="admin-error">{error}</div>}
            {saved && <div className="admin-success">Saved.</div>}

            <div className="admin-field">
                <label htmlFor="title">Title tag</label>
                <input
                    id="title"
                    type="text"
                    value={form.title}
                    onChange={(e) => update("title", e.target.value)}
                />
                <small>Rendered inside the site&apos;s title template (see Site Settings).</small>
            </div>

            <div className="admin-field">
                <label htmlFor="description">Meta description</label>
                <textarea
                    id="description"
                    rows={3}
                    value={form.description}
                    onChange={(e) => update("description", e.target.value)}
                />
            </div>

            <div className="admin-field">
                <label htmlFor="keywords">Meta keywords</label>
                <input
                    id="keywords"
                    type="text"
                    placeholder="comma, separated, keywords"
                    value={form.keywords}
                    onChange={(e) => update("keywords", e.target.value)}
                />
            </div>

            <div className="admin-field">
                <label htmlFor="canonicalUrl">Canonical URL</label>
                <input
                    id="canonicalUrl"
                    type="url"
                    placeholder="https://www.example.com/about"
                    value={form.canonicalUrl}
                    onChange={(e) => update("canonicalUrl", e.target.value)}
                />
                <small>Leave blank to default to the site URL + this page&apos;s path.</small>
            </div>

            <div className="admin-field">
                <label htmlFor="ogTitle">Open Graph title</label>
                <input
                    id="ogTitle"
                    type="text"
                    value={form.ogTitle}
                    onChange={(e) => update("ogTitle", e.target.value)}
                />
            </div>

            <div className="admin-field">
                <label htmlFor="ogDescription">Open Graph description</label>
                <textarea
                    id="ogDescription"
                    rows={2}
                    value={form.ogDescription}
                    onChange={(e) => update("ogDescription", e.target.value)}
                />
            </div>

            <div className="admin-field">
                <label htmlFor="ogImage">Open Graph image URL</label>
                <input
                    id="ogImage"
                    type="text"
                    placeholder="/images/og/about.jpg or https://..."
                    value={form.ogImage}
                    onChange={(e) => update("ogImage", e.target.value)}
                />
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
                <div className="admin-checkbox-row" style={{ marginTop: 8 }}>
                    <input
                        id="nofollow"
                        type="checkbox"
                        checked={form.nofollow}
                        onChange={(e) => update("nofollow", e.target.checked)}
                    />
                    <label htmlFor="nofollow" style={{ margin: 0 }}>
                        Don&apos;t follow links on this page (nofollow)
                    </label>
                </div>
            </div>

            <button className="admin-btn" type="submit" disabled={saving}>
                {saving ? "Saving..." : "Save changes"}
            </button>
        </form>
    );
}
