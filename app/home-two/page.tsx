import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import IntroTwo from "@/src/container/IntroSlider/IntroTwo";
import HomeAboutTwo from "@/src/components/About/HomeAboutTwo";
import Funfact from "@/src/container/Funfact/Funfact";
import ServiceIconBox from "@/src/container/service/ServiceIconBox";
import HomeSkillWithVideo from "@/src/container/HomeSkillWithVideo/HomeSkillWithVideo";
import PortfolioTwo from "@/src/container/Portfolio/PortfolioTwo";
import TestimonialContainer from "@/src/container/Testimonial/TestimonialContainer";
import HomeBlog from "@/src/container/BlogGrid/HomeBlog";
import ContactInformationTwo from "@/src/container/ContactInformation/ContactInformationTwo";
import BrandContainer from "@/src/container/Brand/BrandContainer";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/home-two");
}

export default function HomeTwo() {
    return (
        <>
            <Header />
            <IntroTwo />
            <HomeAboutTwo />
            <Funfact />
            <ServiceIconBox classOption="bg-color-1" />
            <HomeSkillWithVideo />
            <PortfolioTwo />
            <TestimonialContainer />
            <HomeBlog SectionBgColor="bg-primary-blue" />
            <ContactInformationTwo />
            <BrandContainer classOption="section-padding-bottom" />
            <Footer />
            <ScrollToTop />
        </>
    );
}
