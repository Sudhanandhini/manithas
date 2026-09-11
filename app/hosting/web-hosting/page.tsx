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
    return buildMetadata("/hosting/web-hosting");
}

const featuresData = [
    {
        icon: "fas fa-server",
        title: "Premium Web Hosting",
        desc: "Reliable hosting backed by high-performance cloud infrastructure for demanding websites and applications"
    },
    {
        icon: "fas fa-infinity",
        title: "Unlimited Web Hosting",
        desc: "Flexible hosting plans with generous resources to support websites as your business grows"
    },
    {
        icon: "fas fa-wallet",
        title: "Budget-Friendly Web Hosting",
        desc: "Cost-effective hosting plans that deliver the performance and reliability your business needs"
    },
    {
        icon: "fas fa-shopping-cart",
        title: "Attractive Offers and Discounts",
        desc: "Launch your website with value-driven plans, special offers, and options designed to keep initial costs low"
    },
    {
        icon: "fab fa-wordpress",
        title: "WordPress-Optimized Hosting",
        desc: "WordPress-ready hosting optimized for speed, stability, security, and smooth website management"
    }
];

export default function WebHosting() {
    return (
        <>
            <Header />
            <HostingHero
                pageTitle="Web Hosting"
                bgImage="/images/bg/breadcrumb-bg-three.jpg"
                headlineBefore=""
                headlineHighlight=""
                subtitle=""
                ctaLabel=""
                ctaLink="/contact"
                heroIcon=""
            />
            {/* <LogoBadgeStrip
                eyebrow="We Are Partners Of"
                title="Trusted By Global Giants"
                items={["Google Partner", "Microsoft Partner", "ICANN Accredited", "ResellerClub"]}
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-1.jpg"
                imageTwo="/images/about/about-6.jpg"
                eyebrow="Why Manithas"
                title="Reliable Web Hosting For Your Business Needs"
                paragraphs={[
                   
                  "Our web hosting solutions support a wide range of technologies, including ASP, ASP.NET, PHP, MS SQL, AJAX, Perl, MySQL, and Python, giving businesses the flexibility to host different types of websites and applications.",

"We provide affordable and reliable hosting plans designed around your business needs, helping your website stay accessible, secure, and fast. With dependable infrastructure and performance-focused hosting, we give your digital presence the strong foundation it needs to stay online and perform smoothly."

                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <HostingFeatures
                title="Key Features Of Manithas Web Hosting"
                subtitle="Great hosting shouldn't have to come with a complicated setup or a high price tag. We provide reliable, secure, and performance-focused hosting that gives your website the space it needs to grow, without stretching your budget."
                features={featuresData}
            />
            {/* <HostingTech /> */}
            {/* <LogoBadgeStrip
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
