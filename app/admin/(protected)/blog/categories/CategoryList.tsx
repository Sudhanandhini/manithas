"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Category } from "@prisma/client";

export default function CategoryList({ categories }: { categories: Category[] }) {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function handleDelete(id: string, name: string) {
        if (!window.confirm(`Delete the "${name}" category? Posts already tagged with it keep the text, but it will no longer appear as a picker option.`)) {
            return;
        }
        setDeletingId(id);
        setError(null);

        const res = await fetch(`/api/admin/categories/${id}`, { method: "DELETE" });
        setDeletingId(null);

        if (!res.ok) {
            setError("Could not delete category.");
            return;
        }

        router.refresh();
    }

    if (categories.length === 0) {
        return <p>No categories yet. Add one below.</p>;
    }

    return (
        <>
            {error && <div className="admin-error">{error}</div>}
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Slug</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id}>
                            <td>{category.name}</td>
                            <td>
                                <code>{category.slug}</code>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    className="admin-btn-sm"
                                    style={{ border: "none", cursor: "pointer" }}
                                    disabled={deletingId === category.id}
                                    onClick={() => handleDelete(category.id, category.name)}
                                >
                                    {deletingId === category.id ? "Deleting..." : "Delete"}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
