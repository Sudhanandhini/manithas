import type { Metadata } from "next";
import Header from "@/src/partials/header/Header";
import { slugify } from "@/src/utils";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import BlogClassicData from "@/src/data/blog/BlogClassic.json";
import BlogTagContainer from "@/src/container/BlogGrid/BlogTagContainer";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export const metadata: Metadata = {
    title: "Exomac || Blog",
};

export default function BlogTag({ params }: { params: { slug: string } }) {
    const data = BlogClassicData.map((blog) => {
        return {
            ...blog,
            tags: blog.tags.filter((tag) => slugify(tag) === params.slug),
        };
    }).filter((blog) => blog.tags.length > 0);
    const tagTitle = data[0].tags[0];
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-four.jpg"
                title={tagTitle}
                content="Home"
                contentTwo="Blog Classic"
            />
            <BlogTagContainer data={data} />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
