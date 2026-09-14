export const ENQUIRY_STATUSES = ["New", "Contacted", "Closed"] as const;

export type EnquiryStatus = (typeof ENQUIRY_STATUSES)[number];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
    return EMAIL_RE.test(email.trim());
}

// Friendly names for each lead form's `source` value, shown in the admin
// Enquiries table so it's clear which page/form sent a given enquiry.
export const ENQUIRY_SOURCE_LABELS: Record<string, string> = {
    chatbot: "Chatbot",
    "contact-form": "Contact Page",
    "get-a-quote": "Get A Quote",
    newsletter: "Home Page",
    "home-two-form": "Home (Contact Section)",
    "service-page-form": "Service Page",
    "talk-to-us": "Talk To Us (CTA Button)",
};

export function enquirySourceLabel(source: string): string {
    return ENQUIRY_SOURCE_LABELS[source] ?? source;
}
