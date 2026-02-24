import Image from "next/image";
import { Skill } from "@/lib/interface";

export default function SkillCard({ skill }: { skill: Skill }) {
    return (
        <div className="flex gap-x-3 rounded-lg bg-stone-950 border border-stone-800 p-2 md:rounded-xl">
            <div className="rounded-lg bg-stone-800 p-2 md:rounded-xl">
                <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={24}
                    height={24}
                />
            </div>
            <div>
                <p className="base-text font-semibold">{skill.name}</p>
                <p className="xs-text text-stone-400">
                    {skill.categories.join(" / ")}
                </p>
            </div>
        </div>
    );
}
