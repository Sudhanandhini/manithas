import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 1. Microsoft 365 / Google Workspace slug collision (seed.mjs used to give both
//    the same slug by mistake - fix Microsoft 365 first so Google Workspace's
//    mapping below can reclaim its slug).
const msRow = await prisma.seoPage.findFirst({ where: { slug: "/business-email/google-workspace", label: "Microsoft 365" } });
if (msRow) {
  await prisma.seoPage.update({ where: { id: msRow.id }, data: { slug: "/business-email/microsoft-365" } });
  console.log(`Fixed: Microsoft 365 -> /business-email/microsoft-365`);
} else {
  console.log(`Skip: no Microsoft 365 row sitting on /business-email/google-workspace`);
}

// 2. Web Development / Business Email pages: these have no `key`, so they were
//    seeded by matching on `slug`. Renaming the slug in seed.mjs left the old
//    row behind (matched by old slug, untouched) while nothing else claimed it.
const slugMappings = [
  ["React Development", "/what-we-do/web-development/react-development", "/services/react-development/"],
  ["HTML & CSS Development", "/what-we-do/web-development/html-css-development", "/services/html-css-development/"],
  ["PHP Development", "/what-we-do/web-development/php-development", "/services/php-development/"],
  ["E-Commerce Development", "/what-we-do/web-development/e-commerce-development", "/services/ecommerce-development/"],
  ["Custom Web Development", "/what-we-do/web-development/custom-web-development", "/services/cms-web-development/"],
  ["WooCommerce Development", "/what-we-do/web-development/woocommerce-development", "/services/woocommerce-development/"],
  ["Shopify Development", "/what-we-do/web-development/shopify-development", "/services/shopify-development/"],
  ["WordPress Development", "/what-we-do/web-development/wordpress-development", "/services/wordpress-development/"],
  ["Landing Page", "/what-we-do/web-development/landing-page", "/services/landing-page-development/"],
  ["Website Maintenance", "/what-we-do/web-development/website-maintenance", "/services/website-maintenance/"],
  ["Website Redesign", "/what-we-do/web-development/website-redesign", "/services/website-redesign/"],
  ["Responsive Web Design", "/what-we-do/web-development/responsive-web-design", "/services/responsive-web-design/"],
  ["Google Workspace", "/what-we-do/business-email/google-workspace", "/business-email/google-workspace"],
  ["Web Email", "/what-we-do/business-email/web-email", "/business-email/web-email"],
];

for (const [label, oldSlug, newSlug] of slugMappings) {
  const rowAtNew = await prisma.seoPage.findUnique({ where: { slug: newSlug } });
  const rowAtOld = await prisma.seoPage.findUnique({ where: { slug: oldSlug } });

  if (rowAtNew && rowAtNew.label === label) {
    if (rowAtOld && rowAtOld.id !== rowAtNew.id) {
      await prisma.seoPage.delete({ where: { id: rowAtOld.id } });
      console.log(`Cleaned up: deleted orphaned old row for "${label}" (${oldSlug})`);
    } else {
      console.log(`OK: "${label}" already at ${newSlug}`);
    }
  } else if (rowAtNew && rowAtNew.label !== label) {
    console.log(`CONFLICT: ${newSlug} is occupied by "${rowAtNew.label}", expected "${label}" - needs manual review`);
  } else if (rowAtOld) {
    await prisma.seoPage.update({ where: { id: rowAtOld.id }, data: { slug: newSlug } });
    console.log(`Fixed: "${label}" ${oldSlug} -> ${newSlug}`);
  } else {
    console.log(`Skip: no row found for "${label}" at either slug`);
  }
}

// 3. Application pages: these ARE keyed, so today's `npm run prisma:seed` correctly
//    created a fresh, correctly-slugged row for each (matched by `key`). But each
//    one has an older, pre-dynamic-routing duplicate left behind under the old
//    /what-we-do/application/* slug with no `key` at all - upsert-by-key never
//    saw those as a match, so they were never touched or removed. Delete them now
//    that we've confirmed the real (keyed) row exists and works.
const applicationMappings = [
  ["application-alumni", "/what-we-do/application/alumni", "Alumni"],
  ["application-elibrary", "/what-we-do/application/elibrary", "eLibrary"],
  ["application-subscription", "/what-we-do/application/subscription", "Subscription"],
  ["application-employee-records", "/what-we-do/application/employee-records", "Employee Records"],
  ["application-online-assessment-test", "/what-we-do/application/online-assessment-test", "Online Assessment"],
  ["application-root", "/what-we-do/application", "Custom Web Application"],
];

for (const [key, oldSlug, label] of applicationMappings) {
  const keyedRow = await prisma.seoPage.findUnique({ where: { key } });
  const oldRow = await prisma.seoPage.findUnique({ where: { slug: oldSlug } });

  if (!oldRow) {
    console.log(`Skip: no orphaned old row for "${label}" (${oldSlug})`);
  } else if (!keyedRow) {
    console.log(`CONFLICT: no keyed row found for "${label}" (key=${key}) - leaving old row (${oldSlug}) alone, needs manual review`);
  } else if (oldRow.id === keyedRow.id) {
    console.log(`OK: "${label}" row is already the keyed one`);
  } else {
    await prisma.seoPage.delete({ where: { id: oldRow.id } });
    console.log(`Cleaned up: deleted orphaned old row for "${label}" (${oldSlug})`);
  }
}

await prisma.$disconnect();
