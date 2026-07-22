import nodemailer from "nodemailer";

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransporter() {
    if (transporter) return transporter;
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
        return null;
    }
    transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });
    return transporter;
}

// Best-effort send: a missing/broken SMTP setup must never break ticket
// creation or replies, so failures are logged, not thrown.
export async function sendMail({ to, subject, html }: { to?: string | null; subject: string; html: string }) {
    if (!to) return;
    const client = getTransporter();
    if (!client) {
        console.warn("[mail] SMTP not configured - skipping email:", subject);
        return;
    }
    try {
        await client.sendMail({
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to,
            subject,
            html,
        });
    } catch (error) {
        console.error("[mail] Failed to send email:", error);
    }
}

function wrapEmail(title: string, body: string, ctaLabel: string, ctaUrl: string) {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3008";
    return `
        <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #333;">
            <h2 style="color: #030f27;">${title}</h2>
            <div style="font-size: 15px; line-height: 1.6;">${body}</div>
            <p style="margin-top: 24px;">
                <a href="${siteUrl}${ctaUrl}" style="background:#1292ee;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;display:inline-block;">${ctaLabel}</a>
            </p>
        </div>
    `;
}

export function ticketCreatedCustomerEmail(subject: string, ticketId: string) {
    return wrapEmail(
        "Your support ticket has been received",
        `<p>We've received your ticket: <strong>${subject}</strong>.</p><p>Our team will review it and get back to you shortly.</p>`,
        "View Ticket",
        `/dashboard/${ticketId}`
    );
}

export function ticketCreatedAdminEmail(subject: string, customerName: string, ticketId: string) {
    return wrapEmail(
        "New support ticket raised",
        `<p><strong>${customerName}</strong> raised a new ticket: <strong>${subject}</strong>.</p>`,
        "View Ticket",
        `/admin/tickets/${ticketId}`
    );
}

export function ticketReplyCustomerEmail(subject: string, ticketId: string) {
    return wrapEmail(
        "New reply on your support ticket",
        `<p>Our support team replied to your ticket: <strong>${subject}</strong>.</p>`,
        "View Reply",
        `/dashboard/${ticketId}`
    );
}

export function ticketReplyAdminEmail(subject: string, customerName: string, ticketId: string) {
    return wrapEmail(
        "New customer reply on a ticket",
        `<p><strong>${customerName}</strong> replied to ticket: <strong>${subject}</strong>.</p>`,
        "View Ticket",
        `/admin/tickets/${ticketId}`
    );
}

export function ticketStatusChangedEmail(subject: string, status: string, ticketId: string) {
    return wrapEmail(
        `Your ticket status is now "${status}"`,
        `<p>Your ticket <strong>${subject}</strong> has been marked as <strong>${status}</strong>.</p><p>If this doesn't resolve your issue, you can reopen the ticket at any time.</p>`,
        "View Ticket",
        `/dashboard/${ticketId}`
    );
}

export function ticketReopenedAdminEmail(subject: string, customerName: string, ticketId: string) {
    return wrapEmail(
        "Ticket reopened",
        `<p><strong>${customerName}</strong> reopened ticket: <strong>${subject}</strong>.</p>`,
        "View Ticket",
        `/admin/tickets/${ticketId}`
    );
}
