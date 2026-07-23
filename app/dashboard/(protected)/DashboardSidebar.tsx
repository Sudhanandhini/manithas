"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CustomerLogoutButton from "./CustomerLogoutButton";

const linkClass = (active: boolean) => `admin-sidebar-link${active ? " is-active" : ""}`;

export default function DashboardSidebar({ customerName, isOwner }: { customerName: string; isOwner: boolean }) {
    const pathname = usePathname();
    const isNew = pathname === "/dashboard/new";
    const isList = pathname === "/dashboard";
    const isUsers = pathname?.startsWith("/dashboard/users") ?? false;

    return (
        <aside className="admin-sidebar">
            <div className="admin-sidebar-brand">
                <span className="admin-sidebar-dot" />
                <div>
                    <p className="admin-sidebar-eyebrow">Support</p>
                    <p className="admin-sidebar-name">{customerName}</p>
                </div>
            </div>

            <nav>
                <Link href="/dashboard" className={linkClass(isList)}>
                    My Tickets
                </Link>
                <Link href="/dashboard/new" className={linkClass(isNew)}>
                    + New Ticket
                </Link>
                {isOwner && (
                    <Link href="/dashboard/users" className={linkClass(isUsers)}>
                        Team Users
                    </Link>
                )}
            </nav>

            <div className="admin-sidebar-footer">
                <CustomerLogoutButton />
            </div>
        </aside>
    );
}
