import NewCustomerForm from "./NewCustomerForm";

export const dynamic = "force-dynamic";

export default function AdminNewCustomerPage() {
    return (
        <>
            <p className="admin-title" style={{ marginBottom: 20 }}>
                Add A Customer
            </p>
            <div className="admin-card">
                <NewCustomerForm />
            </div>
        </>
    );
}
