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
    { icon: "fas fa-clipboard-list", title: "Requirements Gathering", description: "We understand your departments, brand guidelines, and business goals to define exactly what your corporate website needs to achieve." },
    { icon: "fas fa-lightbulb", title: "Planning & Strategy Making", description: "We map out site structure, content hierarchy, and integrations so every stakeholder finds what they need quickly." },
    { icon: "fas fa-pencil-ruler", title: "Website Designing", description: "Our designers craft a brand-aligned layout that presents your business with clarity, professionalism, and confidence." },
    { icon: "fas fa-code", title: "Website Development", description: "Our developers build a secure, scalable platform with clean code and smooth content management for your team." },
    { icon: "fas fa-vial", title: "Testing", description: "We test every page, form, and integration across devices to ensure a polished, error-free experience before launch." },
    { icon: "fas fa-rocket", title: "Launching", description: "We deploy your corporate website to production and provide ongoing support to keep it running smoothly." }
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
                    "Your corporate website is often the first serious impression a prospective client, partner, or investor forms of your company. We design and build sites that translate your brand's authority into a clear, confident digital experience.",
                    "From structured content for multiple departments to secure areas for reports and documentation, we build corporate platforms that scale with your organization rather than needing to be rebuilt as it grows."
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
