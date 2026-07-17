import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import BlogTabs from "../BlogTabs";
import BlogEditForm from "./BlogEditForm";

export const dynamic = "force-dynamic";

export default async function AdminBlogEditPage({ params }: { params: { id: string } }) {
    const post = await prisma.blogPost.findUnique({ where: { id: params.id } });
    if (!post) {
        notFound();
    }

    return (
        <>
            <BlogTabs />
            <div className="admin-card">
                <h2 style={{ marginTop: 0 }}>
                    {post.title} <code style={{ fontWeight: 400 }}>/blog-details/{post.slug}</code>
                </h2>
                <BlogEditForm post={post} />
            </div>
        </>
    );
}
