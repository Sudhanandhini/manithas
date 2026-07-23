import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import RelatedApplications from "@/src/components/PageContent/RelatedApplications";
import AboutImageSplit from "@/src/components/PageContent/AboutImageSplit";
import WhyChooseIconGrid from "@/src/components/PageContent/WhyChooseIconGrid";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

const wordpressServices = [
    {
        icon: "fas fa-cogs",
        title: "Customize WordPress Themes",
        description: "We craft custom WordPress themes aligned with your brand's goals and identity, traditional or modern."
    },
    {
        icon: "fas fa-tools",
        title: "Plugin Development and Integration",
        description: "We integrate custom plugins to enhance your website's functionality and extend its capabilities."
    },
    {
        icon: "fas fa-mobile-alt",
        title: "Responsive WordPress Website",
        description: "Our responsive websites ensure seamless functionality across all devices, improving user experience and SEO."
    },
    {
        icon: "fas fa-shopping-cart",
        title: "WooCommerce Website Development",
        description: "We develop full-fledged WooCommerce eCommerce sites with secure payments and inventory management."
    },
    {
        icon: "fas fa-file-import",
        title: "Content Migration Services",
        description: "We offer content migration services, transferring data from your current platform to WordPress efficiently."
    },
    {
        icon: "fas fa-sync-alt",
        title: "Maintenance and Support",
        description: "Our WordPress maintenance services ensure smooth website performance through security audits, updates, and optimizations."
    }
];

const whyChooseWordpress = [
    {
        icon: "fas fa-award",
        title: "Vast Industry Experience",
        description: "Our experts bring years of hands-on WordPress development experience across industries."
    },
    {
        icon: "fas fa-code",
        title: "Enormous Customization Ability",
        description: "We tailor every WordPress build around your exact requirements, not a generic template."
    },
    {
        icon: "fas fa-shield-alt",
        title: "Integrate Advanced Security",
        description: "We harden every site against vulnerabilities with proactive, security-first best practices."
    },
    {
        icon: "fas fa-search",
        title: "SEO-Focused Approach",
        description: "Every build follows SEO best practices to help your site rank and get found."
    },
    {
        icon: "fas fa-comments",
        title: "Focus on Transparent Communication",
        description: "You stay informed at every stage, with clear updates and open communication."
    },
    {
        icon: "fas fa-user-check",
        title: "Largest Pool of Satisfied Clients",
        description: "A growing track record of happy clients who trust us with their WordPress projects."
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
            <RelatedApplications
                title="Our WordPress Development Services"
                description="We provide high-grade WordPress development services, understanding client needs and delivering the right solutions."
                apps={wordpressServices}
                classOption="section-bg-light"
            />
            <AboutImageSplit
                imageOne="/images/about/about-1.jpg"
                imageTwo="/images/about/about-2.jpg"
                eyebrow="Why Choose Us"
                title="Hire Expert WordPress Developers"
                paragraphs={[
                    "A strong online presence is crucial for your business growth, and a well-developed website is key to achieving that. Hiring a professional WordPress developer helps you unlock new growth opportunities.",
                    "At Manithas, we specialize in custom WordPress development tailored to your business needs. Our skilled developers understand your target audience and brand objectives, translating them into a fully functional website that stands out.",
                    "We adhere to the latest coding standards and trends, focusing on search engine optimization for better visibility, with transparent communication throughout the process."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
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
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
