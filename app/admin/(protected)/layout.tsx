import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import AdminSidebar from "./AdminSidebar";
import "../admin.css";

export default async function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/admin/login");
    }

    return (
        <div className="admin-panel">
            <div className="admin-shell">
                <AdminSidebar />
                <main className="admin-content">
                    <div className="admin-content-inner">{children}</div>
                </main>
            </div>
        </div>
    );
}
