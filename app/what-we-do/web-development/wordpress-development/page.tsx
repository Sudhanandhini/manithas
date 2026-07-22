import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/wordpress-development");
}

export default function WordpressDevelopment() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="WordPress Development"
                content="Home"
                contentTwo="WordPress Development"
            />
            <ContentSection
                eyebrow="Web Development"
                title="WordPress Development"
                description="We build fast, secure, and easy-to-manage WordPress websites tailored to your brand, from custom themes to plugin integrations."
                bullets={[
                    "Custom WordPress theme development",
                    "Plugin setup & customization",
                    "Speed & security optimization",
                    "Ongoing maintenance & support"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
