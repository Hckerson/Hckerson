import "./globals.css";
import { clashDisplay } from "@/lib/fonts";
import AppLayout from "@/components/app-layout";

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
