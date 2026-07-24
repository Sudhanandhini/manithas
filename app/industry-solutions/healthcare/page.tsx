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
    { icon: "fas fa-clipboard-list", title: "Requirements Gathering", description: "We understand your departments, services, and patient journey to define the right structure for your healthcare website." },
    { icon: "fas fa-lightbulb", title: "Planning & Strategy Making", description: "We plan appointment flows, service pages, and compliance requirements before any design work begins." },
    { icon: "fas fa-pencil-ruler", title: "Website Designing", description: "Our designers create an accessible, patient-friendly layout that builds trust and makes finding care simple." },
    { icon: "fas fa-code", title: "Website Development", description: "We build a secure, compliance-aware platform with booking, doctor profiles, and service listings built in." },
    { icon: "fas fa-vial", title: "Testing", description: "We test booking flows, forms, and accessibility thoroughly to ensure a smooth experience for every patient." },
    { icon: "fas fa-rocket", title: "Launching", description: "We launch your healthcare website and provide ongoing support to keep it secure and up to date." }
];

const healthcareApps = [
    { icon: "fas fa-calendar-check", title: "Appointment Booking", description: "Simple, guided booking flows that reduce phone-in scheduling for your front desk." },
    { icon: "fas fa-user-md", title: "Doctor & Specialist Profiles", description: "Searchable profiles with qualifications, specialties, and availability." },
    { icon: "fas fa-hospital", title: "Department & Service Pages", description: "Clear descriptions of every service line, so patients find the right care faster." },
    { icon: "fas fa-notes-medical", title: "Patient Resources", description: "Health information, FAQs, and pre/post-visit guidance for patients." },
    { icon: "fas fa-heartbeat", title: "Emergency & Contact Info", description: "Prominent emergency contact details and location info across every page." },
    { icon: "fas fa-shield-alt", title: "Compliance-Aware Build", description: "Development practices that respect patient data privacy and handling requirements." }
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
                    "Patients researching care want clarity fast - the right doctor, the right service, and a simple way to book. We design healthcare websites around that urgency, without compromising on accessibility or compliance.",
                    "From appointment scheduling to service directories, every element is built to reduce friction for patients while giving your staff simple tools to manage content."
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
