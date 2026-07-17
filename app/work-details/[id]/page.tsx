import type { Metadata } from "next";
import { buildDynamicMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import Footer from "@/src/container/Footer/Footer";
import WorkData from "@/src/data/work/workDetails.json";
import WorkDetailsContainer from "@/src/container/Work/WorkDetailsContainer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const workId = parseInt(params.id, 10);
    const work = WorkData.find((item) => item.id === workId);

    return buildDynamicMetadata({
        path: `/work-details/${params.id}`,
        title: work?.title,
        description: work?.excerpt,
        image: work?.largeImage ?? work?.image,
    });
}

export default function WorkDetails({ params }: { params: { id: string } }) {
    const workId = parseInt(params.id, 10);
    const data = WorkData.filter((work) => work.id === workId);
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-two.jpg"
                title={data[0]?.title}
                content="Home"
                contentTwo="Work"
            />
            <WorkDetailsContainer data={data[0]} />
            <Footer />
            <ScrollToTop />
        </>
    );
}
