import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/website-redesign");
}

export default function WebsiteRedesign() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Website Redesign"
                content="Home"
                contentTwo="Website Redesign"
            />
            <ContentSection
                eyebrow="Web Development"
                title="Website Redesign"
                description="We refresh outdated websites with modern design, better performance, and a clearer path to conversion, without losing your SEO equity."
                bullets={[
                    "UX & content audit",
                    "Modern, on-brand design",
                    "SEO-safe migration",
                    "Performance improvements"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
