import dynamic from "next/dynamic";
import type { ComponentType } from "react";

// Maps a SeoPage.key to the component that renders it. Each entry is code-split
// via next/dynamic so this registry doesn't bundle every migrated page together.
export const PAGE_REGISTRY: Record<string, ComponentType> = {
    "application-root": dynamic(() => import("./pages-content/application-root")),
    "application-alumni": dynamic(() => import("./pages-content/application-alumni")),
    "application-elibrary": dynamic(() => import("./pages-content/application-elibrary")),
    "application-subscription": dynamic(() => import("./pages-content/application-subscription")),
    "application-employee-records": dynamic(() => import("./pages-content/application-employee-records")),
    "application-online-assessment-test": dynamic(() => import("./pages-content/application-online-assessment-test")),
};
