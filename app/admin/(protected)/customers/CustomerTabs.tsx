"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomerTabs() {
    const pathname = usePathname();
    const isNew = pathname === "/admin/customers/new";
    const isAllCustomers = !isNew;

    return (
        <div className="admin-tabs">
            <Link href="/admin/customers" className={`admin-tab${isAllCustomers ? " is-active" : ""}`}>
                All Customers
            </Link>
            <Link href="/admin/customers/new" className={`admin-tab${isNew ? " is-active" : ""}`}>
                + Add Customer
            </Link>
        </div>
    );
}
