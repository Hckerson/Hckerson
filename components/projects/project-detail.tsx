import Link from "next/link";
import Button from "@/components/ui/button";
import type { PortfolioProject } from "@/lib/interface";
import { contactHref, routes } from "@/lib/constant";

/** Title and description of the current project, with the mobile calls to action. */
export default function ProjectDetail({
    project,
}: {
    project: PortfolioProject;
}) {
    return (
        <div className="relative flex size-full flex-col items-center justify-center pr-2 md:pl-0">
            <span className="absolute">
                <div className="overflow-hidden">
                    <p className="xxlarge-text font-clash font-semibold tracking-tighter">
                        {project.title}
                    </p>
                </div>
                <div className="sm-text overflow-hidden backdrop-blur-[2px] md:backdrop-blur-none">
                    <p>{project.description}</p>
                </div>
                <div className="mt-6 block md:hidden">
                    <span className="sm-text flex space-x-3">
                        <Link
                            href={routes.project(project.id)}
                            className="size-fit"
                        >
                            <Button
                                size="sm"
                                className="bg-accent-cyan text-background"
                            >
                                View Project
                            </Button>
                        </Link>
                        <a href={contactHref} className="size-fit">
                            <Button
                                size="sm"
                                className="text-text-primary border-border border bg-transparent"
                            >
                                {`Let's Talk`}
                            </Button>
                        </a>
                    </span>
                </div>
            </span>
        </div>
    );
}
