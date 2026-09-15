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
     { icon: "fas fa-clipboard-list", title: "Need Analysis", description: "We begin by understanding your organization’s attendance, payroll and leave policies to establish a definite workable system." },
    { icon: "fas fa-lightbulb", title: "Solution Planning", description: "Here, we plan the flow of the web application with ID creation, login flows, and leave-to-salary calculation features for an easier design process." },
    { icon: "fas fa-pencil-ruler", title: "Design & Prototyping", description: "At this stage we focus on creating a clean login and dashboard layouts for employees to access and a ‘Report’ view for admins." },
    { icon: "fas fa-code", title: "Application Engineering", description: "Once the design is finalised, we develop a secure system with automatic login-logout  features." },
    { icon: "fas fa-vial", title: "Quality Assurance", description: "We ensure the quality of our deliverable at this stage by testing attendance capture, leave balances updates, and salary calculations to ensure accurate functioning." },
    { icon: "fas fa-rocket", title: "Deployment/Launching", description: "Finally, we help launch the Employee Records Web Application and ensure consistent support is provided on demand through any payroll cycle. " }
];

const employeeApps = [
   { icon: "fas fa-book", title: "Admin-Created Employee IDs", description: "Individual employee database creation access for an assigned admin to create employee IDs" },
    { icon: "fas fa-search", title: "Login/Logout Time Capture ", description: "Automatic login-logout capturing feature for every working day removing possible manual manipulation" },
    { icon: "fas fa-user", title: "Casual Leave Tracking", description: "Casual leave tracking feature for every employee with the leave balance updated automatically" },
    { icon: "fas fa-exchange-alt", title: "Earned Leave Tracking", description: "Earned leave tracking as a separate feature to ensure a clear visual of actual running leave balances" },
    { icon: "fas fa-bell", title: "Automated Salary Calculation", description: "Automatic salary calculation feature that considers attendance and leave details for each payroll, reducing manual review" },
    { icon: "fas fa-file-excel", title: "Excel Data Export", description: "Enables admins to securely export attendance, leave and payroll records to Excel for reporting, data analysis and other audits" }
];

const employeeFaqs = [
    { question: "How is login and logout time captured?", answer: "The system automatically records each employee's first login and last logout time for the day, without manual entry." },
    { question: "How are casual leave and earned leave calculated?", answer: "Both leave types are tracked separately against each employee and factored into salary calculations automatically." },
    { question: "Can we manage employees across multiple departments?", answer: "Yes, employee records, attendance, and leave can be organized and reported by department." }
];

export default function ApplicationEmployeeRecords() {
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
                        "Our Employee Records web application is designed to help organizations manage employee information, attendance, leave, and payroll through one unified platform. From assigning unique employee IDs to tracking daily login and logout times, everything is brought together in a seamless system. ",

                           "Built with automated attendance and leave tracking, the platform records first login and last logout times each day, while casual and earned leave can be maintained against individual employee records. Additional features like attendance and leave data factored into salary calculations, reducing manual payroll work and making employee management more efficient are included."


                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Our Employee Records Application Engineering Process"
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
