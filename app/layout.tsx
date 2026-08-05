import "./globals.css";
import type { Metadata, Viewport } from "next";
import { clashDisplay } from "@/lib/fonts";
import { siteConfig } from "@/lib/constant";
import AppLayout from "@/components/app-layout";

// The site previously exported no metadata at all: no title, description,
// canonical, OpenGraph or Twitter card anywhere.
export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.title,
        // Route titles render as e.g. "Pricing — Hckerson".
        template: `%s — ${siteConfig.name}`,
    },
    description: siteConfig.description,
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        siteName: siteConfig.name,
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "#050c14" },
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={clashDisplay.variable}
            suppressHydrationWarning
        >
            <head>
                {/*
                 * Runs before paint so the correct theme class is on <html>
                 * ahead of first render, avoiding a flash of the wrong theme.
                 * localStorage access is wrapped because it throws outright in
                 * Safari private mode — unguarded, that aborted the whole
                 * script and left the page with no theme class at all.
                 */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    var saved = null;
                                    try { saved = localStorage.getItem('theme'); } catch (e) {}
                                    var system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                                    document.documentElement.classList.add(saved === 'light' || saved === 'dark' ? saved : system);
                                } catch (e) {
                                    document.documentElement.classList.add('dark');
                                }
                            })()
                        `,
                    }}
                />
            </head>
            <AppLayout>
                <>{children}</>
            </AppLayout>
        </html>
    );
}
