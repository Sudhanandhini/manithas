"use client";

import { useRef, useState } from "react";

export type PendingAttachment = { url: string; fileName: string; fileType: string; fileSize: number };

function formatBytes(bytes: number) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function AttachmentPicker({
    uploadUrl,
    attachments,
    onChange,
}: {
    uploadUrl: string;
    attachments: PendingAttachment[];
    onChange: (attachments: PendingAttachment[]) => void;
}) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleFilesChange(e: React.ChangeEvent<HTMLInputElement>) {
        const files = Array.from(e.target.files || []);
        if (files.length === 0) return;

        setUploading(true);
        setError(null);
        const uploaded: PendingAttachment[] = [];

        for (const file of files) {
            const formData = new FormData();
            formData.append("file", file);
            const res = await fetch(uploadUrl, { method: "POST", body: formData });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setError(data.error || `Could not upload ${file.name}.`);
                continue;
            }
            const data = await res.json();
            uploaded.push({ url: data.url, fileName: data.fileName, fileType: data.fileType, fileSize: data.fileSize });
        }

        setUploading(false);
        e.target.value = "";
        if (uploaded.length > 0) {
            onChange([...attachments, ...uploaded]);
        }
    }

    function removeAttachment(url: string) {
        onChange(attachments.filter((a) => a.url !== url));
    }

    return (
        <div className="admin-field">
            <label>Attachments</label>
            <small style={{ display: "block", marginBottom: 8 }}>
                Images, PDF, Word, Excel, or ZIP. Up to 10MB per file, attach as many as you need.
            </small>
            {error && <div className="admin-error">{error}</div>}

            {attachments.length > 0 && (
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 10px" }}>
                    {attachments.map((a) => (
                        <li
                            key={a.url}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "6px 10px",
                                border: "1px solid #e2e2ea",
                                borderRadius: 6,
                                marginBottom: 6,
                                fontSize: 13,
                            }}
                        >
                            <span>
                                {a.fileName} <span style={{ color: "#777" }}>({formatBytes(a.fileSize)})</span>
                            </span>
                            <button
                                type="button"
                                className="admin-btn-secondary"
                                style={{ padding: "3px 10px", fontSize: 12 }}
                                onClick={() => removeAttachment(a.url)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <button
                type="button"
                className="admin-btn admin-btn-secondary"
                disabled={uploading}
                onClick={() => fileInputRef.current?.click()}
            >
                {uploading ? "Uploading..." : "Add files"}
            </button>
            <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/jpeg,image/png,image/webp,image/gif,application/pdf,.doc,.docx,.xls,.xlsx,.zip"
                style={{ display: "none" }}
                onChange={handleFilesChange}
            />
        </div>
    );
}
