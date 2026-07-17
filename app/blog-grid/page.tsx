import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { prisma } from "@/lib/prisma";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import PageBlog from "@/src/container/BlogGrid/PageBlog";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/blog-grid");
}

export default async function BlogGrid({ searchParams }: { searchParams: { q?: string } }) {
    const q = searchParams?.q?.trim();
    const posts = await prisma.blogPost.findMany({
        where: {
            published: true,
            ...(q
                ? {
                      OR: [
                          { title: { contains: q } },
                          { excerpt: { contains: q } },
                          { content: { contains: q } },
                      ],
                  }
                : {}),
        },
        orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    });

    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-four.jpg"
                title={q ? `Search results for "${q}"` : "Find all our latest news, insights, and events"}
                content="Home"
                contentTwo="Blog"
            />
            <PageBlog posts={posts} emptyMessage={q ? `No posts found for "${q}".` : undefined} />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
