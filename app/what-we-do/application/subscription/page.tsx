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
    { icon: "fas fa-clipboard-list", title: "Requirements Gathering", description: "We understand your membership base, fee structure, and renewal cycle to define the right platform for you." },
    { icon: "fas fa-lightbulb", title: "Planning & Strategy Making", description: "We plan account creation, payment flows, and renewal tracking before any design work begins." },
    { icon: "fas fa-pencil-ruler", title: "Website Designing", description: "Our designers create a simple, trustworthy login and payment layout that puts members at ease." },
    { icon: "fas fa-code", title: "Application Development", description: "We build secure account creation, online payments, and renewal tracking built for large member bases." },
    { icon: "fas fa-vial", title: "Testing", description: "We test account creation, payment flows, and renewal logic thoroughly to ensure accuracy at scale." },
    { icon: "fas fa-rocket", title: "Launching", description: "We launch your subscription application and provide ongoing support through every renewal cycle." }
];

const subscriptionApps = [
    { icon: "fas fa-user-plus", title: "Admin-Created Accounts", description: "Admins create individual member accounts, so every subscriber has a secure login from day one." },
    { icon: "fas fa-sign-in-alt", title: "Member Login Portal", description: "Members log in to view their subscription status, details, and payment history at any time." },
    { icon: "fas fa-credit-card", title: "Online Fee Payment", description: "Secure online payment flows let members pay their yearly subscription without manual follow-up." },
    { icon: "fas fa-history", title: "Renewal & Payment History", description: "Every renewal and payment is logged, giving members and admins a clear history at a glance." },
    { icon: "fas fa-users", title: "Built To Scale", description: "Architected to comfortably handle large member bases of 1,900 members and more." },
    { icon: "fas fa-file-excel", title: "Excel Data Export", description: "Admins can export member and payment records to Excel anytime for reporting and reconciliation." }
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
                    "Instead of chasing members for renewal payments every year, our subscription applications let admins create individual member accounts, while members log in and pay their annual subscription securely online.",
                    "We've built subscription platforms that comfortably handle large member bases of 1,900 users and more, with clear renewal status and payment history for every member."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <ProcessSteps
                eyebrow="How We Work"
                title="Our Subscription Application Development Process"
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
