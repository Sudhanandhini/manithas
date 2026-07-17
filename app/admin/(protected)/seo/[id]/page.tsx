import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import SeoEditForm from "./SeoEditForm";

export const dynamic = "force-dynamic";

export default async function AdminSeoEditPage({ params }: { params: { id: string } }) {
    const page = await prisma.seoPage.findUnique({ where: { id: params.id } });
    if (!page) {
        notFound();
    }

    return (
        <div className="admin-card">
            <h2 style={{ marginTop: 0 }}>
                {page.label} <code style={{ fontWeight: 400 }}>{page.slug}</code>
            </h2>
            <SeoEditForm page={page} />
        </div>
    );
}
