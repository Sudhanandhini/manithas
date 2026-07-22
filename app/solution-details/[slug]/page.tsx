import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildDynamicMetadata } from "@/lib/seo";
import { prisma } from "@/lib/prisma";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import SolutionDetailsContainer from "@/src/container/Solution/SolutionDetailsContainer";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const solution = await prisma.solution.findUnique({ where: { slug: params.slug } });

    return buildDynamicMetadata({
        path: `/solution-details/${params.slug}`,
        title: solution?.metaTitle ?? solution?.title,
        description: solution?.metaDescription ?? solution?.excerpt,
        image: solution?.largeImage ?? solution?.image,
        noindex: solution?.noindex,
    });
}

export default async function SolutionDetails({ params }: { params: { slug: string } }) {
    const solution = await prisma.solution.findUnique({ where: { slug: params.slug } });
    if (!solution || !solution.published) {
        notFound();
    }

    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-two.jpg"
                title={solution.title}
                content="Home"
                contentTwo="Solution"
            />
            <SolutionDetailsContainer data={solution} />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
