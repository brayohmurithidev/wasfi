import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Wakil Fleet: vehicle tracking and SOS for fleets in Kenya";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const mark = await readFile(join(process.cwd(), "public/brand/wakil-mark-white.svg"), "utf8");
  const markSrc = `data:image/svg+xml;base64,${Buffer.from(mark).toString("base64")}`;
  const fonts = join(process.cwd(), "node_modules/@fontsource/montserrat/files");
  const [regular, bold] = await Promise.all([
    readFile(join(fonts, "montserrat-latin-400-normal.woff")),
    readFile(join(fonts, "montserrat-latin-700-normal.woff")),
  ]);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0c",
          color: "#fafafa",
          fontFamily: "Montserrat",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={markSrc} width={64} height={70} alt="" />
          <div style={{ fontSize: 36, fontWeight: 700 }}>Wakil Fleet</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 960 }}>
            Know where every vehicle is. Reach your driver when it matters.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#b9b8b2" }}>
            Live tracking · Driver management · SOS · Kenya
          </div>
        </div>
        <div style={{ display: "flex", height: 10, width: 160, background: "#fbd63d", borderRadius: 5 }} />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Montserrat", data: regular, weight: 400, style: "normal" },
        { name: "Montserrat", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
