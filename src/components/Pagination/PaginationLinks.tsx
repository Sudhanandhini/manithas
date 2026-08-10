import Link from "next/link";

export const PAGE_SIZE = 10;

export default function PaginationLinks({
    page,
    totalPages,
    basePath,
    searchParams,
}: {
    page: number;
    totalPages: number;
    basePath: string;
    searchParams: Record<string, string | undefined>;
}) {
    if (totalPages <= 1) return null;

    function hrefFor(targetPage: number) {
        const params = new URLSearchParams();
        for (const [key, value] of Object.entries(searchParams)) {
            if (key === "page" || !value) continue;
            params.set(key, value);
        }
        if (targetPage > 1) params.set("page", String(targetPage));
        const qs = params.toString();
        return qs ? `${basePath}?${qs}` : basePath;
    }

    return (
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 12, marginTop: 16 }}>
            <Link
                href={hrefFor(page - 1)}
                className="admin-btn-sm"
                aria-disabled={page <= 1}
                style={page <= 1 ? { pointerEvents: "none", opacity: 0.5 } : undefined}
            >
                Prev
            </Link>
            <span>
                Page {page} of {totalPages}
            </span>
            <Link
                href={hrefFor(page + 1)}
                className="admin-btn-sm"
                aria-disabled={page >= totalPages}
                style={page >= totalPages ? { pointerEvents: "none", opacity: 0.5 } : undefined}
            >
                Next
            </Link>
        </div>
    );
}
