import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development");
}

export default function WebDevelopment() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Web Development"
                content="Home"
                contentTwo="Web Development"
            />
            <ContentSection
                eyebrow="What We Do"
                title="Web Development"
                description="From WordPress to fully custom builds, our team delivers fast, secure, and responsive websites tailored to your brand and business goals."
                bullets={[
                    "WordPress & CMS development",
                    "Custom web development",
                    "E-commerce & WooCommerce",
                    "Landing pages & website redesigns"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
