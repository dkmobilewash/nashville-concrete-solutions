import type { Metadata } from "next";
import { site } from "@/data/site";

export interface BuildMetadataArgs {
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/services/driveways", or an absolute URL. */
  canonical: string;
  /** Path relative to the site root, or an absolute URL. Defaults to the shared OG image. */
  image?: string;
  noindex?: boolean;
  /** Use "article" for blog posts so og:type/article:* metadata render correctly. */
  type?: "website" | "article";
  /** ISO 8601 date. Only used when type is "article". */
  publishedTime?: string;
  /** ISO 8601 date. Only used when type is "article". */
  modifiedTime?: string;
  /** Only used when type is "article". */
  authors?: string[];
}

function toAbsoluteUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  return new URL(pathOrUrl, site.baseUrl).toString();
}

/**
 * Every page — including the homepage — builds its Metadata through this
 * helper so canonical/og:image/twitter:image are never accidentally skipped.
 */
export function buildMetadata({
  title,
  description,
  canonical,
  image,
  noindex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
}: BuildMetadataArgs): Metadata {
  const canonicalUrl = toAbsoluteUrl(canonical);
  const imageUrl = toAbsoluteUrl(image ?? "/opengraph-image");

  const sharedOpenGraph = {
    title,
    description,
    url: canonicalUrl,
    siteName: site.name,
    locale: "en_US",
    images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
  };

  const openGraph: Metadata["openGraph"] =
    type === "article"
      ? {
          ...sharedOpenGraph,
          type: "article",
          publishedTime,
          modifiedTime,
          authors,
        }
      : {
          ...sharedOpenGraph,
          type: "website",
        };

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
