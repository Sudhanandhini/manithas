"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AccountSettingsForm({ username, email }: { username: string; email: string }) {
    const router = useRouter();
    const [form, setForm] = useState({
        username,
        email,
        currentPassword: "",
        newPassword: "",
    });
    const [error, setError] = useState<string | null>(null);
    const [saved, setSaved] = useState(false);
    const [saving, setSaving] = useState(false);

    function update<K extends keyof typeof form>(key: K, value: string) {
        setForm((prev) => ({ ...prev, [key]: value }));
        setSaved(false);
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError(null);
        setSaving(true);

        const res = await fetch("/api/dashboard/account", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        setSaving(false);

        if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            setError(data.error || "Could not save changes.");
            return;
        }

        setSaved(true);
        setForm((prev) => ({ ...prev, currentPassword: "", newPassword: "" }));
        router.refresh();
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="admin-error">{error}</div>}
            {saved && <div className="admin-success">Saved.</div>}

            <div className="admin-field">
                <label htmlFor="username">Username</label>
                <input id="username" type="text" required value={form.username} onChange={(e) => update("username", e.target.value)} />
            </div>

            <div className="admin-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
            </div>

            <div style={{ display: "flex", gap: 12 }}>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="currentPassword">Current Password</label>
                    <input
                        id="currentPassword"
                        type="password"
                        value={form.currentPassword}
                        onChange={(e) => update("currentPassword", e.target.value)}
                    />
                </div>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="newPassword">New Password</label>
                    <input id="newPassword" type="password" value={form.newPassword} onChange={(e) => update("newPassword", e.target.value)} />
                    <small>Leave blank to keep your current password.</small>
                </div>
            </div>

            <button className="admin-btn" type="submit" disabled={saving}>
                {saving ? "Saving..." : "Save changes"}
            </button>
        </form>
    );
}
