"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { TICKET_CATEGORIES } from "@/lib/tickets";
import DriveAttachmentNote from "@/src/components/Tickets/DriveAttachmentNote";

export default function NewTicketForm({ driveLink }: { driveLink: string | null }) {
    const router = useRouter();
    const [subject, setSubject] = useState("");
    const [category, setCategory] = useState<string>(TICKET_CATEGORIES[0]);
    const [message, setMessage] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const res = await fetch("/api/tickets", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ subject, category, message, attachments: [] }),
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

            <div className="admin-field">
                <label htmlFor="category">Category</label>
                <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    {TICKET_CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
            </div>

            <div className="admin-field">
                <label htmlFor="message">What is the problem?</label>
                <textarea id="message" rows={6} required value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>

            <DriveAttachmentNote driveLink={driveLink} />

            <button className="admin-btn" type="submit" disabled={loading} style={{ marginTop: 8 }}>
                {loading ? "Submitting..." : "Submit Ticket"}
            </button>
        </form>
    );
}
