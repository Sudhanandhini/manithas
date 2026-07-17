import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildDynamicMetadata } from "@/lib/seo";
import { prisma } from "@/lib/prisma";
import { getCategoryCounts } from "@/lib/blog";
import { slugify } from "@/src/utils";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import BlogCategoryContainer from "@/src/container/BlogGrid/BlogCategoryContainer";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

async function getCategoryPosts(slug: string) {
    const posts = await prisma.blogPost.findMany({
        where: { published: true },
        orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    });
    return posts.filter((post) =>
        (post.categories ?? "")
            .split(",")
            .map((c) => slugify(c.trim()))
            .includes(slug),
    );
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const categories = await getCategoryCounts();
    const category = categories.find((c) => c.slug === params.slug);

    return buildDynamicMetadata({
        path: `/category/${params.slug}`,
        title: category ? `Category: ${category.title}` : undefined,
    });
}

export default async function BlogCategories({ params }: { params: { slug: string } }) {
    const categories = await getCategoryCounts();
    const category = categories.find((c) => c.slug === params.slug);
    if (!category) {
        notFound();
    }

    const [posts, popularPosts] = await Promise.all([
        getCategoryPosts(params.slug),
        prisma.blogPost.findMany({
            where: { published: true },
            orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
            take: 4,
        }),
    ]);

    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-four.jpg"
                title={`Category: ${category.title}`}
                content="Home"
                contentTwo="Blog"
            />
            <BlogCategoryContainer data={posts} categories={categories} popularPosts={popularPosts} />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
