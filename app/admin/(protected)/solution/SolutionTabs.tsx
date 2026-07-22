"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SolutionTabs() {
    const pathname = usePathname();
    const isNew = pathname === "/admin/solution/new";
    const isAllSolutions = !isNew;

    return (
        <div className="admin-tabs">
            <Link href="/admin/solution" className={`admin-tab${isAllSolutions ? " is-active" : ""}`}>
                All Solutions
            </Link>
            <Link href="/admin/solution/new" className={`admin-tab${isNew ? " is-active" : ""}`}>
                + Add Solution
            </Link>
        </div>
    );
}
