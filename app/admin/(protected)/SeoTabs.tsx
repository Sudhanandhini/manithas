"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SeoTabs() {
    const pathname = usePathname();
    const isSettings = pathname === "/admin/settings";
    const isPages = !isSettings;

    return (
        <div className="admin-tabs">
            <Link href="/admin/seo" className={`admin-tab${isPages ? " is-active" : ""}`}>
                Pages
            </Link>
            <Link href="/admin/settings" className={`admin-tab${isSettings ? " is-active" : ""}`}>
                Site Settings
            </Link>
        </div>
    );
}
