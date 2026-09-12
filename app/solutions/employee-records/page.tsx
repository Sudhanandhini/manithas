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

const employeeProcess = [
    { icon: "fas fa-clipboard-list", title: "Map Attendance & Payroll Policies", description: "We start by understanding your organization's attendance, leave, and payroll policies to define a workable structure." },
    { icon: "fas fa-lightbulb", title: "Structure IDs & Leave-To-Salary Flow", description: "We plan ID creation, login flows, and leave-to-salary calculations for a smoother design process." },
    { icon: "fas fa-pencil-ruler", title: "Design Dashboards For Employees & Admins", description: "We design clean dashboards for employees to access and a clear report view for admins." },
    { icon: "fas fa-code", title: "Build The Attendance & Payroll System", description: "We build a secure system with automatic login-logout capture and leave-linked payroll calculation." },
    { icon: "fas fa-vial", title: "Validate Every Payroll Calculation", description: "We test attendance capture, leave balance updates, and salary calculations to ensure accurate functioning." },
    { icon: "fas fa-rocket", title: "Launch & Support Every Payroll Cycle", description: "We launch the solution and provide consistent support through every payroll cycle." }
];

const employeeFeatures = [
    { icon: "fas fa-search", title: "Manual Attendance Manipulation", description: "Automatic login and logout capture removes manual entry, so every working day is recorded exactly as it happened." },
    { icon: "fas fa-bell", title: "Payroll Errors From Manual Calculation", description: "Salary is calculated automatically from attendance and leave data each cycle, cutting out manual payroll errors." },
    { icon: "fas fa-user", title: "Untracked Casual Leave", description: "Casual leave is tracked per employee with balances updated automatically, so nothing is missed or over-claimed." },
    { icon: "fas fa-exchange-alt", title: "No Visibility Into Earned Leave", description: "A dedicated earned-leave tracker gives employees and admins a clear, always-current view of running balances." },
    { icon: "fas fa-book", title: "Uncontrolled Employee Onboarding", description: "Employee IDs are created by an assigned admin, keeping onboarding controlled and every record accounted for." },
    { icon: "fas fa-file-excel", title: "Manual Payroll Reporting", description: "Admins can export attendance, leave, and payroll records to Excel on demand for reporting and audits." }
];

const employeeFaqs = [
    { question: "How is login and logout time captured?", answer: "The system automatically records each employee's first login and last logout time for the day, without manual entry." },
    { question: "How are casual leave and earned leave calculated?", answer: "Both leave types are tracked separately against each employee and factored into salary calculations automatically." },
    { question: "Can we manage employees across multiple departments?", answer: "Yes, employee records, attendance, and leave can be organized and reported by department." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/solutions/employee-records");
}

export default function EmployeeRecordsSolution() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Employee Records"
                content="Home"
                contentTwo="Employee Records"
            />
            <AboutImageSplit
                imageOne="/images/about/about-2.jpg"
                imageTwo="/images/about/about-6.jpg"
                eyebrow="Our Solution"
                title="Attendance And Payroll, Tracked Automatically"
                paragraphs={[
                    "Our Employee Records solution brings employee information, attendance, leave, and payroll together in one unified platform, from assigning unique employee IDs to capturing daily login and logout times.",
                    "Casual and earned leave are maintained against individual records, with attendance and leave data automatically factored into salary calculations, reducing manual payroll work and making employee management more efficient."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Building A Solution That Automates Attendance & Payroll"
                description="From mapping your attendance and leave policies to launching an automated payroll system, every step is built around removing manual work for your HR team."
                steps={employeeProcess}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="Solution"
                title="Solutions We Provide For Employee Records"
                apps={employeeFeatures}
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our employee records solution"
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
