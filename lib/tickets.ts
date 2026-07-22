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

export const CLOSED_STATUSES: TicketStatus[] = ["Resolved", "Closed"];

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
