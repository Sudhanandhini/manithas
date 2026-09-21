import Link from "next/link";
import { getPageRange } from "./pageRange";

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
        <div className="admin-pagination">
            <Link
                href={hrefFor(page - 1)}
                className="admin-btn-sm"
                aria-disabled={page <= 1}
                style={page <= 1 ? { pointerEvents: "none", opacity: 0.5 } : undefined}
            >
                Prev
            </Link>
            {getPageRange(page, totalPages).map((token, i) =>
                token === "..." ? (
                    <span key={`dots-${i}`} className="admin-pagination-dots">
                        …
                    </span>
                ) : (
                    <Link
                        key={token}
                        href={hrefFor(token)}
                        className={`admin-pagination-page${token === page ? " is-active" : ""}`}
                        aria-current={token === page ? "page" : undefined}
                    >
                        {token}
                    </Link>
                )
            )}
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
