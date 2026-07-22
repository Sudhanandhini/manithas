import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/src/utils";

const EDITABLE_FIELDS = [
    "title",
    "excerpt",
    "content",
    "image",
    "largeImage",
    "client",
    "categories",
    "awards",
    "ctaText",
    "ctaLink",
    "subContentTitle",
    "subContentText",
    "galleryImageOne",
    "galleryImageTwo",
    "galleryImageThree",
    "metaTitle",
    "metaDescription",
] as const;

export async function GET(_req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const solution = await prisma.solution.findUnique({ where: { id: params.id } });
    if (!solution) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ solution });
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
    if ("title" in body && !body.title) {
        return NextResponse.json({ error: "title is required" }, { status: 400 });
    }
    if ("content" in body && !body.content) {
        return NextResponse.json({ error: "content is required" }, { status: 400 });
    }
    if ("published" in body) {
        data.published = Boolean(body.published);
    }
    if ("noindex" in body) {
        data.noindex = Boolean(body.noindex);
    }
    if ("publishedAt" in body) {
        const parsed = new Date(body.publishedAt);
        if (Number.isNaN(parsed.getTime())) {
            return NextResponse.json({ error: "Invalid publish date" }, { status: 400 });
        }
        data.publishedAt = parsed;
    }
    if (typeof body.slug === "string" && body.slug.trim()) {
        const requested = slugify(body.slug);
        const existing = await prisma.solution.findUnique({ where: { slug: requested } });
        if (existing && existing.id !== params.id) {
            return NextResponse.json({ error: "That slug is already in use." }, { status: 400 });
        }
        data.slug = requested;
    }

    try {
        const solution = await prisma.solution.update({ where: { id: params.id }, data });
        return NextResponse.json({ solution });
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
        await prisma.solution.delete({ where: { id: params.id } });
        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
}
