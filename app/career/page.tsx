import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import CareerContainer from "@/src/container/Career/CareerContainer";
import AboutImageSplit from "@/src/components/PageContent/AboutImageSplit";
import WhyChooseIconGrid from "@/src/components/PageContent/WhyChooseIconGrid";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/career");
}

const hiringSteps = [
    {
        icon: "fas fa-paper-plane",
        title: "Send us your profile",
        description: "Tell us a bit about yourself and the kind of work you enjoy - no formal application needed.",
    },
    {
        icon: "fas fa-comments",
        title: "A quick conversation",
        description: "We'll set up a short call to understand your experience and see if there's a mutual fit.",
    },
    {
        icon: "fas fa-laptop-code",
        title: "See real work together",
        description: "For most roles, we'll walk through a small, relevant task or past project instead of abstract tests.",
    },
    {
        icon: "fas fa-handshake",
        title: "Offer & onboarding",
        description: "If it's a fit on both sides, we'll move quickly - clear terms, no long waiting games.",
    },
];

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
            <AboutImageSplit
                imageOne="/images/about/about-5.jpg"
                imageTwo="/images/about/about-6.jpg"
                eyebrow="Life at Manithas"
                title="A small team with two decades of momentum"
                paragraphs={[
                    "We started out in 2006 as Sunsys Technologies and grew into Manithas Technologies Pvt. Ltd. in 2009. That history means you're not joining a brand-new experiment - you're joining a team with a real track record and clients who've stayed with us for years.",
                    "Because we're small, there's no long chain of approvals between an idea and shipped work. You'll work directly with the people who make decisions, on real client projects from day one.",
                ]}
                ctaLabel="See Our Work"
                ctaLink="/solution"
            />
            <WhyChooseIconGrid
                eyebrow="How We Hire"
                title="A simple, honest hiring process"
                description="We don't have a fixed list of open roles right now, but we're always glad to hear from people who'd be a good fit. Here's what happens after you reach out:"
                items={hiringSteps}
                layout="card"
                ctaLabel="Get in touch"
                ctaLink="/contact"
            />
            <Footer />
            <ScrollToTop />
        </>
    );
}
