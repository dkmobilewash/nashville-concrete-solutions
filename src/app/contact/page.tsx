import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/data/site";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { formatHoursRule } from "@/lib/hours";
import { ContactForm } from "./ContactForm";

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Contact Us",
    description: `Get a free concrete quote from ${site.name}, serving Greater ${site.address.city}, ${site.address.stateCode}. Call ${site.phone} or send us a message.`,
    canonical: "/contact",
  });
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <LocalBusinessSchema />

      <div className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbItems} variant="dark" />
        </div>
      </div>

      <section className="bg-brand-navy pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-gray-mid">
            Tell us about your project and we&apos;ll follow up with a clear, straightforward
            quote.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-brand-gray-mid bg-white p-6">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-brand-accent" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-brand-navy">Phone</p>
                  <a href={`tel:${site.phoneHref}`} className="text-brand-gray hover:text-brand-accent">
                    {site.phone}
                  </a>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-brand-accent" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-brand-navy">Email</p>
                  <a href={`mailto:${site.email}`} className="text-brand-gray hover:text-brand-accent">
                    {site.email}
                  </a>
                </div>
              </div>
              {site.hours && (
                <div className="mt-4 flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 text-brand-accent" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-brand-navy">Hours</p>
                    {site.hours.map((rule) => (
                      <p key={rule.days.join()} className="text-brand-gray">
                        {formatHoursRule(rule)}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-4 flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-brand-accent" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-brand-navy">Service Area</p>
                  <p className="text-brand-gray">{site.serviceAreaNames.join(", ")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
