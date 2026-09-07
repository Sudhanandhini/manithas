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

const elibraryProcess = [
    { icon: "fas fa-clipboard-list", title: "Need Analysis", description: "We begin by understanding your needs such as catalog size, member types, and other policies to define the right structure for your eLibrary." },
    { icon: "fas fa-lightbulb", title: "Solution Planning", description: "Here, we plan the catalog structure, search flow, and borrow and return processes for easier designing. " },
    { icon: "fas fa-pencil-ruler", title: "Design & Prototyping", description: "At this stage we focus on creating an accessible searchable catalog layout for students, members and staff to easily navigate." },
    { icon: "fas fa-code", title: "Application Engineering", description: "Once the design is finalised, we develop a searchable catalog system that tracks borrowing with an admin panel for overall management." },
    { icon: "fas fa-vial", title: "Quality Assurance", description: "We ensure the quality of our deliverable at this stage by testing borrowing flows, and due-date tracking to ensure accurate functioning." },
    { icon: "fas fa-rocket", title: "Deployment/Launching", description: "Finally, we help launch the e-library Web Application and ensure consistent support is provided on demand throughout. " }
];

const elibraryApps = [
    { icon: "fas fa-book", title: "Digital Book Catalog", description: "Detailed book catalog with title, genre and author descriptions for students and members to access easily" },
    { icon: "fas fa-search", title: "Search and Filter", description: "Quick search tab with a filtering option by title. category, author or any custom filter for easy access" },
    { icon: "fas fa-user", title: "Student and Member Login", description: "Separate individual logins for students and members to view and track details such as borrowing history, current borrowings and return due dates" },
    { icon: "fas fa-exchange-alt", title: "Borrow and Return Tracking", description: "Automated borrow and return logs that records necessary details accurately without manual interference" },
    { icon: "fas fa-bell", title: "Due Date Reminders", description: "Scheduled reminders that allow students and members to plan completion and help return books on time" },
    { icon: "fas fa-file-excel", title: "Excel Data Export", description: "Enables admins to securely export catalog and borrowing records to Excel for reporting and audits" }
];

const elibraryFaqs = [
    { question: "Can the eLibrary handle overdue tracking?", answer: "Yes, due dates and overdue books are tracked automatically, with reminders sent to members." },
    { question: "Can we manage multiple library branches from one system?", answer: "Yes, the catalog and admin panel can be structured to support multiple branches or campuses." },
    { question: "Can students see their borrowing history?", answer: "Yes, every student or member can log in and view their current and past borrowing history." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/application/elibrary");
}

export default function ELibrary() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="eLibrary"
                content="Home"
                contentTwo="eLibrary"
            />
            {/* <ContentSection
                eyebrow="Application"
                title="eLibrary Web Application"
                description="A digital library web application that lets students and members browse, borrow, and manage books online, while staff manage the catalog from a central admin panel."
                bullets={[
                    "Searchable digital catalog",
                    "Student & member login",
                    "Borrow / return tracking",
                    "Admin catalog management"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-5.jpg"
                imageTwo="/images/about/about-1.jpg"
                eyebrow="How We Build It"
                title="A Digital Library Built For Students And Staff Alike"
                paragraphs={[
  
                    "Our e-Library web application is designed to help educational institutions manage their library resources through one unified digital platform. From maintaining a searchable book catalog to checking availability and borrowing history, everything is brought together in a system, reducing dependency on manual registers and library desk visits.",
"Built with dedicated access for librarians, administrators, and members, the platform simplifies catalog management, borrowing and return tracking, and due-date monitoring. Every transaction is digitally recorded, keeping library records accurate, accessible, and ready for reporting while making the overall library experience more efficient."

                   
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Our eLibrary Application Engineering Process"
                description="Our development process involves thorough planning, design, and testing, ensuring a fast, searchable, and reliable eLibrary tailored to your institution."
                steps={elibraryProcess}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="Application"
                title="What Our eLibrary Application Includes"
                apps={elibraryApps}
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our eLibrary application"
                items={elibraryFaqs}
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
