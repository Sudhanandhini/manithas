import type { Metadata } from "next";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import PageBlog from "@/src/container/BlogGrid/PageBlog";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export const metadata: Metadata = {
    title: "Exomac || Blog",
};

export default function BlogGrid() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-four.jpg"
                title="Find all our latest news, insights, and events"
                content="Home"
                contentTwo="Blog"
            />
            <PageBlog />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
