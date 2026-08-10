"use client";

export const PAGE_SIZE = 10;

export default function Pagination({
    page,
    totalPages,
    onChange,
}: {
    page: number;
    totalPages: number;
    onChange: (page: number) => void;
}) {
    if (totalPages <= 1) return null;

    return (
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 12, marginTop: 16 }}>
            <button type="button" className="admin-btn-sm" disabled={page <= 1} onClick={() => onChange(page - 1)}>
                Prev
            </button>
            <span>
                Page {page} of {totalPages}
            </span>
            <button
                type="button"
                className="admin-btn-sm"
                disabled={page >= totalPages}
                onClick={() => onChange(page + 1)}
            >
                Next
            </button>
        </div>
    );
}
