/**
 * Renders one or more JSON-LD structured-data blocks. Pass plain objects from
 * the schema builders in lib/seo. Server component — no client JS shipped.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Structured data is generated from trusted, in-repo content.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
