import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/business-email");
}

export default function BusinessEmail() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Business E-Mail"
                content="Home"
                contentTwo="Business E-Mail"
            />
            <ContentSection
                eyebrow="What We Do"
                title="Business E-Mail"
                description="Professional, secure business email hosting so your team can communicate under your own domain with confidence."
                bullets={[
                    "Custom domain email",
                    "Spam & malware protection",
                    "Mobile & desktop sync",
                    "Reliable uptime"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
