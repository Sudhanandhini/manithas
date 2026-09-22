type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

// In-memory, per-process fixed-window rate limiter. This app runs as a
// single Node process (not serverless/multi-instance), so this is enough to
// blunt brute-force login attempts and public-form spam without pulling in
// Redis. Counters reset on process restart - an acceptable tradeoff for the
// low-stakes endpoints this guards.
export function checkRateLimit(key: string, limit: number, windowMs: number): boolean {
    const now = Date.now();
    const bucket = buckets.get(key);
    if (!bucket || bucket.resetAt <= now) {
        buckets.set(key, { count: 1, resetAt: now + windowMs });
        return true;
    }
    if (bucket.count >= limit) {
        return false;
    }
    bucket.count += 1;
    return true;
}

let cleanupTimer: ReturnType<typeof setInterval> | undefined;
function ensureCleanup() {
    if (cleanupTimer) return;
    cleanupTimer = setInterval(
        () => {
            const now = Date.now();
            for (const [key, bucket] of buckets) {
                if (bucket.resetAt <= now) buckets.delete(key);
            }
        },
        5 * 60 * 1000
    );
    cleanupTimer.unref?.();
}
ensureCleanup();

type HeaderSource = Headers | Record<string, unknown> | null | undefined;

function readHeader(headers: HeaderSource, name: string): string | null {
    if (!headers) return null;
    if (headers instanceof Headers) return headers.get(name);
    const value = (headers as Record<string, unknown>)[name] ?? (headers as Record<string, unknown>)[name.toLowerCase()];
    if (Array.isArray(value)) return value[0] ?? null;
    return typeof value === "string" ? value : null;
}

// Works for both a standard `Request` (App Router route handlers) and
// next-auth's plain-object `RequestInternal.headers` (credentials provider's
// `authorize(credentials, req)`).
export function getClientIp(headers: HeaderSource): string {
    const forwardedFor = readHeader(headers, "x-forwarded-for");
    if (forwardedFor) return forwardedFor.split(",")[0].trim();
    const realIp = readHeader(headers, "x-real-ip");
    if (realIp) return realIp;
    return "unknown";
}
