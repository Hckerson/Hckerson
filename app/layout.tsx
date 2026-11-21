import "@/styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_CONFIG.url),
    title: { default: SITE_CONFIG.title, template: `%s · ${SITE_CONFIG.name}` },
    description: SITE_CONFIG.description,
    authors: [{ name: SITE_CONFIG.legalName, url: SITE_CONFIG.url }],
    openGraph: {
        type: "website",
        siteName: SITE_CONFIG.name,
        title: SITE_CONFIG.title,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
    },
    twitter: { card: "summary_large_image", creator: SITE_CONFIG.twitterHandle },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
