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
        desc: "Scale CPU, RAM, and storage as your business grows, giving your applications the resources they need without unnecessary downtime."
    },
    {
        icon: "fas fa-terminal",
        title: "Full Root Access",
        desc: "Get complete root and administrative access to configure and manage your VPS based on your application requirements."
    },
    {
        icon: "fas fa-bolt",
        title: "High-Speed SSD Storage",
        desc: "SSD and NVMe storage delivers faster data access, quicker page loads, and improved application performance."
    },
    {
        icon: "fas fa-layer-group",
        title: "Dedicated Resources",
        desc: "Guaranteed CPU and RAM allocated to your instance, with no resource sharing or noisy-neighbor slowdowns."
    },
    {
        icon: "fas fa-camera-retro",
        title: "Snapshot Backups",
        desc: "Create scheduled or on-demand server snapshots to protect your data and restore your environment quickly when needed."
    },
    {
        icon: "fas fa-shield-alt",
        title: "24/7 Monitoring & Security",
        desc: "Round-the-clock monitoring, firewalls, and security updates help keep your server protected, stable, and available."
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
                    "More visitors, bigger workloads, and growing applications call for hosting that can keep up. Cloud and VPS hosting give your business the extra power and flexibility to handle growth without compromising on speed or reliability.",

"Enjoy dedicated resources, greater control, and the freedom to scale when your needs change. With SSD-powered infrastructure, proactive monitoring, strong security, and 24/7 support, your websites and applications stay responsive, stable, and ready for whatever comes next."

                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <HostingFeatures
                title="Key Features Of Cloud & VPS Hosting"
                subtitle="Cloud and VPS hosting give you the speed, control, and flexibility to handle more traffic and demanding applications without the hassle. With dedicated resources, fast storage, and reliable security, you get a hosting setup that keeps your website and applications running smoothly."
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
