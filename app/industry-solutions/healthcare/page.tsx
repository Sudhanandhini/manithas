import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/industry-solutions/healthcare");
}

export default function Healthcare() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Healthcare"
                content="Home"
                contentTwo="Healthcare"
            />
            <ContentSection
                eyebrow="Industry Solutions"
                title="Healthcare"
                description="Websites and portals for healthcare providers, built with patient experience, accessibility, and trust in mind."
                bullets={[
                    "Appointment booking",
                    "Doctor & service listings",
                    "Patient-friendly design",
                    "Compliance-aware development"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
