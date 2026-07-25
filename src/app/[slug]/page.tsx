import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { services, getServiceBySlug, type Service } from "@/data/services";
import { cities, getCityBySlug, type City } from "@/data/cities";
import { site } from "@/data/site";
import { BreadcrumbNav, type BreadcrumbNavItem } from "@/components/ui/BreadcrumbNav";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { AreaServiceSchema } from "@/components/seo/AreaServiceSchema";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { HeroSection } from "@/components/sections/HeroSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

interface SlugPageProps {
  params: { slug: string };
}

// This single route renders either a service page (e.g. /driveways) or a
// service-area city page (e.g. /nashville) depending on which data set the
// slug matches — service and city slugs are guaranteed disjoint (see
// src/data/services.ts and src/data/cities.ts).
export function generateStaticParams() {
  return [
    ...services.map((service) => ({ slug: service.slug })),
    ...cities.map((city) => ({ slug: city.slug })),
  ];
}

export function generateMetadata({ params }: SlugPageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (service) {
    return buildMetadata({
      title: service.metaTitle,
      description: service.metaDescription,
      canonical: `/${service.slug}`,
    });
  }

  const city = getCityBySlug(params.slug);
  if (city) {
    return buildMetadata({
      title: city.metaTitle,
      description: city.metaDescription,
      canonical: `/${city.slug}`,
    });
  }

  return buildMetadata({
    title: "Page Not Found",
    description: "",
    canonical: `/${params.slug}`,
    noindex: true,
  });
}

export default function SlugPage({ params }: SlugPageProps) {
  const service = getServiceBySlug(params.slug);
  if (service) return <ServicePageView service={service} />;

  const city = getCityBySlug(params.slug);
  if (city) return <CityPageView city={city} />;

  notFound();
}

function ServicePageView({ service }: { service: Service }) {
  const breadcrumbItems: BreadcrumbNavItem[] = [
    { name: "Home", href: "/" },
    { name: "Concrete Services", href: "/concrete-services" },
    { name: service.name, href: `/${service.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema service={service} />

      <div className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbItems} variant="dark" />
        </div>
      </div>

      <HeroSection
        headline={service.headline}
        subhead={service.heroSubhead}
        image={service.image.src}
        imageAlt={service.image.alt}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          {service.overview.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-brand-gray">
              {paragraph}
            </p>
          ))}
        </div>

        <h2 className="mt-12 text-3xl font-bold text-brand-navy">What You Get</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {service.benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-lg border border-brand-gray-mid bg-white p-6">
              <h3 className="text-lg font-semibold text-brand-navy">{benefit.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-brand-gray">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-3xl font-bold text-brand-navy">Our Process</h2>
        <ol className="mt-6 space-y-6">
          {service.process.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-accent font-bold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-brand-navy">{step.title}</h3>
                <p className="mt-1 text-base leading-relaxed text-brand-gray">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        {service.gallery && service.gallery.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-brand-navy">Recent Work</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[service.image, ...service.gallery].map((photo) => (
                <div key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {cities.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-brand-navy">
              {service.name} Near You
            </h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/${service.slug}/${city.slug}`}
                    className="inline-block rounded-md border border-brand-gray-mid px-4 py-2 text-sm font-semibold text-brand-navy hover:border-brand-accent hover:text-brand-accent"
                  >
                    {service.shortName} in {city.name}, {site.address.stateCode}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-12">
          <FaqSection faqs={service.faqs} />
        </div>
      </section>

      <CtaSection />
    </>
  );
}

function CityPageView({ city }: { city: City }) {
  const breadcrumbItems: BreadcrumbNavItem[] = [
    { name: "Home", href: "/" },
    { name: city.name, href: `/${city.slug}` },
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
      answer: city.localConsiderations,
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
                    href={`/${nearby.slug}`}
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
