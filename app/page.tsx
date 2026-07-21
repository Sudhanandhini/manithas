import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import IntroSlider from "@/src/container/IntroSlider/IntroSlider";
import HomeAbout from "@/src/components/About/HomeAbout";
import ServiceIconBox from "@/src/container/service/ServiceIconBox";
import HomeSuccess from "@/src/components/Success/HomeSuccess";
import Portfolio from "@/src/container/Portfolio/Portfolio";
import HomeBlog from "@/src/container/BlogGrid/HomeBlog";
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
            <HomeAbout />
            <ServiceIconBox classOption="bg-color-1" />
            <HomeSuccess />
            <Portfolio />
            <HomeBlog />
            <Newsletter />
            <Footer />
            <ScrollToTop />
        </>
    );
}
