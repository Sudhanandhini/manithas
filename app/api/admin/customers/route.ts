import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import bcrypt from "bcryptjs";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const customers = await prisma.customer.findMany({ orderBy: { createdAt: "desc" } });
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

    const existing = await prisma.customer.findUnique({ where: { username } });
    if (existing) {
        return NextResponse.json({ error: "That username is already in use." }, { status: 400 });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const customer = await prisma.customer.create({
        data: {
            username,
            passwordHash,
            name,
            email: body.email || null,
            mobile: body.mobile || null,
            website: body.website || null,
            domain: body.domain || null,
            address: body.address || null,
            companyName: body.companyName || null,
        },
    });

    return NextResponse.json({ customer }, { status: 201 });
}
