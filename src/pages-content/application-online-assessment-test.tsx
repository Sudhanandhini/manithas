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

const assessmentProcess = [
    { icon: "fas fa-clipboard-list", title: "Need Analysis", description: "We begin by understanding your required registration fields, test formats, evaluation criteria and certification needs to design an accurate platform." },
    { icon: "fas fa-lightbulb", title: "Solution Planning", description: "Here, we plan the registration form, test flow, and certificate generation for an easy design process." },
    { icon: "fas fa-pencil-ruler", title: "Design & Prototyping", description: "At this stage we focus on creating a simple, distraction-free registration and test interface that is accessible to users of all demographics." },
    { icon: "fas fa-code", title: "Application Engineering", description: "Once the design is finalised, we develop a self-registration section, online test interface, and an automatic certificate generation toolkit." },
    { icon: "fas fa-vial", title: "Quality Assurance", description: "We ensure the quality of our deliverable at this stage by testing the registration process, test-taking activity, and the certificate generation ensuring a smooth overall user-experience." },
    { icon: "fas fa-rocket", title: "Deployment/Launching", description: "Finally, we help launch the Online Assessment Web Application and ensure consistent support is provided through every test cycle." }
];

const assessmentApps = [
    { icon: "fas fa-user-edit", title: "Quick Self-Registration", description: "Fast and simple registration interface for user registration without the need for separate admin management" },
    { icon: "fas fa-laptop", title: "Online Test Delivery", description: "Adaptable online test interface that is compatible with desktops, tablets and mobile devices" },
    { icon: "fas fa-certificate", title: "Instant Certificate Generation", description: "Automatic certificate generation tool that provides a certificate with accurate details as and when the assessment is marked complete and successful" },
    { icon: "fas fa-download", title: "Student Certificate Download", description: "Easy certification download option for users to access immediately after completion without any extra steps" },
    { icon: "fas fa-chart-bar", title: "Admin Results Dashboard", description: "Accurate data driven dashboard updated with user details, type of test attempted, and completed, tracked in real-time" },
    { icon: "fas fa-file-excel", title: "Excel Data Export", description: "Enables admins to securely export students’ and results data to Excel for reporting and other analyses" }
];

const assessmentFaqs = [
    { question: "Do students need an account to take the test?", answer: "No, students register with their name, class, place, and school, then take the test right away." },
    { question: "How do students get their certificate?", answer: "Certificates are generated automatically on successful completion and are available for the student to download immediately." },
    { question: "Can admins see how many students have taken the test?", answer: "Yes, admins get a results dashboard showing completion counts, and can download the full data as an Excel sheet." }
];

export default function ApplicationOnlineAssessmentTest() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Online Assessment "
                content="Home"
                contentTwo="Online Assessment "
            />
            {/* <ContentSection
                eyebrow="Application"
                title="Online Assessment Test Web Application"
                description="An online assessment web application where students register with their name, class, place, and school, take the test online, and instantly download a certificate on completion."
                bullets={[
                    "Simple self-registration",
                    "Online test delivery",
                    "Instant certificate generation",
                    "Admin results & Excel export"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-8.jpg"
                imageTwo="/images/about/about-4.jpg"
                eyebrow="How We Build It"
                title="From Registration To Certificate, Fully Online"
                paragraphs={[
                    "Our online assessment web application is designed to make assessments accessible through a simple, self-registration process. Students can register using basic details such as their name, class, school, and location, then take the assessment online without requiring an admin-created account, making it easy to reach a wider audience.",

"Built with automated certificate generation, the platform instantly creates a downloadable certificate upon test completion. Administrators get a live view of participation, enabling them to monitor test activity and track the number of students who have completed the assessment."

                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Our Online Assessment Application Engineering Process"
                description="Our development process involves thorough planning, design, and testing, ensuring a smooth registration-to-certificate experience for every student."
                steps={assessmentProcess}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="Application"
                title="What Our Online Assessment Application Includes"
                apps={assessmentApps}
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our online assessment application"
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
