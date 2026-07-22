import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import AboutImageSplit from "@/src/components/PageContent/AboutImageSplit";
import WhyChooseIconGrid from "@/src/components/PageContent/WhyChooseIconGrid";
import RelatedApplications from "@/src/components/PageContent/RelatedApplications";
import PageFaq from "@/src/components/PageContent/PageFaq";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

const redesignBenefits = [
    {
        icon: "fas fa-tachometer-alt",
        title: "Boost Loading Speed",
        description: "Outdated designs slow loading speed and harm performance. We use advanced techniques for improvement."
    },
    {
        icon: "fas fa-user-friends",
        title: "Enhance User Experience",
        description: "A redesign improves friendliness, navigation, and overall experience for your visitors."
    },
    {
        icon: "fas fa-mobile-alt",
        title: "Improve Responsiveness",
        description: "We ensure responsive design so your site displays well on every device."
    },
    {
        icon: "fas fa-shield-alt",
        title: "Strengthen Security",
        description: "We add features and enhance functionality while securing confidential data with current technologies."
    },
    {
        icon: "fas fa-chart-line",
        title: "Optimize For Sales",
        description: "We analyze your website to identify engaging elements and focus the redesign on increasing sales."
    },
    {
        icon: "fas fa-search",
        title: "Enhance SEO",
        description: "We follow SEO guidelines while redesigning, updating content to improve search rankings."
    }
];

const redesignOffers = [
    {
        icon: "fas fa-shopping-cart",
        title: "eCommerce Website Redesign",
        description: "Refreshed storefronts that keep your catalog and checkout converting."
    },
    {
        icon: "fab fa-wordpress",
        title: "WordPress Redesign Services",
        description: "Modernized WordPress sites without losing your existing content or SEO."
    },
    {
        icon: "fas fa-file-alt",
        title: "Landing Page Redesign",
        description: "Campaign pages rebuilt around clearer messaging and stronger CTAs."
    },
    {
        icon: "fas fa-building",
        title: "Corporate Website Redesign",
        description: "A more credible, on-brand presence for corporate and enterprise sites."
    },
    {
        icon: "fas fa-th",
        title: "CMS Website Redesign",
        description: "Redesigns that keep your content management workflow intact."
    },
    {
        icon: "fab fa-html5",
        title: "HTML5 Website Redesign",
        description: "Modern, standards-based markup for lightweight, fast-loading pages."
    }
];

const whyChooseRedesign = [
    {
        icon: "fas fa-user-graduate",
        title: "Highly Experienced",
        description: "Our team brings extensive experience delivering exceptional redesign solutions."
    },
    {
        icon: "fas fa-th-large",
        title: "Versatile Designers",
        description: "Designers who adapt across platforms, ensuring your site reflects your unique identity."
    },
    {
        icon: "fas fa-rocket",
        title: "Boost Your Brand",
        description: "A redesign that positions you as a leader in your industry."
    },
    {
        icon: "fas fa-laptop-code",
        title: "Use Modern Technologies",
        description: "We use current, reliable technologies to create visually strong, functional websites."
    },
    {
        icon: "fas fa-chart-line",
        title: "Increase Lead & Conversion",
        description: "Redesign strategies aimed at improving user experience and driving more leads."
    },
    {
        icon: "fas fa-exchange-alt",
        title: "Migrate Content Hassle-Free",
        description: "A seamless content migration process that protects your existing site."
    }
];

const redesignFaqs = [
    {
        question: "How do I know my website needs a redesign?",
        answer: "Signs include an outdated look, slow load times, poor mobile experience, or declining conversions and traffic."
    },
    {
        question: "Will a redesign affect my SEO rankings?",
        answer: "When done correctly with a proper migration plan, a redesign preserves and often improves your existing SEO rankings."
    },
    {
        question: "How long does a website redesign take?",
        answer: "Timelines vary with site size and scope, typically a few weeks for smaller sites to a couple of months for larger ones."
    }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/website-redesign");
}

export default function WebsiteRedesign() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Website Redesign"
                content="Home"
                contentTwo="Website Redesign"
            />
            <ContentSection
                eyebrow="Web Development"
                title="Website Redesign"
                description="We refresh outdated websites with modern design, better performance, and a clearer path to conversion, without losing your SEO equity."
                bullets={[
                    "UX & content audit",
                    "Modern, on-brand design",
                    "SEO-safe migration",
                    "Performance improvements"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <AboutImageSplit
                imageOne="/images/about/about-2.jpg"
                imageTwo="/images/about/about-3.jpg"
                eyebrow="Time For A Refresh"
                title="Best Website Redesign Services"
                paragraphs={[
                    "If your website looks outdated or isn't converting the way it should, a redesign can bring it up to modern standards without losing the SEO equity you've already built.",
                    "We focus on the components of your site that matter most - layout, messaging, and user experience - to make it more engaging and conversion-oriented."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
            />
            <WhyChooseIconGrid
                eyebrow="Why It Matters"
                title="Benefits Of Website Redesigning"
                description="Website redesigning services enhance user experience, improve functionality, and update aesthetics, boosting search rankings and conversion rates."
                items={redesignBenefits}
                classOption="section-bg-light"
            />
            <RelatedApplications
                title="What Our Website Redesign Services Offer"
                apps={redesignOffers}
            />
            <WhyChooseIconGrid
                eyebrow="Grow Your Business With"
                title="Benefits Of Selecting Manithas For Website Redesign"
                description="Selecting Manithas for website redesign guarantees a modern, user-friendly interface that boosts engagement and conversions."
                items={whyChooseRedesign}
                ctaLabel="Start Today"
                ctaLink="/contact"
                classOption="section-bg-light"
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about website redesign"
                items={redesignFaqs}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
