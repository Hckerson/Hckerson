import "swiper/css";
import "@/public/styles/globals.css";
import AppLayout from "@/components/app-layout";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                const savedTheme = localStorage.getItem('theme');
                                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                                const theme = savedTheme || systemTheme;
                                document.documentElement.classList.add(theme);
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
