import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

// Also used to hand the current pathname to app/layout.tsx (a server component, which has
// no direct access to the request) via a request header, so it can look up per-page JSON-LD
// schema. Must be set on the *request* headers (not the response) for headers() to see it.
function withPathname(req: NextRequest): NextResponse {
    const headers = new Headers(req.headers);
    headers.set("x-pathname", req.nextUrl.pathname);
    return NextResponse.next({ request: { headers } });
}

export async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;
    const isAdminRoute = pathname.startsWith("/admin") && pathname !== "/admin/login";
    const isAdminApi = pathname.startsWith("/api/admin");

    if (!isAdminRoute && !isAdminApi) {
        return withPathname(req);
    }

    if (pathname === "/admin/login") {
        return NextResponse.next();
    }

    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
        if (isAdminApi) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const loginUrl = new URL("/admin/login", req.url);
        loginUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
