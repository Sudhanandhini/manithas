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
        description: "Our responsive designers create websites that work seamlessly across all devices and browsers."
    },
    {
        title: "Layout Perfect For Users",
        description: "We design responsive websites that enhance navigation for users and encourage repeat visits."
    },
    {
        title: "Fluid Performance",
        description: "We deliver clean websites that enhance navigation and ensure user satisfaction and engagement."
    },
    {
        title: "Time-Saving",
        description: "Responsive design reduces development costs and time, requiring only one website for all devices."
    },
    {
        title: "SEO Friendly",
        description: "High SERP rankings boost organic traffic, leads, conversions, and establish trust in your website."
    }
];

const responsiveServices = [
    {
        icon: "fas fa-desktop",
        title: "User Interface / UI Design",
        description: "Interfaces designed to feel natural on every screen size."
    },
    {
        icon: "fas fa-user-check",
        title: "User Experience / UX Design",
        description: "Flows built around how visitors actually navigate on mobile and desktop."
    },
    {
        icon: "fas fa-file",
        title: "Single Page Checkout",
        description: "Streamlined checkout flows that reduce drop-off on smaller screens."
    },
    {
        icon: "fab fa-css3-alt",
        title: "CSS and HTML Layout",
        description: "Clean, standards-based layouts that adapt smoothly across breakpoints."
    },
    {
        icon: "fas fa-shopping-cart",
        title: "CMS and eCommerce Design",
        description: "Responsive builds across content-managed sites and online stores alike."
    },
    {
        icon: "fas fa-mobile-alt",
        title: "Cross-Device Testing",
        description: "Every build tested across real devices before it goes live."
    }
];

const whyChooseResponsive = [
    {
        icon: "fas fa-user-graduate",
        title: "Highly Experienced Team",
        description: "A team with real experience delivering responsive builds across industries."
    },
    {
        icon: "fas fa-sync-alt",
        title: "Adopts Updated Tech",
        description: "We build on current, well-supported frameworks and tools."
    },
    {
        icon: "fas fa-award",
        title: "Quality And Transparency",
        description: "Clear communication and consistent quality throughout the project."
    },
    {
        icon: "fas fa-user-friends",
        title: "User-Centric Approach",
        description: "Every layout decision is made with your actual users in mind."
    },
    {
        icon: "fas fa-mobile-alt",
        title: "Mobile-First Thinking",
        description: "We design for the smallest screen first, then scale up."
    },
    {
        icon: "fas fa-tachometer-alt",
        title: "Performance Focused",
        description: "Responsive doesn't mean slow - we keep every breakpoint fast."
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
                    "With visitors connecting from an enormous range of devices and screen sizes, a website that only works well on desktop is a website losing customers.",
                    "We build with fluid layouts, flexible images, and mobile-first thinking so your site delivers the same quality experience everywhere it's viewed."
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
