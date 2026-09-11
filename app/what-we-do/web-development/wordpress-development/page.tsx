import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import RelatedApplications from "@/src/components/PageContent/RelatedApplications";
import AboutImageSplit from "@/src/components/PageContent/AboutImageSplit";
import WhyChooseIconGrid from "@/src/components/PageContent/WhyChooseIconGrid";
import PageFaq from "@/src/components/PageContent/PageFaq";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

const wordpressServices = [
    {
        icon: "fas fa-cogs",
        title: "Customize WordPress Themes",
        description: "Creating distinctive WordPress themes that reflect your brand identity and deliver a unique digital experience."
    },
    {
        icon: "fas fa-tools",
        title: "Plugin Development and Integration",
        description: "Developing and integrating plugins that extend functionality and add capabilities tailored to your business needs."
    },
    {
        icon: "fas fa-mobile-alt",
        title: "Responsive WordPress Website",
        description: "Building responsive websites that provide smooth, consistent experiences across desktops, tablets, and mobile devices."
    },
    {
        icon: "fas fa-shopping-cart",
        title: "WooCommerce Website Development",
        description: "Developing feature-rich WooCommerce stores with seamless shopping experiences, secure payments, and efficient management."
    },
    {
        icon: "fas fa-file-import",
        title: "Content Migration Services",
        description: "Securely migrating your website content, data, and essential elements to WordPress with minimal disruption."
    },
    {
        icon: "fas fa-sync-alt",
        title: "Maintenance and Support",
        description: "Keeping your WordPress website secure, updated, optimized, and running smoothly with ongoing technical support"
    }
];

const whyChooseWordpress = [
    {
        icon: "fas fa-award",
        title: "Proven WordPress Expertise",
        description: "Experienced developers delivering WordPress solutions across diverse industries"
    },
    {
        icon: "fas fa-code",
        title: "Tailored Customization",
        description: "Websites crafted around your unique requirements, workflows, and brand identity"
    },
    {
        icon: "fas fa-shield-alt",
        title: "Security-First Development",
        description: "Robust security practices built into every website from the ground up"
    },
    {
        icon: "fas fa-search",
        title: "SEO-Driven Development",
        description: "SEO-friendly structures designed to improve visibility and organic reach"
    },
    {
        icon: "fas fa-comments",
        title: "Transparent Collaboration",
        description: "Clear communication and regular updates keep you informed at every stage"
    },
    {
        icon: "fas fa-user-check",
        title: "Trusted Client Relationships",
        description: "A strong track record of successful projects and lasting client partnerships"
    }
];

const wordpressFaqs = [
    {
        question: "Why should I choose WordPress for my website?",
        answer: "WordPress is flexible, SEO-friendly, and backed by a vast plugin ecosystem, making it easy to build and scale a website tailored to your business needs."
    },
    {
        question: "Can you customize an existing WordPress theme?",
        answer: "Yes, we can customize your existing theme or build a fully custom theme from scratch to match your brand's identity and functionality requirements."
    },
    {
        question: "Do you provide WooCommerce development for online stores?",
        answer: "Yes, we build full-fledged WooCommerce stores with secure payment gateways, inventory management, and a smooth checkout experience."
    },
    {
        question: "Will my WordPress website be mobile-friendly?",
        answer: "Absolutely. Every WordPress site we build is fully responsive, ensuring a seamless experience across desktops, tablets, and mobile devices."
    },
    {
        question: "Do you offer ongoing maintenance and support?",
        answer: "Yes, we provide continued maintenance, including security audits, updates, and performance optimization to keep your site running smoothly."
    }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/wordpress-development");
}

export default function WordpressDevelopment() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="WordPress Development"
                content="Home"
                contentTwo="WordPress Development"
            />
            {/* <ContentSection
                eyebrow="Web Development"
                title="WordPress Development"
                description="We build fast, secure, and easy-to-manage WordPress websites tailored to your brand, from custom themes to plugin integrations."
                bullets={[
                    "Custom WordPress theme development",
                    "Plugin setup & customization",
                    "Speed & security optimization",
                    "Ongoing maintenance & support"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}



              <AboutImageSplit
                imageOne="/images/about/about-1.jpg"
                imageTwo="/images/about/about-2.jpg"
                eyebrow="Why Choose Us"
                title="Hire Expert WordPress Developers"
                paragraphs={[
                "WordPress provides a flexible foundation for creating engaging, scalable, and easy-to-manage digital experiences.",
"Our WordPress development focuses on transforming your business requirements and audience needs into websites with intuitive functionality and distinctive designs. From custom development and responsive experiences to integrations and content management, we create solutions built around how your business operates.",
"We follow modern development standards and SEO best practices to create websites that are optimized for performance, visibility, and usability. With a collaborative approach and transparent communication, we ensure every project stays aligned with your objectives from planning through launch."

                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
            />


            <RelatedApplications
                title="Our WordPress Development Services"
                description="We provide high-grade WordPress development services, understanding client needs and delivering the right solutions."
                apps={wordpressServices}
                classOption="section-bg-light"
            />
          
            <WhyChooseIconGrid
                eyebrow="Grow Your Business With"
                title="Why Choose Manithas For WordPress Development?"
                description="With a customer-focused approach, creativity, and expertise, we're committed to becoming your reliable WordPress development partner."
                items={whyChooseWordpress}
                ctaLabel="Start Today"
                ctaLink="/contact"
                classOption="section-bg-light"
                layout="card"
            />

            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about WordPress development"
                items={wordpressFaqs}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
