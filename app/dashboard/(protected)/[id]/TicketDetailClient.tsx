"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import TicketThread from "@/src/components/Tickets/TicketThread";
import AttachmentPicker, { type PendingAttachment } from "@/src/components/Tickets/AttachmentPicker";
import { CLOSED_STATUSES } from "@/lib/tickets";

export default function TicketDetailClient({ ticket }: { ticket: any }) {
    const router = useRouter();
    const [message, setMessage] = useState("");
    const [attachments, setAttachments] = useState<PendingAttachment[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [reopening, setReopening] = useState(false);

    const isClosed = CLOSED_STATUSES.includes(ticket.status);

    async function handleReply(e: FormEvent) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const res = await fetch(`/api/tickets/${ticket.id}/messages`, {
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

    async function handleReopen() {
        if (!window.confirm("Reopen this ticket? This lets support know the issue isn't resolved.")) return;
        setReopening(true);
        const res = await fetch(`/api/tickets/${ticket.id}/reopen`, { method: "POST" });
        setReopening(false);
        if (!res.ok) {
            setError("Could not reopen ticket.");
            return;
        }
        router.refresh();
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div>
                    <p className="admin-title" style={{ marginBottom: 4 }}>
                        {ticket.subject}
                    </p>
                    <small>
                        {ticket.category} &middot; Status: {ticket.status} &middot; Priority: {ticket.priority}
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
                </div>
                {isClosed && (
                    <button className="admin-btn admin-btn-secondary" onClick={handleReopen} disabled={reopening}>
                        {reopening ? "Reopening..." : "Not Solved? Reopen Ticket"}
                    </button>
                )}
            </div>

            <div className="admin-card" style={{ marginBottom: 20 }}>
                <TicketThread messages={ticket.messages} viewerType="customer" />
            </div>

            <div className="admin-card">
                <h2 style={{ fontSize: 16, marginTop: 0 }}>Reply</h2>
                {error && <div className="admin-error">{error}</div>}
                <form onSubmit={handleReply}>
                    <div className="admin-field">
                        <textarea rows={4} required value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <AttachmentPicker uploadUrl="/api/tickets/upload" attachments={attachments} onChange={setAttachments} />
                    <button className="admin-btn" type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Reply"}
                    </button>
                </form>
            </div>
        </>
    );
}
