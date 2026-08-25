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
    authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
    creator: siteConfig.legalName,
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

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    jobTitle: siteConfig.role,
    email: siteConfig.email,
    url: siteConfig.url,
    address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
    },
    affiliation: {
        "@type": "CollegeOrUniversity",
        name: siteConfig.university,
    },
    knowsAbout: [
        "Full-Stack Development",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "PostgreSQL",
    ],
    sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.twitter],
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personSchema),
                    }}
                />
            </head>
            <AppLayout>
                <>{children}</>
            </AppLayout>
        </html>
    );
}
