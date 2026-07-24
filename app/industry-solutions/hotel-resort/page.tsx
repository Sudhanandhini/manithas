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

const hotelProcess = [
    { icon: "fas fa-clipboard-list", title: "Requirements Gathering", description: "We understand your property, room types, and booking goals to define exactly what your website needs to deliver." },
    { icon: "fas fa-lightbulb", title: "Planning & Strategy Making", description: "We plan room showcases, booking flows, and gallery structure to turn browsing guests into direct bookings." },
    { icon: "fas fa-pencil-ruler", title: "Website Designing", description: "Our designers create visually rich layouts that showcase your property and amenities at their absolute best." },
    { icon: "fas fa-code", title: "Website Development", description: "We build a fast, mobile-ready platform with direct booking engine integration built in from the start." },
    { icon: "fas fa-vial", title: "Testing", description: "We test the booking flow, galleries, and responsiveness across devices to ensure a flawless guest experience." },
    { icon: "fas fa-rocket", title: "Launching", description: "We launch your hotel or resort website and provide ongoing support through every season." }
];

const hotelApps = [
    { icon: "fas fa-bed", title: "Room & Suite Showcases", description: "Rich, image-led pages for every room type, complete with amenities and pricing." },
    { icon: "fas fa-calendar-check", title: "Direct Booking Engine", description: "Integrated booking flows that reduce reliance on third-party travel platforms." },
    { icon: "fas fa-concierge-bell", title: "Amenity & Facility Pages", description: "Dedicated pages for spa, dining, events, and other on-property experiences." },
    { icon: "fas fa-images", title: "Gallery & Virtual Tours", description: "Immersive visuals that let guests explore the property before they arrive." },
    { icon: "fas fa-map-marked-alt", title: "Location & Attractions", description: "Guidance on nearby attractions to help guests plan their stay." },
    { icon: "fas fa-hotel", title: "Multi-Property Support", description: "A single platform structured to manage multiple hotels or resort locations." }
];

const hotelFaqs = [
    { question: "Can guests book directly without going through an OTA?", answer: "Yes, we integrate a direct booking engine so guests can reserve rooms straight from your website." },
    { question: "Can the site manage multiple properties?", answer: "Yes, the platform is structured to support multiple hotels or resort locations from one system." },
    { question: "Do you handle seasonal offers and packages?", answer: "Yes, we build dedicated pages for seasonal offers, packages, and promotions that are easy to update." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/industry-solutions/hotel-resort");
}

export default function HotelResort() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Hotel & Resort"
                content="Home"
                contentTwo="Hotel & Resort"
            />
            {/* <ContentSection
                eyebrow="Industry Solutions"
                title="Hotel & Resort"
                description="Digital experiences for hotels and resorts, from room showcases to direct booking flows that reduce dependence on OTAs."
                bullets={[
                    "Room & amenity showcases",
                    "Direct booking integration",
                    "Gallery & virtual tours",
                    "Multi-property support"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-7.jpg"
                imageTwo="/images/about/about-8.jpg"
                eyebrow="Hotel & Resort Web Solutions"
                title="Booking Experiences That Keep Guests Off Third-Party Platforms"
                paragraphs={[
                    "Every booking made through an OTA is a commission paid away from your business. We design hotel and resort websites with direct booking front and center, backed by visuals that do justice to your property.",
                    "From room-by-room showcases to gallery-driven storytelling, we build experiences that turn browsing guests into confirmed direct bookings."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Our Hotel & Resort Website Development Process"
                description="Our development process involves thorough planning, design, and testing, ensuring a user-friendly, responsive, and high-converting site tailored to your property."
                steps={hotelProcess}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="Industry Solutions"
                title="What Our Hotel & Resort Website Solutions Include"
                apps={hotelApps}
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our hotel & resort websites"
                items={hotelFaqs}
                imageOne="/images/portfolio/portfolio-7.jpg"
                imageTwo="/images/portfolio/portfolio-8.jpg"
                classOption="section-bg-light"
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
