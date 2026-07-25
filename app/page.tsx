import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import IntroSlider from "@/src/container/IntroSlider/IntroSlider";
import LogoBadgeStrip from "@/src/components/LogoBadgeStrip/LogoBadgeStrip";
import ClientLogoMarquee from "@/src/components/ClientLogoMarquee/ClientLogoMarquee";
import HomeAbout from "@/src/components/About/HomeAbout";
import ServiceIconBox from "@/src/container/service/ServiceIconBox";
import HomeSuccess from "@/src/components/Success/HomeSuccess";
import Portfolio from "@/src/container/Portfolio/Portfolio";
import Newsletter from "@/src/container/Newsletter/Newsletter";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/");
}

export default function Home() {
    return (
        <>
            <Header />
            <IntroSlider />
            <LogoBadgeStrip
                eyebrow="We Are Partners Of"
                title="Trusted By Global Giants"
                items={[
                    { label: "Google Partner", logo: "/images/brand/partners/google-partner.png" },
                    { label: "Microsoft Partner", logo: "/images/brand/partners/microsoft-partner.png" },
                    { label: "ICANN Accredited Registrar", logo: "/images/brand/partners/icann.png" },
                    { label: "ResellerClub", logo: "/images/brand/partners/resellerclub.jpg" },
                    { label: "PhonePe", logo: "/images/brand/partners/phonepe.webp" },
                ]}
            />
            <HomeAbout />
            <ServiceIconBox classOption="bg-color-1" />
            <HomeSuccess />
            <Portfolio />
            <ClientLogoMarquee />
            <Newsletter />
            <Footer />
            <ScrollToTop />
        </>
    );
}
