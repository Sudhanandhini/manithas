import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { prisma } from "@/lib/prisma";
import { PAGE_REGISTRY } from "@/src/pages-registry";

// Handles pages whose route is database-driven (SeoPage.key bound to a component
// in src/pages-registry.tsx) instead of a literal app/**/page.tsx folder. Literal
// folder routes always take priority over this catch-all, so the other static
// pages on the site are unaffected.
function slugFromParams(params: { slug: string[] }): string {
    return "/" + params.slug.join("/");
}

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
    const slug = slugFromParams(params);
    const page = await prisma.seoPage.findUnique({ where: { slug } });
    if (!page || !page.key || !(page.key in PAGE_REGISTRY)) {
        return {};
    }
    return buildMetadata(slug);
}

export default async function DynamicPage({ params }: { params: { slug: string[] } }) {
    const slug = slugFromParams(params);
    const page = await prisma.seoPage.findUnique({ where: { slug } });
    if (!page || !page.key || !(page.key in PAGE_REGISTRY)) {
        notFound();
    }

    const Component = PAGE_REGISTRY[page.key];
    return <Component />;
}
