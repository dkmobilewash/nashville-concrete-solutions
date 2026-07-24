import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/data/site";
import { getAllPosts } from "@/lib/blog";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
];

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Blog",
    description: `Concrete tips, project guidance, and local insight from ${site.name}.`,
    canonical: "/blog",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <div className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbItems} variant="dark" />
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-brand-navy md:text-5xl">Blog</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-gray">
          Practical concrete guidance for homeowners and businesses across Greater{" "}
          {site.address.city}.
        </p>

        {posts.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-col rounded-lg border border-brand-gray-mid bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="text-sm text-brand-gray">
                  {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-brand-navy">
                  {post.frontmatter.title}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-brand-gray">
                  {post.frontmatter.description}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-base text-brand-gray">
            No posts published yet — check back soon.
          </p>
        )}
      </section>
    </>
  );
}
