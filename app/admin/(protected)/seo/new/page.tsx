import SeoTabs from "../../SeoTabs";
import NewPageForm from "../NewPageForm";

export default function AdminSeoAddPage() {
    return (
        <>
            <SeoTabs />

            <div className="admin-card">
                <h2 style={{ fontSize: 16, marginTop: 0 }}>Add a page</h2>
                <NewPageForm />
            </div>
        </>
    );
}
