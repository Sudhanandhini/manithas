import type { Metadata } from "next";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import WorkContainer from "@/src/container/Work/WorkContainer";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import AboutFive from "@/src/container/About/AboutFive";
import BrandContainer from "@/src/container/Brand/BrandContainer";
import Faq from "@/src/container/Faq/Faq";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export const metadata: Metadata = {
    title: "Exomac || Work",
};

export default function Work() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-two.jpg"
                title="We work with bold brands that we believe in"
                content="Home"
                contentTwo="Work"
            />
            <WorkContainer />
            <CallToAction />
            <AboutFive />
            <BrandContainer classOption="section-padding-bottom" />
            <Faq />
            <Footer />
            <ScrollToTop />
        </>
    );
}
