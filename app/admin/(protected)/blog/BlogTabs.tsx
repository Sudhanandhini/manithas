"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogTabs() {
    const pathname = usePathname();
    const isNew = pathname === "/admin/blog/new";
    const isCategories = pathname === "/admin/blog/categories";
    const isAllPosts = !isNew && !isCategories;

    return (
        <div className="admin-tabs">
            <Link href="/admin/blog" className={`admin-tab${isAllPosts ? " is-active" : ""}`}>
                All Posts
            </Link>
            <Link href="/admin/blog/new" className={`admin-tab${isNew ? " is-active" : ""}`}>
                + Add Blog Post
            </Link>
            <Link href="/admin/blog/categories" className={`admin-tab${isCategories ? " is-active" : ""}`}>
                Categories
            </Link>
        </div>
    );
}
