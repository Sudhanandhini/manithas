"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function NewCustomerForm() {
    const router = useRouter();
    const [form, setForm] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
        mobile: "",
        website: "",
        domain: "",
        address: "",
        companyName: "",
    });
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    function update<K extends keyof typeof form>(key: K, value: string) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const res = await fetch("/api/admin/customers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        setLoading(false);

        if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            setError(data.error || "Could not create customer.");
            return;
        }

        const { customer } = await res.json();
        router.push(`/admin/customers/${customer.id}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="admin-error">{error}</div>}

            <div style={{ display: "flex", gap: 12 }}>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" required value={form.username} onChange={(e) => update("username", e.target.value)} />
                </div>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" required value={form.password} onChange={(e) => update("password", e.target.value)} />
                    <small>At least 6 characters.</small>
                </div>
            </div>

            <div className="admin-field">
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" required value={form.name} onChange={(e) => update("name", e.target.value)} />
            </div>

            <div style={{ display: "flex", gap: 12 }}>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
                </div>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="mobile">Mobile Number</label>
                    <input id="mobile" type="text" value={form.mobile} onChange={(e) => update("mobile", e.target.value)} />
                </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="website">Website</label>
                    <input id="website" type="text" value={form.website} onChange={(e) => update("website", e.target.value)} />
                </div>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="domain">Domain</label>
                    <input id="domain" type="text" value={form.domain} onChange={(e) => update("domain", e.target.value)} />
                </div>
            </div>

            <div className="admin-field">
                <label htmlFor="companyName">Company / School / Organization Name</label>
                <input id="companyName" type="text" value={form.companyName} onChange={(e) => update("companyName", e.target.value)} />
            </div>

            <div className="admin-field">
                <label htmlFor="address">Address</label>
                <textarea id="address" rows={2} value={form.address} onChange={(e) => update("address", e.target.value)} />
            </div>

            <button className="admin-btn" type="submit" disabled={loading}>
                {loading ? "Creating..." : "Create Customer"}
            </button>
        </form>
    );
}
