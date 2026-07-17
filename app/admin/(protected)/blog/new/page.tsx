import { prisma } from "@/lib/prisma";
import BlogTabs from "../BlogTabs";
import NewBlogForm from "./NewBlogForm";

export const dynamic = "force-dynamic";

export default async function AdminNewBlogPage() {
    const categories = await prisma.category.findMany({ orderBy: { name: "asc" } });

    return (
        <>
            <BlogTabs />
            <div className="admin-card">
                <h2 style={{ fontSize: 16, marginTop: 0 }}>Add a blog post</h2>
                <NewBlogForm categories={categories} />
            </div>
        </>
    );
}
