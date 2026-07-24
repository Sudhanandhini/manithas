import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import AboutImageSplit from "@/src/components/PageContent/AboutImageSplit";
import ChecklistTwoColumn from "@/src/components/PageContent/ChecklistTwoColumn";
import RelatedApplications from "@/src/components/PageContent/RelatedApplications";
import WhyChooseIconGrid from "@/src/components/PageContent/WhyChooseIconGrid";
import PageFaq from "@/src/components/PageContent/PageFaq";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

const customWebsiteBenefits = [
    "Exclusive Features As Per The Business",
    "Rapid Loading Time",
    "Enhanced Website Security",
    "Improved Flexibility And Scalability",
    "Better System Integration",
    "Full Ownership Of Your Codebase"
];

const customDevServices = [
    {
        icon: "fas fa-laptop-code",
        title: "Website Development",
        description: "Custom development covering both back-end and front-end for enterprise applications."
    },
    {
        icon: "fas fa-handshake",
        title: "Responsive Design",
        description: "Websites responsive across all devices, so clients never miss a potential customer."
    },
    {
        icon: "fas fa-mobile-alt",
        title: "Progressive Web Applications",
        description: "Custom web applications that respond faster than native apps, even on poor connections."
    },
    {
        icon: "fas fa-plug",
        title: "Third-Party Integration",
        description: "Real-time integrations with third-party systems to track performance."
    },
    {
        icon: "fas fa-vial",
        title: "Quality Analysis And Testing",
        description: "Continuous monitoring of security threats to prevent long-term issues."
    },
    {
        icon: "fas fa-tools",
        title: "Maintenance And Support",
        description: "Ongoing web maintenance and support to review pages and enhance organic reach."
    }
];

const whyChooseCustomDev = [
    {
        icon: "fas fa-cogs",
        title: "Operational Excellence",
        description: "A leading web development company with skilled UI/UX designers on every project."
    },
    {
        icon: "fas fa-handshake",
        title: "Client-Centric Approach",
        description: "We help clients achieve their goals from planning through implementation, ensuring a competitive edge."
    },
    {
        icon: "fas fa-users",
        title: "World-Class Team",
        description: "Our greatest asset is our dedicated team, focused on teamwork and collaboration for successful projects."
    },
    {
        icon: "fas fa-shield-alt",
        title: "Secure By Design",
        description: "Security built into the architecture from day one, not bolted on afterward."
    },
    {
        icon: "fas fa-rocket",
        title: "Scalable Architecture",
        description: "Systems built to handle your growth without needing a rebuild."
    },
    {
        icon: "fas fa-comments",
        title: "Transparent Communication",
        description: "Clear updates at every stage, so you always know where the project stands."
    }
];

const customDevFaqs = [
    {
        question: "What is custom website development?",
        answer: "Custom website development means building a site from the ground up around your specific requirements, rather than using an off-the-shelf template."
    },
    {
        question: "How is custom development different from using a template?",
        answer: "Custom development offers full control over functionality, design, and integrations, while templates constrain you to their existing structure."
    },
    {
        question: "How long does custom website development take?",
        answer: "Timelines depend on scope and complexity, typically ranging from several weeks to a few months for larger projects."
    }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/custom-web-development");
}

export default function CustomWebDevelopment() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Custom Web Development"
                content="Home"
                contentTwo="Custom Web Development"
            />
            {/* <ContentSection
                eyebrow="Web Development"
                title="Custom Web Development"
                description="When off-the-shelf platforms won't cut it, we build fully custom websites and web apps engineered around your exact requirements."
                bullets={[
                    "Requirements-driven architecture",
                    "Scalable, maintainable codebases",
                    "API & third-party integrations",
                    "Performance-first builds"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-8.jpg"
                imageTwo="/images/about/about-9.jpg"
                eyebrow="Custom Website Development Services"
                title="Software Built Around Your Business, Not A Template"
                paragraphs={[
                    "Custom website development gives you a solution that surpasses generic software, tailored to your exact workflows and user experience goals.",
                    "We collaborate closely with clients at every stage, from planning through launch, to create websites and applications that meet specific needs and deliver optimal results within budget and timelines."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <ChecklistTwoColumn
                eyebrow="Why It Matters"
                title="Benefits Of Custom Websites For Business"
                items={customWebsiteBenefits}
                classOption="section-bg-light"
            />
            <RelatedApplications
                title="What Our Custom Website Development Services Include"
                apps={customDevServices}
            />
            <WhyChooseIconGrid
                eyebrow="Grow Your Business With"
                title="Why Choose Manithas For Custom Website Development"
                description="We carry out development with a proven strategy: prototype, build, refine, and deliver."
                items={whyChooseCustomDev}
                ctaLabel="Start Today"
                ctaLink="/contact"
                classOption="section-bg-light"
                layout="card"
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about custom development"
                items={customDevFaqs}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
