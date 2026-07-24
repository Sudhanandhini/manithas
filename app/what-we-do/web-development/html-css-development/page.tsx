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
    "Faster load times than framework-heavy sites",
    "Clean, semantic, SEO-friendly markup",
    "Fully responsive, mobile-first layouts",
    "Cross-browser tested compatibility",
    "Easy to host anywhere, no build step required",
    "Lower long-term maintenance overhead"
];

const htmlCssServices = [
    { icon: "fas fa-file-code", title: "Custom HTML/CSS Websites", description: "Hand-coded websites built pixel-perfect from your design, with no unnecessary framework overhead." },
    { icon: "fas fa-mobile-alt", title: "Responsive Layouts", description: "Mobile-first layouts using modern CSS (Flexbox & Grid) that adapt cleanly to every screen size." },
    { icon: "fas fa-tachometer-alt", title: "Landing Pages", description: "Fast, conversion-focused landing pages built for campaigns and product launches." },
    { icon: "fas fa-paint-brush", title: "PSD/Figma To HTML", description: "Pixel-accurate conversion of your design files into clean, semantic HTML and CSS." },
    { icon: "fas fa-search", title: "SEO-Friendly Markup", description: "Semantic HTML structure built to help search engines understand and rank your pages." },
    { icon: "fas fa-tools", title: "Maintenance & Updates", description: "Ongoing edits, content updates, and browser-compatibility fixes for existing HTML sites." }
];

const whyChooseHtmlCss = [
    { icon: "fas fa-bolt", title: "Blazing Fast Pages", description: "No framework bloat, just clean code that loads instantly." },
    { icon: "fas fa-code", title: "Hand-Crafted Markup", description: "Every page is coded by hand for precision and performance." },
    { icon: "fas fa-mobile-alt", title: "Fully Responsive", description: "Looks and works great on every device and screen size." },
    { icon: "fas fa-comments", title: "Transparent Communication", description: "Clear updates at every stage of development, from planning to launch." }
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
                    "Not every website needs a heavy framework. For landing pages, brochure sites, and marketing pages where speed and simplicity matter most, hand-coded HTML and CSS gives you a lean, fast-loading site with no unnecessary overhead.",
                    "We write clean, semantic markup and modern CSS, so your site loads instantly, ranks well, and is easy for any developer to maintain going forward."
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
                description="We build lightweight, hand-coded websites focused on speed, clean markup, and long-term maintainability."
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
