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

const shopifyBenefits = [
    "Secure, PCI-compliant checkout out of the box",
    "Fast, mobile-optimized storefronts",
    "Wide app ecosystem for every business need",
    "Built-in payment gateway support",
    "Easy inventory & order management",
    "Scales smoothly as your catalog grows"
];

const shopifyServices = [
    { icon: "fas fa-store", title: "Custom Shopify Themes", description: "Designing and developing distinctive Shopify themes that reflect your brand and engage your customers." },
    { icon: "fas fa-shopping-cart", title: "Shopify Store Setup", description: "Configuring your store, products, collections, taxes, shipping, and essential settings for a smooth launch." },
    { icon: "fas fa-plug", title: "App & API Integration", description: "Connecting Shopify with apps, ERPs, APIs, and business tools to streamline your existing workflows." },
    { icon: "fas fa-credit-card", title: "Payment Gateway Setup", description: "Configuring secure payment solutions to deliver a smooth and reliable checkout experience." },
    { icon: "fas fa-exchange-alt", title: "Platform Migration", description: "Moving your products, orders, customers, and essential data to Shopify with minimal disruption" },
    { icon: "fas fa-tools", title: "Maintenance & Support", description: "Ongoing updates, troubleshooting, optimization, and support to keep your store running smoothly" }
];

const whyChooseShopify = [
    { icon: "fas fa-chart-line", title: "Conversion-Focused Design", description: "Store layouts designed to guide visitors toward checkout." },
    { icon: "fas fa-bolt", title: "Fast Storefronts", description: "Optimized themes and images for quick load times on every device." },
    { icon: "fas fa-shield-alt", title: "Secure & Reliable", description: "Built on Shopify's secure, PCI-compliant infrastructure." },
    { icon: "fas fa-comments", title: "Transparent Communication", description: "Clear updates at every stage of your store's build." }
];

const shopifyFaqs = [
    { question: "Can you migrate my existing store to Shopify?", answer: "Yes, we migrate products, orders, and customer data from your existing platform to Shopify with minimal disruption." },
    { question: "Do you build custom Shopify themes or use templates?", answer: "We do both. We can customize an existing Shopify theme or build a fully custom theme designed around your brand." },
    { question: "Can you integrate third-party apps and payment gateways?", answer: "Yes, we integrate Shopify apps, ERPs, and regional payment gateways to match your business needs." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/services/shopify-development/");
}

export default function ShopifyDevelopment() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Shopify Website Development"
                content="Home"
                contentTwo="Shopify Development"
            />
            {/* <ContentSection
                eyebrow="Web Development"
                title="Shopify Website Development"
                description="We design and build high-converting Shopify stores, from theme customization to app integrations, so you can launch and scale your online store with confidence."
                bullets={[
                    "Custom Shopify theme design",
                    "App & payment gateway integration",
                    "Product catalog & collection setup",
                    "Speed & conversion optimization"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-2.jpg"
                imageTwo="/images/about/about-8.jpg"
                eyebrow="Shopify Development Services"
                title="Online Stores Built To Sell, Not Just Look Good"
                paragraphs={[
                   "Shopify provides a secure and reliable foundation for building eCommerce stores, giving businesses the flexibility to manage inventory, orders, payments, and customer experiences through an accessible platform. Its extensive ecosystem makes it suitable for businesses looking to launch and scale their online presence.",

"Our Shopify development focuses on creating custom storefronts that combine intuitive design, seamless functionality, and effortless management. From custom theme development and product catalog structuring to checkout optimization, payment gateways, shipping configurations, and app integrations, we build Shopify stores that are designed to perform and grow with your business."

                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <ChecklistTwoColumn
                eyebrow="Why It Matters"
                title="Benefits Of Building Your Store On Shopify"
                items={shopifyBenefits}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="What We Offer"
                title="What Our Shopify Development Services Include"
                apps={shopifyServices}
            />
            <WhyChooseIconGrid
                eyebrow="Grow Your Business With"
                title="Why Choose Manithas For Shopify Development"
                description="We build Shopify stores focused on conversion, speed, and long-term ease of management."
                items={whyChooseShopify}
                ctaLabel="Start Today"
                ctaLink="/contact"
                classOption="section-bg-light"
                layout="card"
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our Shopify development"
                items={shopifyFaqs}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
