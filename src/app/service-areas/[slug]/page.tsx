import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { cities, getCityBySlug } from "@/data/cities";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { AreaServiceSchema } from "@/components/seo/AreaServiceSchema";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { HeroSection } from "@/components/sections/HeroSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

interface CityPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export function generateMetadata({ params }: CityPageProps): Metadata {
  const city = getCityBySlug(params.slug);
  if (!city) return buildMetadata({ title: "Service Area Not Found", description: "", canonical: `/service-areas/${params.slug}`, noindex: true });

  return buildMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    canonical: `/service-areas/${city.slug}`,
  });
}

export default function CityPage({ params }: CityPageProps) {
  const city = getCityBySlug(params.slug);
  if (!city) notFound();

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Service Areas", href: "/service-areas" },
    { name: city.name, href: `/service-areas/${city.slug}` },
  ];

  const nearbyCities = cities.filter((c) => c.slug !== city.slug).slice(0, 3);

  const cityFaqs = [
    {
      question: `Do you serve all of ${city.name}?`,
      answer: `Yes, we serve ${city.name}, ${site.address.stateCode} and the surrounding ${city.county} area. Contact us to confirm coverage for your specific address.`,
    },
    {
      question: `How do I get a concrete quote in ${city.name}?`,
      answer: `Call us or fill out our contact form with your ${city.name} address and project details, and we'll schedule a site visit to provide a clear quote.`,
    },
    {
      question: `What should I know about pouring concrete in ${city.name}?`,
      answer: site.regionalContextNotes,
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <AreaServiceSchema city={city} />
      <LocalBusinessSchema city={city} />

      <div className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbItems} variant="dark" />
        </div>
      </div>

      <HeroSection headline={city.headline} subhead={city.subhead} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="max-w-3xl text-lg leading-relaxed text-brand-gray">{city.intro}</p>

        {(city.landmarks.length > 0 || city.neighborhoods.length > 0) && (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {city.landmarks.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-gray">
                  Near
                </h2>
                <p className="mt-1 text-base text-brand-navy">{city.landmarks.join(", ")}</p>
              </div>
            )}
            {city.neighborhoods.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-gray">
                  Areas We Serve in {city.name}
                </h2>
                <p className="mt-1 text-base text-brand-navy">{city.neighborhoods.join(", ")}</p>
              </div>
            )}
          </div>
        )}

        <h2 className="mt-12 text-3xl font-bold text-brand-navy">
          Services Offered in {city.name}
        </h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/${service.slug}/${city.slug}`}
                className="inline-block rounded-md border border-brand-gray-mid px-4 py-2 text-sm font-semibold text-brand-navy hover:border-brand-accent hover:text-brand-accent"
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <FaqSection faqs={cityFaqs} />
        </div>

        {nearbyCities.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-brand-navy">Nearby Service Areas</h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {nearbyCities.map((nearby) => (
                <li key={nearby.slug}>
                  <Link
                    href={`/service-areas/${nearby.slug}`}
                    className="inline-block rounded-md border border-brand-gray-mid px-4 py-2 text-sm font-semibold text-brand-navy hover:border-brand-accent hover:text-brand-accent"
                  >
                    {nearby.name}, {site.address.stateCode}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <CtaSection />
    </>
  );
}
