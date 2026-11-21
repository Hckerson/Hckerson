import "@/styles/globals.css";
import type { ReactNode } from "react";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
    subsets: ["latin"],
    style: ["normal", "italic"],
    axes: ["opsz"],
    variable: "--font-newsreader",
    display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={newsreader.variable}>
            <body className="bg-background font-body text-base text-text antialiased">
                {children}
            </body>
        </html>
    );
}
