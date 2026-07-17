import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";

const FALLBACK_SITE_URL = "http://localhost:3008";

export function siteUrl(): string {
    return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? FALLBACK_SITE_URL;
}

export async function getSiteSettings() {
    const settings = await prisma.siteSettings.findUnique({ where: { id: 1 } });
    return (
        settings ?? {
            id: 1,
            siteName: "Exomac",
            titleTemplate: "%s | Exomac",
            defaultDescription: null,
            defaultOgImage: null,
            robotsTxt: "User-agent: *\nAllow: /\n",
            googleSiteVerification: null,
            bingSiteVerification: null,
            updatedAt: new Date(),
        }
    );
}

function renderTitle(pageTitle: string, template: string): string {
    return template.includes("%s") ? template.replace("%s", pageTitle) : pageTitle;
}

function absoluteUrl(path: string): string {
    return `${siteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

function resolveImage(image?: string | null): string | undefined {
    if (!image) return undefined;
    return image.startsWith("http") ? image : absoluteUrl(image);
}

/**
 * Builds Next.js Metadata for a page whose SEO fields are managed in the admin panel
 * (SeoPage rows keyed by site-relative slug, e.g. "/", "/about").
 */
export async function buildMetadata(slug: string): Promise<Metadata> {
    const [page, settings] = await Promise.all([
        prisma.seoPage.findUnique({ where: { slug } }),
        getSiteSettings(),
    ]);

    const title = page?.title ?? settings.siteName;
    const description = page?.description ?? settings.defaultDescription ?? undefined;
    const ogImage = resolveImage(page?.ogImage ?? settings.defaultOgImage);

    return {
        title: renderTitle(title, settings.titleTemplate),
        description,
        keywords: page?.keywords ?? undefined,
        alternates: {
            canonical: page?.canonicalUrl ?? absoluteUrl(slug),
        },
        robots: {
            index: !(page?.noindex ?? false),
            follow: !(page?.nofollow ?? false),
        },
        openGraph: {
            title: page?.ogTitle ?? title,
            description: page?.ogDescription ?? description,
            url: absoluteUrl(slug),
            siteName: settings.siteName,
            images: ogImage ? [{ url: ogImage }] : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: page?.ogTitle ?? title,
            description: page?.ogDescription ?? description,
            images: ogImage ? [ogImage] : undefined,
        },
    };
}

/**
 * Builds Metadata for content that isn't admin-managed row-by-row (blog posts, portfolio
 * items, category/tag listings) - falls back to the item's own title/description/image plus
 * site-wide defaults from SiteSettings.
 */
export async function buildDynamicMetadata(options: {
    path: string;
    title?: string | null;
    description?: string | null;
    image?: string | null;
}): Promise<Metadata> {
    const settings = await getSiteSettings();
    const title = options.title ?? settings.siteName;
    const description = options.description ?? settings.defaultDescription ?? undefined;
    const ogImage = resolveImage(options.image ?? settings.defaultOgImage);

    return {
        title: renderTitle(title, settings.titleTemplate),
        description,
        alternates: {
            canonical: absoluteUrl(options.path),
        },
        openGraph: {
            title,
            description,
            url: absoluteUrl(options.path),
            siteName: settings.siteName,
            images: ogImage ? [{ url: ogImage }] : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ogImage ? [ogImage] : undefined,
        },
    };
}
