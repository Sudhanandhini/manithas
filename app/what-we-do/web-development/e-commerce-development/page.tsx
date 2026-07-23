import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import HostingHero from "@/src/container/Hosting/HostingHero";
import LogoBadgeStrip from "@/src/components/LogoBadgeStrip/LogoBadgeStrip";
import AboutImageSplit from "@/src/components/PageContent/AboutImageSplit";
import HostingFeatures from "@/src/container/Hosting/HostingFeatures";
import ChecklistTwoColumn from "@/src/components/PageContent/ChecklistTwoColumn";
import WhyChooseIconGrid from "@/src/components/PageContent/WhyChooseIconGrid";
import RelatedApplications from "@/src/components/PageContent/RelatedApplications";
import WhyChooseUs from "@/src/components/PageContent/WhyChooseUs";
import IndustriesAccordion from "@/src/components/PageContent/IndustriesAccordion";
import PageFaq from "@/src/components/PageContent/PageFaq";
import CallToActionTwo from "@/src/container/CallToAction/CallToActionTwo";
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

const teamBenefits = [
    {
        icon: "fas fa-users",
        title: "Experienced Developers and Designers",
        desc: "We have the largest pool of experienced developers and designers who build a variety of solutions in this domain, our professionals specialize in delivering user-centric and seamless eCommerce solutions."
    },
    {
        icon: "fas fa-shield-alt",
        title: "Scalable and Secure Solutions",
        desc: "We have enormous expertise when it comes to future-ready architectures with performance optimization and built-in security, we endeavor to deliver high-quality eCommerce solutions aligned perfectly with your business objectives."
    },
    {
        icon: "fas fa-sync-alt",
        title: "Agile and Transparent Development Process",
        desc: "As a responsible eCommerce website development company, we always work with agile methodologies with regular updates, clear communication, milestone tracking, etc. We help you keep progress in constant control."
    },
    {
        icon: "fas fa-mobile-alt",
        title: "SEO and Mobile-optimized Designs",
        desc: "We are committed to developing future-ready architectures for businesses of different sizes, whether you are a startup or an enterprise-level organization. Our solutions come with performance optimization and built-in security."
    }
];

const ecommerceServices = [
    {
        icon: "fas fa-store",
        title: "Custom eCommerce Website Design",
        description: "Fully custom storefronts designed around your brand, catalog, and the way your customers shop."
    },
    {
        icon: "fas fa-shopping-basket",
        title: "Platform Selection and Setup",
        description: "We help you pick and configure the right eCommerce platform for your catalog size, budget, and growth plans."
    },
    {
        icon: "fas fa-cart-plus",
        title: "Shopping Cart and Checkout Integration",
        description: "Fast, friction-free carts and checkout flows engineered to reduce drop-off and boost conversions."
    },
    {
        icon: "fas fa-credit-card",
        title: "Payment Gateway Integration",
        description: "Secure integration with the payment gateways your customers already trust, with PCI-conscious handling."
    },
    {
        icon: "fas fa-boxes",
        title: "Product Management System",
        description: "Easy-to-use catalog tools for managing products, variants, pricing, and stock across your store."
    },
    {
        icon: "fas fa-truck",
        title: "Order and Shipping Management",
        description: "Streamlined order processing with shipping, tracking, and fulfillment workflows built in."
    },
    {
        icon: "fas fa-tachometer-alt",
        title: "Admin Dashboard",
        description: "A clear, centralized dashboard to manage orders, customers, inventory, and store performance."
    },
    {
        icon: "fas fa-search",
        title: "SEO Optimization",
        description: "Every store is built on an SEO-friendly foundation to help your products get found and rank."
    }
];

const developmentProcess = [
    {
        title: "Discovery and Strategy",
        description: "We kick off by getting details of your business, target audience, competitors, etc. We conduct a thorough requirement analysis and market research to define the right strategy for your eCommerce platform."
    },
    {
        title: "Wireframing and Design",
        description: "We craft wireframes and interactive prototypes for your store. Our designers layout the product pages, checkout flow, and more, aligned to your brand, ensuring conversion-driven layout at every step."
    },
    {
        title: "Development",
        description: "Our team of developers works with the latest technologies to bring your store to life. This effort includes setting up CMS and integrating features, including payment gateways, shopping cart, etc."
    },
    {
        title: "Testing and QA",
        description: "We perform rigorous testing for your newly developed eCommerce website for responsiveness, performance, and security. We run a group of QA tests to ensure every feature works smoothly."
    },
    {
        title: "Launch",
        description: "After approval, we implement your eCommerce website on the live server with due assertions. We ensure every function is fulfilled and payments are ready to process seamlessly."
    },
    {
        title: "Ongoing Support",
        description: "We provide dedicated support for updates, maintenance, and performance optimization, and feature enhancements. Our developers help you resolve issues fast, and keep your platform running smoothly."
    }
];

const ecommerceIndustries = [
    {
        title: "Healthcare",
        description: "We develop HIPAA-conscious, secure eCommerce platforms for pharmacies, healthcare providers, and wellness brands to sell online with confidence."
    },
    {
        title: "Finance",
        description: "Secure, compliant online storefronts and payment flows for finance-adjacent businesses that need trust and reliability at every step."
    },
    {
        title: "Education",
        description: "eCommerce platforms for course providers and edtech brands to sell courses, materials, and merchandise online."
    },
    {
        title: "Real Estate",
        description: "Digital storefronts and lead-friendly catalogs for real estate businesses selling services, plans, and packages online."
    },
    {
        title: "Retail",
        description: "Full-featured online stores for retail brands, from single-catalog boutiques to large multi-category storefronts."
    },
    {
        title: "SaaS",
        description: "Subscription-ready storefronts and billing flows for SaaS businesses selling plans and add-ons online."
    }
];

const serveLocations = [
    "Ecommerce development company in Bangalore",
    "Ecommerce development company in Mumbai",
    "Ecommerce development company in Ahmedabad",
    "Ecommerce development company in Chennai",
    "Ecommerce development company in Kolkata"
];

const ecommerceFaqs = [
    {
        question: "What is an E-Commerce Website?",
        answer: "An e-commerce website is an online platform that enables businesses to sell products or services directly to customers over the internet."
    },
    {
        question: "Which platform is best for my online store?",
        answer: "It depends on your catalog size, budget, and growth plans. We assess your requirements and recommend the platform that fits best, whether that's a custom build or an established eCommerce platform."
    },
    {
        question: "Why do businesses need an E-Commerce Website?",
        answer: "An e-commerce website extends your reach beyond a physical location, lets you sell around the clock, and gives you a direct channel to engage and convert customers."
    },
    {
        question: "How long does it take to develop an e-commerce website?",
        answer: "Timelines vary with catalog size and feature scope, but most stores are ready to launch within a few weeks once requirements and design are finalized."
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
            {/* <HostingHero
             
                bgImage="/images/bg/breadcrumb-bg-three.jpg"
                headlineBefore="Best "
                headlineHighlight="E-Commerce Website Development"
                subtitle="We design and build online stores that convert, with secure checkouts, product management, and integrations built around your catalog."
                ctaLabel="Request A Quote"
                ctaLink="/contact"
                heroIcon="fas fa-shopping-cart" 
            /> */}



                         <HostingHero
                pageTitle="E-Commerce Development"
                bgImage="/images/bg/breadcrumb-bg-three.jpg"
                headlineBefore=""
                headlineHighlight=""
                subtitle=""
                ctaLabel=""
                ctaLink=""
               
            /> 


            {/* <LogoBadgeStrip
                eyebrow="We Are Partners Of"
                title="Trusted By Global Giants"
                items={["Google Partner", "Microsoft Partner", "ICANN Accredited", "ResellerClub"]}
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-5.jpg"
                imageTwo="/images/about/about-9.jpg"
                eyebrow="Introduction"
                title="Why Manithas For Your Online Store"
                paragraphs={[
                    "We have expertise in creating custom eCommerce websites that not only look perfect but also deliver a completely measurable business value. We have experience in the field of digital commerce and possess enormous insight to blend deep industry expertise with technical excellence to create a scalable, and high-performing online store.",
                    "We specialize in creating tailored solutions aiming to meet your business objectives and models, whether you are a small business, or an established eCommerce brand, we serve you by developing platforms that improve operations, power growth, and refine customer experience.",
                    "With an effort to let as many businesses benefit from our unmatched expertise in eCommerce development services, we serve multiple industries including fashion, retail, health, electronics, and many others."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            {/* <ChecklistTwoColumn
                eyebrow="What You Get"
                title="eCommerce Website Features"
                items={ecommerceFeatures}
                classOption="section-bg-light"
            /> */}

    <RelatedApplications
                eyebrow="What We Offer"
                title="Our ECommerce Website Development Services"
                description="We provide a wide range of services to match the expectations of our clients. We help you grow your business fast with increased growth. Every service we deliver is tailored to your core objectives."
                apps={ecommerceServices}
                classOption="section-bg-light"
            />



            <WhyChooseIconGrid
                eyebrow="Grow Your Business With"
                title="Why Choose Manithas For eCommerce Development?"
                description="With a customer-focused approach, agile delivery, and proven expertise, we're committed to becoming your reliable eCommerce development partner."
                items={whyChooseEcommerce}
                ctaLabel="Start Today"
                ctaLink="/contact"
                layout="card"
            />
            <HostingFeatures
                title="Benefits Of Working With Our Team"
                subtitle="We help you grow fast with increased efficiency, every service we deliver is tailored to your core objectives."
                features={teamBenefits}
                columns={2}
            />
        
            <WhyChooseUs
                eyebrow="How We Work"
                title="Our ECommerce Website Development Process"
                items={developmentProcess}
            />
            <IndustriesAccordion
                eyebrow="Who We Serve"
                title="Industries We Serve"
                description="We understand every industry has unique needs and customer expectations. We always work with an eCommerce development approach customized to align better with industry-specific objectives."
                items={ecommerceIndustries}
                imageOne="/images/about/about-2.jpg"
                imageTwo="/images/about/about-7.jpg"
                classOption="section-bg-light"
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Got questions about eCommerce development? <br/> We've got answers"
                items={ecommerceFaqs}
            />
            {/* <ChecklistTwoColumn
                eyebrow="Where We Work"
                title="We Serve Multiple Locations"
                items={serveLocations}
                classOption="section-bg-light"
            /> */}
            <CallToActionTwo
                title="Ready To Build Your Website? Let's Talk"
                subTitle="Get a free quote and consultation for your eCommerce project"
                ctaLabel="Request A Quote"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
