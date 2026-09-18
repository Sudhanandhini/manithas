import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import PageFaq from "@/src/components/PageContent/PageFaq";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

const applicationFaqs = [
    { question: "What kind of web applications do you build?", answer: "We build Alumni, eLibrary, Subscription, Employee Records, and Online Assessment  applications, along with fully custom web applications, each with role-based logins and admin dashboards." },
    { question: "Can admins export data from these applications?", answer: "Yes, every application we build includes an admin option to export records to Excel for reporting and offline use." },
    { question: "Do you build role-based logins such as admin, student, or employee?", answer: "Yes, we build separate logins and permission levels for each user type, such as admin, super admin, students, employees, or members, depending on the application." },
    { question: "Can you build a custom web application if my requirement isn't listed?", answer: "Yes, alongside our ready categories we build fully custom web applications designed around your exact workflow." }
];

const developmentFaqs = [
    { question: "Which web development services do you offer?", answer: "React, HTML & CSS, WordPress, WooCommerce, Shopify, and custom development, along with landing pages, website maintenance, redesign, and responsive design." },
    { question: "Do you build with React or WordPress?", answer: "We work with both, and recommend the right stack based on your project's complexity, content needs, and long-term maintenance plans." },
    { question: "Can you redesign or maintain my existing website?", answer: "Yes, we offer dedicated website redesign and ongoing website maintenance services for existing sites." },
    { question: "Do you build e-commerce websites?", answer: "Yes, through E-Commerce, WooCommerce, and Shopify development services tailored to your catalog and business model." }
];

const hostingFaqs = [
    { question: "What hosting options do you offer?", answer: "Linux Hosting, Web Hosting, Email Hosting, and Cloud & VPS Hosting, each suited to different traffic and resource needs." },
    { question: "Can I upgrade from shared hosting to Cloud & VPS later?", answer: "Yes, we help you migrate to Cloud & VPS Hosting as your traffic and resource needs grow, without downtime." },
    { question: "Do you provide ongoing server maintenance?", answer: "Yes, our hosting plans include monitoring, security updates, and maintenance to keep your site running smoothly." },
    { question: "Which hosting is best for a WordPress or WooCommerce site?", answer: "Linux Hosting or Cloud & VPS Hosting are typically the best fit for WordPress and WooCommerce sites, depending on your traffic." }
];

const businessEmailFaqs = [
    { question: "What business email options do you offer?", answer: "Microsoft 365, Google Workspace, and affordable Web Email hosting on your own domain." },
    { question: "Can you migrate our existing email?", answer: "Yes, we migrate mailboxes, contacts, and calendars to Microsoft 365, Google Workspace, or Web Email with minimal downtime." },
    { question: "Which is better, Microsoft 365 or Google Workspace?", answer: "It depends on your team's existing tools - Microsoft 365 suits Office-based teams and Google Workspace suits Docs/Gmail-based teams. We help you choose either way." },
    { question: "Is Web Email a good option for small businesses?", answer: "Yes, Web Email gives you a professional domain-based inbox at a lower cost when you don't need the full Microsoft 365 or Google Workspace suite." }
];

const googleAnalyticsFaqs = [
    { question: "Do you set up Google Analytics on new websites?", answer: "Yes, we set up Google Analytics (GA4) on every website we build, so you can track visitors and behavior from day one." },
    { question: "Can you add Google Analytics to my existing website?", answer: "Yes, we can add and configure Google Analytics tracking on any existing website, along with goal and event tracking." },
    { question: "Do you provide analytics reports?", answer: "Yes, we can set up dashboards and periodic reports so you can track traffic, conversions, and key metrics without digging through raw data." },
    { question: "Can you connect Google Analytics with Search Console?", answer: "Yes, we link Google Analytics with Google Search Console to give you a complete picture of traffic and search performance." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/faq");
}

export default function Faq() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Frequently Asked Questions"
                content="Home"
                contentTwo="FAQ"
            />
            <PageFaq
                eyebrow="Web Application"
                title="Questions about our web applications"
                items={applicationFaqs}
                imageOne="/images/portfolio/portfolio-4.jpg"
                imageTwo="/images/portfolio/portfolio-5.jpg"
            />
            <PageFaq
                eyebrow="Development"
                title="Questions about web development"
                items={developmentFaqs}
                imageOne="/images/portfolio/portfolio-6.jpg"
                imageTwo="/images/portfolio/portfolio-7.jpg"
                classOption="section-bg-light"
            />
            <PageFaq
                eyebrow="Hosting"
                title="Questions about hosting"
                items={hostingFaqs}
                imageOne="/images/portfolio/portfolio-8.jpg"
                imageTwo="/images/portfolio/portfolio-9.jpg"
            />
            <PageFaq
                eyebrow="Business Email"
                title="Questions about business email"
                items={businessEmailFaqs}
                imageOne="/images/portfolio/portfolio-1.jpg"
                imageTwo="/images/portfolio/portfolio-2.jpg"
                classOption="section-bg-light"
            />
            <PageFaq
                eyebrow="Google Analytics"
                title="Questions about Google Analytics"
                items={googleAnalyticsFaqs}
                imageOne="/images/portfolio/portfolio-3.jpg"
                imageTwo="/images/portfolio/portfolio-4.jpg"
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
