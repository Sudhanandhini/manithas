import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const EDITABLE_FIELDS = [
    "type",
    "title",
    "description",
    "keywords",
    "ogTitle",
    "ogDescription",
    "ogImage",
    "canonicalUrl",
    "noindex",
    "nofollow",
    "jsonLd",
] as const;

export async function GET(_req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const page = await prisma.seoPage.findUnique({ where: { id: params.id } });
    if (!page) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ page });
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
            if (field === "noindex" || field === "nofollow") {
                data[field] = Boolean(body[field]);
            } else if (field === "type") {
                data[field] = body[field] || "Page";
            } else {
                data[field] = body[field] || null;
            }
        }
    }

    if ("slug" in body) {
        const slug = typeof body.slug === "string" ? body.slug.trim() : "";
        if (!slug.startsWith("/")) {
            return NextResponse.json({ error: "slug must start with /" }, { status: 400 });
        }
        data.slug = slug;
    }

    if ("label" in body) {
        const label = typeof body.label === "string" ? body.label.trim() : "";
        if (!label) {
            return NextResponse.json({ error: "label is required" }, { status: 400 });
        }
        data.label = label;
    }

    if (typeof data.jsonLd === "string") {
        try {
            JSON.parse(data.jsonLd);
        } catch {
            return NextResponse.json({ error: "Schema (JSON-LD) must be valid JSON." }, { status: 400 });
        }
    }

    try {
        const page = await prisma.seoPage.update({ where: { id: params.id }, data });
        return NextResponse.json({ page });
    } catch (err: unknown) {
        if (typeof err === "object" && err !== null && "code" in err && (err as { code?: string }).code === "P2002") {
            return NextResponse.json({ error: "That slug is already in use." }, { status: 409 });
        }
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        await prisma.seoPage.delete({ where: { id: params.id } });
        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
}
