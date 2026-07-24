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

const realEstateProcess = [
    { icon: "fas fa-clipboard-list", title: "Requirements Gathering", description: "We understand your projects, properties, and buyer journey to define the right structure for your website." },
    { icon: "fas fa-lightbulb", title: "Planning & Strategy Making", description: "We plan listing pages, lead capture forms, and project structure to turn visitors into qualified leads." },
    { icon: "fas fa-pencil-ruler", title: "Website Designing", description: "Our designers create a layout that highlights floor plans, galleries, and project details clearly and attractively." },
    { icon: "fas fa-code", title: "Website Development", description: "We build a fast, map-integrated platform with lead capture and project progress updates built in." },
    { icon: "fas fa-vial", title: "Testing", description: "We test listing pages, forms, and map integrations thoroughly to ensure a smooth experience for buyers." },
    { icon: "fas fa-rocket", title: "Launching", description: "We launch your real estate or construction website and provide ongoing support as your projects progress." }
];

const realEstateApps = [
    { icon: "fas fa-building", title: "Property Listings", description: "Filterable listing pages with pricing, specifications, and availability." },
    { icon: "fas fa-drafting-compass", title: "Floor Plans & Specs", description: "Detailed layouts and specification sheets for every unit or project." },
    { icon: "fas fa-map-marked-alt", title: "Location & Map Integration", description: "Interactive maps showing proximity to key landmarks and infrastructure." },
    { icon: "fas fa-hard-hat", title: "Project Progress Updates", description: "Construction milestone pages that build buyer confidence over time." },
    { icon: "fas fa-file-signature", title: "Lead Capture Forms", description: "Enquiry and site-visit forms designed to convert serious buyers." },
    { icon: "fas fa-city", title: "Multi-Project Portfolios", description: "Structured showcases for developers managing multiple ongoing projects." }
];

const realEstateFaqs = [
    { question: "Can the site handle multiple ongoing projects?", answer: "Yes, we structure the platform so each project or property gets its own listing, gallery, and status updates." },
    { question: "Do you integrate map and location data?", answer: "Yes, we add interactive maps showing proximity to landmarks, infrastructure, and points of interest." },
    { question: "Can we capture and manage buyer enquiries?", answer: "Yes, we build enquiry and site-visit forms designed to convert serious buyers and route leads to your team." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/industry-solutions/real-estate-construction");
}

export default function RealEstateConstruction() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Real Estate & Construction"
                content="Home"
                contentTwo="Real Estate & Construction"
            />
            {/* <ContentSection
                eyebrow="Industry Solutions"
                title="Real Estate & Construction"
                description="Property and project showcase websites built to generate qualified leads for real estate and construction businesses."
                bullets={[
                    "Property/project listings",
                    "Lead capture forms",
                    "Gallery & floor plans",
                    "Location & map integration"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-9.jpg"
                imageTwo="/images/about/about-1.jpg"
                eyebrow="Real Estate & Construction Web Solutions"
                title="Property Showcases Built To Turn Visitors Into Qualified Leads"
                paragraphs={[
                    "Buyers and investors decide fast when a property listing is easy to browse and rich in detail. We build real estate and construction websites around clear listings, strong visuals, and lead capture that doesn't get in the way.",
                    "From floor plans to project timelines, every page is structured to answer a buyer's questions before they need to pick up the phone."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Our Real Estate & Construction Website Development Process"
                description="Our development process involves thorough planning, design, and testing, ensuring a user-friendly, responsive, and lead-generating site tailored to your business needs."
                steps={realEstateProcess}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="Industry Solutions"
                title="What Our Real Estate & Construction Solutions Include"
                apps={realEstateApps}
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our real estate websites"
                items={realEstateFaqs}
                imageOne="/images/portfolio/portfolio-9.jpg"
                imageTwo="/images/portfolio/portfolio-1.jpg"
                classOption="section-bg-light"
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
