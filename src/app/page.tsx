import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/data/site";
import { cities } from "@/data/cities";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServiceAreasSection } from "@/components/sections/ServiceAreasSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: `${site.name} | ${site.tagline}`,
    description: `Concrete driveways, patios, stamped concrete, slabs, repair, and retaining walls for ${site.address.city}, ${site.address.stateCode} and the surrounding area.`,
    canonical: "/",
  });
}

const homeFaqs = [
  {
    question: "What areas do you serve?",
    answer: `We serve ${site.address.city}, ${site.address.stateCode} and the surrounding communities including ${site.serviceAreaNames.slice(1).join(", ")}.`,
  },
  {
    question: "How do I get a quote?",
    answer: "Fill out the contact form or call us directly. We'll schedule a site visit, assess your project, and provide a clear, itemized quote before any work begins.",
  },
  {
    question: "How long does a typical concrete project take?",
    answer: "Timelines vary by project size and scope. Most residential driveways or patios take a few days from prep to finish, plus curing time before full use. We'll give you a specific timeline with your quote.",
  },
  {
    question: "Do you work year-round?",
    answer: "We work through most of the year, though concrete pours are scheduled around temperature and weather to protect the cure. We'll advise on timing during your consultation.",
  },
];

export default function HomePage() {
  const topCity = cities[0];

  return (
    <>
      <LocalBusinessSchema />
      <HeroSection
        headline={`Concrete Contractor Serving ${site.address.city}, ${site.address.stateCode}`}
        subhead={`Driveways, patios, stamped concrete, and repair work built for Middle Tennessee's clay soil and freeze-thaw swings. Straightforward quotes, no surprises.`}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="max-w-3xl text-lg leading-relaxed text-brand-gray">
          {site.name} handles everything from new driveway pours to patio repair and retaining
          walls across the {site.address.city} metro.{" "}
          {topCity && (
            <>
              We&apos;re a regular presence in{" "}
              <Link href={`/service-areas/${topCity.slug}`} className="font-semibold text-brand-orange hover:text-brand-orange-dark">
                {topCity.name}
              </Link>{" "}
              and throughout the region — see our{" "}
              <Link href="/service-areas" className="font-semibold text-brand-orange hover:text-brand-orange-dark">
                full service area
              </Link>{" "}
              or browse our{" "}
              <Link href="/services" className="font-semibold text-brand-orange hover:text-brand-orange-dark">
                services
              </Link>{" "}
              to get started.
            </>
          )}
        </p>
      </section>

      <section className="bg-brand-gray-light py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-charcoal">Our Services</h2>
          <div className="mt-8">
            <ServicesGrid />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-charcoal">Why Choose Us</h2>
          <div className="mt-8">
            <WhyChooseUs />
          </div>
        </div>
      </section>

      <section className="bg-brand-gray-light py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-charcoal">Where We Work</h2>
          <div className="mt-8">
            <ServiceAreasSection />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-charcoal">What Customers Say</h2>
          <div className="mt-8">
            <TestimonialsSection />
          </div>
        </div>
      </section>

      <section className="bg-brand-gray-light py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FaqSection faqs={homeFaqs} />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
