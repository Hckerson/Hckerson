import { skills } from "@/lib/data/mapped-data";
import { clashDisplay } from "@/public/fonts/font";
import { clsx } from "clsx";
import SkillCard from "../ui/cards/skill-card";

export default function ProjectSection() {
    return (
        <section className="xlarge-pady flex w-full bg-stone-950">
            <div className="relative mx-auto w-6xl max-w-6xl">
                <div>
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
                <div className="grid md:grid-cols-2 xl:grid-cols-3 xl:gap-6 md:gap-5 g">
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}
