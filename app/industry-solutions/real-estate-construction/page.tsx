import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/industry-solutions/real-estate-construction");
}

export default function RealEstateConstruction() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Real Estate & Construction"
                content="Home"
                contentTwo="Real Estate & Construction"
            />
            <ContentSection
                eyebrow="Industry Solutions"
                title="Real Estate & Construction"
                description="Property and project showcase websites built to generate qualified leads for real estate and construction businesses."
                bullets={[
                    "Property/project listings",
                    "Lead capture forms",
                    "Gallery & floor plans",
                    "Location & map integration"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
