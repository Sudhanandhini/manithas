"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

type Settings = {
    siteName: string;
    titleTemplate: string;
    defaultDescription: string | null;
    defaultOgImage: string | null;
    robotsTxt: string;
    googleSiteVerification: string | null;
    bingSiteVerification: string | null;
};

export default function SettingsForm({ settings }: { settings: Settings }) {
    const router = useRouter();
    const [form, setForm] = useState({
        siteName: settings.siteName,
        titleTemplate: settings.titleTemplate,
        defaultDescription: settings.defaultDescription ?? "",
        defaultOgImage: settings.defaultOgImage ?? "",
        robotsTxt: settings.robotsTxt,
        googleSiteVerification: settings.googleSiteVerification ?? "",
        bingSiteVerification: settings.bingSiteVerification ?? "",
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

        const res = await fetch("/api/admin/settings", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        setSaving(false);

        if (!res.ok) {
            setError("Could not save settings.");
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
                <label htmlFor="siteName">Site name</label>
                <input
                    id="siteName"
                    type="text"
                    required
                    value={form.siteName}
                    onChange={(e) => update("siteName", e.target.value)}
                />
            </div>

            <div className="admin-field">
                <label htmlFor="titleTemplate">Title template</label>
                <input
                    id="titleTemplate"
                    type="text"
                    required
                    value={form.titleTemplate}
                    onChange={(e) => update("titleTemplate", e.target.value)}
                />
                <small>Use %s as a placeholder for the page&apos;s own title, e.g. &quot;%s | Manithas&quot;.</small>
            </div>

            <div className="admin-field">
                <label htmlFor="defaultDescription">Default meta description</label>
                <textarea
                    id="defaultDescription"
                    rows={3}
                    value={form.defaultDescription}
                    onChange={(e) => update("defaultDescription", e.target.value)}
                />
                <small>Used on any page without its own description set.</small>
            </div>

            <div className="admin-field">
                <label htmlFor="defaultOgImage">Default Open Graph image URL</label>
                <input
                    id="defaultOgImage"
                    type="text"
                    value={form.defaultOgImage}
                    onChange={(e) => update("defaultOgImage", e.target.value)}
                />
            </div>

            <div className="admin-field">
                <label htmlFor="googleSiteVerification">Google Search Console verification code</label>
                <input
                    id="googleSiteVerification"
                    type="text"
                    value={form.googleSiteVerification}
                    onChange={(e) => update("googleSiteVerification", e.target.value)}
                />
            </div>

            <div className="admin-field">
                <label htmlFor="bingSiteVerification">Bing Webmaster verification code</label>
                <input
                    id="bingSiteVerification"
                    type="text"
                    value={form.bingSiteVerification}
                    onChange={(e) => update("bingSiteVerification", e.target.value)}
                />
            </div>

            <div className="admin-field">
                <label htmlFor="robotsTxt">robots.txt contents</label>
                <textarea
                    id="robotsTxt"
                    rows={8}
                    style={{ fontFamily: "monospace" }}
                    value={form.robotsTxt}
                    onChange={(e) => update("robotsTxt", e.target.value)}
                />
                <small>Served as-is at /robots.txt.</small>
            </div>

            <button className="admin-btn" type="submit" disabled={saving}>
                {saving ? "Saving..." : "Save settings"}
            </button>
        </form>
    );
}
