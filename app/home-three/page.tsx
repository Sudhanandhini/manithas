import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import IntroThree from "@/src/container/IntroSlider/IntroThree";
import HomeAboutThree from "@/src/container/About/HomeAboutThree";
import Funfact from "@/src/container/Funfact/Funfact";
import ServiceIconBox from "@/src/container/service/ServiceIconBox";
import Faq from "@/src/container/Faq/Faq";
import PortfolioTwo from "@/src/container/Portfolio/PortfolioTwo";
import Team from "@/src/container/Team/Team";
import TestimonialContainer from "@/src/container/Testimonial/TestimonialContainer";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import HomeBlog from "@/src/container/BlogGrid/HomeBlog";
import ContactInformation from "@/src/container/ContactInformation/ContactInformation";
import BrandContainer from "@/src/container/Brand/BrandContainer";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/home-three");
}

export default function HomeThree() {
    return (
        <>
            <Header />
            <IntroThree />
            <HomeAboutThree />
            <Funfact classOption="section-padding bg-primary-blue" />
            <ServiceIconBox />
            <Faq />
            <PortfolioTwo />
            <Team />
            <TestimonialContainer />
            <CallToAction />
            <HomeBlog />
            <ContactInformation classOption="bg-primary-blue" />
            <BrandContainer classOption="section-padding" />
            <Footer />
            <ScrollToTop />
        </>
    );
}
