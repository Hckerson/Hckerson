"use client";
import useTheme from "@/hooks/useTheme";
import Navbar from "./ui/navbar";
import clsx from "clsx";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <body className="relative h-screen w-full antialiased">
            <Navbar />
            <main className="">{children}</main>
        </body>
    );
}
