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
    "Tailored Business Functionality",
    "Faster, Smoother Performance",
    "Built-In Security",
    "Flexible & Scalable Growth",
    "Seamless System Integration",
    "Complete Code Ownership"
];

const customDevServices = [
    {
        icon: "fas fa-laptop-code",
        title: "Custom Website Development",
        description: "Tailored front-end and back-end solutions that align with your business workflows, functionality, and long-term objectives."
    },
    {
        icon: "fas fa-handshake",
        title: "Responsive Design",
        description: "Seamless, device-friendly experiences that adapt effortlessly across desktops, tablets, and smartphones."
    },
    {
        icon: "fas fa-mobile-alt",
        title: "Progressive Web Applications",
        description: "Fast, app-like web experiences that offer reliable performance, even in low-connectivity environments."
    },
    {
        icon: "fas fa-plug",
        title: "Third-Party Integration",
        description: "Connected websites with essential third-party platforms and services to streamline workflows and keep your systems working together."
    },
    {
        icon: "fas fa-vial",
        title: "Quality Analysis And Testing",
        description: "Functionality, performance, compatibility, and security rigorously tested to ensure your website delivers a reliable experience."
    },
    {
        icon: "fas fa-tools",
        title: "Maintenance And Support",
        description: "Ongoing technical support, updates, optimization, and enhancements to keep your website secure, stable, and performing at its best."
    }
];

const whyChooseCustomDev = [
    {
        icon: "fas fa-cogs",
        title: "Operational Excellence",
        description: "Skilled developers and UI/UX experts delivering structured, efficient solutions"
    },
    {
        icon: "fas fa-handshake",
        title: "Client-Centric Approach",
        description: "We align every solution with your goals, priorities, and business needs."
    },
    {
        icon: "fas fa-users",
        title: "World-Class Team",
        description: "A dedicated team combining expertise, collaboration, and creative problem-solving."
    },
    {
        icon: "fas fa-shield-alt",
        title: "Secure By Design",
        description: "Security integrated from the start to protect your website and data."
    },
    {
        icon: "fas fa-rocket",
        title: "Scalable Architecture",
        description: "Flexible systems built to adapt as your business grows."
    },
    {
        icon: "fas fa-comments",
        title: "Transparent Communication",
        description: "Clear updates and open communication throughout every project stage."
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
    return buildMetadata("/services/web-development/custom-web-development");
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
                    "Custom website development provides businesses with digital solutions built around their unique requirements, workflows, and user experience goals. Unlike generic software, custom development gives you greater flexibility to shape features, functionality, and interfaces around the way your business operates.",

"Our custom website development focuses on purposeful functionality, intuitive experiences, scalable architecture, and seamless performance, creating digital solutions that are flexible, maintainable, and aligned with your business goals, budget, and long-term growth."

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
