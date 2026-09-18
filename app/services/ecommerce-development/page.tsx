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
        description: "Count on a dependable technology partner who keeps your store stable, supported, and ready for business."
    },
    {
        icon: "fas fa-bolt",
        title: "Agile Approach",
        description: "Stay involved throughout the journey with a flexible process that responds quickly to feedback and changing priorities."
    },
    {
        icon: "fas fa-medal",
        title: "Proven Expertise",
        description: "Benefit from hands-on eCommerce experience shaped by real-world requirements, challenges, and customer expectations."
    },
    {
        icon: "fas fa-star",
        title: "Reputed Clients",
        description: "Our experience across industries reflects the trust businesses place in us to power their digital commerce journey."
    },
    {
        icon: "fas fa-microchip",
        title: "Advanced Tech-Stack",
        description: "We combine modern technologies with proven frameworks to create secure, scalable, and future-ready stores."
    },
    {
        icon: "fas fa-layer-group",
        title: "Feature-Rich",
        description: "From browsing and product discovery to checkout and order management, we bring the complete shopping journey together."
    }
];

const teamBenefits = [
    {
        icon: "fas fa-users",
        title: "Experienced Developers and Designers",
        desc: "Our experienced developers and designers bring deep expertise in eCommerce development, creating intuitive, engaging, and user-focused experiences. From concept to deployment, we combine technical proficiency with creative thinking to build solutions that support your business goals."
    },
    {
        icon: "fas fa-shield-alt",
        title: "Scalable and Secure Solutions",
        desc: "We engineer eCommerce platforms with scalability, performance, and security at their core. Our solutions are built to handle evolving business needs, growing customer demands, and increasing transaction volumes while maintaining a reliable and secure shopping experience."
    },
    {
        icon: "fas fa-sync-alt",
        title: "Agile and Transparent Development Process",
        desc: "We follow an agile development approach that keeps your project moving and you informed at every stage. Through regular updates, transparent communication, and milestone-based progress, we make it easier to track development, share feedback, and stay aligned with your objectives."
    },
    {
        icon: "fas fa-mobile-alt",
        title: "SEO and Mobile-optimized Designs",
        desc: "lopingWe create eCommerce experiences that are designed to perform across search engines and devices. With SEO-friendly structures, responsive interfaces, and performance-focused development, we help your store deliver a consistent experience while making it easier for customers to discover and engage with your business."
    }
];

const ecommerceServices = [
    {
        icon: "fas fa-store",
        title: "Custom eCommerce Website Design",
        description: "Creating a distinctive online storefront that reflects your brand and makes every product easy to discover"
    },
    {
        icon: "fas fa-shopping-basket",
        title: "Platform Selection and Setup",
        description: "Choosing the right eCommerce technology based on your products, business model, budget, and growth plans"
    },
    {
        icon: "fas fa-cart-plus",
        title: "Shopping Cart and Checkout Integration",
        description: "Making buying simple with smooth cart and checkout experiences designed to reduce friction and abandoned purchases"
    },
    {
        icon: "fas fa-credit-card",
        title: "Payment Gateway Integration",
        description: "Enabling secure, reliable online payments with gateways that make transactions convenient for your customers"
    },
    {
        icon: "fas fa-boxes",
        title: "Product Management System",
        description: "Maintaining an organized catalogue with simple tools to manage products, variants, pricing, availability, and inventory"
    },
    {
        icon: "fas fa-truck",
        title: "Order and Shipping Management",
        description: "Bringing orders and fulfillment together with streamlined workflows for processing, shipping, tracking, and delivery"
    },
    {
        icon: "fas fa-tachometer-alt",
        title: "Admin Dashboard",
        description: "Getting a clear view of your store with centralized controls for managing products, customers, orders, inventory, and performance"
    },
    {
        icon: "fas fa-search",
        title: "SEO Optimization",
        description: "Building a stronger digital presence with search-friendly store structures that help your products get discovered online."
    }
];

const developmentProcess = [
    {
        title: "Discovery and Strategy",
        description: "We begin by understanding your business, customers, market landscape, and goals. Through detailed requirement analysis and strategic research, we establish a clear roadmap for building an eCommerce platform designed around your unique business needs."
    },
    {
        title: "Wireframing and Design",
        description: "We transform ideas into intuitive user experiences through thoughtful wireframes, prototypes, and interface designs. From product discovery to checkout, every interaction is carefully structured to create a seamless journey and encourage conversions."
    },
    {
        title: "Development",
        description: "Our developers turn the approved designs into a fully functional eCommerce experience using modern technologies and proven development practices. We integrate essential capabilities such as CMS, shopping carts, payment gateways, and other business-specific features."
    },
    {
        title: "Testing and QA",
        description: "Before your store goes live, we put every component through comprehensive quality checks. From functionality and responsiveness to performance, compatibility, and security, our QA process helps ensure a reliable and friction-free experience across devices."
    },
    {
        title: "Launch",
        description: "Once everything is tested and approved, we carefully deploy your eCommerce platform to the live environment. We conduct final checks across essential functions, integrations, and payment workflows to ensure your store is ready to serve customers from day one."
    },
    {
        title: "Ongoing Support",
        description: "Our partnership continues beyond launch with reliable maintenance, timely updates, performance optimization, and feature enhancements. We monitor your platform, address issues efficiently, and help your eCommerce solution evolve as your business grows."
    }
];

const ecommerceIndustries = [
    {
        title: "Healthcare",
        description: "We create secure and user-friendly eCommerce platforms for pharmacies, wellness brands, medical suppliers, and healthcare businesses, making it easier to manage products and serve customers online."
    },
    {
        title: "Finance",
        description: "We develop reliable digital commerce experiences for finance and financial-services businesses, with streamlined transactions, secure payment flows, and interfaces designed to build customer confidence."
    },
    {
        title: "Education",
        description: "We help educational institutions, course providers, and EdTech brands sell courses, learning resources, subscriptions, and educational merchandise through intuitive online platforms."
    },
    {
        title: "Real Estate",
        description: "We build engaging digital platforms that help real estate businesses showcase properties, service packages, plans, and related offerings while creating seamless journeys for prospective customers."
    },
    {
        title: "Retail",
        description: "We develop conversion-focused online stores for retail businesses of every scale, combining intuitive navigation, flexible catalogs, secure checkout, and seamless shopping experiences across devices."
    },
    {
        title: "SaaS",
        description: "We create commerce-ready platforms for SaaS businesses to showcase and sell subscriptions, plans, licenses, and add-ons, with streamlined purchasing and billing experiences built around recurring revenue."
    }
];

const serveLocations = [
    "Ecommerce development company in Bengaluru",
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
    return buildMetadata("/services/ecommerce-development/");
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
                "  Ecommerce web development has transformed the way businesses sell, making it easier to create seamless, and personalized shopping experiences online. From product discovery and secure payments to order management and customer engagement, every part of the buying journey can be brought together through a connected virtual storefront.", 

"Our ecommerce development solutions focus on creating secure and responsive online stores. With features such as product management, shopping carts, payment gateway integration, order tracking, and third-party integrations, ecommerce platforms can grow alongside changing customer and business needs."

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
                description="With a customer-first mindset, agile execution, and strong technical expertise, we build eCommerce solutions designed to perform today and grow with your business tomorrow."
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
                description="Every industry has its own customers, challenges, and digital demands. We build solutions that adapt to the way your industry operates, helping businesses create relevant shopping experiences and achieve their unique objectives."
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
