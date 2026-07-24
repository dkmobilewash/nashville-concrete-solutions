// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function JsonLdScript({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
