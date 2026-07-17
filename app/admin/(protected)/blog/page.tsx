import Link from "next/link";
import { prisma } from "@/lib/prisma";
import BlogTabs from "./BlogTabs";

export const dynamic = "force-dynamic";

export default async function AdminBlogListPage() {
    const posts = await prisma.blogPost.findMany({ orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }] });

    return (
        <>
            <BlogTabs />

            <div className="admin-card">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Slug</th>
                            <th>Status</th>
                            <th>Published</th>
                            <th>Indexing</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td>
                                    {post.image ? (
                                        <img className="admin-table-thumb" src={post.image} alt={post.title} />
                                    ) : (
                                        <span className="admin-table-thumb-empty">No image</span>
                                    )}
                                </td>
                                <td>{post.title}</td>
                                <td>
                                    <code>/blog-details/{post.slug}</code>
                                </td>
                                <td>{post.published ? "Published" : "Draft"}</td>
                                <td>{post.publishedAt.toISOString().slice(0, 10)}</td>
                                <td>{post.noindex ? "noindex" : "indexed"}</td>
                                <td>
                                    <Link href={`/admin/blog/${post.id}`} className="admin-btn-sm">
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        {posts.length === 0 && (
                            <tr>
                                <td colSpan={7}>No blog posts yet.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
