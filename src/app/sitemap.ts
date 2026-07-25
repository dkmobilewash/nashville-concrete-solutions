import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, site.baseUrl).toString();

  const entries: MetadataRoute.Sitemap = [
    { url: url("/"), priority: 1.0 },
    { url: url("/concrete-services"), priority: 0.9 },
    { url: url("/about"), priority: 0.9 },
    { url: url("/contact"), priority: 0.9 },
  ];

  for (const service of services) {
    entries.push({ url: url(`/${service.slug}`), priority: 0.8 });
  }

  for (const city of cities) {
    entries.push({ url: url(`/${city.slug}`), priority: 0.7 });
  }

  for (const service of services) {
    for (const city of cities) {
      entries.push({
        url: url(`/${service.slug}/${city.slug}`),
        priority: 0.6,
      });
    }
  }

  entries.push({ url: url("/blog"), priority: 0.6 });
  for (const post of getAllPosts()) {
    entries.push({ url: url(`/blog/${post.slug}`), priority: 0.6 });
  }

  entries.push({ url: url("/privacy"), priority: 0.3 });
  entries.push({ url: url("/terms"), priority: 0.3 });

  return entries;
}
