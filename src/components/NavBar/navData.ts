export type MegaMenuLink = { label: string; href: string; description: string };
export type MegaMenuCategory = { label: string; columns: MegaMenuLink[][] };

export const APPLICATION_LINKS: MegaMenuLink[] = [
    { label: "Alumni", href: "/what-we-do/application/alumni", description: "Keep alumni connected with directories, events, and updates in one place." },
    { label: "eLibrary", href: "/what-we-do/application/elibrary", description: "A digital library your members can browse and borrow from anywhere." },
    { label: "Subscription Module", href: "/what-we-do/application/subscription", description: "Manage recurring memberships, billing, and renewals automatically." },
    { label: "Employee Records", href: "/what-we-do/application/employee-records", description: "Centralize staff records, documents, and history securely." },
    { label: "Online Assessment Test", href: "/what-we-do/application/online-assessment-test", description: "Run tests and quizzes online with instant, auto-graded results." },
    { label: "Custom Web Application", href: "/what-we-do/application", description: "A tailored application built around your exact workflow." },
];

export const WHAT_WE_DO: MegaMenuCategory[] = [
    {
        label: "Application",
        columns: [APPLICATION_LINKS.slice(0, 3), APPLICATION_LINKS.slice(3)],
    },
    {
        label: "Web Development",
        columns: [
            [
                { label: "React Development", href: "/what-we-do/web-development/react-development", description: "Interactive, component-driven interfaces built with React." },
                { label: "HTML & CSS Development", href: "/what-we-do/web-development/html-css-development", description: "Clean, hand-coded markup and styling, pixel by pixel." },
                { label: "E-Commerce Development", href: "/what-we-do/web-development/e-commerce-development", description: "Online stores built to convert browsers into buyers." },
                { label: "Custom Web Development", href: "/what-we-do/web-development/custom-web-development", description: "Bespoke websites built from scratch around your needs." },
            ],
            [
                { label: "WooCommerce Development", href: "/what-we-do/web-development/woocommerce-development", description: "WordPress-powered stores built on WooCommerce." },
                { label: "Shopify Development", href: "/what-we-do/web-development/shopify-development", description: "Custom storefronts and themes built on Shopify." },
                { label: "WordPress Development", href: "/what-we-do/web-development/wordpress-development", description: "Flexible, easy-to-manage sites built on WordPress." },
                { label: "Landing Page", href: "/what-we-do/web-development/landing-page", description: "Focused, high-converting pages for a single campaign or offer." },
            ],
            [
                { label: "Website Maintenance", href: "/what-we-do/web-development/website-maintenance", description: "Ongoing updates, backups, and fixes to keep your site healthy." },
                { label: "Website Redesign", href: "/what-we-do/web-development/website-redesign", description: "A modern refresh for a site that's starting to show its age." },
                { label: "Responsive Web Design", href: "/what-we-do/web-development/responsive-web-design", description: "Sites that look and work great on every screen size." },
            ],
        ],
    },
    {
        label: "Hosting & Maintenance",
        columns: [
            [
                { label: "Linux Hosting", href: "/hosting/linux-hosting", description: "Stable, secure hosting on industry-standard Linux servers." },
                { label: "Web Hosting", href: "/hosting/web-hosting", description: "Reliable hosting to keep your website fast and always online." },
            ],
            [
                { label: "Email Hosting", href: "/hosting/email-hosting", description: "Dependable, spam-filtered hosting for your business inbox." },
                { label: "Cloud & VPS Hosting", href: "/hosting/cloud-vps-hosting", description: "Scalable hosting with dedicated resources as you grow." },
            ],
        ],
    },
    {
        label: "Business E-Mail",
        columns: [
            [
                { label: "Microsoft 365", href: "/what-we-do/business-email/microsoft-365", description: "Business email plus Office apps, hosted by Microsoft." },
                { label: "Google Workspace", href: "/what-we-do/business-email/google-workspace", description: "Gmail, Docs, and Drive under your own domain." },
                { label: "Web Email", href: "/what-we-do/business-email/web-email", description: "Simple, browser-based email hosted on your domain." },
            ],
        ],
    },
    {
        label: "Industry Solutions",
        columns: [
            [
                { label: "Tours and Travels", href: "/industry-solutions/tours-and-travels", description: "Booking-ready sites built for travel and tour operators." },
                { label: "Hotel & Resort", href: "/industry-solutions/hotel-resort", description: "Reservation-friendly sites built for hotels and resorts." },
                { label: "Healthcare", href: "/industry-solutions/healthcare", description: "Patient-friendly sites built for clinics and healthcare providers." },
            ],
            [
                { label: "Corporate", href: "/industry-solutions/corporate", description: "Professional sites built to represent your company well." },
                { label: "Education", href: "/industry-solutions/education", description: "Sites built for schools, colleges, and training institutes." },
                { label: "Real Estate & Construction", href: "/industry-solutions/real-estate-construction", description: "Listing-ready sites built for property and construction firms." },
            ],
        ],
    },
];
