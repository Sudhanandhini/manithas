import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ServiceIconBoxTwo from "@/src/container/service/ServiceIconBoxTwo";
import ServiceSkill from "@/src/container/service/ServiceSkill";
import AboutSix from "@/src/container/About/AboutSix";
import FunfactTwo from "@/src/container/Funfact/FunfactTwo";
import ContactInformationThree from "@/src/container/ContactInformation/ContactInformationThree";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/service");
}

export default function Service() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="We work with bold brands that we believe in"
                content="Home"
                contentTwo="Services"
            />
            <ServiceIconBoxTwo />
            <ServiceSkill />
            <AboutSix />
            <FunfactTwo />
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </>
    );
}
