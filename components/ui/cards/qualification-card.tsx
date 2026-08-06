import { WorkExperience } from "@/lib/interface";
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import clsx from "clsx";
import { Briefcase } from "lucide-react";

export default function QualificationCard({
    data,
    value,
    isLast,
}: {
    data: WorkExperience;
    value: string;
    isLast: boolean;
}) {
    return (
        <AccordionItem
            value={value}
            className={clsx(
                "box-border w-full overflow-hidden",
                !isLast && "border-border border-b",
            )}
        >
            {/* AccordionTrigger renders a <button>, which may only contain
                phrasing content — these were <div>/<p> before. */}
            <AccordionTrigger>
                <span className="box-border block w-full p-2.5 md:p-4 xl:p-5">
                    <span className="flex w-full justify-between">
                        <span className="flex items-center justify-center gap-x-2.5 md:gap-x-4">
                            <span className="block size-4 md:size-8 xl:size-10">
                                <span className="bg-surface-tertiary flex size-full items-center justify-center rounded-full">
                                    <Briefcase
                                        className="size-6"
                                        aria-hidden="true"
                                    />
                                </span>
                            </span>
                            <span className="block -space-y-1 text-start">
                                <span className="xs:text-[14px] block text-[12px] font-semibold sm:text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[20px]">
                                    {data.title}
                                </span>
                                <span className="xs-text text-text-muted block font-medium">
                                    {data.company}
                                </span>
                            </span>
                        </span>
                        <span className="text-text-muted flex flex-col text-end">
                            <span className="xs-text">{data.location}</span>
                            <span className="text-[12px]">{data.period}</span>
                        </span>
                    </span>
                </span>
            </AccordionTrigger>
            <AccordionContent>
                <div className="box-border w-full p-3 pt-0 md:p-4 md:pt-0 xl:p-5 xl:pt-0">
                    <div className="flex">
                        <div className="flex-1 space-x-1">
                            <p className="xs-text font-semibold">Description</p>
                            <p className="xs-text text-text-muted my-2 font-medium">
                                {data.description}
                            </p>
                        </div>
                        <div className="flex-1">
                            <p className="xs-text font-semibold">
                                Skills and Technologies
                            </p>
                            <ul className="my-2 flex flex-wrap gap-1.5">
                                {data.skills.map((skill, idx) => {
                                    return (
                                        <li
                                            key={`${skill}-${idx}`}
                                            className="xs-text border-border bg-surface-tertiary text-text-primary flex items-center justify-center rounded-full border px-2 py-1 font-medium"
                                        >
                                            {skill}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="xs-text font-semibold">
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
                                            <span className="text-[10px]"></span>
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
