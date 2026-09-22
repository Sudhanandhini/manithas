import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

// Back to report-only: enforcing mode shipped once already and missed a real
// external resource (Google Fonts, pulled in via a .scss partial that the
// first audit didn't check), which broke font loading on the live admin
// login page. Re-verify thoroughly - grep every .scss/.css file, not just
// the top-level one - before flipping this back to enforcing.
const CSP_REPORT_ONLY = true;

function buildCsp(nonce: string): string {
    // Webpack's dev-mode module runtime wraps chunks in eval() for fast HMR
    // rebuilds - a strict CSP legitimately blocks that. Production builds
    // don't eval anything, so this only loosens the policy in `next dev`.
    const isDev = process.env.NODE_ENV !== "production";
    const directives = [
        `default-src 'self'`,
        // 'strict-dynamic' is what lets our own nonce'd bundle dynamically inject
        // the YouTube IFrame API script (react-youtube-background does this via
        // document.createElement('script')) without that script needing its own
        // nonce. The explicit host is kept alongside it for browsers that don't
        // support strict-dynamic, which then fall back to the host list instead.
        `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://www.youtube.com https://s.ytimg.com${isDev ? " 'unsafe-eval'" : ""}`,
        // Inline <style> tags (FloatingChat's keyframe block, swiper/AOS runtime
        // styles) aren't practical to nonce - style-based XSS is a much smaller
        // risk than script-based, so this is the standard tradeoff.
        // fonts.googleapis.com: the Rubik font is pulled in via @import url()
        // in src/assets/scss/_common.scss (missed in the first audit, which
        // only checked the top-level style.scss).
        `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
        `img-src 'self' data: blob: https://i.ytimg.com`,
        `font-src 'self' data: https://fonts.gstatic.com`,
        `connect-src 'self'`,
        `frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com`,
        `object-src 'none'`,
        `base-uri 'self'`,
        `form-action 'self'`,
        `frame-ancestors 'self'`,
        `upgrade-insecure-requests`,
    ];
    return directives.join("; ");
}

// Also used to hand the current pathname to app/layout.tsx (a server component, which has
// no direct access to the request) via a request header, so it can look up per-page JSON-LD
// schema. Must be set on the *request* headers (not the response) for headers() to see it.
// The nonce is set the same way, so JsonLd (and any other server-rendered inline <script>)
// can read it via next/headers and add it to that specific tag.
function withSecurityContext(req: NextRequest): NextResponse {
    const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
    const csp = buildCsp(nonce);

    const headers = new Headers(req.headers);
    headers.set("x-pathname", req.nextUrl.pathname);
    headers.set("x-nonce", nonce);

    const response = NextResponse.next({ request: { headers } });
    response.headers.set(CSP_REPORT_ONLY ? "Content-Security-Policy-Report-Only" : "Content-Security-Policy", csp);
    return response;
}

export async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;
    const isAdminRoute = pathname.startsWith("/admin") && pathname !== "/admin/login";
    const isAdminApi = pathname.startsWith("/api/admin");

    if (!isAdminRoute && !isAdminApi) {
        return withSecurityContext(req);
    }

    if (pathname === "/admin/login") {
        return withSecurityContext(req);
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

    return withSecurityContext(req);
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
