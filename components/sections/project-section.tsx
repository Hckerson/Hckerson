import { clsx } from "clsx";
import { clashDisplay } from "@/public/fonts/font";
import ProjectCard from "../ui/cards/project-card";
import { projects } from "@/lib/data/mapped-data";

export default function ProjectSection() {
    return (
        <section className="xlarge-pady flex w-full bg-stone-950">
            <div className="large-pad relative mx-auto w-full max-w-7xl">
                <div className="leading-[1.2]">
                    <p
                        className={clsx(
                            clashDisplay.className,
                            "base-text font-semibold",
                        )}
                    >
                        Featured Projecs
                    </p>
                    <p className="xs-text text-stone-400">
                        {`Here are some of my recent projects. I'm always working on something new, so be sure to check back often.`}
                    </p>
                </div>
                <div className="box-border grid w-full grid-cols-1 xl:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} data={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
