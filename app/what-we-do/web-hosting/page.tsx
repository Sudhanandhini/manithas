import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-hosting");
}

export default function WebHosting() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Web Hosting"
                content="Home"
                contentTwo="Web Hosting"
            />
            <ContentSection
                eyebrow="What We Do"
                title="Web Hosting"
                description="Reliable Linux and web hosting with the performance, security, and uptime your business depends on."
                bullets={[
                    "Linux Hosting",
                    "Web Hosting",
                    "Email Hosting",
                    "Cloud & VPS Hosting"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
