import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import bcrypt from "bcryptjs";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { CustomerType } from "@prisma/client";
import { isValidEmail } from "@/lib/enquiries";

const CUSTOMER_TYPES = new Set(Object.values(CustomerType));

function sanitizeCustomerType(value: unknown): CustomerType | null {
    return typeof value === "string" && CUSTOMER_TYPES.has(value as CustomerType) ? (value as CustomerType) : null;
}

function sanitizeStringArray(value: unknown): string[] {
    if (!Array.isArray(value)) return [];
    return value
        .filter((v): v is string => typeof v === "string")
        .map((v) => v.trim())
        .filter(Boolean);
}

function sanitizeDate(value: unknown): Date | null {
    if (typeof value !== "string" || !value) return null;
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
}

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const customers = await prisma.customer.findMany({
        where: { teamOwnerId: null },
        orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ customers });
}

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const username = typeof body.username === "string" ? body.username.trim() : "";
    const password = typeof body.password === "string" ? body.password : "";
    const name = typeof body.name === "string" ? body.name.trim() : "";

    if (!username) {
        return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }
    if (!password || password.length < 6) {
        return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 });
    }
    if (!name) {
        return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    if (typeof body.email === "string" && body.email.trim() && !isValidEmail(body.email)) {
        return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    }

    const existing = await prisma.customer.findUnique({ where: { username } });
    if (existing) {
        return NextResponse.json({ error: "That username is already in use." }, { status: 400 });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const extraEmails = sanitizeStringArray(body.extraEmails);
    const extraPhones = sanitizeStringArray(body.extraPhones);

    const customer = await prisma.customer.create({
        data: {
            username,
            passwordHash,
            name,
            customerType: sanitizeCustomerType(body.customerType),
            amcDateFrom: sanitizeDate(body.amcDateFrom),
            amcDateTo: sanitizeDate(body.amcDateTo),
            websiteExpiryDate: sanitizeDate(body.websiteExpiryDate),
            email: body.email || null,
            mobile: body.mobile || null,
            extraEmails: extraEmails.length ? extraEmails : undefined,
            extraPhones: extraPhones.length ? extraPhones : undefined,
            website: body.website || null,
            driveLink: body.driveLink || null,
            address: body.address || null,
            companyName: body.companyName || null,
        },
    });

    return NextResponse.json({ customer }, { status: 201 });
}
