import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";

const linkClass = "text-brand-gray-mid hover:text-white transition-colors";

export function Footer() {
  const year = new Date().getFullYear();
  const trustDetails = [
    site.license && `License: ${site.license}`,
    site.insurance && `Insured: ${site.insurance}`,
    site.warranty && `Warranty: ${site.warranty}`,
    site.financingPartner && `Financing: ${site.financingPartner}`,
  ].filter(Boolean) as string[];

  return (
    <footer className="bg-brand-charcoal text-brand-gray-mid">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="text-lg font-bold text-white">{site.name}</h2>
          <p className="mt-2 text-sm">{site.tagline}</p>
          {site.hours && <p className="mt-4 text-sm">Hours: {site.hours}</p>}
          <p className="mt-2 text-sm">
            <a href={`tel:${site.phoneHref}`} className={linkClass}>{site.phone}</a>
          </p>
          <p className="mt-1 text-sm">
            <a href={`mailto:${site.email}`} className={linkClass}>{site.email}</a>
          </p>
          {trustDetails.length > 0 && (
            <ul className="mt-4 space-y-1 text-xs">
              {trustDetails.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className={linkClass}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Service Areas</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {cities.map((city) => (
              <li key={city.slug}>
                <Link href={`/service-areas/${city.slug}`} className={linkClass}>
                  {city.name}, {site.address.stateCode}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/contact" className={linkClass}>Get a free quote</Link></li>
            <li><Link href="/about" className={linkClass}>About us</Link></li>
            <li><Link href="/blog" className={linkClass}>Blog</Link></li>
            <li><Link href="/service-areas" className={linkClass}>All service areas</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-charcoal-light">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs sm:px-6 lg:px-8">
          © {year} {site.name}. Serving {site.address.city}, {site.address.stateCode} and the
          surrounding area.
        </div>
      </div>
    </footer>
  );
}
