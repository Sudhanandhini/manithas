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

const travelProcess = [
    { icon: "fas fa-clipboard-list", title: "Requirements Gathering", description: "We understand your packages, destinations, and booking goals to define exactly what your travel website needs." },
    { icon: "fas fa-lightbulb", title: "Planning & Strategy Making", description: "We plan itinerary pages, booking flows, and destination galleries to turn browsers into confirmed bookings." },
    { icon: "fas fa-pencil-ruler", title: "Website Designing", description: "Our designers create vivid, destination-led layouts that bring your tours and packages to life." },
    { icon: "fas fa-code", title: "Website Development", description: "We build a fast, mobile-ready platform with secure online booking and payments built in." },
    { icon: "fas fa-vial", title: "Testing", description: "We test booking flows, payments, and itinerary pages thoroughly to ensure a smooth experience for every traveler." },
    { icon: "fas fa-rocket", title: "Launching", description: "We launch your travel website and provide ongoing support through every season of bookings." }
];

const travelApps = [
    { icon: "fas fa-route", title: "Tour & Package Listings", description: "Organized, filterable listings for every tour, destination, and package." },
    { icon: "fas fa-suitcase-rolling", title: "Itinerary Showcases", description: "Day-by-day itinerary pages that help travelers picture the full experience." },
    { icon: "fas fa-credit-card", title: "Online Booking & Payments", description: "Secure booking flows with integrated payment gateways." },
    { icon: "fas fa-umbrella-beach", title: "Destination Galleries", description: "Visual storytelling pages that showcase destinations and experiences." },
    { icon: "fas fa-star", title: "Reviews & Trip Stories", description: "Social proof from past travelers to build trust with new visitors." },
    { icon: "fas fa-globe-asia", title: "Multi-Language Support", description: "Localized content and currency support for international travelers." }
];

const travelFaqs = [
    { question: "Can travelers book and pay online directly?", answer: "Yes, we integrate secure online booking and payment flows so travelers can reserve trips directly on your site." },
    { question: "Do you support multiple languages and currencies?", answer: "Yes, we can build in multi-language and multi-currency support for international travelers." },
    { question: "Can we showcase custom or day-by-day itineraries?", answer: "Yes, we design dedicated itinerary pages that walk travelers through the full trip experience." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/industry-solutions/tours-and-travels");
}

export default function ToursAndTravels() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Tours and Travels"
                content="Home"
                contentTwo="Tours and Travels"
            />
            {/* <ContentSection
                eyebrow="Industry Solutions"
                title="Tours and Travels"
                description="Websites and booking experiences built for tour operators and travel businesses, designed to turn browsers into bookings."
                bullets={[
                    "Tour & package listings",
                    "Online booking & payments",
                    "Itinerary showcases",
                    "Mobile-friendly design"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-2.jpg"
                imageTwo="/images/about/about-3.jpg"
                eyebrow="Tours & Travels Web Solutions"
                title="Travel Websites Designed To Turn Browsing Into Booked Trips"
                paragraphs={[
                    "Travelers explore dozens of options before booking. We design tour and travel websites with vivid itinerary storytelling and frictionless booking flows, so your packages stand out and convert.",
                    "From destination galleries to secure online payments, every element is built to move a curious visitor toward a confirmed booking."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Our Travel Website Development Process"
                description="Our travel website development process involves thorough planning, design, and testing, ensuring a user-friendly, responsive, and high-performing site tailored to your business needs."
                steps={travelProcess}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="Industry Solutions"
                title="What Our Tours & Travels Solutions Include"
                apps={travelApps}
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our travel websites"
                items={travelFaqs}
                imageOne="/images/portfolio/portfolio-2.jpg"
                imageTwo="/images/portfolio/portfolio-3.jpg"
                classOption="section-bg-light"
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
