import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/responsive-web-design");
}

export default function ResponsiveWebDesign() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Responsive Web Design"
                content="Home"
                contentTwo="Responsive Web Design"
            />
            <ContentSection
                eyebrow="Web Development"
                title="Responsive Web Design"
                description="Websites designed to look and work great on every screen size, from desktop to mobile, with no compromise on experience."
                bullets={[
                    "Mobile-first design approach",
                    "Cross-device testing",
                    "Flexible, scalable layouts",
                    "Touch-friendly interfaces"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
