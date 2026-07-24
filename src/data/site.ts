// Business Profile — single source of truth (SECTION 0 of the build spec).
// Fields left blank in the source brief are typed nullable and rendered
// conditionally throughout the site. Do NOT fabricate values here.

import type { HoursRule } from "@/lib/hours";

export interface SiteAddress {
  street: string | null;
  city: string;
  state: string;
  stateCode: string;
  zip: string | null;
}

export interface SiteGeo {
  latitude: number;
  longitude: number;
}

export interface AggregateRating {
  ratingValue: number;
  reviewCount: number;
}

export interface SiteSocials {
  facebook: string | null;
  instagram: string | null;
  google: string | null;
}

export interface Site {
  name: string;
  legalName: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  email: string;
  baseUrl: string;
  address: SiteAddress;
  /** NEEDS INPUT: exact coordinates not supplied — leave null until confirmed. */
  geo: SiteGeo | null;
  hours: HoursRule[] | null;
  foundedYear: number | null;
  /** NEEDS INPUT: license number not supplied — never fabricate. */
  license: string | null;
  /** NEEDS INPUT: insurance carrier/policy info not supplied. */
  insurance: string | null;
  /** NEEDS INPUT: warranty terms not supplied. */
  warranty: string | null;
  /** NEEDS INPUT: financing partner not supplied. */
  financingPartner: string | null;
  socials: SiteSocials;
  /** NEEDS INPUT: leave null until a real aggregate rating exists — never fabricate. */
  aggregateRating: AggregateRating | null;
  primaryKeywords: string[];
  serviceAreaNames: string[];
  regionalContextNotes: string;
  priceRange: string;
}

export const site: Site = {
  name: "Nashville Concrete Solutions",
  legalName: "Nashville Concrete Solutions",
  tagline: "Trusted Concrete Contractor Serving Greater Nashville, TN",
  phone: "615-436-8688",
  phoneHref: "+16154368688",
  email: "info@nashvilleconcretesolutions.com",
  baseUrl: "https://nashvilleconcretesolutions.com",
  address: {
    street: null,
    city: "Nashville",
    state: "Tennessee",
    stateCode: "TN",
    zip: null,
  },
  geo: null,
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { days: ["Saturday", "Sunday"], opens: "09:00", closes: "14:00" },
  ],
  foundedYear: 2013,
  license: null,
  insurance: null,
  warranty: null,
  financingPartner: null,
  socials: {
    facebook: null,
    instagram: null,
    google: null,
  },
  aggregateRating: null,
  primaryKeywords: [
    "concrete contractor Nashville TN",
    "concrete driveway installation Nashville",
    "stamped concrete patio Nashville",
    "concrete repair Middle Tennessee",
  ],
  serviceAreaNames: [
    "Nashville",
    "Mount Juliet",
    "Franklin",
    "Murfreesboro",
    "Hendersonville",
    "Gallatin",
    "Brentwood",
    "Smyrna",
    "Spring Hill",
  ],
  regionalContextNotes:
    "Middle Tennessee's mix of clay-heavy soil and seasonal freeze-thaw swings means proper base prep, control joints, and drainage planning matter more here than in milder climates.",
  priceRange: "$$",
};
