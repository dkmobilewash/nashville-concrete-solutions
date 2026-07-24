"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Phone } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { Logo } from "./Logo";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

const sectionHeadingClass = "mb-2 text-xs font-semibold uppercase tracking-wide text-brand-gray-mid";
const linkClass = "block rounded px-2 py-2 text-brand-gray-mid hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent";

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-brand-navy lg:hidden">
      <div className="flex items-center justify-between px-4 py-4">
        <Logo className="h-10" onClick={onClose} />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-white"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="Mobile" className="space-y-6 px-4 pb-10">
        <a
          href={`tel:${site.phoneHref}`}
          className="flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-brand-accent px-4 py-3 font-semibold text-white"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {site.phone}
        </a>

        <div>
          <p className={sectionHeadingClass}>Main</p>
          <div className="space-y-1">
            <Link href="/about" onClick={onClose} className={linkClass}>About</Link>
            <Link href="/blog" onClick={onClose} className={linkClass}>Blog</Link>
            <Link href="/contact" onClick={onClose} className={linkClass}>Contact</Link>
          </div>
        </div>

        <div>
          <p className={sectionHeadingClass}>Services</p>
          <div className="space-y-1">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} onClick={onClose} className={linkClass}>
                {service.name}
              </Link>
            ))}
            <Link href="/services" onClick={onClose} className={`${linkClass} font-semibold text-brand-accent`}>
              View all services
            </Link>
          </div>
        </div>

        <div>
          <p className={sectionHeadingClass}>Service Areas</p>
          <div className="space-y-1">
            {cities.map((city) => (
              <Link key={city.slug} href={`/service-areas/${city.slug}`} onClick={onClose} className={linkClass}>
                {city.name}, {site.address.stateCode}
              </Link>
            ))}
            <Link href="/service-areas" onClick={onClose} className={`${linkClass} font-semibold text-brand-accent`}>
              View all areas
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
