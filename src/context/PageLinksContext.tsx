"use client";

import { createContext, useContext } from "react";

export type PageLinksMap = Record<string, string>;

const PageLinksContext = createContext<PageLinksMap>({});

export function PageLinksProvider({
    map,
    children,
}: {
    map: PageLinksMap;
    children: React.ReactNode;
}) {
    return <PageLinksContext.Provider value={map}>{children}</PageLinksContext.Provider>;
}

export function usePageLinksMap(): PageLinksMap {
    return useContext(PageLinksContext);
}

export function resolvePageHref(map: PageLinksMap, key: string | undefined, fallbackHref: string): string {
    if (!key) return fallbackHref;
    return map[key] ?? fallbackHref;
}
