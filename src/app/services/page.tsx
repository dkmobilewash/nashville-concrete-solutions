import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/data/site";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CtaSection } from "@/components/sections/CtaSection";

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
];

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Concrete Services",
    description: `Concrete driveways, patios, stamped concrete, slabs, repair, retaining walls, and more from ${site.name}, serving Greater ${site.address.city}, ${site.address.stateCode}.`,
    canonical: "/services",
  });
}

export default function ServicesHubPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <div className="bg-brand-charcoal">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbItems} variant="dark" />
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-brand-charcoal md:text-5xl">
          Concrete Services
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-gray">
          From new driveway pours to stamped patios and structural repair, {site.name} handles
          concrete work for homeowners and businesses across Greater {site.address.city}. Every
          project starts with a real site assessment — grading, soil, and drainage — not a
          one-size-fits-all quote.
        </p>
        <div className="mt-10">
          <ServicesGrid />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
