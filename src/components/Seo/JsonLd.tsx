// Renders admin-authored schema.org structured data. `</` is escaped so the stored
// JSON can't prematurely close this script tag (e.g. a value containing "</script>").
export default function JsonLd({ data }: { data: unknown }) {
    if (!data) return null;

    const json = JSON.stringify(data).replace(/</g, "\\u003c");

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
