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
    "Flexible Customization",
    "Versatile Store Creation",
    "Easy Store Management",
    "SEO-Ready Architecture",
    "Extensive Integration Options",
    "Built-In Security"
];

const woocommerceServices = [
    {
        icon: "fas fa-cogs",
        title: "Custom WooCommerce Stores",
        description: "Tailored WooCommerce stores built around your products, customers, workflows, and growth goals"
    },
    {
        icon: "fas fa-paint-brush",
        title: "Theme And Template Design",
        description: "Distinctive, responsive themes that strengthen your brand and create engaging shopping experiences"
    },
    {
        icon: "fas fa-exchange-alt",
        title: "WooCommerce Migration",
        description: "Smooth transition to WooCommerce while preserving your data, functionality, and store performance"
    },
    {
        icon: "fas fa-plug",
        title: "WooCommerce Integration",
        description: "Connected payment gateways, APIs, shopping carts, and third-party tools for a seamless commerce ecosystem"
    },
    {
        icon: "fas fa-file-import",
        title: "PSD To WooCommerce Conversion",
        description: "Transformed approved designs into pixel-precise, responsive WooCommerce storefronts with accurate functionality"
    },
    {
        icon: "fas fa-tools",
        title: "Maintenance And Support",
        description: "Ongoing updates, optimization, troubleshooting, and technical support to keep your store performing reliably."
    }
];

const whyChooseWoocommerce = [
    {
        icon: "fas fa-globe",
        title: "Vast Domain Expertise",
        description: "Extensive experience delivering WooCommerce stores across industries"
    },
    {
        icon: "fas fa-lightbulb",
        title: "Innovative Approach",
        description: "Creative solutions designed to give your store a competitive edge"
    },
    {
        icon: "fas fa-search",
        title: "SEO Friendly Store",
        description: "Search-friendly structures built to strengthen online visibility"
    },
    {
        icon: "fas fa-award",
        title: "Guaranteed Quality",
        description: "Proven practices and standards for dependable store performance"
    },
    {
        icon: "fas fa-smile",
        title: "Guaranteed Satisfaction",
        description: "Solutions shaped around your goals, feedback, and expectations"
    },
    {
        icon: "fas fa-clock",
        title: "On-Time Delivery",
        description: "Efficient development aligned with your timelines and priorities"
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
    return buildMetadata("/services/woocommerce-development/");
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
            {/* <ContentSection
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
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-6.jpg"
                imageTwo="/images/about/about-7.jpg"
                eyebrow="Best WooCommerce Development Company"
                title="Full-Featured Online Stores On WordPress"
                paragraphs={[
                   " WooCommerce provides a flexible foundation for building eCommerce stores on WordPress, giving businesses the freedom to manage products, orders, payments, and customer experiences through a powerful and adaptable platform. Its extensive customization options make it suitable for businesses at different stages of their online journey." ,

"Our WooCommerce development focuses on creating tailored storefronts with responsive designs, intuitive shopping experiences, and seamless functionality. From custom theme development and product configuration to payment gateway integration and performance optimization, we build WooCommerce stores that are secure, scalable, and ready to support business growth."

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
                layout="card"
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
