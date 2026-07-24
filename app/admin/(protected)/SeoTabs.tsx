"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SeoTabs() {
    const pathname = usePathname();
    const isSettings = pathname === "/admin/settings";
    const isAddPage = pathname === "/admin/seo/new";
    const isAllPages = !isSettings && !isAddPage;

    return (
        <div className="admin-tabs">
            <Link href="/admin/seo" className={`admin-tab${isAllPages ? " is-active" : ""}`}>
                All Pages
            </Link>
            <Link href="/admin/seo/new" className={`admin-tab${isAddPage ? " is-active" : ""}`}>
                Add Page
            </Link>
            <Link href="/admin/settings" className={`admin-tab${isSettings ? " is-active" : ""}`}>
                Site Settings
            </Link>
        </div>
    );
}
