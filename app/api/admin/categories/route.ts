import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/src/utils";

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const categories = await prisma.category.findMany({ orderBy: { name: "asc" } });
    return NextResponse.json({ categories });
}

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    if (!name) {
        return NextResponse.json({ error: "name is required" }, { status: 400 });
    }

    const slug = slugify(name);
    if (!slug) {
        return NextResponse.json({ error: "Could not derive a slug from that name" }, { status: 400 });
    }

    const existing = await prisma.category.findFirst({ where: { OR: [{ name }, { slug }] } });
    if (existing) {
        return NextResponse.json({ error: "That category already exists" }, { status: 400 });
    }

    const category = await prisma.category.create({ data: { name, slug } });
    return NextResponse.json({ category }, { status: 201 });
}
