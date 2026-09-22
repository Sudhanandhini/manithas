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
        "Technical team reply on a ticket",
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

export function enquiryCreatedAdminEmail(name: string, email: string, phone: string | null, need: string, sourceLabel: string) {
    const contactLine = phone ? `${email} &middot; ${phone}` : email;
    return wrapEmail(
        "New enquiry from the website",
        `<p><strong>${name}</strong> (${contactLine}) asked to be contacted via <strong>${sourceLabel}</strong>:</p><p>${need}</p>`,
        "View Enquiry",
        `/admin/enquiries`
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

export function amcExpiryReminderEmail(customerName: string, amcDateTo: Date, daysLeft: number) {
    const formattedDate = amcDateTo.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
    return wrapEmail(
        "Your AMC is expiring soon",
        `<p>Hi ${customerName},</p><p>Your Annual Maintenance Contract (AMC) is set to expire on <strong>${formattedDate}</strong> (${daysLeft} day${daysLeft === 1 ? "" : "s"} from today).</p><p>Please get in touch with us to renew your AMC and avoid any interruption in support.</p>`,
        "Contact Support",
        `/dashboard`
    );
}

export function amcExpiredEmail(customerName: string, amcDateTo: Date) {
    const formattedDate = amcDateTo.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
    return wrapEmail(
        "Your AMC has expired",
        `<p>Hi ${customerName},</p><p>Your Annual Maintenance Contract (AMC) expired on <strong>${formattedDate}</strong>.</p><p>Please get in touch with us to renew your AMC and avoid any interruption in support.</p>`,
        "Contact Support",
        `/dashboard`
    );
}

export function websiteExpiryReminderEmail(customerName: string, websiteExpiryDate: Date, daysLeft: number) {
    const formattedDate = websiteExpiryDate.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
    return wrapEmail(
        "Your website is expiring soon",
        `<p>Hi ${customerName},</p><p>Your website is set to expire on <strong>${formattedDate}</strong> (${daysLeft} day${daysLeft === 1 ? "" : "s"} from today).</p><p>Please get in touch with us to renew it and avoid any downtime.</p>`,
        "Contact Support",
        `/dashboard`
    );
}

export function websiteExpiredEmail(customerName: string, websiteExpiryDate: Date) {
    const formattedDate = websiteExpiryDate.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
    return wrapEmail(
        "Your website has expired",
        `<p>Hi ${customerName},</p><p>Your website expired on <strong>${formattedDate}</strong>.</p><p>Please get in touch with us to renew it and avoid any downtime.</p>`,
        "Contact Support",
        `/dashboard`
    );
}
