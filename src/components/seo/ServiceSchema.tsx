import { site } from "@/data/site";
import type { Service } from "@/data/services";
import { JsonLdScript } from "./JsonLdScript";

interface ServiceSchemaProps {
  service: Service;
  /** Restrict areaServed to a single city (e.g. on a service×city combo page). */
  areaServedName?: string;
}

export function ServiceSchema({ service, areaServedName }: ServiceSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    serviceType: service.name,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${site.baseUrl}/#business`,
      name: site.name,
      telephone: site.phoneHref,
      url: site.baseUrl,
    },
    areaServed: areaServedName
      ? { "@type": "City", name: areaServedName }
      : site.serviceAreaNames.map((name) => ({ "@type": "City", name })),
    url: `${site.baseUrl}/services/${service.slug}`,
  };

  return <JsonLdScript data={data} />;
}
