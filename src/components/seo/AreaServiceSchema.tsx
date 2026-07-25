import { site } from "@/data/site";
import type { City } from "@/data/cities";
import { JsonLdScript } from "./JsonLdScript";

interface AreaServiceSchemaProps {
  city: City;
}

export function AreaServiceSchema({ city }: AreaServiceSchemaProps) {
  const url = `${site.baseUrl}/${city.slug}`;

  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${url}/#service`,
    name: `${site.name} — ${city.name}, ${site.address.stateCode}`,
    url,
    telephone: site.phoneHref,
    priceRange: site.priceRange,
    areaServed: {
      "@type": "City",
      name: city.name,
    },
  };

  return <JsonLdScript data={data} />;
}
