import { Suspense } from "react";
import CustomerAuthProvider from "@/src/components/CustomerAuthProvider";
import LoginForm from "./LoginForm";
import "../admin/admin.css";

export default function CustomerLoginPage() {
    return (
        <div className="admin-panel admin-login-wrap">
            <CustomerAuthProvider>
                <Suspense fallback={null}>
                    <LoginForm />
                </Suspense>
            </CustomerAuthProvider>
        </div>
    );
}
