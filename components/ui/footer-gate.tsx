"use client";
import { usePathname } from "next/navigation";

const hiddenOn = ["/projects", "/pricing"];

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
