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

const alumniProcess = [
    { icon: "fas fa-clipboard-list", title: "Need Analysis", description: "We begin by mapping your institute’s and students’ needs, and collect necessary data like the alumni base, departments involved, and roles admin and super admin accesses. " },
    { icon: "fas fa-lightbulb", title: "Solution Planning", description: "This stage is to plan the flow of the web application including the directory structure, login flows, and permissions for every role to ensure a smoother design process."},                    
    { icon: "fas fa-pencil-ruler", title: "Design & Prototyping", description: "Our design process aims to clearly visualise the strategy set in place with clean and creative student, alumni and admin interfaces." },
    { icon: "fas fa-code", title: "Application Engineering", description: " With a set design in place, we develop secure, role-based access systems with integrated directories, profiles, and career management features." },
    { icon: "fas fa-vial", title: "Quality Assurance", description: "We test every feature of the developed web application from login roles, profile updates to directory search under every possible contingency before delivering." },
    { icon: "fas fa-rocket", title: "Deployment/Launching", description: "The final stage is to launch the alumni web application. We also ensure to provide consistent support during and post-launch, updating your alumni base as it grows. " }
];

const alumniApps = [
    { icon: "fas fa-user-graduate", title: "Student & Alumni Login", description: "Specific user logins for every user to create and manage profiles easily." },
   { icon: "fas fa-id-badge", title: "Alumni Profiles", description: "A unified profile system for students and alumni to create individual profiles with education, achievements and contact details" },
    { icon: "fas fa-user-shield", title: "Admin & Super Admin Roles", description: "Role-based admin and super admin access for an assignee to manage records, approvals and permissions in the back-end" },
    { icon: "fas fa-address-book", title: "Alumni Directory", description: "An updated and searchable directory for students to access categorised by batch, department and location " },
    { icon: "fas fa-briefcase", title: "Broadcast Events ", description: "A centralised career hub for alumni to find and share opportunities across the community" },
    
    { icon: "fas fa-file-excel", title: "Excel Data Export", description: "Enables admins to securely export student and alumni records to Excel for reporting and data analysis" }
];

const alumniFaqs = [
    { question: "Can the application support multiple colleges or departments?", answer: "Yes, the directory and admin structure can be organized by college, department, and graduation batch." },
    { question: "Who can access student and alumni data?", answer: "Access is role-based - students and alumni see their own profile, while admins and super admins see records relevant to their permission level." },
    { question: "Can alumni post event updates and upcoming events?", answer: "Yes, alumni can share event updates, reunions, meetups, and other community events that fellow members can browse and participate in." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/application/alumni");
}

export default function Alumni() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Alumni"
                content="Home"
                contentTwo="Alumni"
            />
            {/* <ContentSection
                eyebrow="Application"
                title="Alumni Management Web Application"
                description="A dedicated alumni web application that keeps colleges and their graduates connected for life, with role-based access for students, alumni, admin, and super admin."
                bullets={[
                    "Student & alumni login portals",
                    "Admin & super admin dashboards",
                    "Alumni directory & profile details",
                    "Career & job update sharing"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-3.jpg"
                imageTwo="/images/about/about-9.jpg"
                eyebrow="How We Build It"
                title="A Platform Built Around Your College And Its Alumni"
                paragraphs={[
                    "Our alumni web applications are built with colleges and universities as the primary stakeholder, giving institutions a single system to track graduates, share opportunities, and keep their alumni community engaged long after graduation.",
                    "With dedicated logins for students, alumni, admin, and super admin, every user sees exactly the information relevant to them, from personal profile details to institution-wide alumni directories."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Our Alumni Application Engineering Process"
                description="Our development process involves thorough planning, design, and testing, ensuring a secure, role-based platform tailored to your college and its alumni."
                steps={alumniProcess}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="Application"
                title="What Our Alumni Application Includes"
                apps={alumniApps}
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our alumni application"
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
