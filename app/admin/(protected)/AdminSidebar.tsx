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
                <Link href="/admin/blog" className={linkClass(pathname?.startsWith("/admin/blog") ?? false)}>
                    Blog Posts
                </Link>
                <Link href="/admin/solution" className={linkClass(pathname?.startsWith("/admin/solution") ?? false)}>
                    Solutions
                </Link>
                <Link href="/admin/tickets" className={linkClass(pathname?.startsWith("/admin/tickets") ?? false)}>
                    Tickets
                </Link>
                <Link href="/admin/customers" className={linkClass(pathname?.startsWith("/admin/customers") ?? false)}>
                    Customers
                </Link>
                <Link
                    href="/admin/seo"
                    className={linkClass((pathname?.startsWith("/admin/seo") || pathname === "/admin/settings") ?? false)}
                >
                    SEO
                </Link>
            </nav>

            <div className="admin-sidebar-footer">
                <LogoutButton />
            </div>
        </aside>
    );
}
