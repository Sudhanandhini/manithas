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
