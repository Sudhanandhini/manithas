import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/industry-solutions/hotel-resort");
}

export default function HotelResort() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Hotel & Resort"
                content="Home"
                contentTwo="Hotel & Resort"
            />
            <ContentSection
                eyebrow="Industry Solutions"
                title="Hotel & Resort"
                description="Digital experiences for hotels and resorts, from room showcases to direct booking flows that reduce dependence on OTAs."
                bullets={[
                    "Room & amenity showcases",
                    "Direct booking integration",
                    "Gallery & virtual tours",
                    "Multi-property support"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
