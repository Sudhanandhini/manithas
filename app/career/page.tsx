import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import CareerContainer from "@/src/container/Career/CareerContainer";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/career");
}

export default function Career() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Careers at Manithas"
                content="Home"
                contentTwo="Careers"
            />
            <CareerContainer />
            <Footer />
            <ScrollToTop />
        </>
    );
}
