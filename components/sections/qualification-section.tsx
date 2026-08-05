import { workExperience } from "@/lib/data/mapped-data";
import QulaificationCard from "../ui/cards/qualification-card";
import { Accordion } from "@/components/ui/accordion";

// Derive the item values once here so the accordion's `defaultValue` and the
// items' `value` props cannot drift apart — previously the section passed
// "Vouchmark" while each item registered as "Vouchmark-0", so nothing opened.
const items = workExperience.map((work, idx) => ({
    work,
    value: `${work.company}-${idx}`,
}));

export default function QualificationSection() {
    return (
        <section className="xlarge-pady bg-surface-secondary flex w-full">
            <div className="md-pad relative mx-auto w-full max-w-7xl space-y-6">
                <div className="leading-[1.2]">
                    <p className="font-clash base-text font-semibold">
                        Qualifications
                    </p>
                    <p className="xs-text text-text-muted">
                        Why you should hire me
                    </p>
                </div>

                <div className="divide-border border-border box-border w-full divide-y rounded-lg border sm:rounded-xl lg:rounded-2xl">
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue={items[0]?.value}
                    >
                        {items.map(({ work, value }, idx) => (
                            <QulaificationCard
                                key={value}
                                value={value}
                                data={work}
                                isLast={idx === items.length - 1}
                            />
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
