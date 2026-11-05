import { ImageResponse } from "next/og";
import { initial, siteConfig } from "@/lib/constant";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const background = "#050c14";
const accent = "#22d3ee";
const textPrimary = "#ffffff";
const textMuted = "#a8a29e";
const border = "rgba(255, 255, 255, 0.1)";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background,
                    padding: 80,
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 72,
                            height: 72,
                            borderRadius: 18,
                            border: `1px solid ${border}`,
                            color: accent,
                            fontSize: 32,
                            fontWeight: 700,
                        }}
                    >
                        {initial}
                    </div>
                    <div
                        style={{
                            color: textMuted,
                            fontSize: 28,
                            fontWeight: 500,
                        }}
                    >
                        {siteConfig.name}
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 24,
                    }}
                >
                    <div
                        style={{
                            color: textPrimary,
                            fontSize: 76,
                            fontWeight: 700,
                            lineHeight: 1.1,
                            letterSpacing: -2,
                        }}
                    >
                        Creative Software Engineer.
                    </div>
                    <div
                        style={{
                            color: textMuted,
                            fontSize: 30,
                            lineHeight: 1.4,
                            maxWidth: 900,
                        }}
                    >
                        {siteConfig.description}
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        color: accent,
                        fontSize: 26,
                        fontWeight: 500,
                    }}
                >
                    <div style={{ width: 56, height: 3, background: accent }} />
                    {siteConfig.url.replace(/^https?:\/\//, "")}
                </div>
            </div>
        ),
        size,
    );
}
