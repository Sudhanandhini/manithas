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
    "Fast & Responsive: Delivers smooth and engaging user experiences.",
    "Reusable Components:  Makes applications easier to build, update, and maintain.",
    "Strong Ecosystem: Backed by a large community and extensive development resources.",
    "Easy Integration: Connects seamlessly with APIs and third-party services.",
    "SEO-Friendly: Next.js enables better search engine visibility and performance.",
    "Seamless User Experience: Supports smooth, app-like experiences without constant page reloads."
];

const reactServices = [
    { icon: "fas fa-laptop-code", title: "Custom React Applications", description: "Turning complex business requirements into focused React applications built around workflows, users, and everyday operations." },
    { icon: "fas fa-cubes", title: "Component Library Development", description: "Creating reliable collections of reusable interface elements that keeps every screen consistent while making future development faster and simpler." },
    { icon: "fas fa-bolt", title: "Single Page Applications", description: "Delivering fluid, app-like experiences where users can move between features, update information, and interact without waiting for repeated page loads." },
    { icon: "fas fa-server", title: "Next.js & SSR Development", description: "Bringing React applications to life with Next.js, combining faster page delivery, server-side rendering, and a stronger search engine visibility." },
    { icon: "fas fa-plug", title: "API & Third-Party Integration", description: "Bringing your digital tools together by connecting React applications with business systems, payment platforms, APIs, and external services." },
    { icon: "fas fa-tools", title: "Maintenance & Upgrades", description: "Keeping your application ready for what’s next through technology upgrades, performance tuning, issue resolution, and continuous improvements." }
];

const whyChooseReact = [
    { icon: "fas fa-users", title: "Experienced React Team", description: "Skilled React developers with expertise in modern frontend architecture" },
    { icon: "fas fa-rocket", title: "Performance First", description: "Optimized for speed, responsiveness, and smooth user experiences" },
    { icon: "fas fa-shield-alt", title: "Clean, Secure Code", description: "Structured, secure code that is easy to maintain and extend" },
    { icon: "fas fa-comments", title: "Transparent Communication", description: "Clear updates and communication from planning through launch" }
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
                    "React has transformed modern web development by making it easier to build fast, interactive, and highly responsive user interfaces. Its component-based approach allows complex digital experiences to be broken into reusable building blocks, making applications easier to scale, and maintain.",

"Today, React powers a wide range of web applications, platforms, dashboards, and digital products. ",

"Our React Development solutions are designed for long-term performance and maintainability. With React and Next.js capabilities, we deliver everything from single-page applications to SEO-friendly, server-rendered websites, with seamless API and third-party integrations where needed."

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
