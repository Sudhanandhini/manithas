import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import AboutImageSplit from "@/src/components/PageContent/AboutImageSplit";
import ChecklistTwoColumn from "@/src/components/PageContent/ChecklistTwoColumn";
import RelatedApplications from "@/src/components/PageContent/RelatedApplications";
import WhyChooseIconGrid from "@/src/components/PageContent/WhyChooseIconGrid";
import PageFaq from "@/src/components/PageContent/PageFaq";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

const reactBenefits = [
    "Fast, responsive user interfaces",
    "Reusable component architecture",
    "Strong ecosystem & community support",
    "Easy integration with APIs & third-party tools",
    "SEO-friendly rendering with Next.js",
    "Smooth single-page application experience"
];

const reactServices = [
    { icon: "fas fa-laptop-code", title: "Custom React Applications", description: "Purpose-built React applications designed around your exact business workflows." },
    { icon: "fas fa-cubes", title: "Component Library Development", description: "Reusable, well-documented component libraries that keep your UI consistent as it scales." },
    { icon: "fas fa-bolt", title: "Single Page Applications", description: "Fast, app-like experiences that load once and update instantly as users navigate." },
    { icon: "fas fa-server", title: "Next.js & SSR Development", description: "Server-rendered React applications built on Next.js for speed and SEO." },
    { icon: "fas fa-plug", title: "API & Third-Party Integration", description: "Seamless integration with REST/GraphQL APIs, payment gateways, and external services." },
    { icon: "fas fa-tools", title: "Maintenance & Upgrades", description: "Ongoing support, dependency upgrades, and performance tuning for existing React apps." }
];

const whyChooseReact = [
    { icon: "fas fa-users", title: "Experienced React Team", description: "Developers who specialize in React and modern frontend architecture." },
    { icon: "fas fa-rocket", title: "Performance First", description: "Optimized rendering and code-splitting for fast load times." },
    { icon: "fas fa-shield-alt", title: "Clean, Secure Code", description: "Well-structured, secure codebases that are easy to audit and extend." },
    { icon: "fas fa-comments", title: "Transparent Communication", description: "Clear updates at every stage of development, from planning to launch." }
];

const reactFaqs = [
    { question: "Why choose React over other frontend frameworks?", answer: "React's component-based architecture, large ecosystem, and strong community support make it a reliable choice for building fast, maintainable web applications." },
    { question: "Do you build with plain React or Next.js?", answer: "We use both, depending on your project. Next.js is our default when SEO and server rendering matter; plain React suits internal tools and dashboards." },
    { question: "Can you take over an existing React project?", answer: "Yes, we regularly audit and take over existing React codebases for ongoing development, maintenance, and upgrades." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/react-development");
}

export default function ReactDevelopment() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="React Development"
                content="Home"
                contentTwo="React Development"
            />
            {/* <ContentSection
                eyebrow="Web Development"
                title="React Development"
                description="We build fast, interactive, and scalable web applications using React.js, turning complex interfaces into smooth, component-driven experiences for your users."
                bullets={[
                    "Component-based architecture",
                    "Fast, interactive user interfaces",
                    "Reusable, maintainable codebases",
                    "SEO-friendly with Next.js support"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-6.jpg"
                imageTwo="/images/about/about-7.jpg"
                eyebrow="React Development Services"
                title="Modern, Component-Driven Web Applications Built On React"
                paragraphs={[
                    "React has become the standard for building fast, interactive web interfaces, and our team uses it to build applications that feel instant, scale cleanly, and stay easy to maintain as your product grows.",
                    "From single-page applications to full Next.js-powered websites, we structure every project around reusable components and clean state management, so your team can keep shipping features long after launch."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <ChecklistTwoColumn
                eyebrow="Why It Matters"
                title="Benefits Of Choosing React For Your Web Application"
                items={reactBenefits}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="What We Offer"
                title="What Our React Development Services Include"
                apps={reactServices}
            />
            <WhyChooseIconGrid
                eyebrow="Grow Your Business With"
                title="Why Choose Manithas For React Development"
                description="We build React applications with a focus on performance, clean architecture, and long-term maintainability."
                items={whyChooseReact}
                ctaLabel="Start Today"
                ctaLink="/contact"
                classOption="section-bg-light"
                layout="card"
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our React development"
                items={reactFaqs}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
