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

const maintenanceBenefits = [
    {
        title: "Stronger Website Security",
        description: "Regular updates and monitoring help protect your website from emerging threats and vulnerabilities."
    },
    {
        title: "Reliable Performance",
        description: "Routine maintenance helps identify slow pages, broken links, and technical issues before they impact visitors."
    },
    {
        title: "Better User Experience",
        description: "A well-maintained website stays fast, functional, accessible, and easy to navigate."
    },
    {
        title: "Improved Search Visibility",
        description: "Keeping your website updated, secure, and optimized supports better search engine performance."
    },
   
];

const maintenanceServices = [
    {
        icon: "fas fa-sync-alt",
        title: "Regular Updates & Enhancements",
        description: "Keeping your core, themes, and plugins updated, tested, and running smoothly"
    },
    {
        icon: "fas fa-shield-alt",
        title: "Security & Protection",
        description: "Proactively monitoring vulnerabilities, scanning for threats, and strengthening website security"
    },
    {
        icon: "fas fa-user-friends",
        title: "User Experience Optimization",
        description: "Refining navigation, usability, and key interactions for a smoother visitor experience"
    },
    {
        icon: "fas fa-tachometer-alt",
        title: "Performance Optimization",
        description: "Optimizing your website regularly to maintain speed, stability, and responsiveness"
    },
    {
        icon: "fas fa-edit",
        title: "Content Management",
        description: "Constant help in keeping your pages, images, and content fresh, accurate, and updated"
    },
    {
        icon: "fas fa-database",
        title: "Backup & Restoration",
        description: "Maintaining reliable backups and enabling quick restoration when unexpected issues occur"
    }
];

const whyChooseMaintenance = [
    {
        icon: "fas fa-user-tie",
        title: "Expert Team",
        description: "Experienced professionals skilled across WordPress, Laravel, Shopify, and more."
    },
    {
        icon: "fas fa-eye",
        title: "Proactive Monitoring",
        description: "We identify and address potential issues before they affect your website."
    },
    {
        icon: "fas fa-headset",
        title: "End-to-End Support",
        description: "One dedicated team for updates, content, performance, and technical support."
    },
    {
        icon: "fas fa-file-contract",
        title: "Customized AMC Services",
        description: "Flexible maintenance plans tailored to your website and business requirements."
    },
    {
        icon: "fas fa-lock",
        title: "Data Security",
        description: "We protect your website with reliable backups, secure access, and proactive monitoring."
    },
    {
        icon: "fas fa-chart-bar",
        title: "Transparent Reporting",
        description: "Clear and accurate reports to keep you informed about updates, checks, fixes, and improvements."
    }
];

const maintenanceFaqs = [
    {
        question: "What is website maintenance?",
        answer: "Website maintenance is the ongoing process of updating, monitoring, and optimizing a site to keep it secure and running smoothly."
    },
    {
        question: "Why is website maintenance important?",
        answer: "Without regular maintenance, sites become vulnerable to security threats, slow performance, and broken functionality over time."
    },
    {
        question: "What is included in a website maintenance plan?",
        answer: "Typical plans cover updates, security monitoring, backups, performance checks, and content support - we tailor exact scope to your site."
    },
    {
        question: "How do I choose a website maintenance company?",
        answer: "Look for a team with experience on your platform, clear reporting, and responsive support when issues come up."
    },
    {
        question: "What are the best website maintenance companies?",
        answer: "The right fit depends on your platform and needs - we're happy to walk you through how our approach compares for your specific site."
    }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/website-maintenance");
}

export default function WebsiteMaintenance() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Website Maintenance"
                content="Home"
                contentTwo="Website Maintenance"
            />
            {/* <ContentSection
                eyebrow="Web Development"
                title="Website Maintenance"
                description="Ongoing care to keep your website fast, secure, and up to date, so you can focus on your business instead of your website."
                bullets={[
                    "Regular updates & backups",
                    "Security monitoring",
                    "Performance checks",
                    "Priority support for issues"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-9.jpg"
                imageTwo="/images/about/about-1.jpg"
                eyebrow="Why Maintenance Matters"
                title="Keep Your Website Secure, Fast, And Reliable"
                paragraphs={[
                   "A great website keeps working, evolving, and supporting your business consistently. Regular maintenance ensures your website stays secure, and remains ready for changing technology and user expectations.",

"Our website maintenance plans everything happening behind the scenes, including updates, security checks, performance monitoring, backups, and technical fixes. With the routine work handled, you can focus on growing your business while your website keeps running at its best."

                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
            />
            <WhyChooseUs
                eyebrow="Why It Matters"
                title="Why Website Maintenance Is Important"
                items={maintenanceBenefits}
                classOption="section-bg-light"
            />
            <RelatedApplications
                title="Our Website Maintenance Services"
                apps={maintenanceServices}
            />
            <WhyChooseIconGrid
                eyebrow="Grow Your Business With"
                title="Why Choose Us For Website Maintenance"
                description="With a proactive, responsive approach, we keep your website performing the way it should, every day."
                items={whyChooseMaintenance}
                ctaLabel="Start Today"
                ctaLink="/contact"
                classOption="section-bg-light"
                layout="card"
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about website maintenance"
                items={maintenanceFaqs}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
