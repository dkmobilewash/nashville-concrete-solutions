import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/data/site";
import { cities } from "@/data/cities";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { HeroSection } from "@/components/sections/HeroSection";
import { CtaSection } from "@/components/sections/CtaSection";

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const values = [
  { title: "Honest scoping", desc: "We tell you what a project actually needs, not what's easiest to sell." },
  { title: "Local knowledge", desc: "We build for Middle Tennessee's soil and weather, not a generic national spec." },
  { title: "Clear communication", desc: "You'll know the timeline, scope, and price before work starts." },
  { title: "Work that lasts", desc: "Proper base prep and drainage planning on every job, not just the visible finish." },
];

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "About Us",
    description: `Learn about ${site.name}, a concrete contractor serving Greater ${site.address.city}, ${site.address.stateCode}.`,
    canonical: "/about",
  });
}

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <div className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbItems} variant="dark" />
        </div>
      </div>

      <HeroSection
        headline={`About ${site.name}`}
        subhead={`Serving homeowners and businesses across Greater ${site.address.city}, ${site.address.stateCode}.`}
        image="/nashville-concrete-solutions/nashville-concrete-contractor-backyard-patio.png"
        imageAlt="Nashville Concrete Solutions crew pouring a large backyard concrete slab"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-lg leading-relaxed text-brand-gray">
            {site.name} is a concrete contractor serving homeowners and businesses across Greater{" "}
            {site.address.city}, {site.address.stateCode}
            {site.foundedYear ? `, at work in the area since ${site.foundedYear}` : ""}. We
            handle everything from driveways and patios to slabs, retaining walls, and repair
            work.
          </p>
          <p className="text-lg leading-relaxed text-brand-gray">{site.regionalContextNotes}</p>
        </div>

        <h2 className="mt-12 text-3xl font-bold text-brand-navy">What We Value</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="rounded-lg border border-brand-gray-mid bg-white p-6">
              <h3 className="text-lg font-semibold text-brand-navy">{value.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-brand-gray">{value.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-3xl font-bold text-brand-navy">Where We Work</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-brand-gray">
          We serve {site.address.city} and the surrounding communities, {site.address.stateCode}.
          Select your city below for local details, or{" "}
          <Link href="/contact" className="font-semibold text-brand-accent hover:text-brand-accent-dark">
            contact us
          </Link>{" "}
          to confirm coverage at your address.
        </p>
        <ul className="mt-4 flex flex-wrap gap-3">
          {cities.map((city) => (
            <li key={city.slug}>
              <Link
                href={`/${city.slug}`}
                className="inline-block rounded-md border border-brand-gray-mid px-4 py-2 text-sm font-semibold text-brand-navy hover:border-brand-accent hover:text-brand-accent"
              >
                {city.name}, {site.address.stateCode}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaSection />
    </>
  );
}
