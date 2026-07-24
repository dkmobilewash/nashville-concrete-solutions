import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/data/site";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
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
      <div className="bg-brand-charcoal">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbItems} variant="dark" />
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-brand-charcoal md:text-5xl">
          About {site.name}
        </h1>
        <div className="mt-6 max-w-3xl space-y-4">
          <p className="text-lg leading-relaxed text-brand-gray">
            {site.name} is a concrete contractor serving homeowners and businesses across Greater{" "}
            {site.address.city}, {site.address.stateCode}
            {site.foundedYear ? `, at work in the area since ${site.foundedYear}` : ""}. We
            handle everything from driveways and patios to slabs, retaining walls, and repair
            work.
          </p>
          <p className="text-lg leading-relaxed text-brand-gray">{site.regionalContextNotes}</p>
        </div>

        <h2 className="mt-12 text-3xl font-bold text-brand-charcoal">What We Value</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title} className="rounded-lg border border-brand-gray-mid bg-white p-6">
              <h3 className="text-lg font-semibold text-brand-charcoal">{value.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-brand-gray">{value.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-3xl font-bold text-brand-charcoal">Where We Work</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-brand-gray">
          We serve {site.serviceAreaNames.join(", ")}, {site.address.stateCode}. See our{" "}
          <Link href="/service-areas" className="font-semibold text-brand-orange hover:text-brand-orange-dark">
            full list of service areas
          </Link>{" "}
          for details on each community, or{" "}
          <Link href="/contact" className="font-semibold text-brand-orange hover:text-brand-orange-dark">
            contact us
          </Link>{" "}
          to confirm coverage at your address.
        </p>
      </section>

      <CtaSection />
    </>
  );
}
