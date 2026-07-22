import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import SolutionTabs from "../SolutionTabs";
import SolutionEditForm from "./SolutionEditForm";

export const dynamic = "force-dynamic";

export default async function AdminSolutionEditPage({ params }: { params: { id: string } }) {
    const solution = await prisma.solution.findUnique({ where: { id: params.id } });
    if (!solution) {
        notFound();
    }

    return (
        <>
            <SolutionTabs />
            <div className="admin-card">
                <h2 style={{ marginTop: 0 }}>
                    {solution.title} <code style={{ fontWeight: 400 }}>/solution-details/{solution.slug}</code>
                </h2>
                <SolutionEditForm solution={solution} />
            </div>
        </>
    );
}
