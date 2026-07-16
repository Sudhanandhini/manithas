import type { Metadata } from "next";
import Header from "@/src/partials/header/Header";
import { slugify } from "@/src/utils";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import BlogClassicData from "@/src/data/blog/BlogClassic.json";
import BlogCategoryContainer from "@/src/container/BlogGrid/BlogCategoryContainer";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export const metadata: Metadata = {
    title: "Exomac || Blog",
};

export default function BlogCategories({ params }: { params: { slug: string } }) {
    const data = BlogClassicData.map((blog) => {
        return {
            ...blog,
            categories: blog.categories.filter((cat) => slugify(cat) === params.slug),
        };
    }).filter((blog) => blog.categories.length > 0);
    const categoryTitle = data[0].categories[0];
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-four.jpg"
                title={categoryTitle}
                content="Home"
                contentTwo="Blog Classic"
            />
            <BlogCategoryContainer data={data} />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
