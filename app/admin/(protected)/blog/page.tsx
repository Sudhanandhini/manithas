import { prisma } from "@/lib/prisma";
import BlogTabs from "./BlogTabs";
import BlogPostsTable from "./BlogPostsTable";

export const dynamic = "force-dynamic";

export default async function AdminBlogListPage() {
    const posts = await prisma.blogPost.findMany({ orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }] });

    return (
        <>
            <BlogTabs />
            <BlogPostsTable posts={posts} />
        </>
    );
}
