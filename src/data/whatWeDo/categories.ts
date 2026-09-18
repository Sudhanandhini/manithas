export type WhatWeDoLink = { label: string; href: string; key?: string; icon: string };
export type WhatWeDoCategory = {
    label: string;
    shortLabel: string;
    links: WhatWeDoLink[];
};

export const WHAT_WE_DO_CATEGORIES: WhatWeDoCategory[] = [
    {
        label: "Application",
        shortLabel: "Application",
        links: [
            { label: "Alumni", href: "/alumni-management-software", key: "application-alumni", icon: "images/svg/linea/linea-basic-share.svg" },
            { label: "eLibrary", href: "/library-management-software", key: "application-elibrary", icon: "images/svg/linea/linea-basic-book.svg" },
            { label: "Subscription Module", href: "/subscription-management-software", key: "application-subscription", icon: "images/svg/linea/linea-ecommerce-creditcard.svg" },
            { label: "Employee Records", href: "/employee-record-management-software", key: "application-employee-records", icon: "images/svg/linea/linea-basic-folder.svg" },
            { label: "Online Assessment ", href: "/online-assessment-software", key: "application-online-assessment-test", icon: "images/svg/linea/linea-basic-elaboration-todolist-check.svg" },
            { label: "Custom Web Application", href: "/services/application", key: "application-root", icon: "images/svg/linea/linea-basic-display.svg" },
        ],
    },
    {
        label: "Web Development",
        shortLabel: "Development",
        links: [
            { label: "React Development", href: "/services/react-development/", icon: "images/svg/linea/linea-basic-webpage.svg" },
            { label: "HTML & CSS Development", href: "/services/html-css-development/", icon: "images/svg/linea/linea-software-vector-line.svg" },
            { label: "PHP Development", href: "/services/php-development/", icon: "images/svg/linea/linea-basic-settings.svg" },
            { label: "E-Commerce Development", href: "/services/ecommerce-development/", icon: "images/svg/linea/linea-ecommerce-cart-plus.svg" },
            { label: "Custom Web Development", href: "/services/web-development/custom-web-development", icon: "images/svg/linea/linea-basic-gear.svg" },
            { label: "WooCommerce Development", href: "/services/woocommerce-development/", icon: "images/svg/linea/linea-ecommerce-bag.svg" },
            { label: "Shopify Development", href: "/services/shopify-development/", icon: "images/svg/linea/linea-ecommerce-basket.svg" },
            { label: "WordPress Development", href: "/services/wordpress-development/", icon: "images/svg/linea/linea-basic-webpage-txt.svg" },
            { label: "Landing Page", href: "/services/landing-page-development/", icon: "images/svg/linea/linea-basic-webpage-img-txt.svg" },
            { label: "Website Maintenance", href: "/services/website-maintenance/", icon: "images/svg/linea/linea-basic-mixer2.svg" },
            { label: "Website Redesign", href: "/services/website-redesign/", icon: "images/svg/linea/linea-basic-clockwise.svg" },
            { label: "Responsive Web Design", href: "/services/responsive-web-design/", icon: "images/svg/linea/linea-basic-tablet.svg" },
        ],
    },
    {
        label: "Hosting & Maintenance",
        shortLabel: "Hosting",
        links: [
            { label: "Linux Hosting", href: "/hosting/linux-hosting", icon: "images/svg/linea/linea-basic-server.svg" },
            { label: "Web Hosting", href: "/hosting/web-hosting", icon: "images/svg/linea/linea-basic-server2.svg" },
            { label: "Email Hosting", href: "/hosting/email-hosting", icon: "images/svg/linea/linea-basic-mail.svg" },
            { label: "Cloud & VPS Hosting", href: "/hosting/cloud-vps-hosting", icon: "images/svg/linea/linea-basic-cloud.svg" },
        ],
    },
    {
        label: "Business E-Mail",
        shortLabel: "Business Email",
        links: [
            { label: "Microsoft 365", href: "/business-email/microsoft-365", icon: "images/svg/linea/linea-basic-mail-open-text.svg" },
            { label: "Google Workspace", href: "/business-email/google-workspace", icon: "images/svg/linea/linea-basic-mail-open.svg" },
            { label: "Web Email", href: "/business-email/web-email", icon: "images/svg/linea/linea-basic-mail.svg" },
        ],
    },
    {
        label: "Industry Solutions",
        shortLabel: "Industries",
        links: [
            { label: "Tours and Travels", href: "/industry-solutions/tours-and-travels", icon: "images/svg/linea/linea-basic-map.svg" },
            { label: "Hotel & Resort", href: "/industry-solutions/hotel-resort", icon: "images/svg/linea/linea-basic-home.svg" },
            { label: "Healthcare", href: "/industry-solutions/healthcare", icon: "images/svg/linea/linea-basic-heart.svg" },
            { label: "Corporate", href: "/industry-solutions/corporate", icon: "images/svg/linea/linea-basic-case.svg" },
            { label: "Education", href: "/industry-solutions/education", icon: "images/svg/linea/linea-basic-book-pencil.svg" },
            { label: "Real Estate & Construction", href: "/industry-solutions/real-estate-construction", icon: "images/svg/linea/linea-basic-hammer.svg" },
        ],
    },
];
