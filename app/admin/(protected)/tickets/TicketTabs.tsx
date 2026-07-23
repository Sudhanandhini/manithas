"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TicketTabs() {
    const pathname = usePathname();
    const isAssignees = pathname === "/admin/tickets/assignees";
    const isAllTickets = !isAssignees;

    return (
        <div className="admin-tabs">
            <Link href="/admin/tickets" className={`admin-tab${isAllTickets ? " is-active" : ""}`}>
                All Tickets
            </Link>
            <Link href="/admin/tickets/assignees" className={`admin-tab${isAssignees ? " is-active" : ""}`}>
                Assignees
            </Link>
        </div>
    );
}
