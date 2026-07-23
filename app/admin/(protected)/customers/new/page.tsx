import NewCustomerForm from "./NewCustomerForm";
import CustomerTabs from "../CustomerTabs";

export const dynamic = "force-dynamic";

export default function AdminNewCustomerPage() {
    return (
        <>
            <CustomerTabs />

            <p className="admin-title" style={{ marginBottom: 20 }}>
                Add A Customer
            </p>
            <div className="admin-card">
                <NewCustomerForm />
            </div>
        </>
    );
}
