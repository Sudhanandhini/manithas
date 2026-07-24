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

const assessmentProcess = [
    { icon: "fas fa-clipboard-list", title: "Requirements Gathering", description: "We understand your test format, registration fields, and certificate requirements to define the right platform." },
    { icon: "fas fa-lightbulb", title: "Planning & Strategy Making", description: "We plan the registration form, test flow, and certificate generation before any design work begins." },
    { icon: "fas fa-pencil-ruler", title: "Website Designing", description: "Our designers create a simple, distraction-free test interface that works well for students of every age." },
    { icon: "fas fa-code", title: "Application Development", description: "We build self-registration, online test delivery, and automatic certificate generation built in." },
    { icon: "fas fa-vial", title: "Testing", description: "We test registration, test-taking, and certificate generation thoroughly to ensure a smooth experience for every student." },
    { icon: "fas fa-rocket", title: "Launching", description: "We launch your online assessment application and provide ongoing support through every test cycle." }
];

const assessmentApps = [
    { icon: "fas fa-user-edit", title: "Quick Self-Registration", description: "Students register with just their name, class, place, and school, without needing an admin-created account." },
    { icon: "fas fa-laptop", title: "Online Test Delivery", description: "A simple, guided test interface that works smoothly across desktops, tablets, and mobile devices." },
    { icon: "fas fa-certificate", title: "Instant Certificate Generation", description: "A certificate is generated automatically the moment a student completes the assessment successfully." },
    { icon: "fas fa-download", title: "Student Certificate Download", description: "Students can download their certificate immediately after finishing the test, with no extra steps." },
    { icon: "fas fa-chart-bar", title: "Admin Results Dashboard", description: "Admins can see how many students have taken the test and track completion in real time." },
    { icon: "fas fa-file-excel", title: "Excel Data Export", description: "Admins can download student registration and results data as an Excel sheet anytime." }
];

const assessmentFaqs = [
    { question: "Do students need an account to take the test?", answer: "No, students register with their name, class, place, and school, then take the test right away." },
    { question: "How do students get their certificate?", answer: "Certificates are generated automatically on successful completion and are available for the student to download immediately." },
    { question: "Can admins see how many students have taken the test?", answer: "Yes, admins get a results dashboard showing completion counts, and can download the full data as an Excel sheet." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/application/online-assessment-test");
}

export default function OnlineAssessmentTest() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Online Assessment Test"
                content="Home"
                contentTwo="Online Assessment Test"
            />
            {/* <ContentSection
                eyebrow="Application"
                title="Online Assessment Test Web Application"
                description="An online assessment web application where students register with their name, class, place, and school, take the test online, and instantly download a certificate on completion."
                bullets={[
                    "Simple self-registration",
                    "Online test delivery",
                    "Instant certificate generation",
                    "Admin results & Excel export"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-8.jpg"
                imageTwo="/images/about/about-4.jpg"
                eyebrow="How We Build It"
                title="From Registration To Certificate, Fully Online"
                paragraphs={[
                    "Students register with just their name, class, place, and school, then take the assessment online without needing an admin-created account, making it easy to open the test to a wide audience.",
                    "As soon as a student completes the test, a certificate is generated automatically for them to download, while admins get a live view of how many students have taken the test."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Our Online Assessment Application Development Process"
                description="Our development process involves thorough planning, design, and testing, ensuring a smooth registration-to-certificate experience for every student."
                steps={assessmentProcess}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="Application"
                title="What Our Online Assessment Application Includes"
                apps={assessmentApps}
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our online assessment application"
                items={assessmentFaqs}
                imageOne="/images/portfolio/portfolio-2.jpg"
                imageTwo="/images/portfolio/portfolio-4.jpg"
                classOption="section-bg-light"
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
