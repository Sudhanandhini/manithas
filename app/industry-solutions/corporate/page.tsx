import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import AboutImageSplit from "@/src/components/PageContent/AboutImageSplit";
import ProcessSteps from "@/src/components/PageContent/ProcessSteps";
import RelatedApplications from "@/src/components/PageContent/RelatedApplications";
import PageFaq from "@/src/components/PageContent/PageFaq";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

const corporateProcess = [
    { icon: "fas fa-clipboard-list", title: "Need Analysis", description: "We begin by understanding your departments, brand guidelines, audience, and business goals to define what your corporate website needs to achieve." },
    { icon: "fas fa-lightbulb", title: "Solution Planning", description: "We structure your website, content hierarchy, and integrations so information is easy to find and every stakeholder can navigate with ease." },
    { icon: "fas fa-pencil-ruler", title: "Design & Prototyping", description: "At this stage, our designers create polished, brand-aligned layouts that present your business with clarity, professionalism, and confidence." },
    { icon: "fas fa-code", title: "Website Development", description: "Here, our developers build a secure, scalable platform with clean code, smooth functionality, and easy content management for your team." },
    { icon: "fas fa-vial", title: "Testing", description: "We thoroughly test pages, forms, integrations, responsiveness, and functionality across devices to ensure everything works as expected." },
    { icon: "fas fa-rocket", title: "Deployment/Launching", description: "Once everything is approved, we deploy your corporate website and provide ongoing support to keep it secure, stable, and performing smoothly." }
];

const corporateApps = [
    { icon: "fas fa-building", title: "Corporate Website Design", description: "Structured, brand-led websites that present your business with clarity and authority." },
    { icon: "fas fa-chart-line", title: "Investor Relations Portal", description: "Dedicated sections for financial reports, announcements, and shareholder information." },
    { icon: "fas fa-briefcase", title: "Careers & HR Microsite", description: "Job listings, culture content, and application flows to attract the right talent." },
    { icon: "fas fa-lock", title: "Secure Document Hub", description: "Access-controlled areas for internal documents, policies, and reports." },
    { icon: "fas fa-globe", title: "Multi-Language Support", description: "Localized content for businesses operating across regions and markets." },
    { icon: "fas fa-chart-bar", title: "Analytics & Reporting", description: "Built-in tracking to measure engagement across every department page." }
];

const corporateFaqs = [
    { question: "How long does a corporate website project take?", answer: "Most corporate websites take 4-8 weeks depending on the number of departments, integrations, and content volume involved." },
    { question: "Can you integrate our existing CRM or HR systems?", answer: "Yes, we regularly integrate corporate websites with CRMs, HR platforms, and internal reporting tools via secure APIs." },
    { question: "Do you support multi-location or multi-brand businesses?", answer: "Yes, our corporate builds are structured to support multiple departments, brands, or regional sites from a single platform." }
];

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
         
            <AboutImageSplit
                imageOne="/images/about/about-1.jpg"
                imageTwo="/images/about/about-2.jpg"
                eyebrow="Corporate Web Solutions"
                title="A Digital Presence That Reflects Enterprise Credibility"
                paragraphs={[
                    "A corporate website is often the first impression clients, partners, and investors have of a business. We design and build professional digital experiences that reflect your brand, communicate your strengths, and create confidence from the very first visit.",

                    "From structured content for multiple departments to secure spaces for reports, documents, and internal resources, we build scalable corporate websites that grow alongside your organization, without needing to start over as your business evolves."

                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Our Corporate Website Development Process"
                description="Our development process involves thorough planning, design, and testing, ensuring a user-friendly, responsive, and high-performing site tailored to your business needs."
                steps={corporateProcess}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="Industry Solutions"
                title="What Our Corporate Website Solutions Include"
                apps={corporateApps}
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our corporate websites"
                items={corporateFaqs}
                imageOne="/images/portfolio/portfolio-1.jpg"
                imageTwo="/images/portfolio/portfolio-2.jpg"
                classOption="section-bg-light"
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
