"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function NewCategoryForm() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const res = await fetch("/api/admin/categories", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name }),
        });

        setLoading(false);

        if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            setError(data.error || "Could not create category.");
            return;
        }

        setName("");
        router.refresh();
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="admin-error">{error}</div>}
            <div style={{ display: "flex", gap: 12, alignItems: "flex-end" }}>
                <div className="admin-field" style={{ flex: 1, marginBottom: 0 }}>
                    <label htmlFor="categoryName">Name</label>
                    <input
                        id="categoryName"
                        type="text"
                        placeholder="Marketing"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button className="admin-btn" type="submit" disabled={loading}>
                    {loading ? "Adding..." : "Add category"}
                </button>
            </div>
        </form>
    );
}
