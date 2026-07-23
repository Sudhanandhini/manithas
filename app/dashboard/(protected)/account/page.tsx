import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { customerAuthOptions } from "@/lib/customerAuth";
import { prisma } from "@/lib/prisma";
import AccountSettingsForm from "./AccountSettingsForm";

export const dynamic = "force-dynamic";

export default async function DashboardAccountPage() {
    const session = await getServerSession(customerAuthOptions);
    if (!session?.user) {
        redirect("/login");
    }
    const customerId = (session.user as { id: string }).id;

    const customer = await prisma.customer.findUnique({ where: { id: customerId } });
    if (!customer) {
        redirect("/login");
    }

    return (
        <>
            <p className="admin-title" style={{ marginBottom: 20 }}>
                Account Settings
            </p>
            <div className="admin-card">
                <AccountSettingsForm username={customer.username} email={customer.email ?? ""} />
            </div>
        </>
    );
}
