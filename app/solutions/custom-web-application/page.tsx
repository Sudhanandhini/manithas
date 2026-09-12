import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import AboutImageSplit from "@/src/components/PageContent/AboutImageSplit";
import ProcessSteps from "@/src/components/PageContent/ProcessSteps";
import RelatedApplications from "@/src/components/PageContent/RelatedApplications";
import PageFaq from "@/src/components/PageContent/PageFaq";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

const customAppProcess = [
    { icon: "fas fa-clipboard-list", title: "Map Your Workflows & Goals", description: "We start by understanding your workflows, user roles, and business goals to define the right scope for your application." },
    { icon: "fas fa-lightbulb", title: "Structure Architecture & Integrations", description: "We plan the application architecture, data flow, and integrations for a smoother design and build process." },
    { icon: "fas fa-pencil-ruler", title: "Design For Every User Role", description: "We design intuitive interfaces for every user role, from end users to administrators." },
    { icon: "fas fa-code", title: "Build Your Custom Application", description: "We develop a secure, scalable application built on modern technologies and tailored to your requirements." },
    { icon: "fas fa-vial", title: "Validate Every Workflow", description: "We test every workflow and edge case thoroughly before handover to ensure reliable day-to-day use." },
    { icon: "fas fa-rocket", title: "Launch & Grow With Your Business", description: "We launch the solution and provide ongoing maintenance and support as your business needs evolve." }
];

const customAppFeatures = [
    { icon: "fas fa-laptop-code", title: "Software That Doesn't Fit Your Process", description: "We build purpose-built applications around your exact processes, people, and goals, instead of forcing you into a generic tool." },
    { icon: "fas fa-building", title: "Disconnected Teams & Workflows", description: "Enterprise applications bring teams and workflows together on one platform, so operations no longer run in silos." },
    { icon: "fas fa-sitemap", title: "Scattered Sales, Inventory & Finance Data", description: "A centralized CRM/ERP solution keeps sales, inventory, finance, and operations working together in one system." },
    { icon: "fas fa-mobile-alt", title: "Poor Mobile Experience", description: "Progressive web applications deliver fast, responsive, app-like experiences on any device, without a native app." },
    { icon: "fas fa-plug", title: "Disconnected Third-Party Tools", description: "API integrations connect your applications, services, and platforms so your systems work as one." },
    { icon: "fas fa-door-open", title: "No Dedicated Access For Stakeholders", description: "Custom web portals give customers, employees, or members their own dedicated, secure space to get what they need." }
];

const customAppFaqs = [
    { question: "How is a custom web application different from an off-the-shelf tool?", answer: "A custom application is built entirely around your workflows and requirements, rather than forcing your processes to fit a generic tool." },
    { question: "Can you integrate our custom application with other systems?", answer: "Yes, we build API integrations to connect your application with payment gateways, third-party platforms, and existing business tools." },
    { question: "Do you provide support after the application is launched?", answer: "Yes, we offer ongoing maintenance, updates, and technical support after launch to keep your application running smoothly." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/solutions/custom-web-application");
}

export default function CustomWebApplicationSolution() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Custom Web Application"
                content="Home"
                contentTwo="Custom Web Application"
            />
            <AboutImageSplit
                imageOne="/images/about/about-3.jpg"
                imageTwo="/images/about/about-4.jpg"
                eyebrow="Our Solution"
                title="A Solution Built Around Your Business, Not A Template"
                paragraphs={[
                    "Our Custom Web Application solution turns unique business requirements into purposeful digital platforms, streamlining everyday processes and bringing operations together in one flexible system designed around the way your team works.",
                    "Built with modern technologies and tailored functionality, every application is developed to be secure, scalable, and easy to manage, with clear communication from initial requirements through to deployment and beyond."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Building A Solution Shaped Around Your Business"
                description="From mapping your workflows to launching a secure, scalable application, every step is built around the way your team actually works."
                steps={customAppProcess}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="Solution"
                title="Solutions We Provide For Custom Web Applications"
                apps={customAppFeatures}
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our custom web application solution"
                items={customAppFaqs}
                imageOne="/images/portfolio/portfolio-5.jpg"
                imageTwo="/images/portfolio/portfolio-6.jpg"
                classOption="section-bg-light"
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
