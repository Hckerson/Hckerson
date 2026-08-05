import type { Metadata } from "next";

// app/projects/page.tsx is a client component (Swiper + local state), and
// client components cannot export metadata — hence this layout.
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
