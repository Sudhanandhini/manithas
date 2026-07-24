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
    { icon: "fas fa-store", title: "Custom Shopify Themes", description: "Brand-aligned Shopify themes designed and coded to match your store's identity." },
    { icon: "fas fa-shopping-cart", title: "Shopify Store Setup", description: "End-to-end store setup, from product catalog to collections, taxes, and shipping rules." },
    { icon: "fas fa-plug", title: "App & API Integration", description: "Integration of Shopify apps, ERPs, and third-party APIs to fit your existing workflow." },
    { icon: "fas fa-credit-card", title: "Payment Gateway Setup", description: "Secure payment gateway configuration for smooth, trustworthy checkout experiences." },
    { icon: "fas fa-exchange-alt", title: "Platform Migration", description: "Migrate your existing store to Shopify with products, orders, and customers intact." },
    { icon: "fas fa-tools", title: "Maintenance & Support", description: "Ongoing theme updates, app troubleshooting, and store performance monitoring." }
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
    return buildMetadata("/what-we-do/web-development/shopify-development");
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
                    "Shopify gives you a reliable, secure foundation for ecommerce, and we build on top of it with custom themes, streamlined checkout flows, and app integrations tailored to how you actually sell.",
                    "From product catalog structure to payment gateways and shipping rules, we set up every part of your store to convert visitors into customers and stay easy for your team to manage."
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
