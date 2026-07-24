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

const microsoftFeatures = [
    "Outlook email on your business domain",
    "Microsoft Teams for chat & meetings",
    "OneDrive cloud storage per user",
    "Word, Excel & PowerPoint desktop apps",
    "Exchange Online shared calendars",
    "Multi-factor authentication & security policies"
];

const microsoftServices = [
    { icon: "fab fa-microsoft", title: "Microsoft 365 Setup", description: "Complete tenant setup and licensing configured for your team size and needs." },
    { icon: "fas fa-exchange-alt", title: "Email Migration", description: "Migrate existing mailboxes, contacts, and calendars into Exchange Online without data loss." },
    { icon: "fas fa-users", title: "Teams & Collaboration Setup", description: "Configure Microsoft Teams channels and permissions for smooth team collaboration." },
    { icon: "fas fa-cloud", title: "OneDrive & SharePoint", description: "Set up cloud storage and document sharing across your organization." },
    { icon: "fas fa-shield-alt", title: "Security & Compliance", description: "Multi-factor authentication, spam filtering, and data-loss prevention policies." },
    { icon: "fas fa-headset", title: "Ongoing Support", description: "Continued admin support for licensing changes, troubleshooting, and onboarding." }
];

const whyChooseMicrosoft = [
    { icon: "fas fa-bolt", title: "Fast Tenant Setup", description: "Get your organization live on Microsoft 365 quickly." },
    { icon: "fas fa-shield-alt", title: "Enterprise-Grade Security", description: "Backed by Microsoft's security and compliance infrastructure." },
    { icon: "fas fa-user-cog", title: "Careful Migration", description: "Existing mail and files migrated without disruption." },
    { icon: "fas fa-headset", title: "Ongoing Admin Support", description: "Help whenever you need changes or troubleshooting." }
];

const microsoftFaqs = [
    { question: "Can you migrate our existing email to Microsoft 365?", answer: "Yes, we migrate mailboxes, contacts, and calendars into Exchange Online with minimal downtime." },
    { question: "Does Microsoft 365 include Teams and Office apps?", answer: "Yes, depending on your plan, Microsoft 365 includes Outlook, Teams, OneDrive, and desktop or web versions of Word, Excel, and PowerPoint." },
    { question: "Can you manage licensing as our team grows?", answer: "Yes, we help add or adjust licenses and mailboxes as your team size changes." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/business-email/microsoft-365");
}

export default function Microsoft365() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Microsoft 365"
                content="Home"
                contentTwo="Microsoft 365"
            />
            {/* <ContentSection
                eyebrow="Business E-Mail"
                title="Microsoft 365 Email"
                description="Get your team on Microsoft 365 with Outlook, Teams, OneDrive, and the full Office suite, set up and configured on your business domain."
                bullets={[
                    "Outlook email on your domain",
                    "Teams, OneDrive & Office apps",
                    "Exchange Online mailboxes",
                    "Secure, managed setup"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-1.jpg"
                imageTwo="/images/about/about-6.jpg"
                eyebrow="Microsoft 365 Setup"
                title="The Full Microsoft Suite, Set Up Around Your Business"
                paragraphs={[
                    "Microsoft 365 brings Outlook, Teams, Word, Excel, PowerPoint, and OneDrive together in one subscription, and we handle the setup so your team gets a professional inbox on your own domain from day one.",
                    "We configure Exchange Online mailboxes, security policies, and device sync, so email, chat, and files stay connected across desktop, mobile, and web."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <ChecklistTwoColumn
                eyebrow="What's Included"
                title="Microsoft 365 Features"
                items={microsoftFeatures}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="What We Offer"
                title="Our Microsoft 365 Services"
                apps={microsoftServices}
            />
            <WhyChooseIconGrid
                eyebrow="Grow Your Business With"
                title="Why Choose Manithas For Microsoft 365"
                description="Expert setup, migration, and support so your team gets the most out of Microsoft 365."
                items={whyChooseMicrosoft}
                ctaLabel="Start Today"
                ctaLink="/contact"
                classOption="section-bg-light"
                layout="card"
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about Microsoft 365"
                items={microsoftFaqs}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
