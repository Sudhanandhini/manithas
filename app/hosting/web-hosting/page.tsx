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
        desc: "Sunsys Technologies provides reliable web hosting services at competitive prices with dedicated cloud servers."
    },
    {
        icon: "fas fa-infinity",
        title: "Unlimited Web Hosting",
        desc: "We offer unlimited shared and individual hosting plans with ample cloud space for business growth."
    },
    {
        icon: "fas fa-wallet",
        title: "Budget-Friendly Web Hosting",
        desc: "Sunsys Technologies offers affordable web hosting in Bangalore, ensuring savings and customer satisfaction with quality service."
    },
    {
        icon: "fas fa-shopping-cart",
        title: "Attractive Offers and Discounts",
        desc: "Launch your website affordably with free domain hosting. We provide high-quality services for Indian businesses."
    },
    {
        icon: "fab fa-wordpress",
        title: "WordPress-Optimized Hosting",
        desc: "We provide fast, high-quality WordPress hosting with custom plugins and unlimited SSD storage."
    }
];

export default function WebHosting() {
    return (
        <>
            <Header />
            <HostingHero
                pageTitle="Web Hosting"
                bgImage="/images/bg/breadcrumb-bg-three.jpg"
                headlineBefore="Power Your Online Presence with Our"
                headlineHighlight="Web Hosting Solutions"
                subtitle="Experience fast, reliable, and secure web hosting tailored to elevate your online presence and drive success."
                ctaLabel="Request A Callback"
                ctaLink="/contact"
                heroIcon="fas fa-server"
            />
            <LogoBadgeStrip
                eyebrow="We Are Partners Of"
                title="Trusted By Global Giants"
                items={["Google Partner", "Microsoft Partner", "ICANN Accredited", "ResellerClub"]}
            />
            <AboutImageSplit
                imageOne="/images/about/about-1.jpg"
                imageTwo="/images/about/about-6.jpg"
                eyebrow="Why Sunsys"
                title="Reliable Web Hosting For Your Business Needs"
                paragraphs={[
                    "At Sunsys Technologies India Pvt. Ltd., we are a leading web hosting company based in Bengaluru, India, offering affordable and high-quality hosting services. With dedicated servers in the USA and India, we provide shared and individual web hosting options without compromising quality or security. Our user-friendly control panel allows easy management of all hosting activities.",
                    "We support various technologies, including ASP, ASP.NET, PHP, MS SQL, AJAX, Perl, MySQL, and Python.",
                    "Our web hosting solutions are essential for making your website visible and navigable on the internet. Choose from our range of affordable hosting plans designed to meet your business needs and help you achieve your goals quickly. Key features include uncompromised security and speed."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <HostingFeatures
                title="Key Features Of Sunsys Web Hosting"
                subtitle="Experience the best-in-class web hosting services with Sunsys Technologies India Pvt. Ltd. With our limitless hosting services you can always think about growing your business. Also, you don't need to extend your budget to purchase high-end web hosting services. We are one of the best website hosting companies in Bangalore and offer affordable hosting services with the following features."
                features={featuresData}
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
