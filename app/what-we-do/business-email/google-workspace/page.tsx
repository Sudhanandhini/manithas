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

const workspaceFeatures = [
    "Gmail on your business domain",
    "Google Drive cloud storage per user",
    "Docs, Sheets & Slides collaboration",
    "Google Meet for video calls",
    "Shared calendars across your team",
    "Admin console & security controls"
];

const workspaceServices = [
    { icon: "fab fa-google", title: "Google Workspace Setup", description: "Complete domain verification and account setup configured for your team." },
    { icon: "fas fa-exchange-alt", title: "Email Migration", description: "Migrate existing mailboxes, contacts, and calendars into Gmail without data loss." },
    { icon: "fas fa-video", title: "Google Meet Setup", description: "Configure video conferencing and calendar integration for your team." },
    { icon: "fas fa-cloud", title: "Shared Drive Setup", description: "Set up shared drives and folder permissions for team collaboration." },
    { icon: "fas fa-shield-alt", title: "Security & Admin Controls", description: "Two-step verification, spam filtering, and admin policies configured for safety." },
    { icon: "fas fa-headset", title: "Ongoing Support", description: "Continued admin support for licensing changes, troubleshooting, and onboarding." }
];

const whyChooseWorkspace = [
    { icon: "fas fa-bolt", title: "Fast Setup", description: "Get your organization live on Google Workspace quickly." },
    { icon: "fas fa-shield-alt", title: "Reliable & Secure", description: "Backed by Google's secure, high-uptime infrastructure." },
    { icon: "fas fa-user-cog", title: "Careful Migration", description: "Existing mail and files migrated without disruption." },
    { icon: "fas fa-headset", title: "Ongoing Admin Support", description: "Help whenever you need changes or troubleshooting." }
];

const workspaceFaqs = [
    { question: "Can you migrate our existing email to Google Workspace?", answer: "Yes, we migrate mailboxes, contacts, and calendars into Gmail with minimal downtime." },
    { question: "Does Google Workspace include Docs and Meet?", answer: "Yes, Google Workspace includes Gmail, Drive, Docs, Sheets, Slides, Meet, and Calendar." },
    { question: "Can you manage users as our team grows?", answer: "Yes, we help add or adjust user accounts and storage as your team size changes." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/business-email/google-workspace");
}

export default function GoogleWorkspace() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Google Workspace"
                content="Home"
                contentTwo="Google Workspace"
            />
            {/* <ContentSection
                eyebrow="Business E-Mail"
                title="Google Workspace"
                description="Get your team set up on Google Workspace with Gmail, Drive, Docs, Meet, and Calendar, all running on your business domain."
                bullets={[
                    "Gmail on your business domain",
                    "Google Drive, Docs & Sheets",
                    "Google Meet & Calendar",
                    "Secure, managed setup"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-5.jpg"
                imageTwo="/images/about/about-9.jpg"
                eyebrow="Google Workspace Setup"
                title="Gmail And The Full Google Suite, On Your Domain"
                paragraphs={[
                    "Google Workspace brings Gmail, Drive, Docs, Sheets, Meet, and Calendar together in one place, and we set it up so your team gets a professional @yourcompany.com inbox backed by Google's infrastructure.",
                    "We configure shared drives, calendars, and security policies, so collaboration stays smooth across your whole organization."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
            />
            <ChecklistTwoColumn
                eyebrow="What's Included"
                title="Google Workspace Features"
                items={workspaceFeatures}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="What We Offer"
                title="Our Google Workspace Services"
                apps={workspaceServices}
            />
            <WhyChooseIconGrid
                eyebrow="Grow Your Business With"
                title="Why Choose Manithas For Google Workspace"
                description="Expert setup, migration, and support so your team gets the most out of Google Workspace."
                items={whyChooseWorkspace}
                ctaLabel="Start Today"
                ctaLink="/contact"
                classOption="section-bg-light"
                layout="card"
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about Google Workspace"
                items={workspaceFaqs}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
