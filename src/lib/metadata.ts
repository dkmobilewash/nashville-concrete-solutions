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
}: BuildMetadataArgs): Metadata {
  const canonicalUrl = toAbsoluteUrl(canonical);
  const imageUrl = toAbsoluteUrl(image ?? "/opengraph-image");

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
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
