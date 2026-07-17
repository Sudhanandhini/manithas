import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContactInformation from "@/src/container/ContactInformation/ContactInformation";
import GoogleMap from "@/src/container/Map/GoogleMap";
import ContactFromContainer from "@/src/container/ContactFromContainer/ContactFromContainer";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/contact");
}

export default function Contact() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-five.jpg"
                title="We are an agency located in New York"
                content="Home"
                contentTwo="Contact Us"
            />
            <ContactInformation />
            <GoogleMap />
            <ContactFromContainer />
            <Footer />
            <ScrollToTop />
        </>
    );
}
