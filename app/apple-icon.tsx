import { ImageResponse } from "next/og";
import { initial } from "@/lib/constant";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#050c14",
                    color: "#22d3ee",
                    fontSize: 78,
                    fontWeight: 700,
                }}
            >
                {initial}
            </div>
        ),
        size,
    );
}
