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
        title: "Higher Conversion Potential",
        description: "Focused content and clear calls to action guide visitors toward a specific goal"
    },
    {
        title: "Smarter Campaign Insights",
        description: "Dedicated pages make it easier to track and measure campaign performance"
    },
    {
        title: "Stronger Brand Impact",
        description: "Purpose-built designs create relevant and engaging first impressions"
    },
    {
        title: "Better Ad Performance",
        description: "Relevant landing pages improve user experience, ad relevance, and campaign efficiency"
    },
  
];

const landingPageServices = [
    {
        icon: "fas fa-magnet",
        title: "High-Converting Lead Forms",
        description: "We create friction-free forms designed to capture valuable visitor information."
    },
    {
        icon: "fas fa-vial",
        title: "Conversion-Focused A/B Testing",
        description: "We build flexible layouts that make testing headlines, offers, and CTAs simple."
    },
    {
        icon: "fas fa-tachometer-alt",
        title: "Performance Optimization",
        description: "We develop lightweight pages designed for fast, smooth loading across devices."
    },
    {
        icon: "fas fa-chart-line",
        title: "Analytics Integration",
        description: "We integrate tracking tools to measure visitors, conversions, and campaign performance."
    },
    {
        icon: "fas fa-mobile-alt",
        title: "Mobile-First Design",
        description: "We create responsive layouts that deliver seamless experiences across every screen."
    },
    {
        icon: "fas fa-palette",
        title: "Brand-Aligned Design",
        description: "We blend your brand identity with focused visuals that keep attention on your offer."
    }
];

const whyChooseLandingPage = [
    {
        icon: "fas fa-bullseye",
        title: "Conversion-Driven Design",
        description: "Every element is crafted to support your campaign and conversion goals."
    },
    {
        icon: "fas fa-bolt",
        title: "Quick & Efficient Delivery",
        description: "We develop landing pages quickly to keep your campaigns moving."
    },
    {
        icon: "fas fa-users",
        title: "Audience-Centric Approach",
        description: "We design around your audience, intent, and expected user journey."
    },
    {
        icon: "fas fa-shield-alt",
        title: "Secure & Reliable",
        description: "We build stable, well-tested pages that deliver consistent performance."
    },
    {
        icon: "fas fa-search",
        title: "SEO-Ready Structure",
        description: "Clean, optimized foundations help search engines understand your pages."
    },
    {
        icon: "fas fa-headset",
        title: "Dedicated Support",
        description: "Our team remains available to assist throughout development and beyond."
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
    return buildMetadata("/services/landing-page-development/");
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
            {/* <ContentSection
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
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-5.jpg"
                imageTwo="/images/about/about-6.jpg"
                eyebrow="What Is A Landing Page"
                title="Purpose-Built Pages That Convert"
                paragraphs={[
                  "A landing page is a focused digital experience designed around a specific business goal, such as generating leads, encouraging sign-ups, promoting an offer, or driving purchases. By keeping content and interactions centered on one objective, landing pages help businesses create clear and purposeful customer journeys.",

"Our landing page development focuses on combining compelling messaging, intuitive layouts, and strategic calls to action that guide visitors toward the desired outcome. We create responsive, fast-loading, and conversion-focused landing pages tailored to your audience, campaign, and business objectives."

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
