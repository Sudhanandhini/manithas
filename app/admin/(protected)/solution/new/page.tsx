import SolutionTabs from "../SolutionTabs";
import NewSolutionForm from "./NewSolutionForm";

export const dynamic = "force-dynamic";

export default function AdminNewSolutionPage() {
    return (
        <>
            <SolutionTabs />
            <div className="admin-card">
                <h2 style={{ fontSize: 16, marginTop: 0 }}>Add a solution</h2>
                <NewSolutionForm />
            </div>
        </>
    );
}
