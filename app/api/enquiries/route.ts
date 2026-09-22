import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isValidEmail, enquirySourceLabel } from "@/lib/enquiries";
import { sendMail, enquiryCreatedAdminEmail } from "@/lib/mail";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";

const ENQUIRY_LIMIT = 5;
const ENQUIRY_WINDOW_MS = 10 * 60 * 1000;

// Public endpoint - the website chatbot posts a captured lead here (no auth,
// visitors aren't logged in). Kept intentionally minimal: name, email, and
// what they're looking for, plus which service they were viewing.
export async function POST(req: Request) {
    const ip = getClientIp(req.headers);
    if (!checkRateLimit(`enquiry:${ip}`, ENQUIRY_LIMIT, ENQUIRY_WINDOW_MS)) {
        return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" && body.phone.trim() ? body.phone.trim() : null;
    const need = typeof body.need === "string" ? body.need.trim() : "";
    const interest = typeof body.interest === "string" && body.interest.trim() ? body.interest.trim() : null;
    const source = typeof body.source === "string" && body.source.trim() ? body.source.trim() : "chatbot";

    if (!name) {
        return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    if (!email || !isValidEmail(email)) {
        return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
    }
    if (!need) {
        return NextResponse.json({ error: "Please describe what you're looking for" }, { status: 400 });
    }

    const enquiry = await prisma.enquiry.create({
        data: { name, email, phone, need, interest, source },
    });

    const notifyEmail = process.env.TICKET_NOTIFY_EMAIL || process.env.ADMIN_EMAIL;
    await sendMail({
        to: notifyEmail,
        subject: `New enquiry from ${name}`,
        html: enquiryCreatedAdminEmail(name, email, phone, need, enquirySourceLabel(source)),
    });

    return NextResponse.json({ enquiry: { id: enquiry.id } }, { status: 201 });
}
