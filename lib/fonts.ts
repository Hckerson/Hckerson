import localFont from "next/font/local";

const clashDisplay = localFont({
    src: [
        {
            path: "../public/fonts/clash-display-font/ClashDisplay-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/fonts/clash-display-font/ClashDisplay-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/clash-display-font/ClashDisplay-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/clash-display-font/ClashDisplay-Semibold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../public/fonts/clash-display-font/ClashDisplay-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-clash-display",
    fallback: ["system-ui", "sans-serif"],
});

export { clashDisplay };
