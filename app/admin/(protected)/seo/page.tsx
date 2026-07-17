import Link from "next/link";
import { prisma } from "@/lib/prisma";
import NewPageForm from "./NewPageForm";

export const dynamic = "force-dynamic";

export default async function AdminSeoListPage() {
    const pages = await prisma.seoPage.findMany({ orderBy: { slug: "asc" } });

    return (
        <>
            <div className="admin-card">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Page</th>
                            <th>Slug</th>
                            <th>Title</th>
                            <th>Indexing</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {pages.map((page) => (
                            <tr key={page.id}>
                                <td>{page.label}</td>
                                <td>
                                    <code>{page.slug}</code>
                                </td>
                                <td>{page.title || <em>not set</em>}</td>
                                <td>{page.noindex ? "noindex" : "indexed"}</td>
                                <td>
                                    <Link href={`/admin/seo/${page.id}`}>Edit</Link>
                                </td>
                            </tr>
                        ))}
                        {pages.length === 0 && (
                            <tr>
                                <td colSpan={5}>No pages yet.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="admin-card">
                <h2 style={{ fontSize: 16, marginTop: 0 }}>Add a page</h2>
                <NewPageForm />
            </div>
        </>
    );
}
