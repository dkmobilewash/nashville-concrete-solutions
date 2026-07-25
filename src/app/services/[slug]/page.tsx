import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { services, getServiceBySlug } from "@/data/services";
import { cities } from "@/data/cities";
import { site } from "@/data/site";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { HeroSection } from "@/components/sections/HeroSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

interface ServicePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return buildMetadata({ title: "Service Not Found", description: "", canonical: `/services/${params.slug}`, noindex: true });

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: `/services/${service.slug}`,
  });
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.name, href: `/services/${service.slug}` },
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
