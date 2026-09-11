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
        desc: "Works seamlessly with popular open-source platforms, frameworks, databases, and development technologies, giving your applications a flexible environment to run efficiently"
    },
    {
        icon: "fas fa-wallet",
        title: "Affordability",
        desc: "Get reliable hosting infrastructure without the high cost, making Linux hosting a practical choice for startups, growing businesses, and established organizations"
    },
    {
        icon: "fas fa-chart-line",
        title: "Consistency In Performance",
        desc: "Optimized server resources help deliver stable performance, faster loading, and reliable website availability, creating a smoother experience for your visitors"
    },
    {
        icon: "fas fa-expand-arrows-alt",
        title: "Adaptability",
        desc: "Scale your hosting resources as your website grows, making it easier to handle changing traffic, storage, and application requirements"
    },
    {
        icon: "fas fa-desktop",
        title: "Economical",
        desc: "Make the most of your hosting investment with efficient resource usage and flexible plans designed around your actual business requirements"
    },
    {
        icon: "fas fa-server",
        title: "Server Access",
        desc: "Access and manage your hosting environment with greater control, supported by regular updates, security checks, and server-level optimizations"
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
                 "Behind every smooth digital experience is dependable hosting that keeps your website running consistently. With more than 72% of users accessing the web through mobile devices, businesses need websites that stay available, responsive, and reliable across every screen. Linux hosting provides a flexible, and cost-effective environment to support modern websites and applications.",

"Our Linux hosting solutions work seamlessly with PHP, MySQL, Perl, and other widely used technologies, giving your website a dependable foundation to perform smoothly. With secure hosting, reliable server performance, and ongoing technical support, we help keep your website online, responsive, and ready for whatever comes next."

                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <HostingFeatures
                title="Key Features Of Linux Hosting"
                subtitle="Good hosting aims at making things easier with reliable performance, strong security and optimal flexibility. With broad technology compatibility, and cost-effective infrastructure, it provides a dependable foundation for websites and web applications to grow and build online. "
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
