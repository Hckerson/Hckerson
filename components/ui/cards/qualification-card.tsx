import { WorkExperience } from "@/lib/interface";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { PiSuitcaseLight } from "react-icons/pi";
import clsx from "clsx";
import { workExperience } from "@/lib/data/mapped-data";

export default function QulaificationCard({
    data,
    id,
}: {
    data: WorkExperience;
    id: number;
}) {
    return (
        <div
            className={clsx(
                "box-border w-full overflow-hidden",
                id !== workExperience.length - 1 && "border-b border-stone-800",
            )}
        >
            <Accordion
                type="single"
                key={`${data.company}-${id}`}
                defaultValue={`${data.company}-${id}`}
            >
                <AccordionItem value={`${data.company}-${id}`}>
                    <AccordionTrigger>
                        <div className="box-border w-full p-4 md:p-5 xl:p-6">
                            <div className="w-full flex justify-between">
                                <div className="flex items-center gap-x-4 justify-center">
                                    <div className="size-10">
                                        <div className="size-full rounded-full bg-stone-800 flex items-center justify-center">
                                            <PiSuitcaseLight size={24} />
                                        </div>
                                    </div>
                                    <div className="text-start">
                                        <p className="xs:text-[14px] text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px]  2xl:text-[20px] font-semibold">
                                            {data.title}
                                        </p>
                                        <p className="xs-text font-medium text-stone-400">
                                            {data.company}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    
                                </div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent></AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
