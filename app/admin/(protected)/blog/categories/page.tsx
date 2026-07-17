import { prisma } from "@/lib/prisma";
import BlogTabs from "../BlogTabs";
import NewCategoryForm from "./NewCategoryForm";
import CategoryList from "./CategoryList";

export const dynamic = "force-dynamic";

export default async function AdminCategoriesPage() {
    const categories = await prisma.category.findMany({ orderBy: { name: "asc" } });

    return (
        <>
            <BlogTabs />

            <div className="admin-card">
                <h2 style={{ fontSize: 16, marginTop: 0 }}>Blog categories</h2>
                <p style={{ marginTop: -8, color: "#666", fontSize: 14 }}>
                    Categories you create here show up as checkboxes when writing a post.
                </p>
                <CategoryList categories={categories} />
            </div>

            <div className="admin-card">
                <h2 style={{ fontSize: 16, marginTop: 0 }}>Add a category</h2>
                <NewCategoryForm />
            </div>
        </>
    );
}
