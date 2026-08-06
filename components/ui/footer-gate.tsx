"use client";
import { usePathname } from "next/navigation";

// Routes that render without the site footer, matched by prefix so nested
// pages (e.g. /projects/[id]) are covered too.
const hiddenOn = ["/projects", "/pricing"];

// Takes the footer as children rather than importing it, so the footer stays a
// server component and only this pathname check ships to the client.
export default function FooterGate({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isHidden = hiddenOn.some(
        (route) => pathname === route || pathname.startsWith(`${route}/`),
    );

    return isHidden ? null : <>{children}</>;
}
