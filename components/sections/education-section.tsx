import { certifications, education } from "@/lib/data/mapped-data";
import { Award, GraduationCap } from "lucide-react";

export default function EducationSection() {
    return (
        <section className="xlarge-pady bg-surface-primary flex w-full">
            <div className="md-pad relative mx-auto w-full max-w-7xl space-y-6">
                <div className="leading-[1.2]">
                    <h2 className="font-clash base-text font-semibold">
                        Education
                    </h2>
                    <p className="xs-text text-text-muted">
                        Where the fundamentals came from.
                    </p>
                </div>

                <ul className="space-y-4">
                    {education.map((item) => (
                        <li
                            key={`${item.institution}-${item.degree}`}
                            className="border-border bg-surface-secondary box-border w-full rounded-lg border p-4 sm:rounded-xl md:p-5 lg:rounded-2xl"
                        >
                            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                                <div className="flex items-center gap-x-3">
                                    <span className="bg-surface-tertiary flex size-8 shrink-0 items-center justify-center rounded-full md:size-10">
                                        <GraduationCap
                                            className="size-5"
                                            aria-hidden="true"
                                        />
                                    </span>
                                    <div className="-space-y-1">
                                        <p className="text-text-primary text-[14px] font-semibold sm:text-[16px] md:text-[18px]">
                                            {item.degree}
                                        </p>
                                        <p className="xs-text text-text-muted font-medium">
                                            {item.institution}
                                        </p>
                                    </div>
                                </div>
                                <p className="xs-text text-text-muted">
                                    {item.start} —{" "}
                                    {item.inProgress
                                        ? `Expected ${item.end}`
                                        : item.end}
                                </p>
                            </div>

                            <p className="xs-text text-text-muted mt-3 font-medium">
                                {item.description}
                            </p>

                            {item.coursework && item.coursework.length > 0 && (
                                <ul className="mt-3 flex flex-wrap gap-1.5">
                                    {item.coursework.map((course) => (
                                        <li
                                            key={course}
                                            className="xs-text border-border bg-surface-tertiary text-text-primary rounded-full border px-2 py-1 font-medium"
                                        >
                                            {course}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                {certifications.length > 0 && (
                    <div className="space-y-3 pt-2">
                        <h3 className="font-clash text-text-primary text-[16px] font-semibold md:text-[18px]">
                            Certifications
                        </h3>
                        <ul className="grid gap-3 sm:grid-cols-2">
                            {certifications.map((cert) => (
                                <li
                                    key={`${cert.issuer}-${cert.name}`}
                                    className="border-border bg-surface-secondary flex items-center gap-x-3 rounded-lg border p-3 md:p-4"
                                >
                                    <span className="bg-surface-tertiary flex size-8 shrink-0 items-center justify-center rounded-full">
                                        <Award
                                            className="size-4"
                                            aria-hidden="true"
                                        />
                                    </span>
                                    <div className="-space-y-0.5">
                                        <p className="xs-text text-text-primary font-semibold">
                                            {cert.name}
                                        </p>
                                        <p className="xs-text text-text-muted font-medium">
                                            {cert.issuer} · {cert.year}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}
