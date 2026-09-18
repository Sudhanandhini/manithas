const securityHeaders = [
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "SAMEORIGIN" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const legacyRedirects = [
    ["/what-we-do/web-development", "/services/web-development"],
    ["/what-we-do/web-development/react-development", "/services/react-development"],
    ["/what-we-do/web-development/html-css-development", "/services/html-css-development"],
    ["/what-we-do/web-development/php-development", "/services/php-development"],
    ["/what-we-do/web-development/e-commerce-development", "/services/ecommerce-development"],
    ["/what-we-do/web-development/custom-web-development", "/services/web-development/custom-web-development"],
    ["/what-we-do/web-development/woocommerce-development", "/services/woocommerce-development"],
    ["/what-we-do/web-development/shopify-development", "/services/shopify-development"],
    ["/what-we-do/web-development/wordpress-development", "/services/wordpress-development"],
    ["/what-we-do/web-development/landing-page", "/services/landing-page-development"],
    ["/what-we-do/web-development/website-maintenance", "/services/website-maintenance"],
    ["/what-we-do/web-development/website-redesign", "/services/website-redesign"],
    ["/what-we-do/web-development/responsive-web-design", "/services/responsive-web-design"],
    ["/what-we-do/web-development/cms-web-development", "/services/cms-web-development"],
    ["/what-we-do/web-hosting", "/services/web-hosting"],
    ["/what-we-do/business-email", "/business-email"],
    ["/what-we-do/business-email/google-workspace", "/business-email/google-workspace"],
    ["/what-we-do/business-email/microsoft-365", "/business-email/microsoft-365"],
    ["/what-we-do/business-email/web-email", "/business-email/web-email"],
    ["/what-we-do/application", "/services/application"],
    ["/what-we-do/application/alumni", "/alumni-management-software"],
    ["/what-we-do/application/elibrary", "/library-management-software"],
    ["/what-we-do/application/subscription", "/subscription-management-software"],
    ["/what-we-do/application/employee-records", "/employee-record-management-software"],
    ["/what-we-do/application/online-assessment-test", "/online-assessment-software"],
    ["/service", "/services"],
];

/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    async headers() {
        return [
            {
                source: "/:path*",
                headers: securityHeaders,
            },
        ];
    },
    async redirects() {
        return legacyRedirects.map(([source, destination]) => ({
            source,
            destination,
            permanent: true,
        }));
    },
};

export default nextConfig;
