import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/data/site";
import { cities } from "@/data/cities";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { CityCard } from "@/components/ui/CityCard";
import { CtaSection } from "@/components/sections/CtaSection";

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Service Areas", href: "/service-areas" },
];

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Service Areas",
    description: `Concrete contractor services across Greater ${site.address.city}, ${site.address.stateCode}, including ${site.serviceAreaNames.join(", ")}.`,
    canonical: "/service-areas",
  });
}

export default function ServiceAreasHubPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <div className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbItems} variant="dark" />
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-brand-navy md:text-5xl">
          Service Areas
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-gray">
          {site.name} serves homeowners and businesses across Greater {site.address.city}. Select
          your city below for local details, or contact us to confirm coverage in your area.
        </p>

        {cities.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-base text-brand-gray">
            Service area pages are coming soon. Contact us to confirm coverage in your area.
          </p>
        )}
      </section>

      <CtaSection />
    </>
  );
}
