import Image from "next/image";
import { Skill } from "@/lib/interface";

export default function SkillCard({ skill }: { skill: Skill }) {
    return (
        <div className="border-border bg-surface-secondary flex items-center gap-x-3 rounded-xl border-2 p-1.5 md:rounded-2xl">
            <div className="bg-surface-tertiary flex aspect-square size-10 items-center justify-center rounded-lg bg-cover p-2 md:size-11 md:rounded-xl xl:size-13">
                <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={30}
                    height={30}
                />
            </div>
            <div className="leading-[1.2]">
                <p className="xs-text font-clash font-medium">{skill.name}</p>
                <p className="text-text-secondary text-[10px] font-medium sm:text-[12px] md:text-[11px] xl:text-[13px] 2xl:text-[14px]">
                    {skill.categories.join(" / ")}
                </p>
            </div>
        </div>
    );
}
