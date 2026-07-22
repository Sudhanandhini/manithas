"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import ImageField from "../../ImageField";

export default function NewSolutionForm() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const res = await fetch("/api/admin/solution", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, image, content }),
        });

        setLoading(false);

        if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            setError(data.error || "Could not create solution.");
            return;
        }

        const { solution } = await res.json();
        router.push(`/admin/solution/${solution.id}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="admin-error">{error}</div>}
            <div className="admin-field">
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    placeholder="Membership Management"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <small>The URL slug is generated from this automatically.</small>
            </div>
            <ImageField
                id="image"
                label="Thumbnail image"
                value={image}
                onChange={setImage}
                hint="You can add a larger hero image and the rest of the SEO fields after creating the solution."
            />
            <div className="admin-field">
                <label htmlFor="content">Content (paste HTML or plain text)</label>
                <textarea
                    id="content"
                    rows={8}
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button className="admin-btn" type="submit" disabled={loading}>
                {loading ? "Adding..." : "Add solution"}
            </button>
        </form>
    );
}
