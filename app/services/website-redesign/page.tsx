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
        title: "Faster Loading Speed",
        description: "Optimizes your website structure, assets, and code to deliver faster, smoother performance"
    },
    {
        icon: "fas fa-user-friends",
        title: "Better User Experience",
        description: "Simplifies navigation and refine interactions and makes your website easier and more engaging to use"
    },
    {
        icon: "fas fa-mobile-alt",
        title: "Seamless Responsiveness",
        description: "Creates flexible layouts that deliver consistent experiences across desktops, tablets, and smartphones"
    },
    {
        icon: "fas fa-shield-alt",
        title: "Strengthen Security",
        description: "Modernizes your website with updated technologies and security practices to protect your data and users."
    },
    {
        icon: "fas fa-chart-line",
        title: "Conversion-Focused Design",
        description: "Redesigns key pages and user journeys to guide visitors toward meaningful actions and business goals"
    },
    {
        icon: "fas fa-search",
        title: "SEO-Friendly Structure",
        description: "Preserves valuable SEO elements while improving content, structure, and technical foundations for better visibility"
    }
];

const redesignOffers = [
    {
        icon: "fas fa-shopping-cart",
        title: "eCommerce Website Redesign",
        description: "We reestablish your online store with better usability, modern design, and conversion-focused experiences."
    },
    {
        icon: "fab fa-wordpress",
        title: "WordPress Redesign Services",
        description: "We modernize your WordPress website while preserving valuable content, functionality, and SEO equity."
    },
    {
        icon: "fas fa-file-alt",
        title: "Landing Page Redesign",
        description: "We transform campaign pages with clearer messaging, engaging layouts, and stronger calls to action."
    },
    {
        icon: "fas fa-building",
        title: "Corporate Website Redesign",
        description: "We create polished, professional websites that strengthen your brand and build credibility with your audience."
    },
    {
        icon: "fas fa-th",
        title: "CMS Website Redesign",
        description: "We recreate your website while keeping your existing content management workflow simple and efficient."
    },
    {
        icon: "fab fa-html5",
        title: "HTML5 Website Redesign",
        description: "We rebuild outdated websites with clean, modern markup for faster performance and responsive experiences."
    }
];

const whyChooseRedesign = [
    {
        icon: "fas fa-user-graduate",
        title: "Highly Experienced",
        description: "Our experienced team delivers thoughtful redesigns tailored to diverse business requirements."
    },
    {
        icon: "fas fa-th-large",
        title: "Versatile Designers",
        description: "We create adaptable designs that reflect your brand across platforms and devices."
    },
    {
        icon: "fas fa-rocket",
        title: "Stronger Brand Presence",
        description: "We give your website a modern edge that strengthens credibility and brand perception."
    },
    {
        icon: "fas fa-laptop-code",
        title: "Modern Technology",
        description: "We use reliable, up-to-date technologies to build functional and future-ready websites."
    },
    {
        icon: "fas fa-chart-line",
        title: "More Leads & Conversions",
        description: "We optimize user journeys and key pages to encourage engagement and drive conversions."
    },
    {
        icon: "fas fa-exchange-alt",
        title: "Hassle-Free Content Migration",
        description: "We carefully migrate your content while preserving essential data, functionality, and SEO value."
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
    return buildMetadata("/services/website-redesign/");
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
            {/* <ContentSection
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
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-2.jpg"
                imageTwo="/images/about/about-3.jpg"
                eyebrow="Time For A Refresh"
                title="Best Website Redesign Services"
                paragraphs={[
                   "Your website is often the first impression of your business and an outdated experience can turn visitors away. A thoughtful redesign can give your website a fresh look while preserving the SEO value and visibility you’ve already built.",

"We rethink the elements that make the biggest difference, from layout and content to navigation and user experience. The result is a more engaging, intuitive, and conversion-focused website built to connect better with your audience and support your business goals." 

                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
            />
            <WhyChooseIconGrid
                eyebrow="Why It Matters"
                title="Benefits Of Website Redesigning"
                description="A strategic website redesign refreshes your digital presence, improves usability, strengthens performance, and creates a stronger foundation for growth and conversions."
                items={redesignBenefits}
                classOption="section-bg-light"
                layout="card"
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
                layout="card"
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
