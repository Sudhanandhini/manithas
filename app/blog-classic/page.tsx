import type { Metadata } from "next";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import BlogClassicContainer from "@/src/container/BlogGrid/BlogClassicContainer";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export const metadata: Metadata = {
    title: "Exomac || Blog",
};

export default function BlogClassic() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-four.jpg"
                title="Find all our latest news, insights, and events"
                content="Home"
                contentTwo="Blog Classic"
            />
            <BlogClassicContainer />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
