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
        title: "Security Against Threats",
        description: "Regular updates and monitoring close the vulnerabilities attackers look for."
    },
    {
        title: "Consistent Performance",
        description: "Routine checks catch slow pages and broken links before they affect visitors."
    },
    {
        title: "Improved User Experience",
        description: "A well-maintained site stays fast, functional, and easy to use."
    },
    {
        title: "Better Search Ranking",
        description: "Search engines favor sites that stay updated, secure, and fast."
    },
    {
        title: "Data Backup & Recovery",
        description: "Regular backups mean you're never far from a full recovery if something goes wrong."
    }
];

const maintenanceServices = [
    {
        icon: "fas fa-sync-alt",
        title: "Regular Updates & Enhancements",
        description: "Core, theme, and plugin updates applied on a regular, tested schedule."
    },
    {
        icon: "fas fa-shield-alt",
        title: "Security & Protection",
        description: "Firewalls, malware scanning, and vulnerability patching to keep threats out."
    },
    {
        icon: "fas fa-user-friends",
        title: "User Experience Optimization",
        description: "Ongoing tweaks to keep navigation and usability sharp for visitors."
    },
    {
        icon: "fas fa-tachometer-alt",
        title: "Performance Optimization",
        description: "Regular tuning to keep pages loading quickly as your site grows."
    },
    {
        icon: "fas fa-edit",
        title: "Content Management",
        description: "Support updating pages, images, and copy whenever you need changes made."
    },
    {
        icon: "fas fa-database",
        title: "Backup & Restoration",
        description: "Automated backups with fast restoration if something ever goes wrong."
    }
];

const whyChooseMaintenance = [
    {
        icon: "fas fa-user-tie",
        title: "Expert Team",
        description: "Engineers experienced across WordPress, Laravel, Shopify, and more."
    },
    {
        icon: "fas fa-eye",
        title: "Proactive Monitoring",
        description: "We catch issues before they cause visible downtime or impact."
    },
    {
        icon: "fas fa-headset",
        title: "End-to-End Support",
        description: "One team for content updates, software updates, and hosting support."
    },
    {
        icon: "fas fa-file-contract",
        title: "Customized AMC Services",
        description: "Flexible maintenance plans that match how your site is actually used."
    },
    {
        icon: "fas fa-lock",
        title: "Data Security",
        description: "We take backups and access controls seriously, every time."
    },
    {
        icon: "fas fa-chart-bar",
        title: "Transparent Reporting",
        description: "You'll always know exactly what's been checked, updated, and fixed."
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
                    "A website isn't a one-time project - regular updates, monitoring, and backups are what keep it secure and running smoothly long after launch.",
                    "Our maintenance plans cover the routine work your site needs behind the scenes, so you can focus on your business instead of worrying about downtime or outdated plugins."
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
