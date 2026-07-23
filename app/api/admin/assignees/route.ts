import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const assignees = await prisma.ticketAssignee.findMany({ orderBy: { name: "asc" } });
    return NextResponse.json({ assignees });
}

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    if (!name) {
        return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const existing = await prisma.ticketAssignee.findUnique({ where: { name } });
    if (existing) {
        return NextResponse.json({ error: "That person is already in the list" }, { status: 400 });
    }

    const assignee = await prisma.ticketAssignee.create({ data: { name } });
    return NextResponse.json({ assignee }, { status: 201 });
}
