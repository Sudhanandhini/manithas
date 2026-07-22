import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/custom-web-development");
}

export default function CustomWebDevelopment() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Custom Web Development"
                content="Home"
                contentTwo="Custom Web Development"
            />
            <ContentSection
                eyebrow="Web Development"
                title="Custom Web Development"
                description="When off-the-shelf platforms won't cut it, we build fully custom websites and web apps engineered around your exact requirements."
                bullets={[
                    "Requirements-driven architecture",
                    "Scalable, maintainable codebases",
                    "API & third-party integrations",
                    "Performance-first builds"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
