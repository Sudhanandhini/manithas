export type PageToken = number | "...";

// Always includes first/last page plus one page on either side of `page`,
// collapsing any gaps into a single "..." token.
export function getPageRange(page: number, totalPages: number): PageToken[] {
    const delta = 1;
    const pages: number[] = [];

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= page - delta && i <= page + delta)) {
            pages.push(i);
        }
    }

    const withDots: PageToken[] = [];
    let last: number | undefined;
    for (const i of pages) {
        if (last !== undefined) {
            if (i - last === 2) {
                withDots.push(last + 1);
            } else if (i - last > 2) {
                withDots.push("...");
            }
        }
        withDots.push(i);
        last = i;
    }

    return withDots;
}
