"use client";
import { usePathname } from "next/navigation";
import { footerHiddenRoutes } from "@/lib/constant";

export default function FooterGate({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isHidden = footerHiddenRoutes.some(
        (route) => pathname === route || pathname.startsWith(`${route}/`),
    );

    return isHidden ? null : <>{children}</>;
}
