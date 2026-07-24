import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

export interface RenderOgImageArgs {
  /** Large headline. Defaults to the business name (site-wide OG image). */
  heading?: string;
  /** Secondary line under the headline. Defaults to the tagline. */
  subheading?: string;
  /** Small line at the bottom. Defaults to the phone number. */
  footer?: string;
}

/** Shared generator for app/opengraph-image.tsx, app/twitter-image.tsx, and per-post blog OG images. */
export function renderOgImage({
  heading = site.name,
  subheading = site.tagline,
  footer = site.phone,
}: RenderOgImageArgs = {}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#012451",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            width: "96px",
            height: "10px",
            backgroundColor: "#2268C3",
            marginBottom: "40px",
            display: "flex",
          }}
        />
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.1,
            display: "flex",
            maxWidth: "1000px",
          }}
        >
          {heading}
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#C3C9D1",
            marginTop: "24px",
            display: "flex",
            maxWidth: "1000px",
          }}
        >
          {subheading}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#FFFFFF",
            marginTop: "48px",
            fontWeight: 700,
            display: "flex",
          }}
        >
          {footer}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
