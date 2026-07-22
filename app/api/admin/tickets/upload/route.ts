import { randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { TICKET_ATTACHMENT_TYPES, TICKET_ATTACHMENT_MAX_BYTES } from "@/lib/tickets";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get("file");
    if (!(file instanceof File)) {
        return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const ext = TICKET_ATTACHMENT_TYPES[file.type];
    if (!ext) {
        return NextResponse.json({ error: "Unsupported file type" }, { status: 400 });
    }
    if (file.size > TICKET_ATTACHMENT_MAX_BYTES) {
        return NextResponse.json({ error: "File must be under 10MB" }, { status: 400 });
    }

    const filename = `${randomUUID()}.${ext}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads", "tickets");
    await mkdir(uploadDir, { recursive: true });

    const bytes = Buffer.from(await file.arrayBuffer());
    await writeFile(path.join(uploadDir, filename), bytes);

    return NextResponse.json(
        {
            url: `/uploads/tickets/${filename}`,
            fileName: file.name,
            fileType: file.type,
            fileSize: file.size,
        },
        { status: 201 }
    );
}
