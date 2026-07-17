import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import AboutFour from "@/src/container/About/AboutFour";
import Video from "@/src/container/Video/Video";
import AboutFive from "@/src/container/About/AboutFive";
import TestimonialContainer from "@/src/container/Testimonial/TestimonialContainer";
import CallToActionTwo from "@/src/container/CallToAction/CallToActionTwo";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/about");
}

export default function AboutUs() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg.jpg"
                title="We are an agency located in New York"
                content="Home"
                contentTwo="About Us"
            />
            <AboutFour />
            <Video />
            <AboutFive />
            <TestimonialContainer classOption="bg-primary-blue" />
            <CallToActionTwo />
            <Footer />
            <ScrollToTop />
        </>
    );
}
