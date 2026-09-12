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

const alumniProcess = [
    { icon: "fas fa-clipboard-list", title: "Map Your Alumni Ecosystem", description: "We start by understanding your institution's alumni base, departments, and the roles admins and super admins need to manage records." },
    { icon: "fas fa-lightbulb", title: "Structure The Directory & Access", description: "We map out the directory structure, login flows, and access permissions so every user gets the right experience from day one." },
    { icon: "fas fa-pencil-ruler", title: "Design For Students, Alumni & Admins", description: "We design clean, easy-to-navigate interfaces for students, alumni, and admins that reflect your institution's identity." },
    { icon: "fas fa-code", title: "Build The Alumni Network", description: "We build secure, role-based access with integrated directories, profiles, and career update sharing." },
    { icon: "fas fa-vial", title: "Validate Every Alumni Workflow", description: "Every feature, from login roles to directory search, is tested thoroughly before handover." },
    { icon: "fas fa-rocket", title: "Launch & Grow With Your Alumni Base", description: "We launch the solution and stay on for ongoing support as your alumni base continues to grow." }
];

const alumniFeatures = [
    { icon: "fas fa-address-book", title: "Losing Touch With Graduates", description: "A searchable, always-updated directory keeps every graduate reachable by batch, department, and location, so your institution never loses track of its alumni." },
    { icon: "fas fa-id-badge", title: "Scattered, Outdated Alumni Details", description: "Alumni keep their own education, achievement, and contact details current, so the institution always has accurate, self-maintained records." },
    { icon: "fas fa-user-shield", title: "Uncontrolled Record Access", description: "Role-based access for admins and super admins ensures records, approvals, and permissions are managed securely, with no unauthorised access." },
    { icon: "fas fa-briefcase", title: "Missed Reunions & Opportunities", description: "A shared space where alumni can post and discover reunions, meetups, and career opportunities keeps the community engaged long after graduation." },
    { icon: "fas fa-user-graduate", title: "Fragmented Student-Alumni Access", description: "Separate student and alumni logins give every user their own space to manage a profile, without depending on the institution for updates." },
    { icon: "fas fa-file-excel", title: "Manual Alumni Reporting", description: "Admins can export alumni records to Excel on demand, cutting out manual data compilation for reporting and institutional reviews." }
];

const alumniFaqs = [
    { question: "Can this solution support multiple colleges or departments?", answer: "Yes, the directory and admin structure can be organized by college, department, and graduation batch." },
    { question: "Who can access student and alumni data?", answer: "Access is role-based - students and alumni see their own profile, while admins and super admins see records relevant to their permission level." },
    { question: "Can alumni share event updates on the platform?", answer: "Yes, alumni can post reunions, meetups, and other community events for fellow members to browse and join." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/solutions/alumni");
}

export default function AlumniSolution() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Alumni Management"
                content="Home"
                contentTwo="Alumni"
            />
            <AboutImageSplit
                imageOne="/images/about/about-3.jpg"
                imageTwo="/images/about/about-9.jpg"
                eyebrow="Our Solution"
                title="Keep Your Institution And Its Alumni Connected For Life"
                paragraphs={[
                    "Our Alumni Management solution gives colleges and universities a single system to track graduates, share opportunities, and keep their alumni community engaged long after graduation.",
                    "With dedicated logins for students, alumni, admin, and super admin, every user sees exactly the information relevant to them, from personal profile details to institution-wide alumni directories."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Building A Solution That Keeps Your Alumni Network Connected"
                description="From mapping your alumni base to launching a secure, role-based platform, every step is built around keeping students, alumni, and admins connected long after graduation."
                steps={alumniProcess}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="Solution"
                title="Solutions We Provide For Alumni Management"
                apps={alumniFeatures}
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our alumni solution"
                items={alumniFaqs}
                imageOne="/images/portfolio/portfolio-4.jpg"
                imageTwo="/images/portfolio/portfolio-5.jpg"
                classOption="section-bg-light"
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
