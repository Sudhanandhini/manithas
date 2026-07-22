import NewTicketForm from "./NewTicketForm";

export const dynamic = "force-dynamic";

export default function NewTicketPage() {
    return (
        <>
            <p className="admin-title" style={{ marginBottom: 20 }}>
                Raise A New Ticket
            </p>
            <div className="admin-card">
                <NewTicketForm />
            </div>
        </>
    );
}
