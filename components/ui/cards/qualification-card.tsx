import { WorkExperience } from "@/lib/interface";
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import clsx from "clsx";
import { PiSuitcaseLight } from "react-icons/pi";
import { workExperience } from "@/lib/data/mapped-data";

export default function QulaificationCard({
    data,
    id,
}: {
    data: WorkExperience;
    id: number;
}) {
    return (
        <AccordionItem
            value={`${data.company}-${id}`}
            className={clsx(
                "box-border w-full overflow-hidden",
                id !== workExperience.length - 1 && "border-border border-b",
            )}
        >
            <AccordionTrigger>
                <div className="box-border w-full p-2.5 md:p-4 xl:p-5">
                    <div className="flex w-full justify-between">
                        <div className="flex items-center justify-center gap-x-2.5 md:gap-x-4">
                            <div className="size-4 md:size-8 xl:size-10">
                                <div className="bg-surface-tertiary flex size-full items-center justify-center rounded-full">
                                    <PiSuitcaseLight size={24} />
                                </div>
                            </div>
                            <div className="-space-y-1 text-start">
                                <p className="xs:text-[14px] text-[12px] font-semibold sm:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[20px]">
                                    {data.title}
                                </p>
                                <p className="xs-text text-text-muted font-medium">
                                    {data.company}
                                </p>
                            </div>
                        </div>
                        <div className="text-text-muted flex flex-col text-end">
                            <p className="xs-text">{data.location}</p>
                            <p className="text-[12px]">{data.period}</p>
                        </div>
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <div className="box-border w-full p-3 pt-0 md:p-4 md:pt-0 xl:p-5 xl:pt-0">
                    <div className="flex">
                        <div className="flex-1 space-x-1">
                            <p className={clsx("xs-text font-semibold")}>
                                Description
                            </p>
                            <p className="xs-text text-text-muted my-2 font-medium">
                                {data.description}
                            </p>
                        </div>
                        <div className="flex-1">
                            <p className={clsx("xs-text font-semibold")}>
                                Skills and Technologies
                            </p>
                            <ul className="my-2 flex flex-wrap gap-1.5">
                                {data.skills.map((skill, idx) => {
                                    return (
                                        <li
                                            key={`${skill}-${idx}`}
                                            className="xs-text border-border bg-surface-tertiary text-text-primary flex items-center justify-center rounded-full border px-2 py-1 font-medium"
                                        >
                                            <p>{skill}</p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className={clsx("xs-text font-semibold")}>
                            Key Achievements
                        </p>
                        <ul className="my-2">
                            {data.achievements.map((achievement, idx) => {
                                return (
                                    <li
                                        key={`${achievement}-${idx}`}
                                        className="flex gap-x-2"
                                    >
                                        <span className="xs-text bg-surface-tertiary text-text-muted flex size-4 items-center justify-center rounded-full font-medium">
                                            <p className="text-[10px]">
                                                {idx + 1}
                                            </p>
                                        </span>
                                        <p className="xs-text text-text-muted font-medium">
                                            {achievement}
                                        </p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    );
}
