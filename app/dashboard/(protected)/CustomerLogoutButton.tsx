"use client";

import { signOut } from "next-auth/react";

export default function CustomerLogoutButton() {
    return (
        <button
            className="admin-btn admin-btn-secondary"
            onClick={() => signOut({ callbackUrl: "/login" })}
        >
            Sign out
        </button>
    );
}
