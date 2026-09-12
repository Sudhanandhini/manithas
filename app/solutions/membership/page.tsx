import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import AboutImageSplit from "@/src/components/PageContent/AboutImageSplit";
import ProcessSteps from "@/src/components/PageContent/ProcessSteps";
import RelatedApplications from "@/src/components/PageContent/RelatedApplications";
import PageFaq from "@/src/components/PageContent/PageFaq";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

const membershipProcess = [
    { icon: "fas fa-clipboard-list", title: "Map Your Membership & Renewal Cycle", description: "We start by understanding your membership base, payment structure, and renewal cycle to design an accurate platform." },
    { icon: "fas fa-lightbulb", title: "Structure Accounts & Payment Flow", description: "We plan account creation, payment flows, and renewal tracking for a smoother design process." },
    { icon: "fas fa-pencil-ruler", title: "Design A Trustworthy Payment Experience", description: "We design a trustworthy login and payment layout that helps members navigate the platform with ease." },
    { icon: "fas fa-code", title: "Build The Membership Platform", description: "We build secure account creation, online payments, and renewal tracking into one platform." },
    { icon: "fas fa-vial", title: "Validate Every Payment & Renewal", description: "We test account creation, payments, and renewal tracking thoroughly to ensure a smooth member experience." },
    { icon: "fas fa-rocket", title: "Launch & Grow With Your Members", description: "We launch the solution and provide consistent support as your membership base continues to grow." }
];

const membershipFeatures = [
    { icon: "fas fa-credit-card", title: "Manual Fee Collection", description: "Secure online payment portals let members pay their annual dues themselves, removing manual follow-ups for fee collection." },
    { icon: "fas fa-history", title: "No Clarity On Renewal Status", description: "Every renewal and payment is logged accurately, giving admins and members clear visibility into who has renewed and who hasn't." },
    { icon: "fas fa-user-plus", title: "Uncontrolled Member Onboarding", description: "Admin-created accounts keep onboarding secure and controlled, so only verified members get access." },
    { icon: "fas fa-sign-in-alt", title: "Members Chasing Payment Records", description: "A dedicated member login lets each member check their own subscription status and payment history anytime." },
    { icon: "fas fa-users", title: "Growing Membership Base", description: "The platform is built to comfortably scale with your organization as membership numbers keep growing." },
    { icon: "fas fa-file-excel", title: "Manual Membership Reporting", description: "Admins can export member and payment records to Excel on demand for reporting and reconciliation." }
];

const membershipFaqs = [
    { question: "Is the online payment process secure?", answer: "Yes, we integrate secure payment gateways so members can pay their yearly subscription with confidence." },
    { question: "Can members be reminded before their subscription expires?", answer: "Yes, we can build in renewal reminders so members are notified ahead of their subscription expiry." },
    { question: "Can the platform handle a large number of members?", answer: "Yes, we've built membership platforms that comfortably handle thousands of members, and it can scale further as your base grows." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/solutions/membership");
}

export default function MembershipSolution() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Membership Management"
                content="Home"
                contentTwo="Membership"
            />
            <AboutImageSplit
                imageOne="/images/about/about-7.jpg"
                imageTwo="/images/about/about-3.jpg"
                eyebrow="Our Solution"
                title="Yearly Memberships, Handled Without The Manual Follow-Up"
                paragraphs={[
                    "Our Membership Management solution simplifies renewals through a secure, convenient digital platform. Admins create and manage individual member accounts, while members log in, renew, and pay their dues securely online.",
                    "Built to support large member bases, the platform gives admins clear visibility into renewal status and payment history, reducing manual follow-ups and making the renewal process far more efficient."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Building A Solution That Simplifies Membership Renewals"
                description="From mapping your renewal cycle to launching a secure payment platform, every step is built around making membership management effortless for admins and members."
                steps={membershipProcess}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="Solution"
                title="Solutions We Provide For Membership Management"
                apps={membershipFeatures}
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our membership solution"
                items={membershipFaqs}
                imageOne="/images/portfolio/portfolio-8.jpg"
                imageTwo="/images/portfolio/portfolio-9.jpg"
                classOption="section-bg-light"
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
