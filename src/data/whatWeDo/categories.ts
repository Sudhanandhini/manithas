export type WhatWeDoLink = { label: string; href: string };
export type WhatWeDoCategory = {
    label: string;
    shortLabel: string;
    icon: string;
    links: WhatWeDoLink[];
};

export const WHAT_WE_DO_CATEGORIES: WhatWeDoCategory[] = [
    {
        label: "Application",
        shortLabel: "Application",
        icon: "fas fa-laptop-code",
        links: [
            { label: "Alumni", href: "/what-we-do/application/alumni" },
            { label: "eLibrary", href: "/what-we-do/application/elibrary" },
            { label: "Subscription", href: "/what-we-do/application/subscription" },
            { label: "Employee Records", href: "/what-we-do/application/employee-records" },
            { label: "Online Assessment Test", href: "/what-we-do/application/online-assessment-test" },
            { label: "Custom Web Application", href: "/what-we-do/application" },
        ],
    },
    {
        label: "Web Development",
        shortLabel: "Development",
        icon: "fas fa-code",
        links: [
            { label: "React Development", href: "/what-we-do/web-development/react-development" },
            { label: "HTML & CSS Development", href: "/what-we-do/web-development/html-css-development" },
            { label: "E-Commerce Development", href: "/what-we-do/web-development/e-commerce-development" },
            { label: "Custom Web Development", href: "/what-we-do/web-development/custom-web-development" },
            { label: "WooCommerce Development", href: "/what-we-do/web-development/woocommerce-development" },
            { label: "Shopify Development", href: "/what-we-do/web-development/shopify-development" },
            { label: "WordPress Development", href: "/what-we-do/web-development/wordpress-development" },
            { label: "Landing Page", href: "/what-we-do/web-development/landing-page" },
            { label: "Website Maintenance", href: "/what-we-do/web-development/website-maintenance" },
            { label: "Website Redesign", href: "/what-we-do/web-development/website-redesign" },
            { label: "Responsive Web Design", href: "/what-we-do/web-development/responsive-web-design" },
        ],
    },
    {
        label: "Hosting & Maintenance",
        shortLabel: "Hosting",
        icon: "fas fa-server",
        links: [
            { label: "Linux Hosting", href: "/hosting/linux-hosting" },
            { label: "Web Hosting", href: "/hosting/web-hosting" },
            { label: "Email Hosting", href: "/hosting/email-hosting" },
            { label: "Cloud & VPS Hosting", href: "/hosting/cloud-vps-hosting" },
        ],
    },
    {
        label: "Business E-Mail",
        shortLabel: "Business Email",
        icon: "fas fa-envelope",
        links: [
            { label: "Microsoft 365", href: "/what-we-do/business-email/microsoft-365" },
            { label: "Google Workspace", href: "/what-we-do/business-email/google-workspace" },
            { label: "Web Email", href: "/what-we-do/business-email/web-email" },
        ],
    },
    {
        label: "Industry Solutions",
        shortLabel: "Industries",
        icon: "fas fa-industry",
        links: [
            { label: "Tours and Travels", href: "/industry-solutions/tours-and-travels" },
            { label: "Hotel & Resort", href: "/industry-solutions/hotel-resort" },
            { label: "Healthcare", href: "/industry-solutions/healthcare" },
            { label: "Corporate", href: "/industry-solutions/corporate" },
            { label: "Education", href: "/industry-solutions/education" },
            { label: "Real Estate & Construction", href: "/industry-solutions/real-estate-construction" },
        ],
    },
];
