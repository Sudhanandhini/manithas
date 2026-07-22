import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import bcrypt from "bcryptjs";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const EDITABLE_FIELDS = ["name", "email", "mobile", "website", "domain", "address", "companyName"] as const;

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
