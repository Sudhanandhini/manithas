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
