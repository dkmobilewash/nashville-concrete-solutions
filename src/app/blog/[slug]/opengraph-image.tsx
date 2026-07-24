import { ogImageSize, ogImageContentType, renderOgImage } from "@/components/seo/ogImage";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { site } from "@/data/site";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default function BlogPostOpengraphImage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  return renderOgImage({
    heading: post?.frontmatter.title ?? site.name,
    subheading: site.name,
    footer: post
      ? new Date(post.frontmatter.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : site.phone,
  });
}
