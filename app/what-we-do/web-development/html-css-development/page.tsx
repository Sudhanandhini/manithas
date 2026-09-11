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

const htmlCssBenefits = [
    "Faster Loading: Lightweight code helps pages load quickly.",
    "SEO-Friendly Structure: Clean, semantic markup helps search engines understand your content",
    "Responsive Design: Websites adapt smoothly across mobiles, tablets, and desktops",
    "Browser Compatibility: Designed and tested to work across modern browsers",
    "Easy Hosting: No complex build process required for deployment",
    "Simpler Maintenance: Clean code makes updates easier and reduces long-term effort"
];

const htmlCssServices = [
    { icon: "fas fa-file-code", title: "Custom HTML/CSS Websites", description: "Bringing your unique vision to the web with lightweight, handcrafted websites built without unnecessary technology overhead." },
    { icon: "fas fa-mobile-alt", title: "Responsive Layouts", description: "Creating a consistent experience across every screen, with layouts that naturally adjust to different devices and resolutions." },
    { icon: "fas fa-tachometer-alt", title: "Landing Pages", description: "Turning campaigns and ideas into focused digital experiences designed to grab attention and encourage action." },
    { icon: "fas fa-paint-brush", title: "PSD/Figma To HTML", description: "Translating every design detail into a responsive web page while preserving the original look, structure, and visual intent." },
    { icon: "fas fa-search", title: "SEO-Friendly Markup", description: "Giving your website a strong foundation with clean, meaningful HTML that helps both users and search engines navigate your content." },
    { icon: "fas fa-tools", title: "Maintenance & Updates", description: "Keeping existing websites dependable and current with content changes, design updates, fixes, and ongoing browser compatibility." }
];

const whyChooseHtmlCss = [
    { icon: "fas fa-bolt", title: "Blazing Fast Pages", description: " Lightweight code with minimal overhead for faster page loading" },
    { icon: "fas fa-code", title: "Hand-Crafted Markup", description: "Precisely coded pages built for clean structure, control, and performance" },
    { icon: "fas fa-mobile-alt", title: "Fully Responsive", description: "Seamless experiences that adapt across every device and screen size" },
    { icon: "fas fa-comments", title: "Transparent Communication", description: "Clear communication and updates from planning through launch" }
];

const htmlCssFaqs = [
    { question: "Why choose plain HTML/CSS over a framework?", answer: "For simple marketing sites and landing pages, hand-coded HTML/CSS loads faster, has no build step, and is easier to host and maintain long term." },
    { question: "Can you convert my Figma or PSD design into HTML?", answer: "Yes, we convert design files into pixel-accurate, responsive HTML and CSS." },
    { question: "Will the website work on all browsers and devices?", answer: "Yes, every site is cross-browser tested and built mobile-first to work across devices and screen sizes." }
];

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/what-we-do/web-development/html-css-development");
}

export default function HtmlCssDevelopment() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="HTML & CSS Website Development"
                content="Home"
                contentTwo="HTML & CSS Development"
            />
            {/* <ContentSection
                eyebrow="Web Development"
                title="HTML & CSS Website Development"
                description="We design and build fast, lightweight websites using hand-crafted HTML and CSS, ideal for landing pages, brochure sites, and businesses that want maximum speed with minimal overhead."
                bullets={[
                    "Pixel-perfect, hand-coded markup",
                    "Lightweight, fast-loading pages",
                    "Fully responsive across devices",
                    "SEO-friendly semantic structure"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-4.jpg"
                imageTwo="/images/about/about-5.jpg"
                eyebrow="HTML & CSS Development Services"
                title="Clean, Hand-Coded Websites Built For Speed"
                paragraphs={[
                  " HTML and CSS form the foundation of modern web development, bringing structure and visual consistency to websites and applications. HTML organizes content and defines the core structure, while CSS shapes layouts, typography, animations, and responsive experiences across different screen sizes.",

"Together, HTML and CSS power virtually every website on the web, creating the essential framework for engaging and making digital experiences accessible.",

"Our HTML & CSS development focuses on clean structure, responsive layouts, and consistent design, creating web experiences that are fast, accessible, maintainable, and ready to work seamlessly across modern browsers and devices."

                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
                reverse
            />
            <ChecklistTwoColumn
                eyebrow="Why It Matters"
                title="Benefits Of Hand-Coded HTML & CSS Websites"
                items={htmlCssBenefits}
                classOption="section-bg-light"
            />
            <RelatedApplications
                eyebrow="What We Offer"
                title="What Our HTML & CSS Development Services Include"
                apps={htmlCssServices}
            />
            <WhyChooseIconGrid
                eyebrow="Grow Your Business With"
                title="Why Choose Manithas For HTML & CSS Development"
                description="We build websites from the ground up, keeping every line purposeful for speed, performance, and longevity."
                items={whyChooseHtmlCss}
                ctaLabel="Start Today"
                ctaLink="/contact"
                classOption="section-bg-light"
                layout="card"
            />
            <PageFaq
                eyebrow="Frequently Asked Questions"
                title="Everything you need to know <br/> about our HTML & CSS development"
                items={htmlCssFaqs}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
