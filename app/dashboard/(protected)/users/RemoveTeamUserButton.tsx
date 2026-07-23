"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RemoveTeamUserButton({ userId }: { userId: string }) {
    const router = useRouter();
    const [removing, setRemoving] = useState(false);

    async function handleRemove() {
        if (!window.confirm("Remove this team user? They will no longer be able to log in.")) return;
        setRemoving(true);
        const res = await fetch(`/api/dashboard/users/${userId}`, { method: "DELETE" });
        setRemoving(false);

        if (res.ok) {
            router.refresh();
        }
    }

    return (
        <button className="admin-btn-sm" type="button" disabled={removing} onClick={handleRemove}>
            {removing ? "Removing..." : "Remove"}
        </button>
    );
}
