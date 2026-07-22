import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/landing-page");
}

export default function LandingPage() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Landing Page"
                content="Home"
                contentTwo="Landing Page"
            />
            <ContentSection
                eyebrow="Web Development"
                title="Landing Page"
                description="High-converting landing pages designed and built to turn visitors into leads and customers for your campaigns."
                bullets={[
                    "Conversion-focused design",
                    "A/B test-ready layouts",
                    "Fast load times",
                    "Lead capture & analytics integration"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
