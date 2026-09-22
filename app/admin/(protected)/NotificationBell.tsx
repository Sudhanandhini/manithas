"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBell } from "react-icons/fa";

type AmcNotification = {
    id: string;
    name: string;
    amcDateTo: string | null;
    daysLeft: number | null;
};

type WebsiteNotification = {
    id: string;
    name: string;
    websiteExpiryDate: string | null;
    daysLeft: number | null;
};

type TicketNotification = {
    id: string;
    subject: string;
    customerName: string;
    unreadCount: number;
};

type NotificationsResponse = {
    amc: AmcNotification[];
    website: WebsiteNotification[];
    tickets: TicketNotification[];
    totalCount: number;
};

const POLL_INTERVAL_MS = 60_000;

export default function NotificationBell() {
    const [data, setData] = useState<NotificationsResponse | null>(null);
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                const res = await fetch("/api/admin/notifications", { cache: "no-store" });
                if (!res.ok) return;
                const json = await res.json();
                if (!cancelled) setData(json);
            } catch {
                // ignore transient failures; next poll will retry
            }
        }

        load();
        const interval = setInterval(load, POLL_INTERVAL_MS);
        return () => {
            cancelled = true;
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const totalCount = data?.totalCount ?? 0;

    return (
        <div className="admin-notification-bell" ref={wrapperRef}>
            <button
                type="button"
                className="admin-notification-bell-btn"
                onClick={() => setOpen((v) => !v)}
                aria-label="Notifications"
            >
                <FaBell size={18} />
                {totalCount > 0 && <span className="admin-notification-badge">{totalCount > 99 ? "99+" : totalCount}</span>}
            </button>

            {open && (
                <div className="admin-notification-panel">
                    <div className="admin-notification-panel-section">
                        <p className="admin-notification-panel-title">AMC Expiring (next 15 days)</p>
                        {!data || data.amc.length === 0 ? (
                            <p className="admin-notification-empty">No AMCs expiring soon.</p>
                        ) : (
                            data.amc.map((c) => (
                                <Link key={c.id} href={`/admin/customers/${c.id}`} className="admin-notification-item" onClick={() => setOpen(false)}>
                                    <span>{c.name}</span>
                                    <span className="admin-notification-item-meta">
                                        {c.daysLeft !== null ? `${c.daysLeft} day${c.daysLeft === 1 ? "" : "s"} left` : ""}
                                    </span>
                                </Link>
                            ))
                        )}
                    </div>

                    <div className="admin-notification-panel-section">
                        <p className="admin-notification-panel-title">Website Expiring (next 15 days)</p>
                        {!data || data.website.length === 0 ? (
                            <p className="admin-notification-empty">No websites expiring soon.</p>
                        ) : (
                            data.website.map((c) => (
                                <Link key={c.id} href={`/admin/customers/${c.id}`} className="admin-notification-item" onClick={() => setOpen(false)}>
                                    <span>{c.name}</span>
                                    <span className="admin-notification-item-meta">
                                        {c.daysLeft !== null ? `${c.daysLeft} day${c.daysLeft === 1 ? "" : "s"} left` : ""}
                                    </span>
                                </Link>
                            ))
                        )}
                    </div>

                    <div className="admin-notification-panel-section">
                        <p className="admin-notification-panel-title">Ticket Updates</p>
                        {!data || data.tickets.length === 0 ? (
                            <p className="admin-notification-empty">No unread ticket messages.</p>
                        ) : (
                            data.tickets.map((t) => (
                                <Link key={t.id} href={`/admin/tickets/${t.id}`} className="admin-notification-item" onClick={() => setOpen(false)}>
                                    <span>
                                        {t.subject} <em>({t.customerName})</em>
                                    </span>
                                    <span className="admin-notification-item-meta">{t.unreadCount} new</span>
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
