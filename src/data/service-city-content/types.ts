// Shape for bespoke service×city overrides. LOCAL-SEO: every per-service file
// in this directory ships EMPTY for now — the [serviceSlug]/[citySlug] combo
// page falls back to templated defaults (built from services.ts + cities.ts)
// whenever a given (service, city) pair has no entry here. Populate individual
// city keys later to hand-write unique copy for specific money pages.

export interface ServiceCityOverride {
  intro?: string;
  benefits?: { title: string; desc: string }[];
  faqs?: { question: string; answer: string }[];
}

/** Keyed by city slug (see src/data/cities.ts). */
export type ServiceCityContentMap = Record<string, ServiceCityOverride>;
