"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import TicketThread from "@/src/components/Tickets/TicketThread";
import AttachmentPicker, { type PendingAttachment } from "@/src/components/Tickets/AttachmentPicker";
import { TICKET_STATUSES, TICKET_PRIORITIES, TICKET_CATEGORIES } from "@/lib/tickets";

export default function AdminTicketDetail({ ticket, assignees }: { ticket: any; assignees: string[] }) {
    const router = useRouter();
    const [status, setStatus] = useState(ticket.status);
    const [priority, setPriority] = useState(ticket.priority);
    const [category, setCategory] = useState(ticket.category);
    const [assignedTo, setAssignedTo] = useState(ticket.assignedTo || "");
    const [savingFields, setSavingFields] = useState(false);

    const [message, setMessage] = useState("");
    const [attachments, setAttachments] = useState<PendingAttachment[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const assigneeOptions =
        ticket.assignedTo && !assignees.includes(ticket.assignedTo) ? [ticket.assignedTo, ...assignees] : assignees;

    async function saveFields(next: { status?: string; priority?: string; category?: string; assignedTo?: string }) {
        setSavingFields(true);
        await fetch(`/api/admin/tickets/${ticket.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(next),
        });
        setSavingFields(false);
        router.refresh();
    }

    async function handleReply(e: FormEvent) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const res = await fetch(`/api/admin/tickets/${ticket.id}/messages`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message, attachments }),
        });

        setLoading(false);

        if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            setError(data.error || "Could not send reply.");
            return;
        }

        setMessage("");
        setAttachments([]);
        router.refresh();
    }

    return (
        <>
            <Link href="/admin/tickets" className="admin-btn-secondary" style={{ padding: "6px 14px", borderRadius: 6, display: "inline-block", marginBottom: 16 }}>
                &larr; All Tickets
            </Link>

            <div className="admin-card" style={{ marginBottom: 20 }}>
                <h2 style={{ marginTop: 0 }}>{ticket.subject}</h2>
                <p style={{ marginTop: -8 }}>
                    <small>
                        {ticket.customer.name} &middot; {ticket.customer.email}
                        {ticket.link && (
                            <>
                                {" "}
                                &middot;{" "}
                                <a href={ticket.link} target="_blank" rel="noreferrer">
                                    Reference link
                                </a>
                            </>
                        )}
                    </small>
                </p>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <div className="admin-field" style={{ flex: 1 }}>
                        <label>Status</label>
                        <select
                            value={status}
                            disabled={savingFields}
                            onChange={(e) => {
                                setStatus(e.target.value);
                                saveFields({ status: e.target.value });
                            }}
                        >
                            {TICKET_STATUSES.map((s) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="admin-field" style={{ flex: 1 }}>
                        <label>Priority</label>
                        <select
                            value={priority}
                            disabled={savingFields}
                            onChange={(e) => {
                                setPriority(e.target.value);
                                saveFields({ priority: e.target.value });
                            }}
                        >
                            {TICKET_PRIORITIES.map((p) => (
                                <option key={p} value={p}>
                                    {p}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="admin-field" style={{ flex: 1 }}>
                        <label>Category</label>
                        <select
                            value={category}
                            disabled={savingFields}
                            onChange={(e) => {
                                setCategory(e.target.value);
                                saveFields({ category: e.target.value });
                            }}
                        >
                            {TICKET_CATEGORIES.map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="admin-field" style={{ flex: 1 }}>
                        <label>Assigned To</label>
                        <select
                            value={assignedTo}
                            disabled={savingFields}
                            onChange={(e) => {
                                setAssignedTo(e.target.value);
                                saveFields({ assignedTo: e.target.value });
                            }}
                        >
                            <option value="">Unassigned</option>
                            {assigneeOptions.map((name) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="admin-card" style={{ marginBottom: 20 }}>
                <TicketThread messages={ticket.messages} viewerType="admin" />
            </div>

            <div className="admin-card">
                <h2 style={{ fontSize: 16, marginTop: 0 }}>Reply</h2>
                {error && <div className="admin-error">{error}</div>}
                <form onSubmit={handleReply}>
                    <div className="admin-field">
                        <textarea rows={4} required value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <AttachmentPicker uploadUrl="/api/admin/tickets/upload" attachments={attachments} onChange={setAttachments} />
                    <button className="admin-btn" type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Reply"}
                    </button>
                </form>
            </div>
        </>
    );
}
