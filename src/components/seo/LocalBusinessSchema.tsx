import { site } from "@/data/site";
import { services } from "@/data/services";
import { cities, type City } from "@/data/cities";
import { JsonLdScript } from "./JsonLdScript";

interface LocalBusinessSchemaProps {
  /** Localizes addressLocality to a specific service-area city (e.g. on a city page). */
  city?: City;
}

export function LocalBusinessSchema({ city }: LocalBusinessSchemaProps) {
  const locality = city?.name ?? site.address.city;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.baseUrl}/#business`,
    name: site.name,
    telephone: site.phoneHref,
    email: site.email,
    url: site.baseUrl,
    priceRange: site.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street ?? undefined,
      addressLocality: locality,
      addressRegion: site.address.stateCode,
      postalCode: site.address.zip ?? undefined,
      addressCountry: "US",
    },
    areaServed: cities.length
      ? cities.map((c) => ({ "@type": "City", name: c.name }))
      : site.serviceAreaNames.map((name) => ({ "@type": "City", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Concrete Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.metaDescription,
        },
      })),
    },
  };

  if (site.geo) {
    data.geo = {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    };
  }

  if (site.hours) {
    data.openingHoursSpecification = site.hours.map((rule) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: rule.days,
      opens: rule.opens,
      closes: rule.closes,
    }));
  }

  if (site.foundedYear) {
    data.foundingDate = `${site.foundedYear}`;
  }

  if (site.aggregateRating) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: site.aggregateRating.ratingValue,
      reviewCount: site.aggregateRating.reviewCount,
    };
  }

  return <JsonLdScript data={data} />;
}
