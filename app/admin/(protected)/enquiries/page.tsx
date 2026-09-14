import { prisma } from "@/lib/prisma";
import EnquiriesTable from "./EnquiriesTable";

export const dynamic = "force-dynamic";

export default async function AdminEnquiriesPage() {
    const enquiries = await prisma.enquiry.findMany({ orderBy: { createdAt: "desc" } });

    return (
        <>
            <p className="admin-title" style={{ marginBottom: 20 }}>
                Chatbot Enquiries
            </p>
            <EnquiriesTable enquiries={enquiries} />
        </>
    );
}
