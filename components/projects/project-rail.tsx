import { cn } from "@/lib/utils";
import { projects } from "@/lib/data/mapped-data";

/** Numbered step rail down the left edge; the current project is lit. */
export default function ProjectRail({ currentId }: { currentId: number }) {
    return (
        <div className="absolute left-1 z-30 my-auto flex h-full w-7 sm:left-4 xl:left-10">
            <div className="relative flex size-full">
                <div className="relative my-auto flex h-full max-h-[80%] w-7 flex-col items-center justify-between">
                    <div className="bg-border absolute inset-y-0 left-1/2 z-0 w-px -translate-x-1/2 opacity-50"></div>
                    {projects.map((project) => {
                        const isCurrent = project.id === currentId;
                        return (
                            <span
                                key={project.id}
                                className={cn(
                                    "z-10 flex items-center justify-center rounded-full border text-xs leading-none font-bold transition-all duration-500 ease-out",
                                    isCurrent
                                        ? "border-accent-cyan bg-accent-cyan text-background ring-accent-cyan/20 size-7 ring-4"
                                        : "border-border bg-surface-tertiary/70 text-text-muted size-5 ring-0 backdrop-blur-sm",
                                )}
                            >
                                {project.id}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
