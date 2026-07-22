import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { prisma } from "@/lib/prisma";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import SolutionContainer from "@/src/container/Solution/SolutionContainer";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/solution");
}

export default async function SolutionPage() {
    const solutions = await prisma.solution.findMany({
        where: { published: true },
        orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    });

    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-two.jpg"
                title="Solutions built for your organization"
                content="Home"
                contentTwo="Solution"
            />
            <SolutionContainer solutions={solutions} />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
