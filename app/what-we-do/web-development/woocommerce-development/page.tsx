import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/woocommerce-development");
}

export default function WooCommerceDevelopment() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="WooCommerce Development"
                content="Home"
                contentTwo="WooCommerce Development"
            />
            <ContentSection
                eyebrow="Web Development"
                title="WooCommerce Development"
                description="We build and customize WooCommerce stores on WordPress, from theme design to plugin configuration and payment setup."
                bullets={[
                    "Custom WooCommerce themes",
                    "Payment & shipping configuration",
                    "Extension & plugin integration",
                    "Store performance tuning"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
