import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import AosInit from "@/src/components/AosInit";
import NavScrollTop from "@/src/components/NavScrollTop";
import { getSiteSettings, siteUrl } from "@/lib/seo";

import "swiper/css";
import "aos/dist/aos.css";
import "react-modal-video/scss/modal-video.scss";
import "@/src/assets/scss/style.scss";

const mulish = Mulish({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-mulish",
    display: "swap",
});

// Every route reads SEO fields from the database (see lib/seo.ts), so the whole
// app renders per-request rather than being statically generated at build time.
// This also means admin edits show up immediately, with no rebuild/redeploy step.
export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
    const settings = await getSiteSettings();

    return {
        // Individual pages already render the title template themselves via
        // buildMetadata()/buildDynamicMetadata() in lib/seo.ts, so this is only
        // a fallback for any route that doesn't set its own metadata.
        metadataBase: new URL(siteUrl()),
        title: settings.siteName,
        description: settings.defaultDescription ?? undefined,
        icons: {
            icon: "/images/favicon.png",
        },
        verification: {
            google: settings.googleSiteVerification ?? undefined,
            other: settings.bingSiteVerification
                ? { "msvalidate.01": settings.bingSiteVerification }
                : undefined,
        },
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={mulish.variable}>
            <body>
                <NavScrollTop>
                    {children}
                </NavScrollTop>
                <AosInit />
            </body>
        </html>
    );
}
