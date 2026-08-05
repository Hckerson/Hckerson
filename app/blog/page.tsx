import type { Metadata } from "next";

// Unlinked from the navbar until there are real posts. The `articles` array in
// lib/data/mapped-data.ts is placeholder content and is deliberately not
// rendered here — shipping sample posts as if they were real would be worse
// than an empty section.
export const metadata: Metadata = {
    title: "Blog",
    description: "Writing on web development, architecture and design.",
    robots: { index: false, follow: true },
};

export default function Blog() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-y-3 px-6 text-center">
            <h1 className="font-clash base-text text-text-primary font-semibold">
                Blog
            </h1>
            <p className="xs-text text-text-muted max-w-[50ch]">
                Nothing published yet. Posts on web development, architecture
                and design are on the way.
            </p>
        </div>
    );
}
