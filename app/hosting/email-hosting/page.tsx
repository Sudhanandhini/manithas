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
        desc: "Ensure your emails are protected with advanced security features and encryption protocols."
    },
    {
        icon: "fas fa-wallet",
        title: "Budget",
        desc: "Choose a plan that aligns with your financial goals without sacrificing quality."
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
            <HostingHero
                pageTitle="Email Hosting"
                bgImage="/images/bg/breadcrumb-bg-three.jpg"
                headlineBefore="Professional"
                headlineHighlight="Email Hosting Solutions"
                subtitle="Our professional email hosting solutions offer secure, reliable services with ample storage and 24/7 support. Enhance your brand's credibility with a customized email address tailored for your business."
                ctaLabel="Request A Callback"
                ctaLink="/contact"
                heroIcon="fas fa-envelope-open-text"
            />
            <LogoBadgeStrip
                eyebrow="We Are Partners Of"
                title="Trusted By Global Giants"
                items={["Google Partner", "Microsoft Partner", "ICANN Accredited", "ResellerClub"]}
            />
            <AboutImageSplit
                imageOne="/images/about/about-3.jpg"
                imageTwo="/images/about/about-9.jpg"
                eyebrow="Why Sunsys"
                title="Why Professional Email Hosting Matters"
                paragraphs={[
                    "A professional email is crucial for small businesses and startups, offering a cost-effective communication solution. It enhances your brand's credibility, builds trust with clients, and boosts customer attraction. Unlike generic email addresses, a company email fosters brand recognition and protects against spam and malware. Sunsys, a leading email hosting provider in Bengaluru, ensures secure and memorable communication for your business, making it easier for clients to connect with you."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <HostingFeatures
                title="Our Best Email Hosting Plans"
                subtitle="Discover our customized email hosting plans offering secure communication, ample storage, and spam protection. Enhance your brand with professional domain addresses. Choose a plan that fits your needs!"
                features={featuresData}
                columns={4}
            />
            <HostingTech />
            <LogoBadgeStrip
                eyebrow="Clients We Served"
                classOption="clients-strip"
                items={["Apollo", "DynaFusion", "ICA", "Bharat Electronics", "Alcon"]}
            />
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
