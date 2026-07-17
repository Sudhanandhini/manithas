import { getSiteSettings } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function GET() {
    const settings = await getSiteSettings();

    return new Response(settings.robotsTxt, {
        headers: { "Content-Type": "text/plain" },
    });
}
