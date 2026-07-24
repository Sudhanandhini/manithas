import { prisma } from "@/lib/prisma";
import SeoTabs from "../SeoTabs";
import SeoPagesTable from "./SeoPagesTable";

export const dynamic = "force-dynamic";

export default async function AdminSeoListPage() {
    const pages = await prisma.seoPage.findMany({ orderBy: { slug: "asc" } });

    return (
        <>
            <SeoTabs />
            <SeoPagesTable pages={pages} />
        </>
    );
}
