import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/solutions/membership");
}

export default function Membership() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Membership Management"
                content="Home"
                contentTwo="Membership"
            />
            <ContentSection
                eyebrow="Solution"
                title="Membership Management"
                description="Our Membership Management solution is coming soon. Get in touch and we'll help you plan the right solution for your organization."
                ctaLabel="Contact Us"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
