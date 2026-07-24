import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Privacy Policy",
    description: `Privacy policy for ${site.name}.`,
    canonical: "/privacy",
  });
}

export default function PrivacyPolicyPage() {
  return (
    <article className="prose prose-lg mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1>Privacy Policy</h1>
      <p>
        {site.name} collects the information you submit through our contact form — name, phone
        number, email address, and project details — solely to respond to your inquiry and
        provide a quote. We do not sell or share your information with third parties for
        marketing purposes.
      </p>
      <p>
        If you have questions about how your information is handled, contact us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.
      </p>
      {/* NEEDS INPUT: replace with a reviewed, legally-vetted privacy policy before launch. */}
    </article>
  );
}
