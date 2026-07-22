import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/industry-solutions/corporate");
}

export default function Corporate() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Corporate"
                content="Home"
                contentTwo="Corporate"
            />
            <ContentSection
                eyebrow="Industry Solutions"
                title="Corporate"
                description="Professional corporate websites that communicate your business clearly and build credibility with clients and partners."
                bullets={[
                    "Brand-aligned design",
                    "Investor & careers sections",
                    "Content management",
                    "Multi-department structure"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
