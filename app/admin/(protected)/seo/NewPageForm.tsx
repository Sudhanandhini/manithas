"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function NewPageForm() {
    const router = useRouter();
    const [slug, setSlug] = useState("");
    const [label, setLabel] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const res = await fetch("/api/admin/seo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ slug, label }),
        });

        setLoading(false);

        if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            setError(data.error || "Could not create page.");
            return;
        }

        const { page } = await res.json();
        router.push(`/admin/seo/${page.id}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="admin-error">{error}</div>}
            <div style={{ display: "flex", gap: 12 }}>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="slug">Path</label>
                    <input
                        id="slug"
                        type="text"
                        placeholder="/pricing"
                        required
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                    />
                </div>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="label">Name</label>
                    <input
                        id="label"
                        type="text"
                        placeholder="Pricing"
                        required
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                    />
                </div>
            </div>
            <button className="admin-btn" type="submit" disabled={loading}>
                {loading ? "Adding..." : "Add page"}
            </button>
        </form>
    );
}
