import clsx from "clsx";
import SkillCard from "../ui/cards/skill-card";
import { skills } from "@/lib/data/mapped-data";
import { clashDisplay } from "@/public/fonts/font";

export default function SkillSection() {
    return (
        <section className="xlarge-pady flex w-full bg-stone-950">
            <div className="large-pad relative mx-auto w-full space-y-6 max-w-7xl">
                <div className="leading-[1.2]">
                    <p
                        className={clsx(
                            clashDisplay.className,
                            "base-text font-semibold",
                        )}
                    >
                        Skills and Technologies
                    </p>
                    <p className="xs-text text-stone-400">
                        {`Here are some of my skills. I'm always working on something new, so be sure to check back often.`}
                    </p>
                </div>

                <div className="g grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}
