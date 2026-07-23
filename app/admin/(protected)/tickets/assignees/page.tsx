import { prisma } from "@/lib/prisma";
import TicketTabs from "../TicketTabs";
import NewAssigneeForm from "./NewAssigneeForm";
import AssigneeList from "./AssigneeList";

export const dynamic = "force-dynamic";

export default async function AdminTicketAssigneesPage() {
    const assignees = await prisma.ticketAssignee.findMany({ orderBy: { name: "asc" } });

    return (
        <>
            <TicketTabs />

            <div className="admin-card">
                <h2 style={{ fontSize: 16, marginTop: 0 }}>Assignees</h2>
                <p style={{ marginTop: -8, color: "#666", fontSize: 14 }}>
                    People you add here show up in the "Assigned To" dropdown on a ticket.
                </p>
                <AssigneeList assignees={assignees} />
            </div>

            <div className="admin-card">
                <h2 style={{ fontSize: 16, marginTop: 0 }}>Add a person</h2>
                <NewAssigneeForm />
            </div>
        </>
    );
}
