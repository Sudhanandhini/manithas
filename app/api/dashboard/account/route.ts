import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import bcrypt from "bcryptjs";
import { customerAuthOptions } from "@/lib/customerAuth";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: Request) {
    const session = await getServerSession(customerAuthOptions);
    if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const customerId = (session.user as { id: string }).id;

    const body = await req.json();
    const username = typeof body.username === "string" ? body.username.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const currentPassword = typeof body.currentPassword === "string" ? body.currentPassword : "";
    const newPassword = typeof body.newPassword === "string" ? body.newPassword : "";

    if (!username) {
        return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    const customer = await prisma.customer.findUnique({ where: { id: customerId } });
    if (!customer) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const existing = await prisma.customer.findUnique({ where: { username } });
    if (existing && existing.id !== customerId) {
        return NextResponse.json({ error: "That username is already in use." }, { status: 400 });
    }

    const data: { username: string; email: string | null; passwordHash?: string } = {
        username,
        email: email || null,
    };

    if (newPassword) {
        if (!currentPassword) {
            return NextResponse.json({ error: "Enter your current password to set a new one." }, { status: 400 });
        }
        const isValid = await bcrypt.compare(currentPassword, customer.passwordHash);
        if (!isValid) {
            return NextResponse.json({ error: "Current password is incorrect." }, { status: 400 });
        }
        if (newPassword.length < 6) {
            return NextResponse.json({ error: "New password must be at least 6 characters." }, { status: 400 });
        }
        data.passwordHash = await bcrypt.hash(newPassword, 10);
    }

    const updated = await prisma.customer.update({ where: { id: customerId }, data });
    return NextResponse.json({
        customer: { id: updated.id, username: updated.username, name: updated.name, email: updated.email },
    });
}
