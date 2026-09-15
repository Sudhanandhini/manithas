import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import ContentSection from "@/src/components/PageContent/ContentSection";
import AboutImageSplit from "@/src/components/PageContent/AboutImageSplit";
import ServiceListGrid from "@/src/components/PageContent/ServiceListGrid";
import WhyChooseUs from "@/src/components/PageContent/WhyChooseUs";
import RelatedApplications from "@/src/components/PageContent/RelatedApplications";
import CallToAction from "@/src/container/CallToAction/CallToAction";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

const developmentServices = [
    {
        icon: "fas fa-laptop-code",
        title: "Custom Web Application Engineering",
        description: "Turn unique business ideas into purpose-built applications that fit your processes, people, and goals—not the other way around."
    },
    {
        icon: "fas fa-building",
        title: "Enterprise Web Applications",
        description: "Bring complex operations under one digital roof with powerful applications built to connect teams, simplify workflows, and support business growth."
    },
    {
        icon: "fas fa-cloud",
        title: "SaaS Application Engineering",
        description: "Transform your software idea into a cloud-ready product with the technology, architecture, and subscription capabilities needed to serve users at scale."
    },
    {
        icon: "fas fa-sitemap",
        title: "CRM & ERP Development",
        description: "Create a centralized business ecosystem where customer relationships, sales, inventory, finance, and operations work together seamlessly."
    },
    {
        icon: "fas fa-mobile-alt",
        title: "Progressive Web Applications (PWA)",
        description: "Give users the speed and convenience of an app with the accessibility of the web through fast, responsive, and installable digital experiences."
    },
    {
        icon: "fas fa-plug",
        title: "API Development & Integration",
        description: "Make your digital ecosystem work as one by connecting applications, services, payment systems, and business platforms through reliable API integrations."
    },
    {
        icon: "fas fa-door-open",
        title: "Web Portal Development",
        description: "Create dedicated digital spaces that give customers, employees, vendors, students, or members the right tools, information, and access in one place."
    },
    {
        icon: "fas fa-tools",
        title: "Maintenance & Support",
        description: "Keep your digital investment running smoothly with proactive maintenance, performance optimization, security updates, and dependable technical support."
    }
];

const whyChooseUs = [
    {
        title: "Custom-Built Solutions",
        description: "Every brand is unique to us and our solution planning and design processes work accordingly that meet all business goals"
    },
    {
        title: "Modern Technologies",
        description: "Our solutions leverage latest tech and frameworks to build adaptable and scalable application ready to take on future demands"
    },
    {
        title: "Responsive Design",
        description: "Our applications run on creative designs and responsive UX that work seamlessly across desktop, tablet and mobile devices"
    },
    {
        title: "High Security",
        description: "Our solutions are developed under strong authentication, encrypted data and with secure coding practices"
    },
    {
        title: "Scalable Architecture",
        description: "We build solutions that can handle growing businesses and user-bases to support long-term expansion."
    },
    {
        title: "Fast Performance",
        description: "Our custom solutions are optimized to support a fast, reliable and smooth user experience."
    },
    {
        title: "SEO-Friendly Structure",
        description: "We build solutions that are search engine optimized ensuring increased online visibility"
    },
    {
        title: "Dedicated Support",
        description: "Our services don’t end once the applications are launched but also extend to post-launch maintenance, updates and other technical support."
    }
];

const relatedApps = [
    {
        icon: "fas fa-user-graduate",
        title: "Alumni Web Application",
        description: "Keeping alumni connected beyond the campus. Built with React & Node.js, this platform brings graduates together through searchable directories, events, career opportunities, and meaningful community interactions."
    },
    {
        icon: "fas fa-calendar-check",
        title: "HR Attendance & Payroll Application",
        description: "Turning everyday attendance into smarter workforce management. This React & Node.js solution automates login/logout tracking, EL and CL management, and attendance-based salary calculations, reducing manual effort for HR teams."
    },
    {
        icon: "fas fa-id-card",
        title: "ICA Membership Payment Application",
        description: "Making membership renewals simpler for a growing community. Developed for the Indian Cricketers Association (ICA), this React & Node.js platform securely manages online payments and renewals for 1,000+ members."
    },
    {
        icon: "fas fa-certificate",
        title: "ChildFund Online Assessment Application",
        description: "Taking assessments from registration to certification entirely online. Built with React & Node.js, the ChildFund platform delivers digital assessments and automatically generates certificates upon successful completion."
    },
    {
        icon: "fas fa-briefcase-medical",
        title: "GeneiLab Medical Product Application",
        description: "Making a large medical product catalogue easier to navigate. This React & Node.js application helps GeneiLab organize, search, and manage 1,000+ medical products across multiple categories with ease."
    },
    {
        icon: "fas fa-briefcase",
        title: "Career Portal Application",
        description: "Bringing candidates and recruiters onto one streamlined platform. Built with React & Node.js, the portal simplifies online applications while giving HR teams a centralized dashboard to review, organize, and manage candidates."
    }
];

export default function ApplicationRoot() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Custom Web Application"
                content="Home"
                contentTwo="Custom Web Application"
            />
            {/* <ContentSection
                eyebrow="What We Do"
                title="Application Engineering"
                description="We design and build custom web and business applications that streamline your operations, automate workflows, and scale with your business."
                bullets={[
                    "Custom business applications",
                    "Workflow automation",
                    "Third-party API integrations",
                    "Ongoing support and upgrades"
                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            /> */}
            <AboutImageSplit
                imageOne="/images/about/about-3.jpg"
                imageTwo="/images/about/about-4.jpg"
                eyebrow="How We Work"
                title="A Team That Understands Application Engineering"
                paragraphs={[
                    "Our custom web applications are designed to help businesses turn unique requirements into purposeful digital solutions. From streamlining everyday processes to managing business operations, everything is brought together in a flexible system designed around the way your teams work.",

               "Built with modern technologies and tailored functionality, the applications are developed to meet specific business needs while remaining secure, scalable, and easy to manage. From initial requirements to deployment, every solution is developed with clear communication and a focus on long-term usability and performance."

                ]}
                ctaLabel="Talk To Us"
                ctaLink="/contact"
            />
            <ServiceListGrid
                eyebrow="What We Offer"
                title="Our Web Application Engineering Services"
                items={developmentServices}
                classOption="section-bg-light"
            />
            <WhyChooseUs
                eyebrow="Why Manithas"
                title="Why Choose Our Web Application Engineering Company?"
                items={whyChooseUs}
            />
            <RelatedApplications
                eyebrow="React & Node.js"
                title="Related Web Applications We've Built"
                apps={relatedApps}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </>
    );
}
