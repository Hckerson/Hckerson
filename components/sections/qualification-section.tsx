import { workExperience } from "@/lib/data/mapped-data";
import { clashDisplay } from "@/public/fonts/font";
import clsx from "clsx";
import QulaificationCard from "../ui/cards/qualification-card";

export default function QualificationSection() {
    return (
        <section className="xlarge-pady flex w-full bg-stone-950">
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
                    <p className="xs-text text-stone-400">
                        Why you should hire me
                    </p>
                </div>

                <div className="box-border w-full rounded-lg border divide-y divide-stone-600 border-stone-800 sm:rounded-xl lg:rounded-2xl">
                    {workExperience.map((work, idx) => {
                        return (
                            <QulaificationCard
                                key={`${work.company}-${idx}`}
                                data={work}
                                id={idx}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
