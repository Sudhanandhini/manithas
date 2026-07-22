import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/industry-solutions/education");
}

export default function Education() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Education"
                content="Home"
                contentTwo="Education"
            />
            <ContentSection
                eyebrow="Industry Solutions"
                title="Education"
                description="Websites and portals for schools, colleges, and training institutes, built to inform prospective students and support current ones."
                bullets={[
                    "Admissions & course listings",
                    "Event & notice updates",
                    "Student/parent portals",
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
