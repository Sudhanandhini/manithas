import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import AboutImageSplit from "@/src/components/PageContent/AboutImageSplit";
import ProcessSteps from "@/src/components/PageContent/ProcessSteps";
import RelatedApplications from "@/src/components/PageContent/RelatedApplications";
import PageFaq from "@/src/components/PageContent/PageFaq";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

const assessmentProcess = [
    { icon: "fas fa-clipboard-list", title: "Map Registration & Certification Needs", description: "We start by understanding your required registration fields, test formats, evaluation criteria, and certification needs." },
    { icon: "fas fa-lightbulb", title: "Structure Test & Certificate Flow", description: "We plan the registration form, test flow, and certificate generation for a smoother design process." },
    { icon: "fas fa-pencil-ruler", title: "Design A Distraction-Free Test Experience", description: "We design a simple, distraction-free registration and test interface accessible to users of all demographics." },
    { icon: "fas fa-code", title: "Build The Assessment Platform", description: "We build a self-registration section, online test interface, and automatic certificate generation." },
    { icon: "fas fa-vial", title: "Validate Every Test & Certificate", description: "We test the registration process, test-taking activity, and certificate generation for a smooth overall experience." },
    { icon: "fas fa-rocket", title: "Launch & Support Every Test Cycle", description: "We launch the solution and provide consistent support through every test cycle." }
];

const assessmentFeatures = [
    { icon: "fas fa-user-edit", title: "Barrier To Entry For Test-Takers", description: "Quick self-registration lets students sign up in seconds, without needing an admin-created account first." },
    { icon: "fas fa-laptop", title: "Limited Access On Different Devices", description: "An adaptable test interface works seamlessly across desktops, tablets, and mobile devices, so no student is left out." },
    { icon: "fas fa-certificate", title: "Delayed Certificate Issuance", description: "Certificates are generated instantly with accurate details the moment a student completes the assessment successfully." },
    { icon: "fas fa-download", title: "Extra Steps To Get Certified", description: "Students can download their certificate immediately after completion, with no follow-up or extra approval needed." },
    { icon: "fas fa-chart-bar", title: "No Visibility Into Test Participation", description: "A live results dashboard shows admins exactly who has attempted and completed each test in real time." },
    { icon: "fas fa-file-excel", title: "Manual Results Compilation", description: "Admins can export student and results data to Excel on demand for reporting and analysis." }
];

const assessmentFaqs = [
    { question: "Do students need an account to take the test?", answer: "No, students register with their name, class, place, and school, then take the test right away." },
    { question: "How do students get their certificate?", answer: "Certificates are generated automatically on successful completion and are available for the student to download immediately." },
    { question: "Can admins see how many students have taken the test?", answer: "Yes, admins get a results dashboard showing completion counts, and can download the full data as an Excel sheet." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/solutions/online-assessment-test");
}

export default function OnlineAssessmentSolution() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Online Assessment"
                content="Home"
                contentTwo="Online Assessment"
            />
            <AboutImageSplit
                imageOne="/images/about/about-8.jpg"
                imageTwo="/images/about/about-4.jpg"
                eyebrow="Our Solution"
                title="From Registration To Certificate, Fully Online"
                paragraphs={[
                    "Our Online Assessment solution makes tests accessible through a simple self-registration process. Students register with basic details like their name, class, school, and location, then take the assessment online without needing an admin-created account.",
                    "The platform instantly generates a downloadable certificate on completion, while administrators get a live view of participation to monitor activity and track how many students have finished the assessment."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Building A Solution That Takes Students From Registration To Certificate"
                description="From mapping your test formats to launching a self-registration platform, every step is built around a smooth, fully online assessment experience."
                steps={assessmentProcess}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="Solution"
                title="Solutions We Provide For Online Assessment"
                apps={assessmentFeatures}
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our online assessment solution"
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
