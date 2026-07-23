import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import CustomerEditForm from "./CustomerEditForm";
import CustomerTabs from "../CustomerTabs";

export const dynamic = "force-dynamic";

export default async function AdminCustomerEditPage({ params }: { params: { id: string } }) {
    const customer = await prisma.customer.findUnique({ where: { id: params.id } });
    if (!customer) {
        notFound();
    }

    return (
        <>
            <CustomerTabs />

            <p className="admin-title" style={{ marginBottom: 20 }}>
                {customer.name} <code style={{ fontWeight: 400, fontSize: 15 }}>@{customer.username}</code>
            </p>
            <div className="admin-card">
                <CustomerEditForm customer={customer} />
            </div>
        </>
    );
}
