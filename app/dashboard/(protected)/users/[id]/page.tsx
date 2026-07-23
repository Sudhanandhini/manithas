import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { customerAuthOptions } from "@/lib/customerAuth";
import { prisma } from "@/lib/prisma";
import EditTeamUserForm from "./EditTeamUserForm";

export const dynamic = "force-dynamic";

export default async function EditTeamUserPage({ params }: { params: { id: string } }) {
    const session = await getServerSession(customerAuthOptions);
    if (!session?.user) {
        redirect("/login");
    }
    const customerId = (session.user as { id: string }).id;
    const accountId = (session.user as { accountId: string }).accountId;

    if (customerId !== accountId) {
        redirect("/dashboard");
    }

    const teammate = await prisma.customer.findUnique({ where: { id: params.id } });
    if (!teammate || teammate.teamOwnerId !== accountId) {
        notFound();
    }

    return (
        <>
            <p className="admin-title" style={{ marginBottom: 20 }}>
                Edit Team User
            </p>
            <div className="admin-card">
                <EditTeamUserForm
                    user={{
                        id: teammate.id,
                        username: teammate.username,
                        name: teammate.name,
                        email: teammate.email ?? "",
                        disabled: teammate.disabled,
                    }}
                />
            </div>
        </>
    );
}
