import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { services, getServiceBySlug } from "@/data/services";
import { cities, getCityBySlug } from "@/data/cities";
import { site } from "@/data/site";
import { getServiceCityOverride } from "@/data/service-city-content";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { HeroSection } from "@/components/sections/HeroSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

interface ComboPageProps {
  params: { serviceSlug: string; citySlug: string };
}

export function generateStaticParams() {
  return services.flatMap((service) =>
    cities.map((city) => ({ serviceSlug: service.slug, citySlug: city.slug }))
  );
}

export function generateMetadata({ params }: ComboPageProps): Metadata {
  const service = getServiceBySlug(params.serviceSlug);
  const city = getCityBySlug(params.citySlug);
  if (!service || !city) {
    return buildMetadata({
      title: "Page Not Found",
      description: "",
      canonical: `/${params.serviceSlug}/${params.citySlug}`,
      noindex: true,
    });
  }

  return buildMetadata({
    title: `${service.name} in ${city.name}, ${site.address.stateCode}`,
    description: `${service.name} in ${city.name}, ${site.address.stateCode}. ${service.metaDescription}`,
    canonical: `/${service.slug}/${city.slug}`,
  });
}

export default function ServiceCityPage({ params }: ComboPageProps) {
  const service = getServiceBySlug(params.serviceSlug);
  const city = getCityBySlug(params.citySlug);
  if (!service || !city) notFound();

  const override = getServiceCityOverride(service.slug, city.slug);

  const intro =
    override.intro ??
    `${service.overview[0]} In ${city.name}, ${site.address.stateCode}, that means accounting for ${city.county} conditions${city.landmarks.length ? ` — from lots near ${city.landmarks[0]} to newer builds farther out` : ""}. ${city.intro}`;

  // When no bespoke override exists, swap the last shared service benefit
  // for one genuinely derived from this (service, city) pair — otherwise
  // every city page for a given service would render byte-identical
  // "Benefits" cards with only the H1/intro differing.
  const localizedBenefit = {
    title: `Built for ${city.name}'s ${city.county}`,
    desc: `We've done ${service.shortName.toLowerCase()} work throughout ${city.name} and know how ${city.county} soil and grading conditions affect the job${
      city.landmarks.length
        ? `, whether the lot is near ${city.landmarks[0]} or farther out in newer development`
        : ""
    }.`,
  };
  const benefits = override.benefits ?? [...service.benefits.slice(0, 3), localizedBenefit];
  const faqs =
    override.faqs && override.faqs.length > 0
      ? override.faqs
      : [
          ...service.faqs,
          {
            question: `Do you serve ${city.name} directly?`,
            answer: `Yes — ${service.shortName.toLowerCase()} in ${city.name} is one of our regular service areas within ${city.county}.`,
          },
        ];

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: service.name, href: `/services/${service.slug}` },
    { name: `${city.name}, ${site.address.stateCode}`, href: `/${service.slug}/${city.slug}` },
  ];

  const siblingCities = cities.filter((c) => c.slug !== city.slug).slice(0, 4);
  const siblingServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema service={service} areaServedName={city.name} />

      <div className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbItems} variant="dark" />
        </div>
      </div>

      <HeroSection
        headline={`${service.name} in ${city.name}, ${site.address.stateCode}`}
        subhead={service.heroSubhead}
        image={service.image.src}
        imageAlt={service.image.alt}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="max-w-3xl text-lg leading-relaxed text-brand-gray">{intro}</p>

        <h2 className="mt-12 text-3xl font-bold text-brand-navy">
          {service.name} Benefits in {city.name}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {benefits.map((benefit) => (
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

        <div className="mt-12">
          <FaqSection faqs={faqs} title={`${service.name} FAQs for ${city.name}`} />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {siblingCities.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-brand-navy">
                {service.name} in Other Cities
              </h2>
              <ul className="mt-4 space-y-2">
                {siblingCities.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/${service.slug}/${c.slug}`} className="font-semibold text-brand-accent hover:text-brand-accent-dark">
                      {service.name} in {c.name}, {site.address.stateCode}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {siblingServices.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-brand-navy">
                Other Services in {city.name}
              </h2>
              <ul className="mt-4 space-y-2">
                {siblingServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/${s.slug}/${city.slug}`} className="font-semibold text-brand-accent hover:text-brand-accent-dark">
                      {s.name} in {city.name}, {site.address.stateCode}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
