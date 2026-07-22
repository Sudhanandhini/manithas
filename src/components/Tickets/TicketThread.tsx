type Attachment = { id: string; fileName: string; fileUrl: string; fileType: string; fileSize: number };
type Message = {
    id: string;
    senderType: string;
    senderName: string;
    message: string;
    createdAt: string | Date;
    attachments: Attachment[];
};

function formatDate(date: string | Date) {
    return new Date(date).toLocaleString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}

function formatBytes(bytes: number) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function TicketThread({ messages, viewerType }: { messages: Message[]; viewerType: "customer" | "admin" }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {messages.map((m) => {
                const isOwn = m.senderType === viewerType;
                return (
                    <div
                        key={m.id}
                        style={{
                            alignSelf: isOwn ? "flex-end" : "flex-start",
                            maxWidth: "80%",
                            background: isOwn ? "#2952e3" : "#f1f1f6",
                            color: isOwn ? "#fff" : "#1a1a2e",
                            borderRadius: 10,
                            padding: "12px 16px",
                        }}
                    >
                        <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 4, opacity: 0.85 }}>
                            {m.senderName} <span style={{ fontWeight: 400 }}>&middot; {m.senderType === "admin" ? "Support" : "Customer"}</span>
                        </div>
                        <div style={{ whiteSpace: "pre-wrap", fontSize: 14, lineHeight: 1.6 }}>{m.message}</div>
                        {m.attachments.length > 0 && (
                            <ul style={{ listStyle: "none", padding: 0, margin: "10px 0 0" }}>
                                {m.attachments.map((a) => (
                                    <li key={a.id} style={{ marginBottom: 4 }}>
                                        <a
                                            href={a.fileUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            download={a.fileName}
                                            style={{ color: isOwn ? "#fff" : "#2952e3", textDecoration: "underline", fontSize: 13 }}
                                        >
                                            {a.fileName} ({formatBytes(a.fileSize)})
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <div style={{ fontSize: 11, marginTop: 8, opacity: 0.7 }}>{formatDate(m.createdAt)}</div>
                    </div>
                );
            })}
        </div>
    );
}
