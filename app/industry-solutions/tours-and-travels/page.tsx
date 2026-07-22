import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/industry-solutions/tours-and-travels");
}

export default function ToursAndTravels() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Tours and Travels"
                content="Home"
                contentTwo="Tours and Travels"
            />
            <ContentSection
                eyebrow="Industry Solutions"
                title="Tours and Travels"
                description="Websites and booking experiences built for tour operators and travel businesses, designed to turn browsers into bookings."
                bullets={[
                    "Tour & package listings",
                    "Online booking & payments",
                    "Itinerary showcases",
                    "Mobile-friendly design"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
