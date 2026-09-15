import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import AboutImageSplit from "@/src/components/PageContent/AboutImageSplit";
import ChecklistTwoColumn from "@/src/components/PageContent/ChecklistTwoColumn";
import RelatedApplications from "@/src/components/PageContent/RelatedApplications";
import WhyChooseIconGrid from "@/src/components/PageContent/WhyChooseIconGrid";
import PageFaq from "@/src/components/PageContent/PageFaq";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

const phpBenefits = [
    "Fast & Lightweight: PHP runs efficiently on almost any server, keeping pages quick to load.",
    "Database-Driven: Built-in support for MySQL and other databases powers dynamic, data-driven sites.",
    "Highly Scalable: From simple sites to large platforms, PHP scales with your business.",
    "Wide Framework Support: Works with Laravel, CodeIgniter, and other modern frameworks when needed.",
    "Cost-Effective Hosting: Runs on virtually any hosting environment, keeping infrastructure costs low.",
    "Easy Maintenance: A mature ecosystem makes updates, fixes, and long-term support straightforward."
];

const phpServices = [
    { icon: "fas fa-code", title: "Custom PHP Development", description: "Purpose-built PHP applications and websites designed around your exact business logic and workflows." },
    { icon: "fas fa-database", title: "Database-Driven Websites", description: "Dynamic sites backed by MySQL databases for content, users, and business data that changes often." },
    { icon: "fas fa-layer-group", title: "Framework Development", description: "Structured, maintainable builds using Laravel, CodeIgniter, or plain PHP, depending on project needs." },
    { icon: "fas fa-plug", title: "API Development & Integration", description: "Connecting your PHP application with payment gateways, third-party services, and other platforms." },
    { icon: "fas fa-sync-alt", title: "Legacy PHP Modernization", description: "Upgrading and refactoring older PHP codebases for better performance, security, and maintainability." },
    { icon: "fas fa-tools", title: "Maintenance & Support", description: "Ongoing updates, bug fixes, and performance tuning to keep your PHP application running smoothly." }
];

const whyChoosePhp = [
    { icon: "fas fa-bolt", title: "Fast Performance", description: "Efficient PHP code optimized for quick page loads and smooth server-side processing" },
    { icon: "fas fa-shield-alt", title: "Secure By Practice", description: "Built with secure coding practices to protect data and guard against common vulnerabilities" },
    { icon: "fas fa-expand-arrows-alt", title: "Built To Scale", description: "Architecture that grows comfortably from a small site to a high-traffic platform" },
    { icon: "fas fa-comments", title: "Transparent Communication", description: "Clear communication and updates from planning through launch" }
];

const phpFaqs = [
    { question: "Do you build with PHP frameworks or plain PHP?", answer: "Both - we choose Laravel, CodeIgniter, or plain PHP based on your project's complexity, timeline, and long-term maintenance needs." },
    { question: "Can you work with an existing PHP codebase?", answer: "Yes, we regularly take over and modernize existing PHP applications, improving performance, security, and structure." },
    { question: "Is PHP a good fit for database-driven websites?", answer: "Yes, PHP has mature, well-tested support for MySQL and other databases, making it a reliable choice for dynamic, data-driven sites." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/php-development");
}

export default function PhpDevelopment() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="PHP Website Development"
                content="Home"
                contentTwo="PHP Development"
            />
            {/* <ContentSection
                eyebrow="Web Development"
                title="PHP Website Development"
                description="We design and build fast, secure, database-driven websites and applications using PHP, tailored to your business logic and ready to scale."
                bullets={[
                    "Custom PHP applications",
                    "Database-driven websites",
                    "Laravel & CodeIgniter development",
                    "Legacy PHP modernization"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-6.jpg"
                imageTwo="/images/about/about-7.jpg"
                eyebrow="PHP Development Services"
                title="Reliable, Database-Driven Websites Built With PHP"
                paragraphs={[
                    "PHP remains one of the most widely used server-side languages for building dynamic, database-driven websites and applications, powering everything from small business sites to large-scale platforms.",

                    "Its mature ecosystem, broad hosting support, and strong framework options make it a dependable choice for projects that need to grow over time without locking you into a rigid architecture.",

                    "Our PHP development focuses on clean, secure, well-structured code, creating applications that are fast, maintainable, and ready to scale as your business and traffic grow."
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
            />
            <ChecklistTwoColumn
                eyebrow="Why It Matters"
                title="Benefits Of PHP Website Development"
                items={phpBenefits}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="What We Offer"
                title="What Our PHP Development Services Include"
                apps={phpServices}
            />
            <WhyChooseIconGrid
                eyebrow="Grow Your Business With"
                title="Why Choose Manithas For PHP Development"
                description="We build PHP applications with a focus on performance, security, and long-term maintainability."
                items={whyChoosePhp}
                ctaLabel="Start Today"
                ctaLink="/contact"
                classOption="section-bg-light"
                layout="card"
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our PHP development"
                items={phpFaqs}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
