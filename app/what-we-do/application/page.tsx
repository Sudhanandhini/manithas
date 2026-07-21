import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/application");
}

export default function Application() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Application Development"
                content="Home"
                contentTwo="Application"
            />
            <ContentSection
                eyebrow="What We Do"
                title="Application Development"
                description="We design and build custom web and business applications that streamline your operations, automate workflows, and scale with your business."
                bullets={[
                    "Custom business applications",
                    "Workflow automation",
                    "Third-party API integrations",
                    "Ongoing support and upgrades"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
