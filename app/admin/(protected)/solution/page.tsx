import Link from "next/link";
import { prisma } from "@/lib/prisma";
import SolutionTabs from "./SolutionTabs";

export const dynamic = "force-dynamic";

export default async function AdminSolutionListPage() {
    const solutions = await prisma.solution.findMany({ orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }] });

    return (
        <>
            <SolutionTabs />

            <div className="admin-card">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Slug</th>
                            <th>Client</th>
                            <th>Categories</th>
                            <th>Status</th>
                            <th>Published</th>
                            <th>Indexing</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {solutions.map((solution) => (
                            <tr key={solution.id}>
                                <td>
                                    {solution.image ? (
                                        <img className="admin-table-thumb" src={solution.image} alt={solution.title} />
                                    ) : (
                                        <span className="admin-table-thumb-empty">No image</span>
                                    )}
                                </td>
                                <td>{solution.title}</td>
                                <td>
                                    <code>/solution-details/{solution.slug}</code>
                                </td>
                                <td>{solution.client || <em>&mdash;</em>}</td>
                                <td>{solution.categories || <em>&mdash;</em>}</td>
                                <td>{solution.published ? "Published" : "Draft"}</td>
                                <td>{solution.publishedAt.toISOString().slice(0, 10)}</td>
                                <td>{solution.noindex ? "noindex" : "indexed"}</td>
                                <td>
                                    <Link href={`/admin/solution/${solution.id}`} className="admin-btn-sm">
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        {solutions.length === 0 && (
                            <tr>
                                <td colSpan={9}>No solutions yet.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
