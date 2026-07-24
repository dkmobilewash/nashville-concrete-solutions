import { ImageResponse } from "next/og";

export const contentType = "image/png";

export function generateImageMetadata() {
  return [
    { id: "192", size: { width: 192, height: 192 }, contentType },
    { id: "512", size: { width: 512, height: 512 }, contentType },
  ];
}

export default function Icon({ id }: { id: string }) {
  const size = Number(id);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1C1F24",
          borderRadius: size * 0.18,
        }}
      >
        <div
          style={{
            fontSize: size * 0.6,
            fontWeight: 800,
            color: "#EA580C",
            display: "flex",
          }}
        >
          N
        </div>
      </div>
    ),
    { width: size, height: size }
  );
}
