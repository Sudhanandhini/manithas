import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import ChecklistTwoColumn from "@/src/components/PageContent/ChecklistTwoColumn";
import WhyChooseIconGrid from "@/src/components/PageContent/WhyChooseIconGrid";
import WhyChooseUs from "@/src/components/PageContent/WhyChooseUs";
import PageFaq from "@/src/components/PageContent/PageFaq";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

const ecommerceFeatures = [
    "User-friendly Interface",
    "Product Reviews & Ratings",
    "Secure Payment Gateway",
    "Order Management",
    "Multi-Currency Support",
    "Newsletter Subscription",
    "Customer Ratings and Reviews",
    "Social Media Integration",
    "Loyalty Program",
    "Responsive Design",
    "Secure Checkout Process",
    "Search Functionality"
];

const whyChooseEcommerce = [
    {
        icon: "fas fa-thumbs-up",
        title: "Reliable Services",
        description: "We're a responsible brand valued for reliability, helping you overcome technical challenges easily and get the best operational efficiency from your store."
    },
    {
        icon: "fas fa-bolt",
        title: "Agile Approach",
        description: "We work with an agile approach to e-commerce development, prioritizing customer feedback and collaboration to complete every project efficiently."
    },
    {
        icon: "fas fa-medal",
        title: "Proven Expertise",
        description: "Our team holds a proven level of expertise in e-commerce development, delivering solutions that match your business needs and goals."
    },
    {
        icon: "fas fa-star",
        title: "Reputed Clients",
        description: "We've earned the trust of businesses across industries, from growing startups to established, well-known brands."
    },
    {
        icon: "fas fa-microchip",
        title: "Advanced Tech-Stack",
        description: "We stay current with the latest technologies and trends, building every store on a modern, reliable tech stack."
    },
    {
        icon: "fas fa-layer-group",
        title: "Feature-Rich",
        description: "We build usability into every online store, integrating the features your business needs to succeed."
    }
];

const ecommerceBenefits = [
    {
        title: "Global Reach",
        description: "An e-commerce store makes your business globally accessible, without geographical boundaries limiting your reach."
    },
    {
        title: "Data-Driven Insights",
        description: "E-commerce stores include analytics tools that give businesses deeper insight into customer behavior, traffic, and purchase patterns."
    },
    {
        title: "24/7 Accessibility",
        description: "Having an e-commerce website lets your customers shop whenever they want, driving engagement and convenience."
    },
    {
        title: "Increased Customer Engagement",
        description: "An online store lets you engage customers effectively through personalized recommendations, offers, and loyalty features."
    },
    {
        title: "Boosted Customer Trust",
        description: "Cutting-edge encryption and secure payment gateways build customer confidence and reduce the risk of data breaches."
    }
];

const ecommerceFaqs = [
    {
        question: "What is an E-Commerce Website?",
        answer: "An e-commerce website is an online platform that enables businesses to sell products or services directly to customers over the internet."
    },
    {
        question: "Why do businesses need an E-Commerce Website?",
        answer: "An e-commerce website extends your reach beyond a physical location, lets you sell around the clock, and gives you a direct channel to engage and convert customers."
    },
    {
        question: "How to hire an E-Commerce Website Development Company?",
        answer: "Start by clearly defining your requirements, then compare experience, portfolio, and technical expertise before choosing the right development partner for your project."
    }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/e-commerce-development");
}

export default function ECommerceDevelopment() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="E-Commerce Development"
                content="Home"
                contentTwo="E-Commerce Development"
            />
            <ContentSection
                eyebrow="Web Development"
                title="E-Commerce Development"
                description="We design and build online stores that convert, with secure checkouts, product management, and integrations built around your catalog."
                bullets={[
                    "Custom storefront design",
                    "Secure payment gateway integration",
                    "Product & inventory management",
                    "Mobile-optimized checkout"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <ChecklistTwoColumn
                eyebrow="What You Get"
                title="eCommerce Website Features"
                items={ecommerceFeatures}
                classOption="section-bg-light"
            />
            <WhyChooseIconGrid
                eyebrow="Grow Your Business With"
                title="Why Choose Manithas For eCommerce Development?"
                description="With a customer-focused approach, agile delivery, and proven expertise, we're committed to becoming your reliable eCommerce development partner."
                items={whyChooseEcommerce}
                ctaLabel="Start Today"
                ctaLink="/contact"
            />
            <WhyChooseUs
                eyebrow="Why It Matters"
                title="Benefits of eCommerce Web Development"
                items={ecommerceBenefits}
                classOption="section-bg-light"
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Got questions about eCommerce development? <br/> We've got answers"
                items={ecommerceFaqs}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
