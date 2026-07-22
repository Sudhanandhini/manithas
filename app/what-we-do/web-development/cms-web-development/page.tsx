import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/cms-web-development");
}

export default function CmsWebDevelopment() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="CMS Web Development"
                content="Home"
                contentTwo="CMS Web Development"
            />
            <ContentSection
                eyebrow="Web Development"
                title="CMS Web Development"
                description="We build content-managed websites on the CMS that fits your team, so you can update pages and content without touching code."
                bullets={[
                    "CMS selection & setup",
                    "Custom content types & templates",
                    "Editor-friendly workflows",
                    "Training & handover support"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
