import { ogImageSize, ogImageContentType, renderOgImage } from "@/components/seo/ogImage";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderOgImage();
}
