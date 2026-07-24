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
    return buildMetadata("/hosting/linux-hosting");
}

const featuresData = [
    {
        icon: "fas fa-puzzle-piece",
        title: "Compatibility",
        desc: "Broad compatibility with open-source platforms and frameworks, so your applications run smoothly without extra configuration."
    },
    {
        icon: "fas fa-wallet",
        title: "Affordability",
        desc: "Enterprise-grade hosting infrastructure at a price that fits growing businesses, with no hidden costs."
    },
    {
        icon: "fas fa-chart-line",
        title: "Consistency In Performance",
        desc: "Optimized servers ensure fast load times and seamless functionality across all devices, improving user experience and SEO."
    },
    {
        icon: "fas fa-expand-arrows-alt",
        title: "Adaptability",
        desc: "Easily scale resources up or down as your traffic and storage needs grow, without downtime."
    },
    {
        icon: "fas fa-desktop",
        title: "Economical",
        desc: "Cost-effective plans with efficient resource allocation, so you only pay for what your business actually needs."
    },
    {
        icon: "fas fa-server",
        title: "Server Access",
        desc: "Full server access with regular security audits, updates, and optimizations to keep your website running smoothly."
    }
];

export default function LinuxHosting() {
    return (
        <>
            <Header />
            <div    className="no-padding-sec">
   <HostingHero
          
                pageTitle="Linux Hosting"
                bgImage="/images/bg/breadcrumb-bg-three.jpg"
                headlineBefore=""
                headlineHighlight=""
                subtitle=""
                ctaLabel=""
                ctaLink="/contact"
               
            />
            </div>
         
            {/* <LogoBadgeStrip
                eyebrow="We Are Partners Of"
                items={["Google Partner", "Microsoft Partner", "ICANN Accredited", "ResellerClub"]}
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-4.jpg"
                imageTwo="/images/about/about-8.jpg"
                eyebrow="Why Manithas"
                title="Powerful Linux Hosting For Your Business"
                paragraphs={[
                    "In today's world, with countless devices of varying resolutions and screen sizes, managing a separate website for each device isn't practical. The solution is responsive web design, which adjusts content to fit any screen size. With 72% of users searching the web on mobile, a non-responsive website means losing potential visitors.",
                   
                    "Our Linux hosting offers reliable service management with strong compatibility for open-source technologies like PHP, Perl, and MySQL, making it ideal for business operations over the web."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <HostingFeatures
                title="Key Features Of Linux Hosting"
                subtitle="Linux hosting delivers robust performance, security, and flexibility. Key features include multi-language support, easy scalability, and cost-effectiveness. Its compatibility with open-source applications and strong community support make it ideal for businesses of all sizes."
                features={featuresData}
            />
            {/* <HostingTech /> */}
            {/* <LogoBadgeStrip
                eyebrow="Clients We Served"
                classOption="clients-strip"
                items={["Bharat Electronics", "Indian Institute of Science", "Supreme", "ChildFund", "KLE Society's"]}
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
