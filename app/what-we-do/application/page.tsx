import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import AboutImageSplit from "@/src/components/PageContent/AboutImageSplit";
import ServiceListGrid from "@/src/components/PageContent/ServiceListGrid";
import WhyChooseUs from "@/src/components/PageContent/WhyChooseUs";
import RelatedApplications from "@/src/components/PageContent/RelatedApplications";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

const developmentServices = [
    {
        icon: "fas fa-laptop-code",
        title: "Custom Web Application Development",
        description: "Build fully customized web applications designed specifically for your business needs and workflows."
    },
    {
        icon: "fas fa-building",
        title: "Enterprise Web Applications",
        description: "Develop enterprise-grade solutions that improve productivity, automate operations, and manage complex business processes."
    },
    {
        icon: "fas fa-cloud",
        title: "SaaS Application Development",
        description: "Launch cloud-based Software-as-a-Service (SaaS) platforms with secure architecture and subscription management."
    },
    {
        icon: "fas fa-sitemap",
        title: "CRM & ERP Development",
        description: "Develop customized CRM and ERP solutions to manage customers, inventory, sales, finance, and operations efficiently."
    },
    {
        icon: "fas fa-mobile-alt",
        title: "Progressive Web Applications (PWA)",
        description: "Create installable, lightning-fast web applications that provide an app-like experience across all devices."
    },
    {
        icon: "fas fa-plug",
        title: "API Development & Integration",
        description: "Connect third-party services, payment gateways, CRM systems, ERP software, and external APIs seamlessly."
    },
    {
        icon: "fas fa-door-open",
        title: "Web Portal Development",
        description: "Build customer portals, employee portals, vendor portals, student portals, and membership platforms."
    },
    {
        icon: "fas fa-tools",
        title: "Maintenance & Support",
        description: "Ensure your application remains secure, updated, and optimized with continuous monitoring and maintenance."
    }
];

const whyChooseUs = [
    {
        title: "Custom-Built Solutions",
        description: "Every project is designed according to your business goals."
    },
    {
        title: "Modern Technologies",
        description: "We use the latest frameworks and technologies for future-ready applications."
    },
    {
        title: "Responsive Design",
        description: "Applications that work perfectly across desktop, tablet, and mobile devices."
    },
    {
        title: "High Security",
        description: "Strong authentication, encrypted data, and secure coding practices."
    },
    {
        title: "Scalable Architecture",
        description: "Applications built to handle growing users and business expansion."
    },
    {
        title: "Fast Performance",
        description: "Optimized for speed, reliability, and smooth user experience."
    },
    {
        title: "SEO-Friendly Structure",
        description: "Search engine optimized architecture for improved online visibility."
    },
    {
        title: "Dedicated Support",
        description: "Post-launch maintenance, updates, and technical support."
    }
];

const relatedApps = [
    {
        icon: "fas fa-user-graduate",
        title: "Alumni Web Application",
        description: "A React & Node.js alumni platform connecting graduates through directories, event updates, and networking tools that keep the community engaged long after graduation."
    },
    {
        icon: "fas fa-calendar-check",
        title: "HR Attendance & Payroll Application",
        description: "A React & Node.js HR system handling daily login/logout tracking, Earned Leave (EL) and Casual Leave (CL) management, with leave-linked salary calculations."
    },
    {
        icon: "fas fa-id-card",
        title: "ICA Membership Payment Application",
        description: "A React & Node.js membership platform for the Indian Cricketers Association (ICA), handling secure payments and renewals for 1,000+ members."
    },
    {
        icon: "fas fa-certificate",
        title: "ChildFund Online Assessment Application",
        description: "A React & Node.js assessment platform for ChildFund that delivers online tests and automatically issues certificates on successful completion."
    },
    {
        icon: "fas fa-briefcase-medical",
        title: "GeneiLab Medical Product Application",
        description: "A React & Node.js product catalog for GeneiLab, managing 1,000+ medical products across several categories with fast search and easy updates."
    },
    {
        icon: "fas fa-briefcase",
        title: "Career Portal Application",
        description: "A React & Node.js careers portal where candidates apply online and HR teams review and manage every application from a central dashboard."
    }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/application");
}

export default function Application() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Application Development"
                content="Home"
                contentTwo="Application"
            />
            {/* <ContentSection
                eyebrow="What We Do"
                title="Application Development"
                description="We design and build custom web and business applications that streamline your operations, automate workflows, and scale with your business."
                bullets={[
                    "Custom business applications",
                    "Workflow automation",
                    "Third-party API integrations",
                    "Ongoing support and upgrades"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-3.jpg"
                imageTwo="/images/about/about-4.jpg"
                eyebrow="How We Work"
                title="A Team That Understands Application Development"
                paragraphs={[
                    "From requirement discovery to deployment, our application development team works closely with you at every stage, translating business needs into software your teams actually use.",
                    "We combine modern engineering practices with clear communication and data-driven decisions, so every application we build is reliable, scalable, and easy to maintain long after launch."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <ServiceListGrid
                eyebrow="What We Offer"
                title="Our Web Application Development Services"
                items={developmentServices}
                classOption="section-bg-light"
            />
            <WhyChooseUs
                eyebrow="Why Manithas"
                title="Why Choose Our Web Application Development Company?"
                items={whyChooseUs}
            />
            <RelatedApplications
                eyebrow="React & Node.js"
                title="Related Web Applications We've Built"
                apps={relatedApps}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
