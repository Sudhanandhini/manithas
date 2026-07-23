"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { TicketAssignee } from "@prisma/client";

export default function AssigneeList({ assignees }: { assignees: TicketAssignee[] }) {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function handleDelete(id: string, name: string) {
        if (!window.confirm(`Remove "${name}" from the assignee list? Tickets already assigned to them keep the text.`)) {
            return;
        }
        setDeletingId(id);
        setError(null);

        const res = await fetch(`/api/admin/assignees/${id}`, { method: "DELETE" });
        setDeletingId(null);

        if (!res.ok) {
            setError("Could not remove person.");
            return;
        }

        router.refresh();
    }

    if (assignees.length === 0) {
        return <p>No assignees yet. Add one below.</p>;
    }

    return (
        <>
            {error && <div className="admin-error">{error}</div>}
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {assignees.map((assignee) => (
                        <tr key={assignee.id}>
                            <td>{assignee.name}</td>
                            <td>
                                <button
                                    type="button"
                                    className="admin-btn-sm"
                                    style={{ border: "none", cursor: "pointer" }}
                                    disabled={deletingId === assignee.id}
                                    onClick={() => handleDelete(assignee.id, assignee.name)}
                                >
                                    {deletingId === assignee.id ? "Removing..." : "Remove"}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
