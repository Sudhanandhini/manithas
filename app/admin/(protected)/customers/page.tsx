import { prisma } from "@/lib/prisma";
import CustomerTabs from "./CustomerTabs";
import CustomersTable from "./CustomersTable";

export const dynamic = "force-dynamic";

export default async function AdminCustomersPage() {
    const customers = await prisma.customer.findMany({ orderBy: { createdAt: "desc" } });

    return (
        <>
            <CustomerTabs />
            <CustomersTable customers={customers} />
        </>
    );
}
