import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import AboutImageSplit from "@/src/components/PageContent/AboutImageSplit";
import ChecklistTwoColumn from "@/src/components/PageContent/ChecklistTwoColumn";
import RelatedApplications from "@/src/components/PageContent/RelatedApplications";
import WhyChooseIconGrid from "@/src/components/PageContent/WhyChooseIconGrid";
import PageFaq from "@/src/components/PageContent/PageFaq";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

const woocommerceAdvantages = [
    "Custom Functionality",
    "Create Varieties Of Stores",
    "Easy To Design",
    "SEO Friendly",
    "Vast Integration Ability",
    "Highly Secured"
];

const woocommerceServices = [
    {
        icon: "fas fa-cogs",
        title: "Custom WooCommerce Stores",
        description: "Stores built around your specific business needs and goals."
    },
    {
        icon: "fas fa-paint-brush",
        title: "Theme And Template Design",
        description: "Custom themes and templates that boost sales and ROI for your store."
    },
    {
        icon: "fas fa-exchange-alt",
        title: "WooCommerce Migration",
        description: "Migrating your store to WooCommerce with a smooth, careful transition."
    },
    {
        icon: "fas fa-plug",
        title: "WooCommerce Integration",
        description: "Shopping carts, APIs, and third-party tools integrated seamlessly."
    },
    {
        icon: "fas fa-file-import",
        title: "PSD To WooCommerce Conversion",
        description: "PSD designs converted into functioning WooCommerce stores, pixel by pixel."
    },
    {
        icon: "fas fa-tools",
        title: "Maintenance And Support",
        description: "Ongoing support to keep your store running smoothly, day to day."
    }
];

const whyChooseWoocommerce = [
    {
        icon: "fas fa-globe",
        title: "Vast Domain Expertise",
        description: "Long experience developing WooCommerce stores across industries."
    },
    {
        icon: "fas fa-lightbulb",
        title: "Innovative Approach",
        description: "We bring fresh ideas that give your store a real competitive advantage."
    },
    {
        icon: "fas fa-search",
        title: "SEO Friendly Store",
        description: "We leverage the features that matter most for eCommerce visibility."
    },
    {
        icon: "fas fa-award",
        title: "Guaranteed Quality",
        description: "We follow the latest practices and guidelines for store quality."
    },
    {
        icon: "fas fa-smile",
        title: "Guaranteed Satisfaction",
        description: "Client satisfaction is a priority, not an afterthought."
    },
    {
        icon: "fas fa-clock",
        title: "On-Time Delivery",
        description: "Delivering tailored solutions based on your timeline and expectations."
    }
];

const woocommerceFaqs = [
    {
        question: "What is WooCommerce web development?",
        answer: "WooCommerce web development is building an online store on WordPress using the WooCommerce plugin to sell products or services."
    },
    {
        question: "How much does it cost to develop a WooCommerce website?",
        answer: "Cost depends on the number of products, custom features, and integrations needed - reach out for a tailored quote."
    },
    {
        question: "What are the advantages of WooCommerce web design for an online business?",
        answer: "WooCommerce offers flexibility, strong plugin support, SEO-friendliness, and scalability for growing online stores."
    },
    {
        question: "Is WooCommerce secured for an online business?",
        answer: "Yes, when configured with proper hosting, SSL, and secure payment gateways, WooCommerce is a secure platform for online business."
    }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/woocommerce-development");
}

export default function WooCommerceDevelopment() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="WooCommerce Development"
                content="Home"
                contentTwo="WooCommerce Development"
            />
            <ContentSection
                eyebrow="Web Development"
                title="WooCommerce Development"
                description="We build and customize WooCommerce stores on WordPress, from theme design to plugin configuration and payment setup."
                bullets={[
                    "Custom WooCommerce themes",
                    "Payment & shipping configuration",
                    "Extension & plugin integration",
                    "Store performance tuning"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <AboutImageSplit
                imageOne="/images/about/about-6.jpg"
                imageTwo="/images/about/about-7.jpg"
                eyebrow="Best WooCommerce Development Company"
                title="Full-Featured Online Stores On WordPress"
                paragraphs={[
                    "WooCommerce is one of the most flexible ways to launch an eCommerce store on WordPress, and it's a strong choice for both new and growing online businesses.",
                    "Our team builds custom WooCommerce stores that work seamlessly across devices, handling everything from theme design to payment gateway setup."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
            />
            <ChecklistTwoColumn
                eyebrow="Why WooCommerce"
                title="Advantages Of Using WooCommerce"
                items={woocommerceAdvantages}
                classOption="section-bg-light"
            />
            <RelatedApplications
                title="What Our WooCommerce Development Services Include"
                apps={woocommerceServices}
            />
            <WhyChooseIconGrid
                eyebrow="Grow Your Business With"
                title="Why Hire Manithas For WooCommerce Development"
                description="We help businesses launch and grow reliable, high-performing WooCommerce stores."
                items={whyChooseWoocommerce}
                ctaLabel="Start Today"
                ctaLink="/contact"
                classOption="section-bg-light"
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about WooCommerce development"
                items={woocommerceFaqs}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
