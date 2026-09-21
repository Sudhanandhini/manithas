"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { SeoPage } from "@prisma/client";

const PAGE_TYPES = ["Page", "Blog", "Solution", "Landing"];

export default function SeoEditForm({ page }: { page: SeoPage }) {
    const router = useRouter();
    const [form, setForm] = useState({
        slug: page.slug ?? "",
        label: page.label ?? "",
        type: page.type ?? "Page",
        title: page.title ?? "",
        description: page.description ?? "",
        keywords: page.keywords ?? "",
        ogTitle: page.ogTitle ?? "",
        ogDescription: page.ogDescription ?? "",
        ogImage: page.ogImage ?? "",
        canonicalUrl: page.canonicalUrl ?? "",
        noindex: page.noindex,
        nofollow: page.nofollow,
        jsonLd: page.jsonLd ?? "",
    });
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [saved, setSaved] = useState(false);

    const jsonLdError = useMemo(() => {
        if (!form.jsonLd.trim()) return null;
        try {
            JSON.parse(form.jsonLd);
            return null;
        } catch {
            return "Not valid JSON — this schema will not be saved until it's fixed.";
        }
    }, [form.jsonLd]);

    function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
        setForm((prev) => ({ ...prev, [key]: value }));
        setSaved(false);
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (jsonLdError) {
            setError(jsonLdError);
            return;
        }
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
            const body = await res.json().catch(() => null);
            setError(body?.error || "Could not save changes.");
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
                <label htmlFor="label">Page name</label>
                <input
                    id="label"
                    type="text"
                    value={form.label}
                    onChange={(e) => update("label", e.target.value)}
                    required
                />
            </div>

            <div className="admin-field">
                <label htmlFor="slug">Slug</label>
                <input
                    id="slug"
                    type="text"
                    placeholder="/about"
                    value={form.slug}
                    onChange={(e) => update("slug", e.target.value)}
                    required
                />
                {page.key ? (
                    <small className="admin-success">
                        This page is dynamically routed — renaming the slug moves the live URL and updates
                        its menu/footer links immediately, with no code changes needed.
                    </small>
                ) : (
                    <small className="admin-error">
                        This page&apos;s URL is hardcoded in code. Renaming this slug only changes SEO
                        metadata — it will NOT move the real page or update menu/footer links. Ask a
                        developer to migrate this page to dynamic routing first.
                    </small>
                )}
            </div>

            <div className="admin-field">
                <label htmlFor="type">Type</label>
                <select id="type" value={form.type} onChange={(e) => update("type", e.target.value)}>
                    {PAGE_TYPES.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

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
                <label htmlFor="jsonLd">Schema (JSON-LD)</label>
                <textarea
                    id="jsonLd"
                    rows={8}
                    style={{ fontFamily: "monospace", fontSize: 13 }}
                    placeholder={'{\n  "@context": "https://schema.org",\n  "@type": "WebPage",\n  "name": "..."\n}'}
                    value={form.jsonLd}
                    onChange={(e) => update("jsonLd", e.target.value)}
                />
                {jsonLdError && <small className="admin-error" style={{ marginBottom: 0 }}>{jsonLdError}</small>}
                <small>
                    Optional structured data rendered as a <code>&lt;script type=&quot;application/ld+json&quot;&gt;</code> tag
                    on this page. Leave blank to render none. Must be valid JSON.
                </small>
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

            <button className="admin-btn" type="submit" disabled={saving || !!jsonLdError}>
                {saving ? "Saving..." : "Save changes"}
            </button>
        </form>
    );
}
