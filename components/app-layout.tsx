"use client";
import useTheme from "@/hooks/useTheme";
import Navbar from "./ui/navbar";
import clsx from "clsx";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const { currentTheme } = useTheme();
    return (
        <body className={clsx("relative h-screen w-full antialiased", currentTheme)}>
            <Navbar />
            <main className="">{children}</main>
        </body>
    );
}
