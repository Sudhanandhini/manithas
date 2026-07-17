import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { siteUrl } from "@/lib/seo";
import WorkData from "@/src/data/work/workDetails.json";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const base = siteUrl();
    const [pages, blogPosts] = await Promise.all([
        prisma.seoPage.findMany({
            where: { noindex: false },
            select: { slug: true, updatedAt: true },
        }),
        prisma.blogPost.findMany({
            where: { published: true, noindex: false },
            select: { slug: true, updatedAt: true },
        }),
    ]);

    const pageEntries: MetadataRoute.Sitemap = pages.map((page) => ({
        url: page.slug === "/" ? `${base}/` : `${base}${page.slug}`,
        lastModified: page.updatedAt,
    }));

    const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${base}/blog-details/${post.slug}`,
        lastModified: post.updatedAt,
    }));

    const workEntries: MetadataRoute.Sitemap = WorkData.map((work) => ({
        url: `${base}/work-details/${work.id}`,
    }));

    return [...pageEntries, ...blogEntries, ...workEntries];
}
