import type { Metadata } from "next";
import Header from "@/src/partials/header/Header";
import IntroSlider from "@/src/container/IntroSlider/IntroSlider";
import HomeAbout from "@/src/components/About/HomeAbout";
import ServiceIconBox from "@/src/container/service/ServiceIconBox";
import HomeSuccess from "@/src/components/Success/HomeSuccess";
import Portfolio from "@/src/container/Portfolio/Portfolio";
import HomeBlog from "@/src/container/BlogGrid/HomeBlog";
import Newsletter from "@/src/container/Newsletter/Newsletter";
import ContactInformation from "@/src/container/ContactInformation/ContactInformation";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export const metadata: Metadata = {
    title: "Exomac – Business React JS Template",
};

export default function HomeOne() {
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
            <ContactInformation />
            <Footer />
            <ScrollToTop />
        </>
    );
}
