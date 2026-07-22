"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { TICKET_CATEGORIES } from "@/lib/tickets";
import AttachmentPicker, { type PendingAttachment } from "@/src/components/Tickets/AttachmentPicker";

export default function NewTicketForm() {
    const router = useRouter();
    const [subject, setSubject] = useState("");
    const [category, setCategory] = useState<string>(TICKET_CATEGORIES[0]);
    const [link, setLink] = useState("");
    const [message, setMessage] = useState("");
    const [attachments, setAttachments] = useState<PendingAttachment[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const res = await fetch("/api/tickets", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ subject, category, link, message, attachments }),
        });

        setLoading(false);

        if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            setError(data.error || "Could not raise ticket.");
            return;
        }

        const { ticket } = await res.json();
        router.push(`/dashboard/${ticket.id}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="admin-error">{error}</div>}

            <div className="admin-field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" required value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>

            <div style={{ display: "flex", gap: 12 }}>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="category">Category</label>
                    <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        {TICKET_CATEGORIES.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="admin-field" style={{ flex: 1 }}>
                    <label htmlFor="link">Link (optional)</label>
                    <input id="link" type="url" placeholder="https://..." value={link} onChange={(e) => setLink(e.target.value)} />
                </div>
            </div>

            <div className="admin-field">
                <label htmlFor="message">What is the problem?</label>
                <textarea id="message" rows={6} required value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>

            <AttachmentPicker uploadUrl="/api/tickets/upload" attachments={attachments} onChange={setAttachments} />

            <button className="admin-btn" type="submit" disabled={loading} style={{ marginTop: 8 }}>
                {loading ? "Submitting..." : "Submit Ticket"}
            </button>
        </form>
    );
}
