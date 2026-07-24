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

const webEmailFeatures = [
    "Email on your own business domain",
    "Secure browser-based webmail access",
    "IMAP/POP support for desktop & mobile apps",
    "Spam & virus filtering",
    "Email forwarding & auto-responders",
    "Affordable, predictable pricing"
];

const webEmailServices = [
    { icon: "fas fa-envelope-open-text", title: "Webmail Account Setup", description: "Professional email accounts on your domain, accessible from any browser." },
    { icon: "fas fa-exchange-alt", title: "Email Migration", description: "Move existing mail and contacts to your new web email hosting." },
    { icon: "fas fa-mobile-alt", title: "Mobile & Desktop Sync", description: "IMAP/POP configuration for Outlook, Apple Mail, and mobile mail apps." },
    { icon: "fas fa-shield-alt", title: "Spam & Virus Protection", description: "Filtering to keep inboxes clean and free of malicious email." },
    { icon: "fas fa-random", title: "Forwarding & Auto-Responders", description: "Set up forwarding rules and automated replies for every mailbox." },
    { icon: "fas fa-headset", title: "Ongoing Support", description: "Help with mailbox changes, troubleshooting, and configuration." }
];

const whyChooseWebEmail = [
    { icon: "fas fa-tags", title: "Affordable Pricing", description: "Professional email without the cost of a full productivity suite." },
    { icon: "fas fa-bolt", title: "Quick Setup", description: "Get mailboxes live on your domain fast." },
    { icon: "fas fa-shield-alt", title: "Secure & Filtered", description: "Spam and virus protection built in." },
    { icon: "fas fa-headset", title: "Reliable Support", description: "Help whenever you need changes or troubleshooting." }
];

const webEmailFaqs = [
    { question: "Is web email different from Microsoft 365 or Google Workspace?", answer: "Yes, web email is simple domain-based email hosting without the full productivity suite, ideal for businesses that just need reliable inboxes." },
    { question: "Can I access web email on my phone?", answer: "Yes, web email supports IMAP/POP so it works with mobile mail apps, in addition to browser-based webmail." },
    { question: "Can you migrate my existing emails?", answer: "Yes, we migrate existing mailboxes and contacts to your new web email hosting with minimal downtime." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/business-email/web-email");
}

export default function WebEmail() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Web Email"
                content="Home"
                contentTwo="Web Email"
            />
            {/* <ContentSection
                eyebrow="Business E-Mail"
                title="Web Email"
                description="A simple, cost-effective business email solution hosted on your own domain, accessible from any browser through secure webmail."
                bullets={[
                    "Email on your business domain",
                    "Browser-based webmail access",
                    "Spam & virus protection",
                    "IMAP/POP & mobile sync"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-2.jpg"
                imageTwo="/images/about/about-7.jpg"
                eyebrow="Web Email Hosting"
                title="Simple, Affordable Email Hosted On Your Domain"
                paragraphs={[
                    "Not every business needs Microsoft 365 or Google Workspace. Our web email hosting gives you professional name@yourcompany.com addresses with secure webmail access, at a fraction of the cost.",
                    "We configure mailboxes, spam filtering, and mobile sync, so your team gets a reliable inbox without paying for tools they won't use."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
            />
            <ChecklistTwoColumn
                eyebrow="What's Included"
                title="Web Email Features"
                items={webEmailFeatures}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="What We Offer"
                title="Our Web Email Services"
                apps={webEmailServices}
            />
            <WhyChooseIconGrid
                eyebrow="Grow Your Business With"
                title="Why Choose Manithas For Web Email"
                description="Straightforward, budget-friendly email hosting backed by expert setup and support."
                items={whyChooseWebEmail}
                ctaLabel="Start Today"
                ctaLink="/contact"
                classOption="section-bg-light"
                layout="card"
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about web email"
                items={webEmailFaqs}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
