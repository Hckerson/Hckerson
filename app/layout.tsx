import "./globals.css";
import type { Metadata, Viewport } from "next";
import { clashDisplay } from "@/lib/fonts";
import { siteConfig } from "@/lib/constant";
import AppLayout from "@/components/app-layout";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.title,
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
