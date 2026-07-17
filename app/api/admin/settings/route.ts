import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getSiteSettings } from "@/lib/seo";

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const settings = await getSiteSettings();
    return NextResponse.json({ settings });
}

export async function PUT(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const siteName = typeof body.siteName === "string" ? body.siteName.trim() : "";
    const titleTemplate = typeof body.titleTemplate === "string" ? body.titleTemplate.trim() : "";
    const robotsTxt = typeof body.robotsTxt === "string" ? body.robotsTxt : "";

    if (!siteName || !titleTemplate || !robotsTxt) {
        return NextResponse.json(
            { error: "siteName, titleTemplate and robotsTxt are required" },
            { status: 400 },
        );
    }

    const settings = await prisma.siteSettings.upsert({
        where: { id: 1 },
        create: {
            id: 1,
            siteName,
            titleTemplate,
            robotsTxt,
            defaultDescription: body.defaultDescription || null,
            defaultOgImage: body.defaultOgImage || null,
            googleSiteVerification: body.googleSiteVerification || null,
            bingSiteVerification: body.bingSiteVerification || null,
        },
        update: {
            siteName,
            titleTemplate,
            robotsTxt,
            defaultDescription: body.defaultDescription || null,
            defaultOgImage: body.defaultOgImage || null,
            googleSiteVerification: body.googleSiteVerification || null,
            bingSiteVerification: body.bingSiteVerification || null,
        },
    });

    return NextResponse.json({ settings });
}
