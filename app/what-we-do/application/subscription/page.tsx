import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import AboutImageSplit from "@/src/components/PageContent/AboutImageSplit";
import ProcessSteps from "@/src/components/PageContent/ProcessSteps";
import RelatedApplications from "@/src/components/PageContent/RelatedApplications";
import PageFaq from "@/src/components/PageContent/PageFaq";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

const subscriptionProcess = [
    { icon: "fas fa-clipboard-list", title: "Need Analysis", description: "We begin by understanding your membership base, payment structure and renewal cycle options to design an accurate platform." },
    { icon: "fas fa-lightbulb", title: "Solution Planning", description: "Here, we plan the account creation, payment flows, and renewal tracking for an easy design process." },
    { icon: "fas fa-pencil-ruler", title: "Design & Prototyping", description: "At this stage we focus on creating an innovative and trustworthy login and payment layout that helps members navigate the platform easily." },
    { icon: "fas fa-code", title: "Application Engineering", description: "Once the design is finalised, we develop a secure account creation, online payments, and renewal tracking." },
    { icon: "fas fa-vial", title: "Testing", description: "We ensure the quality of our deliverable at this stage by testing the account creation, online payments processes, and renewal tracking to ensure a smooth user-experience." },
    { icon: "fas fa-rocket", title: "Deployment/Launching", description: "Finally, we help launch the Subscription Module Web Application and ensure consistent support is provided throughout." }
];

const subscriptionApps = [
    { icon: "fas fa-user-plus", title: "Admin-Created Accounts", description: "Member accounts created by an assigned admin to ensure secure login for every member" },
    { icon: "fas fa-sign-in-alt", title: "Member Login Portal", description: "Separate member login with subscription status and payment history details accessible" },
    { icon: "fas fa-credit-card", title: "Online Fee Payment", description: "Secure payment portals making annual subscription payouts trackable and securely completed without manual intervention" },
    { icon: "fas fa-history", title: "Renewal & Payment History", description: "Accurate and organised data of every renewal and payment logged for member and admin access" },
    { icon: "fas fa-users", title: "Built To Scale", description: "Platform structured to hold a large number of 1900+ subscribers comfortably" },
    { icon: "fas fa-file-excel", title: "Excel Data Export", description: "Enables admins to securely export members’ details and payment records data to Excel for reporting and reconciliation" }
];

const subscriptionFaqs = [
    { question: "Is the online payment process secure?", answer: "Yes, we integrate secure payment gateways so members can pay their yearly subscription with confidence." },
    { question: "Can members be reminded before their subscription expires?", answer: "Yes, we can build in renewal reminders so members are notified ahead of their subscription expiry." },
    { question: "Can the platform handle a large number of members?", answer: "Yes, we've built subscription platforms that comfortably handle 1,900+ members, and it can scale further as your base grows." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/application/subscription");
}

export default function Subscription() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Subscription"
                content="Home"
                contentTwo="Subscription"
            />
            {/* <ContentSection
                eyebrow="Application"
                title="Subscription Management Web Application"
                description="A subscription management web application where admins create user accounts and members log in to pay their yearly subscription online, built to comfortably handle large member bases."
                bullets={[
                    "Admin-created user accounts",
                    "Secure member login",
                    "Online yearly fee payment",
                    "Built for 1,900+ members"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-7.jpg"
                imageTwo="/images/about/about-3.jpg"
                eyebrow="How We Build It"
                title="Yearly Subscriptions, Handled Without The Manual Follow-Up"
                paragraphs={[
                   "Our subscription web applications are designed to simplify membership renewals through a secure and convenient digital platform. Admins can create and manage individual member accounts, while members can log in, renew their subscriptions, and make annual payments securely online, reducing manual follow-ups and making the renewal process more efficient.",

"Built to support large member bases of 1,900+ users, the platform provides clear visibility into renewal status and payment history, helping admins manage memberships with greater ease and accuracy."

                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Our Subscription Application Engineering Process"
                description="Our development process involves thorough planning, design, and testing, ensuring a secure, scalable subscription platform tailored to your organization."
                steps={subscriptionProcess}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="Application"
                title="What Our Subscription Application Includes"
                apps={subscriptionApps}
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our subscription application"
                items={subscriptionFaqs}
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
