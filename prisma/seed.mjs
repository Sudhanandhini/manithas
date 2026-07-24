import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const DEFAULT_ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3008"}/sitemap.xml
`;

const PAGES = [
    { slug: "/", label: "Home", title: "Business React JS Template", description: "Manithas - Corporate Business React JS Template." },
    {
        slug: "/home-one",
        label: "Home One (duplicate demo)",
        title: "Business React JS Template",
        description: "Manithas - Corporate Business React JS Template.",
        canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3008"}/`,
        noindex: true,
    },
    { slug: "/about", label: "About", title: "About Us", description: "Learn about our agency, our team, and what we do." },
    { slug: "/service", label: "Service", title: "Our Services", description: "Explore the services we offer." },
    { slug: "/work", label: "Work / Portfolio", title: "Our Work", description: "Browse our portfolio of past projects." },
    { slug: "/contact", label: "Contact", title: "Contact Us", description: "Get in touch with our team." },
    { slug: "/career", label: "Careers", title: "Careers", description: "Join the Manithas team - see how you can contribute." },
    { slug: "/blog-classic", label: "Blog (Classic)", title: "Blog", description: "Read our latest articles and updates." },
    { slug: "/blog-grid", label: "Blog (Grid)", title: "Blog", description: "Read our latest articles and updates." },
    { slug: "/home-two", label: "Home Two", title: "Home Two", description: "Manithas - Corporate Business React JS Template." },
    { slug: "/home-three", label: "Home Three", title: "Home Three", description: "Manithas - Corporate Business React JS Template." },

    // Application
    { slug: "/what-we-do/application/alumni", label: "Alumni", title: "Alumni", description: "A dedicated alumni web application that keeps colleges and their graduates connected for life." },
    { slug: "/what-we-do/application/elibrary", label: "eLibrary", title: "eLibrary", description: "A digital library web application that lets students and members browse and borrow books online." },
    { slug: "/what-we-do/application/subscription", label: "Subscription", title: "Subscription", description: "A subscription management web application where admins create accounts and members pay online." },
    { slug: "/what-we-do/application/employee-records", label: "Employee Records", title: "Employee Records", description: "An employee records web application for attendance, leave tracking, and payroll." },
    { slug: "/what-we-do/application/online-assessment-test", label: "Online Assessment Test", title: "Online Assessment Test", description: "An online assessment web application with self-registration and instant certificate generation." },
    { slug: "/what-we-do/application", label: "Custom Web Application", title: "Custom Web Application", description: "Custom web and business applications that streamline your operations and scale with your business." },

    // Web Development
    { slug: "/what-we-do/web-development/react-development", label: "React Development", title: "React Development", description: "Fast, component-driven web applications built with React and Next.js." },
    { slug: "/what-we-do/web-development/html-css-development", label: "HTML & CSS Development", title: "HTML & CSS Website Development", description: "Lightweight, hand-coded websites built with HTML and CSS for speed and simplicity." },
    { slug: "/what-we-do/web-development/e-commerce-development", label: "E-Commerce Development", title: "E-Commerce Development", description: "Online stores that convert, with secure checkouts and product management." },
    { slug: "/what-we-do/web-development/custom-web-development", label: "Custom Web Development", title: "Custom Web Development", description: "Fully custom websites and web apps engineered around your exact requirements." },
    { slug: "/what-we-do/web-development/woocommerce-development", label: "WooCommerce Development", title: "WooCommerce Development", description: "WooCommerce stores built for reliable, scalable online selling." },
    { slug: "/what-we-do/web-development/shopify-development", label: "Shopify Development", title: "Shopify Website Development", description: "High-converting Shopify stores, from theme customization to app integrations." },
    { slug: "/what-we-do/web-development/wordpress-development", label: "WordPress Development", title: "WordPress Development", description: "Fast, secure, and easy-to-manage WordPress websites tailored to your brand." },
    { slug: "/what-we-do/web-development/landing-page", label: "Landing Page", title: "Landing Page", description: "High-converting landing pages built for campaigns and product launches." },
    { slug: "/what-we-do/web-development/website-maintenance", label: "Website Maintenance", title: "Website Maintenance", description: "Ongoing website maintenance to keep your site secure, updated, and running smoothly." },
    { slug: "/what-we-do/web-development/website-redesign", label: "Website Redesign", title: "Website Redesign", description: "Website redesign services to modernize and improve your existing site." },
    { slug: "/what-we-do/web-development/responsive-web-design", label: "Responsive Web Design", title: "Responsive Web Design", description: "Responsive websites that work seamlessly across every device and screen size." },

    // Hosting & Maintenance
    { slug: "/hosting/linux-hosting", label: "Linux Hosting", title: "Linux Hosting", description: "Reliable Linux hosting with strong compatibility for open-source technologies." },
    { slug: "/hosting/web-hosting", label: "Web Hosting", title: "Web Hosting", description: "Fast, reliable, and secure web hosting tailored to elevate your online presence." },
    { slug: "/hosting/email-hosting", label: "Email Hosting", title: "Email Hosting", description: "Professional email hosting solutions with ample storage and 24/7 support." },
    { slug: "/hosting/cloud-vps-hosting", label: "Cloud & VPS Hosting", title: "Cloud & VPS Hosting", description: "Scalable cloud and VPS hosting with dedicated resources and full root access." },

    // Business E-Mail
    { slug: "/what-we-do/business-email/microsoft-365", label: "Microsoft 365", title: "Microsoft 365", description: "Outlook, Teams, OneDrive, and the full Office suite set up on your business domain." },
    { slug: "/what-we-do/business-email/google-workspace", label: "Google Workspace", title: "Google Workspace", description: "Gmail, Drive, Docs, Meet, and Calendar set up on your business domain." },
    { slug: "/what-we-do/business-email/web-email", label: "Web Email", title: "Web Email", description: "A simple, cost-effective business email solution hosted on your own domain." },

    // Industry Solutions
    { slug: "/industry-solutions/tours-and-travels", label: "Tours and Travels", title: "Tours and Travels", description: "Websites and booking experiences built for tour operators and travel businesses." },
    { slug: "/industry-solutions/hotel-resort", label: "Hotel & Resort", title: "Hotel & Resort", description: "Digital experiences for hotels and resorts, from room showcases to direct booking flows." },
    { slug: "/industry-solutions/healthcare", label: "Healthcare", title: "Healthcare", description: "Websites and portals for healthcare providers, built with patient experience in mind." },
    { slug: "/industry-solutions/corporate", label: "Corporate", title: "Corporate", description: "Professional corporate websites that communicate your business clearly and build credibility." },
    { slug: "/industry-solutions/education", label: "Education", title: "Education", description: "Websites and portals for schools, colleges, and training institutes." },
    { slug: "/industry-solutions/real-estate-construction", label: "Real Estate & Construction", title: "Real Estate & Construction", description: "Property and project showcase websites built to generate qualified leads." },

    // Ticket / Customer Login
    { slug: "/login", label: "Ticket", title: "Customer Login", description: "Customer login for support tickets and account access." },
];

async function main() {
    await prisma.siteSettings.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            siteName: "Manithas",
            titleTemplate: "%s | Manithas",
            defaultDescription: "Manithas - Corporate Business React JS Template.",
            robotsTxt: DEFAULT_ROBOTS_TXT,
        },
    });

    for (const page of PAGES) {
        await prisma.seoPage.upsert({
            where: { slug: page.slug },
            update: {},
            create: page,
        });
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (adminEmail && adminPassword) {
        const passwordHash = await bcrypt.hash(adminPassword, 10);
        await prisma.adminUser.upsert({
            where: { email: adminEmail },
            update: { passwordHash },
            create: { email: adminEmail, passwordHash },
        });
        console.log(`Admin user ready: ${adminEmail}`);
    } else {
        console.warn("ADMIN_EMAIL / ADMIN_PASSWORD not set - skipped admin user creation.");
    }

    console.log(`Seeded ${PAGES.length} SEO pages and site settings.`);
}

main()
    .catch((err) => {
        console.error(err);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
