"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

type TeamUser = { id: string; username: string; name: string; email: string; disabled: boolean };

export default function EditTeamUserForm({ user }: { user: TeamUser }) {
    const router = useRouter();
    const [form, setForm] = useState({
        username: user.username,
        name: user.name,
        email: user.email,
        password: "",
    });
    const [disabled, setDisabled] = useState(user.disabled);
    const [error, setError] = useState<string | null>(null);
    const [saved, setSaved] = useState(false);
    const [saving, setSaving] = useState(false);
    const [togglingDisabled, setTogglingDisabled] = useState(false);
    const [removing, setRemoving] = useState(false);

    function update<K extends keyof typeof form>(key: K, value: string) {
        setForm((prev) => ({ ...prev, [key]: value }));
        setSaved(false);
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError(null);
        setSaving(true);

        const res = await fetch(`/api/dashboard/users/${user.id}`, {
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
        setForm((prev) => ({ ...prev, password: "" }));
        router.refresh();
    }

    async function handleToggleDisabled() {
        setTogglingDisabled(true);
        const res = await fetch(`/api/dashboard/users/${user.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ disabled: !disabled }),
        });
        setTogglingDisabled(false);

        if (res.ok) {
            setDisabled((prev) => !prev);
            router.refresh();
        }
    }

    async function handleRemove() {
        if (!window.confirm("Remove this team user? They will no longer be able to log in.")) return;
        setRemoving(true);
        const res = await fetch(`/api/dashboard/users/${user.id}`, { method: "DELETE" });
        setRemoving(false);

        if (res.ok) {
            router.push("/dashboard/users");
            router.refresh();
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="admin-error">{error}</div>}
            {saved && <div className="admin-success">Saved.</div>}
            {disabled && (
                <div className="admin-error">This user is disabled and cannot log in.</div>
            )}

            <div style={{ display: "flex", gap: 12 }}>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" required value={form.username} onChange={(e) => update("username", e.target.value)} />
                </div>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="password">Reset Password</label>
                    <input id="password" type="password" value={form.password} onChange={(e) => update("password", e.target.value)} />
                    <small>Leave blank to keep the current password.</small>
                </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="name">Full Name</label>
                    <input id="name" type="text" required value={form.name} onChange={(e) => update("name", e.target.value)} />
                </div>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
                </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
                <button className="admin-btn" type="submit" disabled={saving}>
                    {saving ? "Saving..." : "Save changes"}
                </button>
                <button
                    className="admin-btn-secondary"
                    type="button"
                    disabled={togglingDisabled}
                    onClick={handleToggleDisabled}
                    style={{ padding: "10px 18px", borderRadius: 6 }}
                >
                    {togglingDisabled ? "Saving..." : disabled ? "Enable user" : "Disable user"}
                </button>
                <button
                    className="admin-btn-secondary"
                    type="button"
                    disabled={removing}
                    onClick={handleRemove}
                    style={{ padding: "10px 18px", borderRadius: 6 }}
                >
                    {removing ? "Removing..." : "Remove user"}
                </button>
            </div>
        </form>
    );
}
