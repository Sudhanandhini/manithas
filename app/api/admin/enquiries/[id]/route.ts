import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ENQUIRY_STATUSES } from "@/lib/enquiries";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const status = typeof body.status === "string" ? body.status : "";
    if (!ENQUIRY_STATUSES.includes(status as (typeof ENQUIRY_STATUSES)[number])) {
        return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    try {
        const enquiry = await prisma.enquiry.update({ where: { id: params.id }, data: { status } });
        return NextResponse.json({ enquiry });
    } catch {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        await prisma.enquiry.delete({ where: { id: params.id } });
        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
}
