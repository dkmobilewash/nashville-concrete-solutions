import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { buildMetadata } from "@/lib/metadata";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { getServiceBySlug } from "@/data/services";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ArticleSchema } from "@/components/seo/ArticleSchema";

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return buildMetadata({
      title: "Post Not Found",
      description: "",
      canonical: `/blog/${params.slug}`,
      noindex: true,
    });
  }

  return buildMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    canonical: `/blog/${post.slug}`,
    image: `/blog/${post.slug}/opengraph-image`,
    type: "article",
    publishedTime: post.frontmatter.date,
    modifiedTime: post.frontmatter.updated,
    authors: [post.frontmatter.author],
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.frontmatter.title, href: `/blog/${post.slug}` },
  ];

  const relatedServices = (post.frontmatter.relatedServices ?? [])
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        datePublished={post.frontmatter.date}
        dateModified={post.frontmatter.updated}
        author={post.frontmatter.author}
        slug={post.slug}
        image={`/blog/${post.slug}/opengraph-image`}
      />

      <div className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbItems} variant="dark" />
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm text-brand-gray">
          {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          &middot; {post.frontmatter.author}
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-brand-navy md:text-5xl">
          {post.frontmatter.title}
        </h1>

        <div className="prose prose-lg mt-8 max-w-none prose-headings:font-bold prose-headings:text-brand-navy prose-a:text-brand-accent prose-a:font-semibold hover:prose-a:text-brand-accent-dark">
          <MDXRemote source={post.content} />
        </div>

        {relatedServices.length > 0 && (
          <div className="mt-12 rounded-lg border border-brand-gray-mid bg-brand-gray-light p-6">
            <h2 className="text-lg font-semibold text-brand-navy">Related Services</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {relatedServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block rounded-md border border-brand-gray-mid bg-white px-4 py-2 text-sm font-semibold text-brand-navy hover:border-brand-accent hover:text-brand-accent"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </>
  );
}
