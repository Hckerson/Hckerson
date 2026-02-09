import localFont from "next/font/local";

const clashDisplay = localFont({
    src: [
        {
            path: "./clash-display-font/ClashDisplay-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./clash-display-font/ClashDisplay-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./clash-display-font/ClashDisplay-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./clash-display-font/ClashDisplay-Semibold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./clash-display-font/ClashDisplay-Bold.otf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-clash-display",
    fallback: ["system-ui", "sans-serif"],
});

export { clashDisplay };
