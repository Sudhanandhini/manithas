import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { customerAuthOptions } from "@/lib/customerAuth";
import { prisma } from "@/lib/prisma";
import NewTeamUserForm from "./NewTeamUserForm";
import RemoveTeamUserButton from "./RemoveTeamUserButton";
import ToggleDisabledButton from "./ToggleDisabledButton";

export const dynamic = "force-dynamic";

export default async function DashboardUsersPage() {
    const session = await getServerSession(customerAuthOptions);
    if (!session?.user) {
        redirect("/login");
    }
    const customerId = (session.user as { id: string }).id;
    const accountId = (session.user as { accountId: string }).accountId;

    if (customerId !== accountId) {
        redirect("/dashboard");
    }

    const [owner, teammates] = await Promise.all([
        prisma.customer.findUnique({ where: { id: accountId } }),
        prisma.customer.findMany({ where: { teamOwnerId: accountId }, orderBy: { createdAt: "asc" } }),
    ]);

    return (
        <>
            <p className="admin-title" style={{ marginBottom: 20 }}>
                Team Users
            </p>

            <div className="admin-card" style={{ marginBottom: 20 }}>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {owner && (
                            <tr>
                                <td>
                                    <code>{owner.username}</code>
                                </td>
                                <td>{owner.name}</td>
                                <td>{owner.email || <em>&mdash;</em>}</td>
                                <td>Owner</td>
                                <td>
                                    <Link href="/dashboard/account" className="admin-btn-sm">
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        )}
                        {teammates.map((teammate) => (
                            <tr key={teammate.id}>
                                <td>
                                    <code>{teammate.username}</code>
                                </td>
                                <td>{teammate.name}</td>
                                <td>{teammate.email || <em>&mdash;</em>}</td>
                                <td>
                                    Teammate
                                    {teammate.disabled && (
                                        <span
                                            style={{
                                                marginLeft: 8,
                                                background: "#a4262c",
                                                color: "#fff",
                                                borderRadius: 999,
                                                padding: "1px 8px",
                                                fontSize: 11,
                                            }}
                                        >
                                            Disabled
                                        </span>
                                    )}
                                </td>
                                <td style={{ display: "flex", gap: 8 }}>
                                    <Link href={`/dashboard/users/${teammate.id}`} className="admin-btn-sm">
                                        Edit
                                    </Link>
                                    <ToggleDisabledButton userId={teammate.id} disabled={teammate.disabled} />
                                    <RemoveTeamUserButton userId={teammate.id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="admin-card">
                <p className="admin-title" style={{ fontSize: 16, marginBottom: 16 }}>
                    Add A Team User
                </p>
                <NewTeamUserForm />
            </div>
        </>
    );
}
