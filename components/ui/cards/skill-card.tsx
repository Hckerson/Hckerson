import Image from "next/image";
import { Skill } from "@/lib/interface";
import clsx from "clsx";
import { clashDisplay } from "@/public/fonts/font";

export default function SkillCard({ skill }: { skill: Skill }) {
    return (
        <div className="flex items-center gap-x-3 rounded-xl border-2 border-stone-800 bg-stone-950 p-1.5 md:rounded-2xl">
            <div className="flex aspect-square size-13 items-center justify-center rounded-lg bg-stone-800 bg-cover p-2 md:rounded-xl">
                <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={30}
                    height={30}
                />
            </div>
            <div className="leading-[1.2]">
                <p
                    className={clsx(
                        "xs-text font-medium",
                        clashDisplay.className,
                    )}
                >
                    {skill.name}
                </p>
                <p className="text-[10px] font-medium text-stone-300 sm:text-[12px] md:text-[11px] xl:text-[13px] 2xl:text-[14px]">
                    {skill.categories.join(" / ")}
                </p>
            </div>
        </div>
    );
}
