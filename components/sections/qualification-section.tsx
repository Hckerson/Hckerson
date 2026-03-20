import { workExperience } from "@/lib/data/mapped-data";
import { clashDisplay } from "@/public/fonts/font";
import clsx from "clsx";
import QulaificationCard from "../ui/cards/qualification-card";
import { Accordion } from "@radix-ui/react-accordion";

export default function QualificationSection() {
    return (
        <section className="xlarge-pady flex w-full bg-surface-secondary">
            <div className="large-pad relative mx-auto w-full max-w-7xl space-y-6">
                <div className="leading-[1.2]">
                    <p
                        className={clsx(
                            clashDisplay.className,
                            "base-text font-semibold",
                        )}
                    >
                        Qualifications
                    </p>
                    <p className="xs-text text-text-muted">
                        Why you should hire me
                    </p>
                </div>

                <div className="box-border w-full divide-y divide-border rounded-lg border border-border sm:rounded-xl lg:rounded-2xl">
                    <Accordion
                        type="single"
                        key={`${workExperience[0].company}`}
                        defaultValue={`${workExperience[0].company}`}
                    >
                        {workExperience.map((work, idx) => {
                            return (
                                <QulaificationCard
                                    key={`${work.company}-${idx}`}
                                    data={work}
                                    id={idx}
                                />
                            );
                        })}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
