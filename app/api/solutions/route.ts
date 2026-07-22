import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const solutions = await prisma.solution.findMany({
        where: { published: true },
        orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
        take: 6,
        select: { title: true, slug: true },
    });
    return NextResponse.json({ solutions });
}
