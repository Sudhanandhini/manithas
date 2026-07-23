"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ToggleDisabledButton({ userId, disabled }: { userId: string; disabled: boolean }) {
    const router = useRouter();
    const [saving, setSaving] = useState(false);

    async function handleToggle() {
        setSaving(true);
        const res = await fetch(`/api/dashboard/users/${userId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ disabled: !disabled }),
        });
        setSaving(false);

        if (res.ok) {
            router.refresh();
        }
    }

    return (
        <button className="admin-btn-sm" type="button" disabled={saving} onClick={handleToggle}>
            {saving ? "Saving..." : disabled ? "Enable" : "Disable"}
        </button>
    );
}
