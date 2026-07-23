import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import bcrypt from "bcryptjs";
import { customerAuthOptions } from "@/lib/customerAuth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    const session = await getServerSession(customerAuthOptions);
    if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const customerId = (session.user as { id: string }).id;
    const accountId = (session.user as { accountId: string }).accountId;

    if (customerId !== accountId) {
        return NextResponse.json({ error: "Only the account owner can add team users." }, { status: 403 });
    }

    const body = await req.json();
    const username = typeof body.username === "string" ? body.username.trim() : "";
    const password = typeof body.password === "string" ? body.password : "";
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";

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

    const teammate = await prisma.customer.create({
        data: {
            username,
            passwordHash,
            name,
            email: email || null,
            teamOwnerId: accountId,
        },
    });

    return NextResponse.json(
        { user: { id: teammate.id, username: teammate.username, name: teammate.name, email: teammate.email } },
        { status: 201 }
    );
}
