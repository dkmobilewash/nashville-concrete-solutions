import { site } from "@/data/site";
import { JsonLdScript } from "./JsonLdScript";

export interface BreadcrumbItem {
  name: string;
  /** Path relative to the site root, e.g. "/services/driveways". */
  href: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.href, site.baseUrl).toString(),
    })),
  };

  return <JsonLdScript data={data} />;
}
