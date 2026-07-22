import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/e-commerce-development");
}

export default function ECommerceDevelopment() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="E-Commerce Development"
                content="Home"
                contentTwo="E-Commerce Development"
            />
            <ContentSection
                eyebrow="Web Development"
                title="E-Commerce Development"
                description="We design and build online stores that convert, with secure checkouts, product management, and integrations built around your catalog."
                bullets={[
                    "Custom storefront design",
                    "Secure payment gateway integration",
                    "Product & inventory management",
                    "Mobile-optimized checkout"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
