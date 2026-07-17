import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import LogoutButton from "./LogoutButton";
import "../admin.css";

export default async function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/admin/login");
    }

    return (
        <div className="admin-panel">
            <div className="admin-nav">
                <p className="admin-title">SEO Admin</p>
                <div className="admin-nav-links">
                    <Link href="/admin/seo">Pages</Link>
                    <Link href="/admin/settings">Site Settings</Link>
                    <LogoutButton />
                </div>
            </div>
            {children}
        </div>
    );
}
