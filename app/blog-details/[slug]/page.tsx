import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildDynamicMetadata } from "@/lib/seo";
import { prisma } from "@/lib/prisma";
import { getCategoryCounts } from "@/lib/blog";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import BlogDetailsContainer from "@/src/container/BlogGrid/BlogDetailsContainer";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = await prisma.blogPost.findUnique({ where: { slug: params.slug } });

    return buildDynamicMetadata({
        path: `/blog-details/${params.slug}`,
        title: post?.metaTitle ?? post?.title,
        description: post?.metaDescription ?? post?.excerpt,
        image: post?.largeImage ?? post?.image,
        noindex: post?.noindex,
    });
}

export default async function BlogDetails({ params }: { params: { slug: string } }) {
    const post = await prisma.blogPost.findUnique({ where: { slug: params.slug } });
    if (!post || !post.published) {
        notFound();
    }

    const [popularPosts, relatedPosts, categories] = await Promise.all([
        prisma.blogPost.findMany({
            where: { published: true },
            orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
            take: 4,
        }),
        prisma.blogPost.findMany({
            where: { published: true, slug: { not: post.slug } },
            orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
            take: 2,
        }),
        getCategoryCounts(),
    ]);

    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-four.jpg"
                title={post.title}
                content="Home"
                contentTwo="Blog"
            />
            <BlogDetailsContainer data={post} popularPosts={popularPosts} relatedPosts={relatedPosts} categories={categories} />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
