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

const healthcareProcess = [
    { icon: "fas fa-clipboard-list", title: "Need Analysis", description: "We begin by understanding your departments, services, specialties, and patient journeys to define the right structure for your healthcare website." },
    { icon: "fas fa-lightbulb", title: "Solution Planning", description: "Next, we plan appointment journeys, service pages, doctor profiles, and essential requirements to create a clear and accessible patient experience." },
    { icon: "fas fa-pencil-ruler", title: "Design & Prototyping", description: "Our designers create clean, accessible layouts that build trust and make it easier for patients to find the information and care they need." },
    { icon: "fas fa-code", title: "Website Development", description: "At this stage, we build secure, responsive websites with appointment booking, doctor profiles, service listings, and other essential healthcare features." },
    { icon: "fas fa-vial", title: "Testing", description: "Here, we thoroughly test booking flows, forms, responsiveness, usability, and accessibility to ensure a smooth experience across devices." },
    { icon: "fas fa-rocket", title: "Deployment/Launching", description: "Once everything is ready, we launch your healthcare website and provide ongoing support to help keep it secure, updated, and performing reliably." }
];

const healthcareApps = [
    { icon: "fas fa-calendar-check", title: "Appointment Booking", description: "We create simple, guided booking journeys that make it easier for patients to find a service, choose a doctor, and schedule appointments online." },
    { icon: "fas fa-user-md", title: "Doctor & Specialist Profiles", description: "We build searchable profiles that highlight doctors’ qualifications, specialties, experience, and availability." },
    { icon: "fas fa-hospital", title: "Department & Service Pages", description: "We organize healthcare services into clear, informative pages so patients can quickly find the right department or care option." },
    { icon: "fas fa-notes-medical", title: "Patient Resources", description: "We provide dedicated spaces for health information, FAQs, and pre- and post-visit guidance to help patients feel better informed." },
    { icon: "fas fa-heartbeat", title: "Emergency & Contact Info", description: "We keep essential emergency contacts, locations, and communication details easy to find across the website." },
    { icon: "fas fa-shield-alt", title: "Compliance-Aware Build", description: "We follow privacy-conscious development practices to support the secure handling of sensitive patient and healthcare information." }
];

const healthcareFaqs = [
    { question: "Can patients book appointments directly online?", answer: "Yes, we build guided booking flows so patients can schedule visits without calling the front desk." },
    { question: "Is patient data handled securely?", answer: "Yes, we follow compliance-aware development practices for how patient information is collected and stored." },
    { question: "Can we manage multiple clinics or departments?", answer: "Yes, the platform is structured to support multiple departments, specialists, or clinic locations." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/industry-solutions/healthcare");
}

export default function Healthcare() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Healthcare"
                content="Home"
                contentTwo="Healthcare"
            />
            {/* <ContentSection
                eyebrow="Industry Solutions"
                title="Healthcare"
                description="Websites and portals for healthcare providers, built with patient experience, accessibility, and trust in mind."
                bullets={[
                    "Appointment booking",
                    "Doctor & service listings",
                    "Patient-friendly design",
                    "Compliance-aware development"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-5.jpg"
                imageTwo="/images/about/about-6.jpg"
                eyebrow="Healthcare Web Solutions"
                title="Digital Care Experiences Built On Trust And Accessibility"
                paragraphs={[
                   "Healthcare websites are browsed for quick answers and responses without any confusion, whether it’s finding the right doctor, understanding a service, or booking an appointment. A well-designed healthcare website puts the information they need within easy reach.",

"We create healthcare websites with clear service directories, doctor profiles, appointment scheduling, and accessible layouts that make every step easier for patients. Behind the scenes, simple content management tools help your team keep information accurate, updated, and easy to manage."

                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Our Healthcare Website Development Process"
                description="Our development process involves thorough planning, design, and testing, ensuring a user-friendly, accessible, and high-performing site tailored to your patients' needs."
                steps={healthcareProcess}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="Industry Solutions"
                title="What Our Healthcare Website Solutions Include"
                apps={healthcareApps}
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our healthcare websites"
                items={healthcareFaqs}
                imageOne="/images/portfolio/portfolio-5.jpg"
                imageTwo="/images/portfolio/portfolio-6.jpg"
                classOption="section-bg-light"
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
