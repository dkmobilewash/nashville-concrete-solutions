import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

/** Shared generator for app/opengraph-image.tsx and app/twitter-image.tsx. */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#1C1F24",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            width: "96px",
            height: "10px",
            backgroundColor: "#EA580C",
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
            maxWidth: "900px",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#D1D5DB",
            marginTop: "24px",
            display: "flex",
            maxWidth: "900px",
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#EA580C",
            marginTop: "48px",
            fontWeight: 700,
            display: "flex",
          }}
        >
          {site.phone}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
