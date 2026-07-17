import type { Metadata } from "next";
import { buildDynamicMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import BlogClassicData from "@/src/data/blog/BlogClassic.json";
import BlogDetailsContainer from "@/src/container/BlogGrid/BlogDetailsContainer";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const blogId = parseInt(params.id, 10);
    const blog = BlogClassicData.find((item) => item.id === blogId);

    return buildDynamicMetadata({
        path: `/blog-details/${params.id}`,
        title: blog?.title,
        description: blog?.excerpt,
        image: blog?.largeImage ?? blog?.image,
    });
}

export default function BlogDetails({ params }: { params: { id: string } }) {
    const blogId = parseInt(params.id, 10);
    const data = BlogClassicData.filter((blog) => blog.id === blogId);
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-four.jpg"
                title={data[0]?.title}
                content="Home"
                contentTwo="Blog Classic"
            />
            <BlogDetailsContainer data={data[0]} />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
