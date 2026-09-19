"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { Customer } from "@prisma/client";
import ContactListField from "../ContactListField";

function toStringArray(value: unknown): string[] {
    return Array.isArray(value) ? value.filter((v): v is string => typeof v === "string") : [];
}

function toDateInputValue(value: Date | null): string {
    return value ? value.toISOString().slice(0, 10) : "";
}

export default function CustomerEditForm({ customer }: { customer: Customer }) {
    const router = useRouter();
    const [form, setForm] = useState({
        username: customer.username,
        password: "",
        name: customer.name,
        customerType: customer.customerType ?? "",
        amcDateFrom: toDateInputValue(customer.amcDateFrom),
        amcDateTo: toDateInputValue(customer.amcDateTo),
        email: customer.email ?? "",
        mobile: customer.mobile ?? "",
        website: customer.website ?? "",
        driveLink: customer.driveLink ?? "",
        address: customer.address ?? "",
        companyName: customer.companyName ?? "",
    });
    const [extraEmails, setExtraEmails] = useState<string[]>(toStringArray(customer.extraEmails));
    const [extraPhones, setExtraPhones] = useState<string[]>(toStringArray(customer.extraPhones));
    const [error, setError] = useState<string | null>(null);
    const [saved, setSaved] = useState(false);
    const [saving, setSaving] = useState(false);
    const [deleting, setDeleting] = useState(false);

    function update<K extends keyof typeof form>(key: K, value: string) {
        setForm((prev) => ({ ...prev, [key]: value }));
        setSaved(false);
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError(null);
        setSaving(true);

        const res = await fetch(`/api/admin/customers/${customer.id}`, {
            method: "PUT",
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

    async function handleDelete() {
        if (!window.confirm("Delete this customer? This cannot be undone.")) return;
        setDeleting(true);
        const res = await fetch(`/api/admin/customers/${customer.id}`, { method: "DELETE" });
        setDeleting(false);

        if (!res.ok) {
            setError("Could not delete customer. They may still have open tickets.");
            return;
        }

        router.push("/admin/customers");
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="admin-error">{error}</div>}
            {saved && <div className="admin-success">Saved.</div>}

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
                        onChange={(v) => {
                            setExtraEmails(v);
                            setSaved(false);
                        }}
                        addLabel="+ Add another email"
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <ContactListField
                        label="Additional Phone Numbers"
                        type="tel"
                        values={extraPhones}
                        onChange={(v) => {
                            setExtraPhones(v);
                            setSaved(false);
                        }}
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

            <div style={{ display: "flex", gap: 12 }}>
                <button className="admin-btn" type="submit" disabled={saving}>
                    {saving ? "Saving..." : "Save changes"}
                </button>
                <button
                    className="admin-btn-secondary"
                    type="button"
                    disabled={deleting}
                    onClick={handleDelete}
                    style={{ padding: "10px 18px", borderRadius: 6 }}
                >
                    {deleting ? "Deleting..." : "Delete customer"}
                </button>
            </div>
        </form>
    );
}
