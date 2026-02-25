import Image from "next/image";
import { Skill } from "@/lib/interface";

export default function SkillCard({ skill }: { skill: Skill }) {
    return (
        <div className="flex gap-x-3 rounded-xl bg-stone-950 border-2 border-stone-800 p-1.5 md:rounded-2xl">
            <div className="rounded-lg bg-stone-800 p-2.5 size-14 md:rounded-xl">
                <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                />
            </div>
            <div>
                <p className="sm-text font-semibold">{skill.name}</p>
                <p className="xs-text text-stone-400">
                    {skill.categories.join(" / ")}
                </p>
            </div>
        </div>
    );
}
