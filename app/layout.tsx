import type { Metadata } from "next";
import AosInit from "@/src/components/AosInit";
import NavScrollTop from "@/src/components/NavScrollTop";

import "swiper/css";
import "aos/dist/aos.css";
import "react-modal-video/scss/modal-video.scss";
import "@/src/assets/scss/style.scss";

export const metadata: Metadata = {
    title: "Exomac – Business React JS Template",
    description: "Exomac – Corporate Business React JS Template",
    robots: "noindex, follow",
    icons: {
        icon: "/images/favicon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <NavScrollTop>
                    {children}
                </NavScrollTop>
                <AosInit />
            </body>
        </html>
    );
}
