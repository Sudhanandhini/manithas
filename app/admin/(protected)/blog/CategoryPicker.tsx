"use client";

import { useState } from "react";
import type { Category } from "@prisma/client";

export default function CategoryPicker({
    categories: initialCategories,
    value,
    onChange,
}: {
    categories: Category[];
    value: string;
    onChange: (value: string) => void;
}) {
    const [categories, setCategories] = useState(initialCategories);
    const [newName, setNewName] = useState("");
    const [adding, setAdding] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const selected = value
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean);

    function toggle(name: string) {
        const next = selected.includes(name) ? selected.filter((n) => n !== name) : [...selected, name];
        onChange(next.join(", "));
    }

    async function handleAddCategory() {
        const name = newName.trim();
        if (!name) return;

        setAdding(true);
        setError(null);

        const res = await fetch("/api/admin/categories", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name }),
        });

        setAdding(false);

        if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            setError(data.error || "Could not add category.");
            return;
        }

        const { category } = await res.json();
        setCategories((prev) => [...prev, category].sort((a, b) => a.name.localeCompare(b.name)));
        onChange([...selected, category.name].join(", "));
        setNewName("");
    }

    return (
        <div className="admin-field">
            <label>Categories</label>
            {error && <div className="admin-error">{error}</div>}

            {categories.length === 0 ? (
                <small>No categories yet - add one below.</small>
            ) : (
                <div className="admin-category-list">
                    {categories.map((category) => (
                        <label key={category.id} className="admin-checkbox-row" style={{ marginBottom: 6 }}>
                            <input
                                type="checkbox"
                                checked={selected.includes(category.name)}
                                onChange={() => toggle(category.name)}
                            />
                            {category.name}
                        </label>
                    ))}
                </div>
            )}

            <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                <input
                    type="text"
                    placeholder="New category name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            handleAddCategory();
                        }
                    }}
                />
                <button
                    type="button"
                    className="admin-btn admin-btn-secondary"
                    disabled={adding || !newName.trim()}
                    onClick={handleAddCategory}
                    style={{ whiteSpace: "nowrap" }}
                >
                    {adding ? "Adding..." : "+ Add new"}
                </button>
            </div>
        </div>
    );
}
