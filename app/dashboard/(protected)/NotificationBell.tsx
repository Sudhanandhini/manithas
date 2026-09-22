"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBell } from "react-icons/fa";

type TicketNotification = {
    id: string;
    subject: string;
    unreadCount: number;
};

type NotificationsResponse = {
    amc: { amcDateTo: string; daysLeft: number } | null;
    website: { websiteExpiryDate: string; daysLeft: number } | null;
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
                const res = await fetch("/api/dashboard/notifications", { cache: "no-store" });
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
                        <p className="admin-notification-panel-title">AMC</p>
                        {!data?.amc ? (
                            <p className="admin-notification-empty">No AMC expiring soon.</p>
                        ) : (
                            <div className="admin-notification-item">
                                <span>Your AMC expires soon</span>
                                <span className="admin-notification-item-meta">
                                    {data.amc.daysLeft} day{data.amc.daysLeft === 1 ? "" : "s"} left
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="admin-notification-panel-section">
                        <p className="admin-notification-panel-title">Website</p>
                        {!data?.website ? (
                            <p className="admin-notification-empty">No website expiring soon.</p>
                        ) : (
                            <div className="admin-notification-item">
                                <span>Your website expires soon</span>
                                <span className="admin-notification-item-meta">
                                    {data.website.daysLeft} day{data.website.daysLeft === 1 ? "" : "s"} left
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="admin-notification-panel-section">
                        <p className="admin-notification-panel-title">Ticket Updates</p>
                        {!data || data.tickets.length === 0 ? (
                            <p className="admin-notification-empty">No unread ticket replies.</p>
                        ) : (
                            data.tickets.map((t) => (
                                <Link key={t.id} href={`/dashboard/${t.id}`} className="admin-notification-item" onClick={() => setOpen(false)}>
                                    <span>{t.subject}</span>
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
