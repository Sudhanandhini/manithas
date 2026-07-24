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
    { icon: "fas fa-clipboard-list", title: "Requirements Gathering", description: "We map your college's alumni base, departments, and the roles admin, super admin, and students each need." },
    { icon: "fas fa-lightbulb", title: "Planning & Strategy Making", description: "We plan the directory structure, login flows, and permissions for every role before any design work begins." },
    { icon: "fas fa-pencil-ruler", title: "Website Designing", description: "Our designers create clean student, alumni, and admin interfaces that are easy to navigate for every user type." },
    { icon: "fas fa-code", title: "Application Development", description: "We build secure, role-based logins with directory, profile, and career update features built in." },
    { icon: "fas fa-vial", title: "Testing", description: "We test every login role, profile update, and directory search thoroughly before handing it over." },
    { icon: "fas fa-rocket", title: "Launching", description: "We launch your alumni application and provide ongoing support as your graduate base keeps growing." }
];

const alumniApps = [
    { icon: "fas fa-user-graduate", title: "Student & Alumni Login", description: "Secure individual logins so every student and graduate can manage their own profile and details." },
    { icon: "fas fa-user-shield", title: "Admin & Super Admin Roles", description: "Layered admin access so college staff and super admins manage records, approvals, and permissions separately." },
    { icon: "fas fa-address-book", title: "Alumni Directory", description: "A searchable directory of graduates by batch, department, and location to help alumni reconnect." },
    { icon: "fas fa-briefcase", title: "Career & Job Updates", description: "A dedicated space for alumni to share and browse career opportunities within the community." },
    { icon: "fas fa-id-badge", title: "Detailed Alumni Profiles", description: "Education history, achievements, and contact details maintained in one place for every graduate." },
    { icon: "fas fa-file-excel", title: "Excel Data Export", description: "Admins can export student and alumni records to Excel anytime for reporting and offline use." }
];

const alumniFaqs = [
    { question: "Can the application support multiple colleges or departments?", answer: "Yes, the directory and admin structure can be organized by college, department, and graduation batch." },
    { question: "Who can access student and alumni data?", answer: "Access is role-based - students and alumni see their own profile, while admins and super admins see records relevant to their permission level." },
    { question: "Can alumni post career updates and job openings?", answer: "Yes, alumni can share career updates and job opportunities that other members of the community can browse." }
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
                title="Our Alumni Application Development Process"
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
