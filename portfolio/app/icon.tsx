import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "8px",
          background: "linear-gradient(135deg, #3E7C59 0%, #87CEEB 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          fontWeight: 700,
          fontSize: 14,
          color: "white",
          letterSpacing: "-0.5px",
        }}
      >
        EI
      </div>
    ),
    { ...size }
  );
}
