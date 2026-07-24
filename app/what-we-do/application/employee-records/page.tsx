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

const employeeProcess = [
    { icon: "fas fa-clipboard-list", title: "Requirements Gathering", description: "We understand your attendance rules, leave policy, and salary structure to define the right system for your team." },
    { icon: "fas fa-lightbulb", title: "Planning & Strategy Making", description: "We plan employee ID creation, login flows, and leave-to-salary calculations before any design work begins." },
    { icon: "fas fa-pencil-ruler", title: "Website Designing", description: "Our designers create a simple login and dashboard layout for employees and a clear reporting view for admins." },
    { icon: "fas fa-code", title: "Application Development", description: "We build automatic login/logout capture, leave tracking, and salary calculation logic built in." },
    { icon: "fas fa-vial", title: "Testing", description: "We test attendance capture, leave balances, and salary calculations thoroughly to ensure accurate payroll." },
    { icon: "fas fa-rocket", title: "Launching", description: "We launch your employee records application and provide ongoing support through every payroll cycle." }
];

const employeeApps = [
    { icon: "fas fa-id-card", title: "Admin-Created Employee IDs", description: "Admins create a unique employee ID for every staff member, keeping records organized from day one." },
    { icon: "fas fa-clock", title: "Login/Logout Time Capture", description: "The system automatically captures each employee's first login and last logout time every day." },
    { icon: "fas fa-calendar-minus", title: "Casual Leave Tracking", description: "Casual leave is tracked against each employee, with balances updated automatically as leave is taken." },
    { icon: "fas fa-calendar-plus", title: "Earned Leave Tracking", description: "Earned leave accrues and is tracked separately, giving employees and admins a clear running balance." },
    { icon: "fas fa-money-check-alt", title: "Automated Salary Calculation", description: "Salary calculations factor in attendance and leave data automatically, cutting down manual payroll work." },
    { icon: "fas fa-file-excel", title: "Excel Data Export", description: "Admins can export attendance, leave, and salary records to Excel anytime for reporting and audits." }
];

const employeeFaqs = [
    { question: "How is login and logout time captured?", answer: "The system automatically records each employee's first login and last logout time for the day, without manual entry." },
    { question: "How are casual leave and earned leave calculated?", answer: "Both leave types are tracked separately against each employee and factored into salary calculations automatically." },
    { question: "Can we manage employees across multiple departments?", answer: "Yes, employee records, attendance, and leave can be organized and reported by department." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/application/employee-records");
}

export default function EmployeeRecords() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Employee Records"
                content="Home"
                contentTwo="Employee Records"
            />
            {/* <ContentSection
                eyebrow="Application"
                title="Employee Records Web Application"
                description="An employee records web application for attendance and payroll, with admin-created employee IDs, automatic login/logout capture, leave tracking, and salary calculation."
                bullets={[
                    "Admin-created employee IDs",
                    "Automatic login/logout capture",
                    "Casual & earned leave tracking",
                    "Leave-linked salary calculation"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-2.jpg"
                imageTwo="/images/about/about-6.jpg"
                eyebrow="How We Build It"
                title="Attendance And Payroll, Tracked Automatically"
                paragraphs={[
                    "Every employee gets a unique ID created by the admin, then logs in and out through the application, which automatically captures their first login and last logout time each day.",
                    "Casual leave and earned leave are tracked against each employee, and salary calculations factor in attendance and leave data automatically, cutting down manual payroll work."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Our Employee Records Application Development Process"
                description="Our development process involves thorough planning, design, and testing, ensuring an accurate, automated attendance and payroll system tailored to your team."
                steps={employeeProcess}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="Application"
                title="What Our Employee Records Application Includes"
                apps={employeeApps}
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our employee records application"
                items={employeeFaqs}
                imageOne="/images/portfolio/portfolio-1.jpg"
                imageTwo="/images/portfolio/portfolio-3.jpg"
                classOption="section-bg-light"
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
