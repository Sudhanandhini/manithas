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

    const solutions = await prisma.solution.findMany({ orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }] });
    return NextResponse.json({ solutions });
}

async function uniqueSlug(base: string): Promise<string> {
    let slug = base;
    let suffix = 2;
    while (await prisma.solution.findUnique({ where: { slug } })) {
        slug = `${base}-${suffix}`;
        suffix += 1;
    }
    return slug;
}

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const title = typeof body.title === "string" ? body.title.trim() : "";
    const content = typeof body.content === "string" ? body.content.trim() : "";

    if (!title) {
        return NextResponse.json({ error: "title is required" }, { status: 400 });
    }
    if (!content) {
        return NextResponse.json({ error: "content is required" }, { status: 400 });
    }

    const requestedSlug = typeof body.slug === "string" && body.slug.trim() ? slugify(body.slug) : slugify(title);
    if (!requestedSlug) {
        return NextResponse.json({ error: "Could not derive a slug from the title" }, { status: 400 });
    }
    const slug = await uniqueSlug(requestedSlug);

    const solution = await prisma.solution.create({
        data: {
            slug,
            title,
            content,
            excerpt: body.excerpt || null,
            image: body.image || null,
            largeImage: body.largeImage || null,
            metaTitle: body.metaTitle || null,
            metaDescription: body.metaDescription || null,
            noindex: Boolean(body.noindex),
            published: body.published === undefined ? true : Boolean(body.published),
        },
    });

    return NextResponse.json({ solution }, { status: 201 });
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

    const result = await prisma.solution.updateMany({
        where: { id: { in: ids } },
        data,
    });

    return NextResponse.json({ count: result.count });
}
