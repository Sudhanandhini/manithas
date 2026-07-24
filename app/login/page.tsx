import { Suspense } from "react";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import CustomerAuthProvider from "@/src/components/CustomerAuthProvider";
import LoginForm from "./LoginForm";
import Header from "@/src/partials/header/Header";
import Breadcrumb from "@/src/container/Breadcrumb/Breadcrumb";
import Footer from "@/src/container/Footer/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";
import "../admin/admin.css";

export async function generateMetadata(): Promise<Metadata> {
    return buildMetadata("/login");
}

export default function CustomerLoginPage() {
    return (
        <>
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                title="Customer Login"
                content="Home"
                contentTwo="Login"
            />
            <div className="admin-panel admin-login-wrap section" style={{ minHeight: "60vh" }}>
                <CustomerAuthProvider>
                    <Suspense fallback={null}>
                        <LoginForm />
                    </Suspense>
                </CustomerAuthProvider>
            </div>
            <Footer />
            <ScrollToTop />
        </>
    );
}
