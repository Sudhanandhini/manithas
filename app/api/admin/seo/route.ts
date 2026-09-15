import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const pages = await prisma.seoPage.findMany({ orderBy: { slug: "asc" } });
    return NextResponse.json({ pages });
}

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const slug = typeof body.slug === "string" ? body.slug.trim() : "";
    const label = typeof body.label === "string" ? body.label.trim() : "";
    const type = typeof body.type === "string" && body.type.trim() ? body.type.trim() : "Page";

    if (!slug.startsWith("/")) {
        return NextResponse.json({ error: "slug must start with /" }, { status: 400 });
    }
    if (!label) {
        return NextResponse.json({ error: "label is required" }, { status: 400 });
    }

    const page = await prisma.seoPage.create({
        data: {
            slug,
            label,
            type,
            title: body.title ?? null,
            description: body.description ?? null,
            keywords: body.keywords ?? null,
            ogTitle: body.ogTitle ?? null,
            ogDescription: body.ogDescription ?? null,
            ogImage: body.ogImage ?? null,
            canonicalUrl: body.canonicalUrl ?? null,
            noindex: Boolean(body.noindex),
            nofollow: Boolean(body.nofollow),
        },
    });

    return NextResponse.json({ page }, { status: 201 });
}

export async function PATCH(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const ids = Array.isArray(body.ids) ? body.ids.filter((id: unknown) => typeof id === "string") : [];
    if (ids.length === 0) {
        return NextResponse.json({ error: "ids is required" }, { status: 400 });
    }
    if (typeof body.noindex !== "boolean" && typeof body.nofollow !== "boolean") {
        return NextResponse.json({ error: "noindex or nofollow must be provided" }, { status: 400 });
    }

    const data: Record<string, boolean> = {};
    if (typeof body.noindex === "boolean") data.noindex = body.noindex;
    if (typeof body.nofollow === "boolean") data.nofollow = body.nofollow;

    const result = await prisma.seoPage.updateMany({
        where: { id: { in: ids } },
        data,
    });

    return NextResponse.json({ count: result.count });
}
