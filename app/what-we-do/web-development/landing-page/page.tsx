import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import AboutImageSplit from "@/src/components/PageContent/AboutImageSplit";
import WhyChooseUs from "@/src/components/PageContent/WhyChooseUs";
import RelatedApplications from "@/src/components/PageContent/RelatedApplications";
import WhyChooseIconGrid from "@/src/components/PageContent/WhyChooseIconGrid";
import PageFaq from "@/src/components/PageContent/PageFaq";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

const landingPageBenefits = [
    {
        title: "Higher Conversion Rates",
        description: "A focused page with a single call to action converts far better than sending campaign traffic to a general website."
    },
    {
        title: "Better Campaign Tracking",
        description: "Dedicated landing pages make it easy to measure exactly how each campaign is performing."
    },
    {
        title: "Stronger First Impressions",
        description: "A landing page tailored to your offer creates a welcoming, on-message first impression for new visitors."
    },
    {
        title: "Improved Ad Quality Scores",
        description: "Relevant, focused landing pages improve ad relevance, often lowering your cost per click."
    },
    {
        title: "Flexible A/B Testing",
        description: "Standalone pages make it simple to test headlines, offers, and layouts without touching your main site."
    }
];

const landingPageServices = [
    {
        icon: "fas fa-magnet",
        title: "Lead Capture Forms",
        description: "Forms designed to collect the details you need without adding friction for visitors."
    },
    {
        icon: "fas fa-vial",
        title: "A/B Testing Ready",
        description: "Layouts built to support testing different headlines, offers, and CTAs."
    },
    {
        icon: "fas fa-tachometer-alt",
        title: "Fast Load Times",
        description: "Lightweight, optimized pages that load quickly on every device."
    },
    {
        icon: "fas fa-chart-line",
        title: "Analytics Integration",
        description: "Conversion tracking wired in from day one so you can measure results."
    },
    {
        icon: "fas fa-mobile-alt",
        title: "Mobile-Optimized Layouts",
        description: "Pages that look and convert just as well on mobile as on desktop."
    },
    {
        icon: "fas fa-palette",
        title: "On-Brand Design",
        description: "Every page matches your brand identity while staying focused on the offer."
    }
];

const whyChooseLandingPage = [
    {
        icon: "fas fa-bullseye",
        title: "Conversion-Focused",
        description: "Every design decision is made with your conversion goal in mind."
    },
    {
        icon: "fas fa-bolt",
        title: "Fast Turnaround",
        description: "We move quickly so your campaigns don't wait on page development."
    },
    {
        icon: "fas fa-users",
        title: "Audience-First Design",
        description: "We design around your audience's intent, not generic templates."
    },
    {
        icon: "fas fa-shield-alt",
        title: "Secure & Reliable",
        description: "Built on secure, well-tested foundations that stay online when it matters."
    },
    {
        icon: "fas fa-search",
        title: "SEO-Friendly",
        description: "Pages built with clean markup that search engines can read easily."
    },
    {
        icon: "fas fa-headset",
        title: "Dedicated Support",
        description: "Direct access to your development team throughout the project."
    }
];

const landingPageFaqs = [
    {
        question: "What is a landing page?",
        answer: "A landing page is a standalone web page designed for a single campaign or offer, built to drive one specific visitor action."
    },
    {
        question: "How is a landing page different from a homepage?",
        answer: "A homepage introduces your whole business, while a landing page is focused on a single offer and a single call to action, with fewer distractions."
    },
    {
        question: "How much does a landing page cost?",
        answer: "Cost depends on design complexity, the number of sections, and any custom integrations needed - get in touch and we'll share a clear quote."
    }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/landing-page");
}

export default function LandingPage() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Landing Page"
                content="Home"
                contentTwo="Landing Page"
            />
            <ContentSection
                eyebrow="Web Development"
                title="Landing Page"
                description="High-converting landing pages designed and built to turn visitors into leads and customers for your campaigns."
                bullets={[
                    "Conversion-focused design",
                    "A/B test-ready layouts",
                    "Fast load times",
                    "Lead capture & analytics integration"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <AboutImageSplit
                imageOne="/images/about/about-5.jpg"
                imageTwo="/images/about/about-6.jpg"
                eyebrow="What Is A Landing Page"
                title="Purpose-Built Pages That Convert"
                paragraphs={[
                    "A landing page is a focused, single-purpose page built to drive one specific action, whether that's a signup, a purchase, or a callback request from a campaign.",
                    "We design every landing page around your offer and audience, pairing clear messaging with a strong call to action so visitors know exactly what to do next."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <WhyChooseUs
                eyebrow="Why It Matters"
                title="Benefits Of A Landing Page"
                items={landingPageBenefits}
                classOption="section-bg-light"
            />
            <RelatedApplications
                title="What Our Landing Page Services Include"
                apps={landingPageServices}
            />
            <WhyChooseIconGrid
                eyebrow="Grow Your Business With"
                title="Why Choose Manithas For Landing Page Design"
                description="We create high-converting landing pages that enhance user experience and drive results for every campaign."
                items={whyChooseLandingPage}
                ctaLabel="Start Today"
                ctaLink="/contact"
                classOption="section-bg-light"
                layout="card"
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about landing pages"
                items={landingPageFaqs}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
