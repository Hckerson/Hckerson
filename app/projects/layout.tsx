import type { Metadata } from "next";
import { routes } from "@/lib/constant";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Selected full-stack and frontend work, with the stack and outcomes behind each build.",
    alternates: { canonical: routes.projects },
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
