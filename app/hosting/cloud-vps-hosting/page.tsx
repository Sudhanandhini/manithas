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
    return buildMetadata("/hosting/cloud-vps-hosting");
}

const featuresData = [
    {
        icon: "fas fa-cloud",
        title: "Scalable Cloud Resources",
        desc: "Scale CPU, RAM, and storage on demand as your traffic grows, without migrating servers or facing downtime."
    },
    {
        icon: "fas fa-terminal",
        title: "Full Root Access",
        desc: "Complete root and admin access to configure your VPS exactly the way your application needs."
    },
    {
        icon: "fas fa-bolt",
        title: "High-Speed SSD Storage",
        desc: "NVMe/SSD-backed storage for faster read-write speeds, quicker page loads, and better application performance."
    },
    {
        icon: "fas fa-layer-group",
        title: "Dedicated Resources",
        desc: "Guaranteed CPU and RAM allocated to your instance, with no resource sharing or noisy-neighbor slowdowns."
    },
    {
        icon: "fas fa-camera-retro",
        title: "Snapshot Backups",
        desc: "On-demand and scheduled snapshots so you can restore your server to a known good state in minutes."
    },
    {
        icon: "fas fa-shield-alt",
        title: "24/7 Monitoring & Security",
        desc: "Round-the-clock infrastructure monitoring, firewalls, and security patching to keep your server protected."
    }
];

export default function CloudVpsHosting() {
    return (
        <>
            <Header />
            <HostingHero
                pageTitle="Cloud & VPS Hosting"
                bgImage="/images/bg/breadcrumb-bg-three.jpg"
                headlineBefore=""
                headlineHighlight=""
                subtitle=""
                ctaLabel=""
                ctaLink="/contact"
            />
            <AboutImageSplit
                imageOne="/images/about/about-4.jpg"
                imageTwo="/images/about/about-8.jpg"
                eyebrow="Why Manithas"
                title="Powerful Cloud & VPS Hosting For Your Business"
                paragraphs={[
                    "As your business grows, shared hosting can quickly become a bottleneck. Cloud and VPS hosting give you dedicated resources, full root access, and the flexibility to scale up or down as your traffic and workloads change.",
                    "Our Cloud & VPS hosting is built on high-availability infrastructure with SSD storage, proactive monitoring, and 24/7 support, so your applications stay fast, secure, and online."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <HostingFeatures
                title="Key Features Of Cloud & VPS Hosting"
                subtitle="Cloud and VPS hosting deliver dedicated performance, root-level control, and the flexibility to scale on demand. Built on secure, high-availability infrastructure, it's ideal for growing businesses and resource-intensive applications."
                features={featuresData}
            />
            {/* <HostingTech />
            <LogoBadgeStrip
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
