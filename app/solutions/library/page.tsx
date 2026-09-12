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

const libraryProcess = [
    { icon: "fas fa-clipboard-list", title: "Map Your Catalog & Lending Rules", description: "We start by understanding your catalog size, member types, and lending policies to define the right structure for your library." },
    { icon: "fas fa-lightbulb", title: "Structure Search & Borrowing Flow", description: "We plan the catalog structure, search flow, and borrow-and-return process for a smoother design phase." },
    { icon: "fas fa-pencil-ruler", title: "Design For Students, Members & Staff", description: "We design an accessible, searchable catalog layout that students, members, and staff can navigate easily." },
    { icon: "fas fa-code", title: "Build The Digital Library", description: "We build a searchable catalog system with automated borrowing tracking and a central admin panel." },
    { icon: "fas fa-vial", title: "Validate Every Borrowing Workflow", description: "We test borrowing flows and due-date tracking thoroughly to ensure accurate day-to-day functioning." },
    { icon: "fas fa-rocket", title: "Launch & Grow With Your Library", description: "We launch the solution and provide consistent support as your library and its membership grow." }
];

const libraryFeatures = [
    { icon: "fas fa-search", title: "Hard-To-Find Books", description: "A searchable catalog with filtering by title, category, or author helps students and members find what they need in seconds." },
    { icon: "fas fa-book", title: "Disorganized Catalog Records", description: "A detailed digital catalog with title, genre, and author details replaces registers with one organized, browsable system." },
    { icon: "fas fa-exchange-alt", title: "Manual Borrow & Return Errors", description: "Automated borrow-and-return logging records every transaction accurately, removing manual entry and human error." },
    { icon: "fas fa-bell", title: "Missed Return Deadlines", description: "Scheduled due-date reminders help members return books on time, cutting down on overdue items." },
    { icon: "fas fa-user", title: "No Visibility Into Borrowing History", description: "Individual student and member logins let each user check their own current loans and past borrowing history anytime." },
    { icon: "fas fa-file-excel", title: "Manual Library Reporting", description: "Admins can export catalog and borrowing records to Excel on demand for audits and reporting, without manual compilation." }
];

const libraryFaqs = [
    { question: "Can this solution handle overdue tracking?", answer: "Yes, due dates and overdue books are tracked automatically, with reminders sent to members." },
    { question: "Can we manage multiple library branches from one system?", answer: "Yes, the catalog and admin panel can be structured to support multiple branches or campuses." },
    { question: "Can students see their own borrowing history?", answer: "Yes, every student or member can log in and view their current and past borrowing history." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/solutions/library");
}

export default function LibrarySolution() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Library Management"
                content="Home"
                contentTwo="Library"
            />
            <AboutImageSplit
                imageOne="/images/about/about-5.jpg"
                imageTwo="/images/about/about-1.jpg"
                eyebrow="Our Solution"
                title="A Digital Library Built For Students And Staff Alike"
                paragraphs={[
                    "Our Library Management solution helps educational institutions manage their resources through one unified digital platform, cutting dependency on manual registers and library desk visits.",
                    "With dedicated access for librarians, administrators, and members, the platform simplifies catalog management, borrowing and return tracking, and due-date monitoring, keeping every record accurate and ready for reporting."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Building A Solution That Makes Your Library Easy To Manage"
                description="From mapping your catalog to launching a searchable, reliable platform, every step is built around making borrowing and lending effortless for students, members, and staff."
                steps={libraryProcess}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="Solution"
                title="Solutions We Provide For Library Management"
                apps={libraryFeatures}
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our library solution"
                items={libraryFaqs}
                imageOne="/images/portfolio/portfolio-6.jpg"
                imageTwo="/images/portfolio/portfolio-7.jpg"
                classOption="section-bg-light"
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
