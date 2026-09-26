import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Selected full-stack and frontend work, with the stack and outcomes behind each build.",
    alternates: { canonical: "/projects" },
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
