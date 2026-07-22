import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/website-maintenance");
}

export default function WebsiteMaintenance() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Website Maintenance"
                content="Home"
                contentTwo="Website Maintenance"
            />
            <ContentSection
                eyebrow="Web Development"
                title="Website Maintenance"
                description="Ongoing care to keep your website fast, secure, and up to date, so you can focus on your business instead of your website."
                bullets={[
                    "Regular updates & backups",
                    "Security monitoring",
                    "Performance checks",
                    "Priority support for issues"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
