export const TICKET_STATUSES = [
    "New",
    "Open",
    "Assigned",
    "In Progress",
    "Waiting for Customer",
    "Resolved",
    "Closed",
    "Cancelled",
    "Reopened",
] as const;

export const TICKET_PRIORITIES = ["Low", "Medium", "High", "Critical"] as const;

export const TICKET_TYPES = ["AMC", "AMC + Chargeable", "Chargeable"] as const;

export const TICKET_CATEGORIES = [
    "Website",
    "Web Application",
    "Mobile App",
    "Hosting",
    "Email",
    "Domain",
    "SEO",
    "Payment",
    "Bug",
    "Feature Request",
    "General Inquiry",
] as const;

export type TicketStatus = (typeof TICKET_STATUSES)[number];
export type TicketPriority = (typeof TICKET_PRIORITIES)[number];
export type TicketCategory = (typeof TICKET_CATEGORIES)[number];
export type TicketType = (typeof TICKET_TYPES)[number];

export const CLOSED_STATUSES: TicketStatus[] = ["Resolved", "Closed"];

export function statusPillClass(status: string) {
    if (status === "Cancelled") return "ticket-meta-pill--status-cancelled";
    if ((CLOSED_STATUSES as string[]).includes(status)) return "ticket-meta-pill--status-closed";
    return "ticket-meta-pill--status-open";
}

export function priorityPillClass(priority: string) {
    switch (priority) {
        case "Critical":
        case "High":
            return "ticket-meta-pill--priority-high";
        case "Low":
            return "ticket-meta-pill--priority-low";
        default:
            return "ticket-meta-pill--priority-medium";
    }
}

export const TICKET_ATTACHMENT_TYPES: Record<string, string> = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/gif": "gif",
    "application/pdf": "pdf",
    "application/msword": "doc",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
    "application/vnd.ms-excel": "xls",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
    "application/zip": "zip",
    "application/x-zip-compressed": "zip",
};

export const TICKET_ATTACHMENT_MAX_BYTES = 10 * 1024 * 1024;

const TICKET_ATTACHMENT_EXTENSIONS: Record<string, string> = {
    jpg: "jpg",
    jpeg: "jpg",
    png: "png",
    webp: "webp",
    gif: "gif",
    pdf: "pdf",
    doc: "doc",
    docx: "docx",
    xls: "xls",
    xlsx: "xlsx",
    zip: "zip",
};

// Browsers don't always report a reliable MIME type for the file input -
// some send "" or "application/octet-stream" for Word/Excel/zip files,
// especially for files from network drives or on misconfigured Windows
// installs. Fall back to the file's extension so a legitimate attachment
// isn't rejected just because the browser guessed the type wrong.
export function resolveTicketAttachmentExtension(file: { type: string; name: string }): string | null {
    if (TICKET_ATTACHMENT_TYPES[file.type]) {
        return TICKET_ATTACHMENT_TYPES[file.type];
    }
    const match = /\.([a-z0-9]+)$/i.exec(file.name);
    const ext = match ? match[1].toLowerCase() : null;
    return ext && TICKET_ATTACHMENT_EXTENSIONS[ext] ? TICKET_ATTACHMENT_EXTENSIONS[ext] : null;
}
