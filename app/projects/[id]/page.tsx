import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import { projects } from "@/lib/data/mapped-data";

type Params = { id: string };

function getProject(id: string) {
    return projects.find((project) => String(project.id) === id);
}

// Renders every project at build time; the route was previously dynamic (f)
// even though it only ever reads from a static array.
export function generateStaticParams(): Params[] {
    return projects.map((project) => ({ id: String(project.id) }));
}

// The valid ids are exactly the ones above. Without this, Next renders unknown
// ids on demand and caches the notFound() result as HTTP 200 — /projects/999
// served the 404 page with a success status.
export const dynamicParams = false;

export async function generateMetadata({
    params,
}: {
    params: Promise<Params>;
}): Promise<Metadata> {
    const { id } = await params;
    const project = getProject(id);

    if (!project) return { title: "Project not found" };

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [{ url: project.landscape ?? project.image }],
        },
    };
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<Params>;
}) {
    const { id } = await params;
    const project = getProject(id);

    if (!project) notFound();

    return (
        <article className="mx-auto w-full max-w-5xl px-6 pt-28 pb-20 md:px-10 xl:pt-32">
            <Link
                href="/projects"
                className="xs-text text-text-muted hover:text-text-primary mb-8 inline-flex items-center gap-x-2 transition-colors"
            >
                <ArrowLeft className="size-4" />
                All projects
            </Link>

            <header className="space-y-3">
                <h1 className="font-clash md-text text-text-primary font-bold">
                    {project.title}
                </h1>
                <p className="xs-text text-text-muted max-w-[70ch]">
                    {project.description}
                </p>
                <ul className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                        <li
                            key={tag}
                            className="xs-text border-border bg-surface-tertiary text-text-secondary rounded-full border px-2 py-1 font-medium"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
            </header>

            <div className="border-border relative mt-8 aspect-video w-full overflow-hidden rounded-xl border md:rounded-2xl">
                <Image
                    src={project.landscape ?? project.image}
                    alt={`${project.title} cover`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 1024px"
                    className="object-cover"
                />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="xs-text bg-accent-cyan text-background inline-flex items-center gap-x-2 rounded-lg px-4 py-2.5 font-medium"
                    >
                        <ExternalLink className="size-4" />
                        Visit site
                    </a>
                )}
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="xs-text border-border text-text-primary hover:bg-surface-tertiary inline-flex items-center gap-x-2 rounded-lg border px-4 py-2.5 font-medium transition-colors"
                    >
                        <GithubIcon className="size-4" />
                        Source
                    </a>
                )}
            </div>

            <section className="mt-10 space-y-2">
                <h2 className="font-clash base-text text-text-primary font-semibold">
                    What I learned
                </h2>
                <p className="xs-text text-text-muted max-w-[70ch]">
                    {project.learnings}
                </p>
            </section>
        </article>
    );
}
