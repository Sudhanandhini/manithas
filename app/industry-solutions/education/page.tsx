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

const educationProcess = [
    { icon: "fas fa-clipboard-list", title: "Requirements Gathering", description: "We learn about your admissions process, courses, and the needs of students, parents, and staff before we design anything." },
    { icon: "fas fa-lightbulb", title: "Planning & Strategy Making", description: "We plan the site structure around admissions, courses, and notices so every visitor finds information fast." },
    { icon: "fas fa-pencil-ruler", title: "Website Designing", description: "Our designers create a clean, welcoming layout that works for prospective students, parents, and current staff alike." },
    { icon: "fas fa-code", title: "Website Development", description: "We build a responsive platform with easy content updates, so your team can manage notices and courses independently." },
    { icon: "fas fa-vial", title: "Testing", description: "We test admissions flows, portals, and mobile responsiveness thoroughly to ensure a smooth experience for every user." },
    { icon: "fas fa-rocket", title: "Launching", description: "We launch your education website and offer ongoing support for updates through every academic term." }
];

const educationApps = [
    { icon: "fas fa-graduation-cap", title: "Admissions Portal", description: "Guided enquiry and application flows that convert prospective students into applicants." },
    { icon: "fas fa-book-open", title: "Course & Program Listings", description: "Structured, searchable course pages with clear fees, duration, and eligibility details." },
    { icon: "fas fa-chalkboard-teacher", title: "Faculty Directory", description: "Profile pages for teaching staff with qualifications and departments." },
    { icon: "fas fa-calendar-alt", title: "Events & Notice Board", description: "Timely updates for academic events, holidays, and announcements." },
    { icon: "fas fa-user-graduate", title: "Student & Parent Portal", description: "Secure access to results, fee status, and communication from the institution." },
    { icon: "fas fa-school", title: "Multi-Campus Support", description: "Structured content for institutions managing multiple campuses or branches." }
];

const educationFaqs = [
    { question: "Can the website handle multiple campuses?", answer: "Yes, we structure the site so each campus or branch can maintain its own admissions, faculty, and notice content." },
    { question: "Can staff update content without a developer?", answer: "Yes, we build on a content management system so your team can update courses, notices, and events independently." },
    { question: "Do you build student and parent login portals?", answer: "Yes, we can add secure portals for results, fee status, and communication as part of the build." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/industry-solutions/education");
}

export default function Education() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Education"
                content="Home"
                contentTwo="Education"
            />
            {/* <ContentSection
                eyebrow="Industry Solutions"
                title="Education"
                description="Websites and portals for schools, colleges, and training institutes, built to inform prospective students and support current ones."
                bullets={[
                    "Admissions & course listings",
                    "Event & notice updates",
                    "Student/parent portals",
                    "Mobile-friendly design"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-3.jpg"
                imageTwo="/images/about/about-4.jpg"
                eyebrow="Education Web Solutions"
                title="Websites That Support Students, Parents, And Staff Alike"
                paragraphs={[
                    "An education website needs to serve very different audiences at once - prospective students researching courses, parents checking notices, and staff managing updates. We design information architecture that keeps every audience oriented.",
                    "From admissions funnels to event calendars and downloadable prospectuses, we build education platforms that stay easy to update long after launch."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Our Education Website Development Process"
                description="Our development process involves thorough planning, design, and testing, ensuring a user-friendly, responsive, and high-performing site tailored to your institution's needs."
                steps={educationProcess}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="Industry Solutions"
                title="What Our Education Website Solutions Include"
                apps={educationApps}
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our education websites"
                items={educationFaqs}
                imageOne="/images/portfolio/portfolio-3.jpg"
                imageTwo="/images/portfolio/portfolio-4.jpg"
                classOption="section-bg-light"
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
