"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import ContactListField from "../ContactListField";

export default function NewCustomerForm() {
    const router = useRouter();
    const [form, setForm] = useState({
        username: "",
        password: "",
        name: "",
        customerType: "",
        amcDateFrom: "",
        amcDateTo: "",
        email: "",
        mobile: "",
        website: "",
        driveLink: "",
        address: "",
        companyName: "",
    });
    const [extraEmails, setExtraEmails] = useState<string[]>([]);
    const [extraPhones, setExtraPhones] = useState<string[]>([]);
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
            body: JSON.stringify({
                ...form,
                customerType: form.customerType || null,
                amcDateFrom: form.amcDateFrom || null,
                amcDateTo: form.amcDateTo || null,
                extraEmails: extraEmails.map((v) => v.trim()).filter(Boolean),
                extraPhones: extraPhones.map((v) => v.trim()).filter(Boolean),
            }),
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

            <div className="admin-field">
                <label htmlFor="customerType">Type</label>
                <select id="customerType" value={form.customerType} onChange={(e) => update("customerType", e.target.value)}>
                    <option value="">Select type</option>
                    <option value="AMC">AMC</option>
                    <option value="AMC_CHARGEABLE">AMC + Chargeable</option>
                    <option value="CHARGEABLE">Chargeable</option>
                </select>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="amcDateFrom">AMC Date From</label>
                    <input
                        id="amcDateFrom"
                        type="date"
                        value={form.amcDateFrom}
                        onChange={(e) => update("amcDateFrom", e.target.value)}
                    />
                </div>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="amcDateTo">AMC Date To</label>
                    <input id="amcDateTo" type="date" value={form.amcDateTo} onChange={(e) => update("amcDateTo", e.target.value)} />
                </div>
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
                <div style={{ flex: 1 }}>
                    <ContactListField
                        label="Additional Emails"
                        type="email"
                        values={extraEmails}
                        onChange={setExtraEmails}
                        addLabel="+ Add another email"
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <ContactListField
                        label="Additional Phone Numbers"
                        type="tel"
                        values={extraPhones}
                        onChange={setExtraPhones}
                        addLabel="+ Add another phone number"
                    />
                </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="website">Website</label>
                    <input id="website" type="text" value={form.website} onChange={(e) => update("website", e.target.value)} />
                </div>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="driveLink">Drive Link</label>
                    <input
                        id="driveLink"
                        type="url"
                        placeholder="https://drive.google.com/..."
                        value={form.driveLink}
                        onChange={(e) => update("driveLink", e.target.value)}
                    />
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
