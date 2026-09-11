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
     { icon: "fas fa-clipboard-list", title: "Need Analysis", description: "We begin by understanding your destinations, travel packages, target audience, and booking goals to define the right website requirements." },
    { icon: "fas fa-lightbulb", title: "Solution Planning", description: "Next, we map out destination pages, itineraries, booking journeys, and key features to create a smooth path from discovery to booking." },
    { icon: "fas fa-pencil-ruler", title: "Design & Prototyping", description: "Then, we create engaging, destination-focused designs that showcase your packages and make every trip look worth exploring." },
    { icon: "fas fa-code", title: "Website Development", description: "At this stage, we  turn the approved designs into a fast, responsive website with seamless booking functionality and secure online payments." },
    { icon: "fas fa-vial", title: "Testing", description: "Here, we thoroughly test booking flows, payment processes, forms, and website performance to ensure everything works smoothly across devices." },
    { icon: "fas fa-rocket", title: "Deployment/Launching", description: "Once everything is ready, we launch your travel website and provide ongoing support to keep it performing smoothly throughout your booking seasons." }
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
                     "A great travel website should make visitors want to pack their bags and book the journey. We create engaging tour and travel websites that bring destinations, experiences, and packages to life while making the path from discovery to booking simple.",

"With immersive destination galleries, detailed itineraries, easy enquiry processes and secure online payments, every element should be designed to inspire confidence, capture interest, and turn travel dreams into confirmed bookings."

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
