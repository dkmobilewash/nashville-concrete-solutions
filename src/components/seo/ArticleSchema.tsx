import { site } from "@/data/site";
import { JsonLdScript } from "./JsonLdScript";

interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  slug: string;
  image?: string;
}

export function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  author,
  slug,
  image,
}: ArticleSchemaProps) {
  const url = `${site.baseUrl}/blog/${slug}`;
  const imageUrl = new URL(image ?? "/opengraph-image", site.baseUrl).toString();

  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.baseUrl,
    },
    image: imageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
  };

  return <JsonLdScript data={data} />;
}
