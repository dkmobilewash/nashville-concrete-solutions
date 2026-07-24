import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Terms of Service",
    description: `Terms of service for ${site.name}.`,
    canonical: "/terms",
  });
}

export default function TermsPage() {
  return (
    <article className="prose prose-lg mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1>Terms of Service</h1>
      <p>
        This website is provided by {site.name} for informational purposes. Content on this site,
        including service descriptions and pricing indications, does not constitute a binding
        quote. Formal project quotes are provided separately after a site assessment.
      </p>
      <p>
        For questions about these terms, contact us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.
      </p>
      {/* NEEDS INPUT: replace with reviewed, legally-vetted terms before launch. */}
    </article>
  );
}
