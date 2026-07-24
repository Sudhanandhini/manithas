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
    { icon: "fas fa-clipboard-list", title: "Requirements Gathering", description: "We understand your catalog size, member types, and borrowing rules to define the right structure for your eLibrary." },
    { icon: "fas fa-lightbulb", title: "Planning & Strategy Making", description: "We plan the catalog structure, search flow, and borrow/return process before any design work begins." },
    { icon: "fas fa-pencil-ruler", title: "Website Designing", description: "Our designers create a clean, searchable catalog layout that works for students, members, and library staff alike." },
    { icon: "fas fa-code", title: "Application Development", description: "We build a searchable digital catalog with borrow tracking and an admin panel for managing every title." },
    { icon: "fas fa-vial", title: "Testing", description: "We test search, borrowing flows, and due-date tracking thoroughly to ensure accurate records." },
    { icon: "fas fa-rocket", title: "Launching", description: "We launch your eLibrary application and provide ongoing support as your catalog and membership grow." }
];

const elibraryApps = [
    { icon: "fas fa-book", title: "Digital Book Catalog", description: "A searchable catalog of every title, author, and category, always up to date for students and members." },
    { icon: "fas fa-search", title: "Search & Filter", description: "Fast search and filtering by title, author, subject, or availability to find the right book quickly." },
    { icon: "fas fa-user", title: "Student & Member Login", description: "Individual logins so students and members can view their borrowing history and current holds." },
    { icon: "fas fa-exchange-alt", title: "Borrow & Return Tracking", description: "Every borrow and return is logged automatically, keeping records accurate without manual registers." },
    { icon: "fas fa-bell", title: "Due Date Reminders", description: "Automated reminders help members return books on time and avoid overdue books piling up." },
    { icon: "fas fa-file-excel", title: "Excel Data Export", description: "Admins can export catalog and borrowing records to Excel anytime for reporting and audits." }
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
                    "An eLibrary application replaces manual registers with a searchable digital catalog, so students and members can check book availability and borrowing history without visiting the library desk.",
                    "Librarians and admins get a dedicated dashboard to manage the book catalog, track due dates, and keep records accurate, while every transaction stays logged for easy reporting."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Our eLibrary Application Development Process"
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
