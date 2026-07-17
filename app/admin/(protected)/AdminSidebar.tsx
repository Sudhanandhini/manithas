"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";

const linkClass = (active: boolean, extra = "") =>
    `admin-sidebar-link${active ? " is-active" : ""}${extra ? ` ${extra}` : ""}`;

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="admin-sidebar">
            <div className="admin-sidebar-brand">
                <span className="admin-sidebar-dot" />
                <div>
                    <p className="admin-sidebar-eyebrow">Admin</p>
                    <p className="admin-sidebar-name">Manithas Admin</p>
                </div>
            </div>

            <nav>
                <p className="admin-sidebar-section">Blog</p>
                <Link href="/admin/blog" className={linkClass(pathname?.startsWith("/admin/blog") ?? false)}>
                    Blog Posts
                </Link>

                <p className="admin-sidebar-section">SEO</p>
                <Link href="/admin/seo" className={linkClass(pathname?.startsWith("/admin/seo") ?? false)}>
                    Pages
                </Link>
                <Link href="/admin/settings" className={linkClass(pathname === "/admin/settings")}>
                    Site Settings
                </Link>
            </nav>

            <div className="admin-sidebar-footer">
                <LogoutButton />
            </div>
        </aside>
    );
}
