import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import AboutImageSplit from "@/src/components/PageContent/AboutImageSplit";
import RelatedApplications from "@/src/components/PageContent/RelatedApplications";
import ChecklistTwoColumn from "@/src/components/PageContent/ChecklistTwoColumn";
import WhyChooseUs from "@/src/components/PageContent/WhyChooseUs";
import WhyChooseIconGrid from "@/src/components/PageContent/WhyChooseIconGrid";
import PageFaq from "@/src/components/PageContent/PageFaq";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

const businessEmailServices = [
    {
        icon: "fas fa-envelope-open-text",
        title: "Business Email Setup",
        description: "We configure professional email accounts using your business domain for a polished and trustworthy online presence."
    },
    {
        icon: "fas fa-exchange-alt",
        title: "Email Migration",
        description: "Move your existing emails, contacts, and calendars securely without data loss or downtime."
    },
    {
        icon: "fab fa-microsoft",
        title: "Microsoft 365 Email",
        description: "Boost productivity with Outlook, Teams, OneDrive, Word, Excel, PowerPoint, and Exchange Online integration."
    },
    {
        icon: "fab fa-google",
        title: "Google Workspace Setup",
        description: "Collaborate efficiently with Gmail, Google Drive, Docs, Meet, Calendar, and other Workspace tools."
    },
    {
        icon: "fas fa-shield-alt",
        title: "Email Security & Protection",
        description: "Protect your organization from spam, phishing, malware, and unauthorized access with advanced security measures."
    },
    {
        icon: "fas fa-database",
        title: "Email Backup & Recovery",
        description: "Safeguard important business communications with automated backups and quick recovery options."
    },
    {
        icon: "fas fa-headset",
        title: "Ongoing Support",
        description: "Receive expert assistance for account management, troubleshooting, and maintenance whenever you need it."
    }
];

const businessEmailFeatures = [
    "Custom domain email addresses",
    "Secure authentication",
    "Spam and virus protection",
    "Mobile & desktop synchronization",
    "Webmail access",
    "Shared calendars & contacts",
    "Large mailbox storage",
    "Email forwarding & auto-responders",
    "Email aliases",
    "Data backup",
    "99.9% uptime",
    "Multi-device support"
];

const businessEmailBenefits = [
    {
        title: "Build Trust With Customers",
        description: "A branded address signals credibility the moment someone sees your email."
    },
    {
        title: "Strengthen Your Brand Identity",
        description: "Every email sent reinforces your company name instead of a generic provider."
    },
    {
        title: "Improve Professional Communication",
        description: "Shared calendars and contacts keep your team coordinated and responsive."
    },
    {
        title: "Protect Sensitive Information",
        description: "Advanced security keeps business communications safe from spam and phishing."
    },
    {
        title: "Scale As You Grow",
        description: "Add mailboxes and storage easily as your team and business expand."
    }
];

const whyChooseBusinessEmail = [
    {
        icon: "fas fa-bolt",
        title: "Fast Email Deployment",
        description: "Get your team up and running on professional email quickly."
    },
    {
        icon: "fas fa-shield-alt",
        title: "Secure & Reliable Infrastructure",
        description: "Built on infrastructure designed for security and consistent uptime."
    },
    {
        icon: "fas fa-user-cog",
        title: "Expert Configuration & Migration",
        description: "Careful setup and migration that protects your existing data."
    },
    {
        icon: "fas fa-tags",
        title: "Affordable Pricing Plans",
        description: "Business email solutions that fit budgets of every size."
    },
    {
        icon: "fas fa-headset",
        title: "Dedicated Technical Support",
        description: "Real support when you need help with setup or troubleshooting."
    },
    {
        icon: "fas fa-briefcase",
        title: "Business-Focused Solutions",
        description: "Solutions built around how growing businesses actually communicate."
    }
];

const businessEmailFaqs = [
    {
        question: "Why should I use a business email instead of a free email service?",
        answer: "A business email enhances your brand's credibility, builds customer trust, and provides better security and control than free email services."
    },
    {
        question: "Can you migrate my existing emails?",
        answer: "Yes. We securely migrate emails, contacts, calendars, and folders from your current email provider with minimal downtime."
    },
    {
        question: "Which business email platforms do you support?",
        answer: "We support Microsoft 365, Google Workspace, cPanel Email, Zoho Mail, and other leading business email solutions."
    },
    {
        question: "Can I access my email on my phone?",
        answer: "Yes. Your business email can be accessed on smartphones, tablets, desktops, and web browsers."
    },
    {
        question: "Do you provide technical support?",
        answer: "Yes. We offer setup, maintenance, troubleshooting, security updates, and ongoing technical support."
    }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/business-email");
}

export default function BusinessEmail() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Business E-Mail"
                content="Home"
                contentTwo="Business E-Mail"
            />
            <ContentSection
                eyebrow="What We Do"
                title="Professional Business Email For Your Brand"
                description="Create a strong, credible identity with branded email addresses that match your domain. Instead of generic email services, use addresses like name@yourcompany.com to build trust, improve communication, and strengthen your brand image."
                bullets={[
                    "Custom domain email",
                    "Spam & malware protection",
                    "Mobile & desktop sync",
                    "Reliable uptime"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <AboutImageSplit
                imageOne="/images/about/about-3.jpg"
                imageTwo="/images/about/about-4.jpg"
                eyebrow="Why Choose Business Email"
                title="Secure, Reliable Email Built For Business"
                paragraphs={[
                    "A professional business email helps establish credibility while ensuring secure and efficient communication with clients, partners, and employees.",
                    "Our business email solutions are secure, reliable, and accessible from anywhere, making it easy for your team to stay connected and productive."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
            />
            <RelatedApplications
                title="Our Business Email Services"
                apps={businessEmailServices}
                classOption="section-bg-light"
            />
            <ChecklistTwoColumn
                eyebrow="What's Included"
                title="Features"
                items={businessEmailFeatures}
            />
            <WhyChooseUs
                eyebrow="Why It Matters"
                title="Benefits Of Business Email"
                items={businessEmailBenefits}
                classOption="section-bg-light"
            />
            <WhyChooseIconGrid
                eyebrow="Grow Your Business With"
                title="Why Choose Us?"
                description="Business-focused email solutions backed by expert setup, migration, and ongoing support."
                items={whyChooseBusinessEmail}
                ctaLabel="Start Today"
                ctaLink="/contact"
                layout="card"
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about business email"
                items={businessEmailFaqs}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
