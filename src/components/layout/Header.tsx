"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { MobileNav } from "./MobileNav";
import { Logo } from "./Logo";

const navLinkClass =
  "text-sm font-semibold text-brand-gray-mid transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent rounded";

const dropdownLinkClass =
  "block rounded px-3 py-2 text-sm text-brand-gray-mid hover:bg-brand-navy-light hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-navy shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Logo className="h-12 sm:h-14" priority />

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          <div className="group relative">
            <button
              type="button"
              className={`flex items-center gap-1 ${navLinkClass}`}
              aria-haspopup="true"
            >
              Services
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="invisible absolute left-0 top-full w-64 rounded-md bg-brand-navy p-2 opacity-0 shadow-lg transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              {services.map((service) => (
                <Link key={service.slug} href={`/${service.slug}`} className={dropdownLinkClass}>
                  {service.name}
                </Link>
              ))}
              <Link href="/concrete-services" className={`${dropdownLinkClass} font-semibold text-brand-accent`}>
                View all services
              </Link>
            </div>
          </div>

          <div className="group relative">
            <button
              type="button"
              className={`flex items-center gap-1 ${navLinkClass}`}
              aria-haspopup="true"
            >
              Service Areas
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="invisible absolute left-0 top-full max-h-80 w-64 overflow-y-auto rounded-md bg-brand-navy p-2 opacity-0 shadow-lg transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              {cities.map((city) => (
                <Link key={city.slug} href={`/${city.slug}`} className={dropdownLinkClass}>
                  {city.name}, {site.address.stateCode}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/about" className={navLinkClass}>
            About
          </Link>
          <Link href="/blog" className={navLinkClass}>
            Blog
          </Link>
          <Link href="/contact" className={navLinkClass}>
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phoneHref}`}
            className="hidden items-center gap-2 rounded-md bg-brand-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phone}
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-white lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
