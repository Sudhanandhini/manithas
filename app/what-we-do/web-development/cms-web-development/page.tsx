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

const cmsBenefits = [
    {
        title: "Easy Content Updates",
        description: "Your team can publish and edit pages without waiting on a developer."
    },
    {
        title: "Version Control",
        description: "Track changes and roll back content whenever you need to."
    },
    {
        title: "Multi-User Workflows",
        description: "Multiple team members can manage content with the right permissions for each role."
    },
    {
        title: "Scalable Structure",
        description: "Content types and templates that grow cleanly as your site expands."
    },
    {
        title: "Faster Publishing",
        description: "Get new pages and campaigns live faster with a system built for editors, not just developers."
    }
];

const cmsServices = [
    {
        icon: "fas fa-th-large",
        title: "Custom Content Types",
        description: "Content structures modeled around how your team actually publishes."
    },
    {
        icon: "fas fa-users-cog",
        title: "Role-Based Access",
        description: "Permissions that match who should be able to create, edit, or publish."
    },
    {
        icon: "fas fa-paint-brush",
        title: "Custom Templates",
        description: "Page templates that keep every new page on-brand automatically."
    },
    {
        icon: "fas fa-plug",
        title: "Plugin & Extension Integration",
        description: "The right extensions integrated cleanly, without slowing your site down."
    },
    {
        icon: "fas fa-search",
        title: "SEO-Friendly Structure",
        description: "Clean markup and metadata controls built in from the start."
    },
    {
        icon: "fas fa-graduation-cap",
        title: "Editor Training & Handover",
        description: "We make sure your team is confident managing content after launch."
    }
];

const whyChooseCms = [
    {
        icon: "fas fa-cogs",
        title: "Platform Expertise",
        description: "Deep experience across the CMS platforms businesses rely on most."
    },
    {
        icon: "fas fa-layer-group",
        title: "Structured Content Models",
        description: "Content organized to stay manageable as your site grows."
    },
    {
        icon: "fas fa-shield-alt",
        title: "Secure Builds",
        description: "Hardened against the common vulnerabilities CMS platforms face."
    },
    {
        icon: "fas fa-bolt",
        title: "Fast Performance",
        description: "Optimized builds that stay quick even as content volume grows."
    },
    {
        icon: "fas fa-comments",
        title: "Clear Communication",
        description: "You're kept in the loop at every stage of the build."
    },
    {
        icon: "fas fa-life-ring",
        title: "Ongoing Support",
        description: "We're available after launch, not just during the build."
    }
];

const cmsFaqs = [
    {
        question: "What is a CMS?",
        answer: "A content management system (CMS) is software that lets you create, edit, and publish website content without writing code."
    },
    {
        question: "Which CMS platform do you recommend?",
        answer: "It depends on your team's workflow and technical comfort - we help you choose the platform that fits best, most commonly WordPress."
    },
    {
        question: "Can you migrate my existing content to a new CMS?",
        answer: "Yes, we handle content migration carefully to preserve your existing pages, media, and SEO value."
    }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/cms-web-development");
}

export default function CmsWebDevelopment() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="CMS Web Development"
                content="Home"
                contentTwo="CMS Web Development"
            />
            <ContentSection
                eyebrow="Web Development"
                title="CMS Web Development"
                description="We build content-managed websites on the CMS that fits your team, so you can update pages and content without touching code."
                bullets={[
                    "CMS selection & setup",
                    "Custom content types & templates",
                    "Editor-friendly workflows",
                    "Training & handover support"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <AboutImageSplit
                imageOne="/images/about/about-7.jpg"
                imageTwo="/images/about/about-8.jpg"
                eyebrow="Leading CMS Web Solutions"
                title="Content You Can Manage Without Touching Code"
                paragraphs={[
                    "Your content needs to stay easy to update as your business evolves. We build websites on flexible content management systems that let your team publish and revise pages without needing a developer.",
                    "We structure your content types and templates so editing stays simple and consistent, no matter which CMS platform fits your workflow best."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <WhyChooseUs
                eyebrow="Why It Matters"
                title="Benefits Of CMS Development"
                items={cmsBenefits}
                classOption="section-bg-light"
            />
            <RelatedApplications
                title="What Our CMS Development Services Include"
                apps={cmsServices}
            />
            <WhyChooseIconGrid
                eyebrow="Grow Your Business With"
                title="Why Choose Manithas For CMS Development"
                description="We combine platform expertise with clear communication to deliver CMS builds your team can actually manage."
                items={whyChooseCms}
                ctaLabel="Start Today"
                ctaLink="/contact"
                classOption="section-bg-light"
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about CMS development"
                items={cmsFaqs}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
