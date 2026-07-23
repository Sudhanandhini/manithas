import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import bcrypt from "bcryptjs";
import { customerAuthOptions } from "@/lib/customerAuth";
import { prisma } from "@/lib/prisma";

async function requireOwnedTeammate(req: Request, params: { id: string }) {
    const session = await getServerSession(customerAuthOptions);
    if (!session?.user) {
        return { error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) } as const;
    }
    const customerId = (session.user as { id: string }).id;
    const accountId = (session.user as { accountId: string }).accountId;

    if (customerId !== accountId) {
        return { error: NextResponse.json({ error: "Only the account owner can manage team users." }, { status: 403 }) } as const;
    }

    const teammate = await prisma.customer.findUnique({ where: { id: params.id } });
    if (!teammate || teammate.teamOwnerId !== accountId) {
        return { error: NextResponse.json({ error: "Not found" }, { status: 404 }) } as const;
    }

    return { accountId, teammate } as const;
}

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const result = await requireOwnedTeammate(req, params);
    if ("error" in result) return result.error;

    const { teammate } = result;
    return NextResponse.json({
        user: { id: teammate.id, username: teammate.username, name: teammate.name, email: teammate.email, disabled: teammate.disabled },
    });
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const result = await requireOwnedTeammate(req, params);
    if ("error" in result) return result.error;

    const body = await req.json();
    const data: Record<string, unknown> = {};

    if (typeof body.username === "string" && body.username.trim()) {
        const requested = body.username.trim();
        const existing = await prisma.customer.findUnique({ where: { username: requested } });
        if (existing && existing.id !== params.id) {
            return NextResponse.json({ error: "That username is already in use." }, { status: 400 });
        }
        data.username = requested;
    }
    if (typeof body.name === "string") {
        if (!body.name.trim()) {
            return NextResponse.json({ error: "Name is required" }, { status: 400 });
        }
        data.name = body.name.trim();
    }
    if (typeof body.email === "string") {
        data.email = body.email.trim() || null;
    }
    if (typeof body.password === "string" && body.password) {
        if (body.password.length < 6) {
            return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 });
        }
        data.passwordHash = await bcrypt.hash(body.password, 10);
    }
    if (typeof body.disabled === "boolean") {
        data.disabled = body.disabled;
    }

    const updated = await prisma.customer.update({ where: { id: params.id }, data });
    return NextResponse.json({
        user: { id: updated.id, username: updated.username, name: updated.name, email: updated.email, disabled: updated.disabled },
    });
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const result = await requireOwnedTeammate(req, params);
    if ("error" in result) return result.error;

    await prisma.customer.delete({ where: { id: params.id } });
    return NextResponse.json({ ok: true });
}
