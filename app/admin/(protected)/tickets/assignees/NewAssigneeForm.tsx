"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function NewAssigneeForm() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const res = await fetch("/api/admin/assignees", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name }),
        });

        setLoading(false);

        if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            setError(data.error || "Could not add person.");
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
                    <label htmlFor="assigneeName">Name</label>
                    <input
                        id="assigneeName"
                        type="text"
                        placeholder="e.g. Priya Sharma"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button className="admin-btn" type="submit" disabled={loading}>
                    {loading ? "Adding..." : "Add person"}
                </button>
            </div>
        </form>
    );
}
