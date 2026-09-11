import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import HostingHero from "@/src/container/Hosting/HostingHero";
import LogoBadgeStrip from "@/src/components/LogoBadgeStrip/LogoBadgeStrip";
import AboutImageSplit from "@/src/components/PageContent/AboutImageSplit";
import HostingFeatures from "@/src/container/Hosting/HostingFeatures";
import HostingTech from "@/src/container/Hosting/HostingTech";
import CallToActionTwo from "@/src/container/CallToAction/CallToActionTwo";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/hosting/email-hosting");
}

const featuresData = [
    {
        icon: "fas fa-shield-alt",
        title: "Security",
        desc: "Keep your business emails protected with reliable security features, encryption, and spam protection."
    },
    {
        icon: "fas fa-wallet",
        title: "Budget",
        desc: "Choose an email hosting plan that fits your budget while giving you the features your business needs."
    },
    {
        icon: "fas fa-user",
        title: "Several accounts",
        desc: "Easily manage multiple email accounts to streamline communication for your business."
    },
    {
        icon: "fas fa-headset",
        title: "Support",
        desc: "Access 24/7 customer support for prompt assistance with any email-related issues."
    },
    {
        icon: "fas fa-inbox",
        title: "Mailbox storage",
        desc: "Enjoy generous storage space for all your important emails and attachments."
    },
    {
        icon: "fas fa-paperclip",
        title: "Attachment limit",
        desc: "Send and receive large files effortlessly with high attachment limits."
    },
    {
        icon: "fas fa-lightbulb",
        title: "Free trial",
        desc: "Try our services risk-free with a complimentary trial to evaluate performance."
    },
    {
        icon: "fas fa-info-circle",
        title: "More Info",
        desc: "Explore additional features and benefits to find the perfect plan for you."
    }
];

export default function EmailHosting() {
    return (
        <>
            <Header />
          <div    className="no-padding-sec">  <HostingHero
                pageTitle="Email Hosting"
                bgImage="/images/bg/breadcrumb-bg-three.jpg"
                headlineBefore=""
                headlineHighlight=""
                subtitle=" "
                ctaLabel=""
                ctaLink="/contact"
                heroIcon=""
            /></div>  
            {/* <LogoBadgeStrip
                eyebrow="We Are Partners Of"
                title="Trusted By Global Giants"
                items={["Google Partner", "Microsoft Partner", "ICANN Accredited", "ResellerClub"]}
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-3.jpg"
                imageTwo="/images/about/about-9.jpg"
                eyebrow="Why Manithas"
                title="Why Professional Email Hosting Matters"
                paragraphs={[
                   "Your email address says more about your business than you might think. A professional email using your own domain instantly looks more credible, makes your brand easier to remember, and gives customers a trusted way to reach you.",

"Beyond looking professional, business email helps keep communication organized and secure. With the right email hosting, you can protect your conversations, reduce spam and security risks, and stay connected with your customers and team without relying on generic email accounts."

                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <HostingFeatures
                title="Our Best Email Hosting Plans"
                subtitle="Our email hosting plans give your business the tools to communicate with confidence, from branded domain addresses and generous storage to spam protection and flexible account options. Choose a plan that fits your business and keep your communication running smoothly."
                features={featuresData}
                columns={4}
            />
            {/* <HostingTech />
            <LogoBadgeStrip
                eyebrow="Clients We Served"
                classOption="clients-strip"
                items={["Apollo", "DynaFusion", "ICA", "Bharat Electronics", "Alcon"]}
            /> */}
            <CallToActionTwo
                title="Are You Looking For Website Development For Your Business?"
                subTitle="Get free quote and consultation in one hour"
                ctaLabel="Request A Quote"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
