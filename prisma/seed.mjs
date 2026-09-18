import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const DEFAULT_ROBOTS_TXT = `User-agent: *
Allow: /

Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3008"}/sitemap.xml
`;

const PAGES = [
    { slug: "/", label: "Home", title: "Manithas", description: "Manithas" },
    {
        slug: "/home-one",
        label: "Home One (duplicate demo)",
        title: "Manithas",
        description: "Manithas ",
        canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3008"}/`,
        noindex: true,
    },
    { slug: "/about", label: "About", title: "About Us", description: "Learn about our agency, our team, and what we do." },
    { slug: "/services", label: "Service", title: "Our Services", description: "Explore the services we offer." },
    { slug: "/work", label: "Work / Portfolio", title: "Our Work", description: "Browse our portfolio of past projects." },
    { slug: "/contact", label: "Contact", title: "Contact Us", description: "Get in touch with our team." },
    { slug: "/career", label: "Careers", title: "Careers", description: "Join the Manithas team - see how you can contribute." },
    { slug: "/blog-classic", label: "Blog (Classic)", title: "Blog", description: "Read our latest articles and updates." },
    { slug: "/blog-grid", label: "Blog (Grid)", title: "Blog", description: "Read our latest articles and updates." },
    { slug: "/home-two", label: "Home Two", title: "Home Two", description: "Manithas" },
    { slug: "/home-three", label: "Home Three", title: "Home Three", description: "Manithas" },

    // Application - these 6 are dynamically routed via SeoPage.key + src/pages-registry.tsx,
    // so their `slug` is just the initial default; admins can rename it freely afterward and
    // the live route (and nav/footer/related links) follow automatically.
    { slug: "/alumni-management-software", key: "application-alumni", label: "Alumni", title: "Alumni", description: "A dedicated alumni web application that keeps colleges and their graduates connected for life." },
    { slug: "/library-management-software", key: "application-elibrary", label: "eLibrary", title: "eLibrary", description: "A digital library web application that lets students and members browse and borrow books online." },
    { slug: "/subscription-management-software", key: "application-subscription", label: "Subscription", title: "Subscription", description: "A subscription management web application where admins create accounts and members pay online." },
    { slug: "/employee-record-management-software", key: "application-employee-records", label: "Employee Records", title: "Employee Records", description: "An employee records web application for attendance, leave tracking, and payroll." },
    { slug: "/online-assessment-software", key: "application-online-assessment-test", label: "Online Assessment ", title: "Online Assessment ", description: "An online assessment web application with self-registration and instant certificate generation." },
    { slug: "/services/application", key: "application-root", label: "Custom Web Application", title: "Custom Web Application", description: "Custom web and business applications that streamline your operations and scale with your business." },

    // Web Development
    { slug: "/services/react-development/", label: "React Development", title: "React Development", description: "Fast, component-driven web applications built with React and Next.js." },
    { slug: "/services/html-css-development/", label: "HTML & CSS Development", title: "HTML & CSS Website Development", description: "Lightweight, hand-coded websites built with HTML and CSS for speed and simplicity." },
    { slug: "/services/php-development/", label: "PHP Development", title: "PHP Website Development", description: "Fast, secure, database-driven websites and applications built with PHP." },
    { slug: "/services/ecommerce-development/", label: "E-Commerce Development", title: "E-Commerce Development", description: "Online stores that convert, with secure checkouts and product management." },
    { slug: "/services/web-development/custom-web-development", label: "Custom Web Development", title: "Custom Web Development", description: "Fully custom websites and web apps engineered around your exact requirements." },
    { slug: "/services/woocommerce-development/", label: "WooCommerce Development", title: "WooCommerce Development", description: "WooCommerce stores built for reliable, scalable online selling." },
    { slug: "/services/shopify-development/", label: "Shopify Development", title: "Shopify Website Development", description: "High-converting Shopify stores, from theme customization to app integrations." },
    { slug: "/services/wordpress-development/", label: "WordPress Development", title: "WordPress Development", description: "Fast, secure, and easy-to-manage WordPress websites tailored to your brand." },
    { slug: "/services/landing-page-development/", label: "Landing Page", title: "Landing Page", description: "High-converting landing pages built for campaigns and product launches." },
    { slug: "/services/website-maintenance/", label: "Website Maintenance", title: "Website Maintenance", description: "Ongoing website maintenance to keep your site secure, updated, and running smoothly." },
    { slug: "/services/website-redesign/", label: "Website Redesign", title: "Website Redesign", description: "Website redesign services to modernize and improve your existing site." },
    { slug: "/services/responsive-web-design/", label: "Responsive Web Design", title: "Responsive Web Design", description: "Responsive websites that work seamlessly across every device and screen size." },

    // Hosting & Maintenance
    { slug: "/hosting/linux-hosting", label: "Linux Hosting", title: "Linux Hosting", description: "Reliable Linux hosting with strong compatibility for open-source technologies." },
    { slug: "/hosting/web-hosting", label: "Web Hosting", title: "Web Hosting", description: "Fast, reliable, and secure web hosting tailored to elevate your online presence." },
    { slug: "/hosting/email-hosting", label: "Email Hosting", title: "Email Hosting", description: "Professional email hosting solutions with ample storage and 24/7 support." },
    { slug: "/hosting/cloud-vps-hosting", label: "Cloud & VPS Hosting", title: "Cloud & VPS Hosting", description: "Scalable cloud and VPS hosting with dedicated resources and full root access." },

    // Business E-Mail
    { slug: "/business-email/google-workspace", label: "Microsoft 365", title: "Microsoft 365", description: "Outlook, Teams, OneDrive, and the full Office suite set up on your business domain." },
    { slug: "/business-email/google-workspace", label: "Google Workspace", title: "Google Workspace", description: "Gmail, Drive, Docs, Meet, and Calendar set up on your business domain." },
    { slug: "/business-email/web-email", label: "Web Email", title: "Web Email", description: "A simple, cost-effective business email solution hosted on your own domain." },

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
            defaultDescription: "Manithas",
            robotsTxt: DEFAULT_ROBOTS_TXT,
        },
    });

    for (const page of PAGES) {
        // Pages with a `key` are dynamically routed and admin-renameable, so their live
        // slug may no longer match the seed default - match those by the stable key
        // instead, and leave the slug alone once it exists (admin owns it from there).
        if (page.key) {
            await prisma.seoPage.upsert({
                where: { key: page.key },
                update: {},
                create: page,
            });
        } else {
            await prisma.seoPage.upsert({
                where: { slug: page.slug },
                update: {},
                create: page,
            });
        }
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
