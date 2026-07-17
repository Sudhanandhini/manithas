import { prisma } from "./prisma";
import { slugify } from "@/src/utils";

export type CategoryCount = { title: string; slug: string; count: number };

export async function getCategoryCounts(): Promise<CategoryCount[]> {
    const posts = await prisma.blogPost.findMany({
        where: { published: true },
        select: { categories: true },
    });

    const counts = new Map<string, CategoryCount>();
    for (const post of posts) {
        const cats = (post.categories ?? "").split(",").map((c) => c.trim()).filter(Boolean);
        for (const cat of cats) {
            const slug = slugify(cat);
            const existing = counts.get(slug);
            if (existing) {
                existing.count += 1;
            } else {
                counts.set(slug, { title: cat, slug, count: 1 });
            }
        }
    }

    return Array.from(counts.values()).sort((a, b) => b.count - a.count);
}
