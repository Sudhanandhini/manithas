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
    { icon: "fas fa-clipboard-list", title: "Need Analysis", description: "We begin by understanding your property, room types, amenities, audience, and booking goals to define what your website needs to deliver." },
    { icon: "fas fa-lightbulb", title: "Solution Planning", description: "Next, we plan room showcases, booking journeys, galleries, and key content to turn property browsers into direct-booking guests." },
    { icon: "fas fa-pencil-ruler", title: "Design & Prototyping", description: "Our designers create visually rich layouts that bring your rooms, amenities, and overall property experience to life" },
    { icon: "fas fa-code", title: "Website Development", description: "We build a fast, mobile-ready website with a seamless direct booking engine and payment integrations from the start." },
    { icon: "fas fa-vial", title: "Testing", description: "We thoroughly test booking flows, galleries, forms, responsiveness, and performance to ensure a smooth experience across devices." },
    { icon: "fas fa-rocket", title: "Deployment/Launching", description: "Once everything is ready, we launch your hotel or resort website and provide ongoing support to keep it performing smoothly year-round." }
];

const hotelApps = [
    { icon: "fas fa-bed", title: "Room & Suite Showcases", description: "We create engaging, image-rich pages that highlight every room and suite, along with amenities, features, and pricing." },
    { icon: "fas fa-calendar-check", title: "Direct Booking Engine", description: "We integrate seamless booking journeys that make it easy for guests to reserve directly through your website." },
    { icon: "fas fa-concierge-bell", title: "Amenity & Facility Pages", description: "We showcase your spa, restaurants, events, activities, and other property experiences through dedicated, engaging pages." },
    { icon: "fas fa-images", title: "Gallery & Virtual Tours", description: "We use immersive galleries and virtual tours to give potential guests a closer look at your property before they arrive." },
    { icon: "fas fa-map-marked-alt", title: "Location & Attractions", description: "We highlight nearby attractions, landmarks, and experiences to help guests discover more and plan their stay." },
    { icon: "fas fa-hotel", title: "Multi-Property Support", description: "We build structured platforms that make it easier to showcase and manage multiple hotels or resort locations in one place." }
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
               "A well-designed website in the Hospitality Industry gives you the opportunity to showcase your property, build trust with potential guests, and encourage them to book directly with you.",

"We create immersive hotel and resort websites with beautiful property showcases, room details, galleries, amenities, and seamless booking experiences. From the first impression to the final reservation, every element is designed to inspire guests and make direct booking simple"

                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Our Hotel & Resort Website Development Process"
                description="We take your travel website from idea to launch through a clear, structured process. From understanding your packages and audience to designing engaging experiences and testing every booking flow, we build websites that are easy to explore, simple to book, and ready to support your business."
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
