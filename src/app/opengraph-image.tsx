import { ImageResponse } from "next/og";

// Site-wide branded social share image (Open Graph + Twitter).
// Rendered at build time — replaces the generic stock photo previously
// referenced in layout metadata.

export const alt =
  "CliniqTurkey — Compare verified medical clinics in Turkey and save up to 75%";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(145deg, #0f172a 0%, #1e3a8a 55%, #312e81 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "32px",
            fontWeight: 700,
            color: "#93c5fd",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "#2563eb",
              color: "white",
              fontSize: "34px",
            }}
          >
            +
          </div>
          CliniqTurkey
        </div>

        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            lineHeight: 1.05,
            maxWidth: "900px",
          }}
        >
          Compare Verified Clinics in Turkey.
        </div>

        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#fde047",
            marginBottom: "32px",
          }}
        >
          Save Up to 75%.
        </div>

        <div style={{ display: "flex", gap: "16px", fontSize: "26px", color: "#cbd5e1" }}>
          <span>18 verified clinics</span>
          <span style={{ color: "#475569" }}>·</span>
          <span>Real Google ratings</span>
          <span style={{ color: "#475569" }}>·</span>
          <span>Direct contact, no middleman</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
