"use client";

import { useRef, useState } from "react";

export default function ImageField({
    id,
    label,
    value,
    onChange,
    hint,
}: {
    id: string;
    label: string;
    value: string;
    onChange: (url: string) => void;
    hint?: string;
}) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        setError(null);

        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
        setUploading(false);
        e.target.value = "";

        if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            setError(data.error || "Upload failed.");
            return;
        }

        const { url } = await res.json();
        onChange(url);
    }

    return (
        <div className="admin-field">
            <label htmlFor={id}>{label}</label>
            {error && <div className="admin-error">{error}</div>}
            <div className="admin-image-field">
                {value && <img className="admin-image-preview" src={value} alt="" />}
                <div className="admin-image-field-controls">
                    <input
                        id={id}
                        type="text"
                        placeholder="/images/blog/370/blog-1.jpg or https://..."
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    />
                    <div className="admin-image-field-actions">
                        <button
                            type="button"
                            className="admin-btn admin-btn-secondary"
                            disabled={uploading}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            {uploading ? "Uploading..." : "Choose file"}
                        </button>
                        {value && (
                            <button type="button" className="admin-btn admin-btn-secondary" onClick={() => onChange("")}>
                                Remove
                            </button>
                        )}
                    </div>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                </div>
            </div>
            {hint && <small>{hint}</small>}
        </div>
    );
}
