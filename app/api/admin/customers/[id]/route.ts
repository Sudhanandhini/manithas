import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import bcrypt from "bcryptjs";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { CustomerType } from "@prisma/client";

const EDITABLE_FIELDS = ["name", "email", "mobile", "website", "driveLink", "address", "companyName"] as const;
const CUSTOMER_TYPES = new Set(Object.values(CustomerType));

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

export async function GET(_req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const customer = await prisma.customer.findUnique({ where: { id: params.id } });
    if (!customer) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ customer });
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const data: Record<string, unknown> = {};
    for (const field of EDITABLE_FIELDS) {
        if (field in body) {
            data[field] = body[field] || null;
        }
    }
    if ("customerType" in body) {
        data.customerType =
            typeof body.customerType === "string" && CUSTOMER_TYPES.has(body.customerType as CustomerType)
                ? body.customerType
                : null;
    }
    if ("amcDateFrom" in body) {
        data.amcDateFrom = sanitizeDate(body.amcDateFrom);
    }
    if ("amcDateTo" in body) {
        const amcDateTo = sanitizeDate(body.amcDateTo);
        data.amcDateTo = amcDateTo;

        const existing = await prisma.customer.findUnique({ where: { id: params.id }, select: { amcDateTo: true } });
        if (existing && existing.amcDateTo?.getTime() !== amcDateTo?.getTime()) {
            data.amcReminderSentAt = null;
            data.amcExpiredNotifiedAt = null;
        }
    }
    if ("extraEmails" in body) {
        const extraEmails = sanitizeStringArray(body.extraEmails);
        data.extraEmails = extraEmails.length ? extraEmails : null;
    }
    if ("extraPhones" in body) {
        const extraPhones = sanitizeStringArray(body.extraPhones);
        data.extraPhones = extraPhones.length ? extraPhones : null;
    }
    if ("name" in body && !body.name) {
        return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    if (typeof body.username === "string" && body.username.trim()) {
        const requested = body.username.trim();
        const existing = await prisma.customer.findUnique({ where: { username: requested } });
        if (existing && existing.id !== params.id) {
            return NextResponse.json({ error: "That username is already in use." }, { status: 400 });
        }
        data.username = requested;
    }
    if (typeof body.password === "string" && body.password) {
        if (body.password.length < 6) {
            return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 });
        }
        data.passwordHash = await bcrypt.hash(body.password, 10);
    }

    try {
        const customer = await prisma.customer.update({ where: { id: params.id }, data });
        return NextResponse.json({ customer });
    } catch {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        await prisma.customer.delete({ where: { id: params.id } });
        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
}
