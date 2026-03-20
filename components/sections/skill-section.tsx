import clsx from "clsx";
import SkillCard from "../ui/cards/skill-card";
import { skills } from "@/lib/data/mapped-data";
import { clashDisplay } from "@/public/fonts/font";

export default function SkillSection() {
    return (
        <section className="bg-surface-secondary flex w-full">
            <div className="md-pad relative mx-auto w-full max-w-7xl space-y-6">
                <div className="leading-[1.2]">
                    <p
                        className={clsx(
                            clashDisplay.className,
                            "base-text font-semibold",
                        )}
                    >
                        Skills and Technologies
                    </p>
                    <p className="xs-text text-text-muted">
                        {`Here are some of my skills. I'm always working on something new, so be sure to check back often.`}
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}
