import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ServiceIconBoxTwo from "@/src/container/service/ServiceIconBoxTwo";
import ServiceSkill from "@/src/container/service/ServiceSkill";
import AboutSix from "@/src/container/About/AboutSix";
import TechStack from "@/src/container/service/TechStack";
import FunfactTwo from "@/src/container/Funfact/FunfactTwo";
import ContactInformationThree from "@/src/container/ContactInformation/ContactInformationThree";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";
import WebDevServices from "@/src/data/iconBox/icon-box-web-dev.json";
import HostingServices from "@/src/data/iconBox/icon-box-hosting.json";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/service");
}

export default function Service() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Grow Your Business With Our Web Services"
                content="Home"
                contentTwo="Services"
            />
            <ServiceIconBoxTwo
                data={WebDevServices}
                eyebrow="Grow your business with"
                title="Web Development"
                ctaLabel="Start Today"
                ctaLink="/contact"
                sectionKey="web-dev"
            />
              
            <ServiceIconBoxTwo
                classOption="bg-color-1"
                data={HostingServices}
                eyebrow="Grow your business with"
                title="Hosting &amp; Maintenance"
                ctaLabel="Start Today"
                ctaLink="/contact"
                sectionKey="hosting"
            />
          <AboutSix />
            <TechStack />
            <ServiceSkill />
            <FunfactTwo />
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </>
    );
}
