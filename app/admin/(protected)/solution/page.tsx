import { prisma } from "@/lib/prisma";
import SolutionTabs from "./SolutionTabs";
import SolutionsTable from "./SolutionsTable";

export const dynamic = "force-dynamic";

export default async function AdminSolutionListPage() {
    const solutions = await prisma.solution.findMany({ orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }] });

    return (
        <>
            <SolutionTabs />
            <SolutionsTable solutions={solutions} />
        </>
    );
}
