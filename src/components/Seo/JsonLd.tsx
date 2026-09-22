// Renders admin-authored schema.org structured data. `</` is escaped so the stored
// JSON can't prematurely close this script tag (e.g. a value containing "</script>").
// `nonce` matches the one middleware.ts set on the CSP header for this request,
// since this is a hand-authored inline <script> tag (not one Next.js injects itself).
export default function JsonLd({ data, nonce }: { data: unknown; nonce?: string }) {
    if (!data) return null;

    const json = JSON.stringify(data).replace(/</g, "\\u003c");

    return <script type="application/ld+json" nonce={nonce} dangerouslySetInnerHTML={{ __html: json }} />;
}
