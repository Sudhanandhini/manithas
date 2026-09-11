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

const responsiveBenefits = [
    {
        title: "Intuitive UI/UX Designs",
        description: "We create adaptable interfaces that deliver a consistent and engaging experience across devices and browsers"
    },
    {
        title: "Layout Perfect For Users",
        description: "We design intuitive layouts that simplify navigation and keep visitors engaged across every screen size"
    },
    {
        title: "Fluid Performance",
        description: "Optimized responsive websites provide smooth interactions, faster loading, and consistent performance across devices"
    },
    {
        title: "Time-Saving",
        description: "One responsive website works across multiple devices, reducing development time, maintenance, and overall costs"
    },
    
];

const responsiveServices = [
    {
        icon: "fas fa-desktop",
        title: "User Interface / UI Design",
        description: "Creating flexible interfaces that remain intuitive, engaging, and consistent across screen sizes"
    },
    {
        icon: "fas fa-user-check",
        title: "User Experience / UX Design",
        description: "Designing seamless user journeys that make navigation effortless across mobile and desktop"
    },
    {
        icon: "fas fa-file",
        title: "Single Page Checkout",
        description: "Simplifying checkout experiences to reduce friction and encourage completed purchases on every device."
    },
    {
        icon: "fab fa-css3-alt",
        title: "CSS and HTML Layout",
        description: "Building clean, flexible layouts that adapt smoothly across browsers, devices, and breakpoints"
    },
    {
        icon: "fas fa-shopping-cart",
        title: "CMS and eCommerce Design",
        description: "Delivering responsive designs for content-driven websites, online stores, and digital platforms"
    },
    {
        icon: "fas fa-mobile-alt",
        title: "Cross-Device Testing",
        description: "Thoroughly testing responsiveness across devices and browsers for consistent performance"
    }
];

const whyChooseResponsive = [
    {
        icon: "fas fa-user-graduate",
        title: "Highly Experienced Team",
        description: "Experienced professionals delivering responsive solutions across industries and platforms."
    },
    {
        icon: "fas fa-sync-alt",
        title: "Adopts Updated Tech",
        description: "We use current, reliable technologies to build flexible and future-ready websites."
    },
    {
        icon: "fas fa-award",
        title: "Quality And Transparency",
        description: "Clear communication and consistent quality from planning through delivery."
    },
    {
        icon: "fas fa-user-friends",
        title: "User-Centric Approach",
        description: "Every design decision is shaped around your users and their expectations."
    },
    {
        icon: "fas fa-mobile-alt",
        title: "Mobile-First Thinking",
        description: "We design for smaller screens first, then scale seamlessly across larger devices."
    },
    {
        icon: "fas fa-tachometer-alt",
        title: "Performance Focused",
        description: "We optimize every element for fast, smooth, and reliable performance across breakpoints."
    }
];

const responsiveFaqs = [
    {
        question: "What is responsive web design?",
        answer: "Responsive web design is an approach that creates web pages that work well on devices with multiple screen sizes."
    },
    {
        question: "Do responsive websites help improve SEO ranking?",
        answer: "Yes, search engines favor mobile-friendly, responsive sites, which can improve your search ranking."
    },
    {
        question: "How does Manithas help in designing a responsive website?",
        answer: "We use fluid grids, flexible images, and mobile-first development to ensure your site adapts to every screen size."
    },
    {
        question: "What are the advantages of responsive web design?",
        answer: "Advantages include a consistent user experience, lower maintenance costs, and improved SEO performance."
    },
    {
        question: "How do responsive websites work?",
        answer: "They use flexible layouts and CSS media queries to automatically adjust content based on the visitor's screen size."
    }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/responsive-web-design");
}

export default function ResponsiveWebDesign() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Responsive Web Design"
                content="Home"
                contentTwo="Responsive Web Design"
            />
            {/* <ContentSection
                eyebrow="Web Development"
                title="Responsive Web Design"
                description="Websites designed to look and work great on every screen size, from desktop to mobile, with no compromise on experience."
                bullets={[
                    "Mobile-first design approach",
                    "Cross-device testing",
                    "Flexible, scalable layouts",
                    "Touch-friendly interfaces"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-4.jpg"
                imageTwo="/images/about/about-5.jpg"
                eyebrow="Welcome To Responsive Design"
                title="Websites That Work On Every Device"
                paragraphs={[
                 "Visitors browse from phones, tablets, laptops, and desktops, and your website should look and perform its best on every screen. Responsive design ensures digital experiences remain consistent, intuitive, and engaging.",

"We create flexible layouts that naturally adapt to different screen sizes, with mobile-first thinking at the core. From navigation and images to content and interactions, every element is designed to deliver a seamless experience across devices while keeping performance and usability in focus."

                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <WhyChooseUs
                eyebrow="Why It Matters"
                title="Benefits Of Responsive Web Design"
                items={responsiveBenefits}
                classOption="section-bg-light"
            />
            <RelatedApplications
                title="What Our Responsive Web Design Services Include"
                apps={responsiveServices}
            />
            <WhyChooseIconGrid
                eyebrow="Grow Your Business With"
                title="Choose Manithas For Responsive Web Design"
                description="A story-driven approach, creative thinking, and an efficient, professional team focused on outstanding responsive experiences."
                items={whyChooseResponsive}
                ctaLabel="Start Today"
                ctaLink="/contact"
                classOption="section-bg-light"
                layout="card"
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about responsive web design"
                items={responsiveFaqs}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
