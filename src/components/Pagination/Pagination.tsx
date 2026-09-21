"use client";

import { getPageRange } from "./pageRange";

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
        <div className="admin-pagination">
            <button type="button" className="admin-btn-sm" disabled={page <= 1} onClick={() => onChange(page - 1)}>
                Prev
            </button>
            {getPageRange(page, totalPages).map((token, i) =>
                token === "..." ? (
                    <span key={`dots-${i}`} className="admin-pagination-dots">
                        …
                    </span>
                ) : (
                    <button
                        key={token}
                        type="button"
                        className={`admin-pagination-page${token === page ? " is-active" : ""}`}
                        onClick={() => onChange(token)}
                        aria-current={token === page ? "page" : undefined}
                    >
                        {token}
                    </button>
                )
            )}
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
