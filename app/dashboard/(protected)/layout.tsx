import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { customerAuthOptions } from "@/lib/customerAuth";
import { prisma } from "@/lib/prisma";
import CustomerAuthProvider from "@/src/components/CustomerAuthProvider";
import DashboardSidebar from "./DashboardSidebar";
import "../../admin/admin.css";

export default async function DashboardProtectedLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(customerAuthOptions);
    if (!session?.user) {
        redirect("/login");
    }

    const customer = await prisma.customer.findUnique({ where: { id: (session.user as { id: string }).id } });
    if (!customer) {
        redirect("/login");
    }
    const isOwner = !customer.teamOwnerId;

    return (
        <CustomerAuthProvider>
            <div className="admin-panel">
                <div className="admin-shell">
                    <DashboardSidebar customerName={customer.name} isOwner={isOwner} />
                    <main className="admin-content">
                        <div className="admin-content-inner">{children}</div>
                    </main>
                </div>
            </div>
        </CustomerAuthProvider>
    );
}
