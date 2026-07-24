import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">404 Error</p>
      <h1 className="mt-4 text-4xl font-extrabold text-brand-charcoal md:text-5xl">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-brand-gray">
        The page you&apos;re looking for may have moved or no longer exists. Head back home, call
        us directly, or check out one of our popular services below.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/">Back to Home</Button>
        <Button href={`tel:${site.phoneHref}`} variant="secondary">
          <Phone className="h-4 w-4" aria-hidden="true" />
          {site.phone}
        </Button>
      </div>
      <div className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-gray">
          Popular Services
        </h2>
        <ul className="mt-4 flex flex-wrap justify-center gap-4">
          {services.slice(0, 4).map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="font-semibold text-brand-orange hover:text-brand-orange-dark"
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
