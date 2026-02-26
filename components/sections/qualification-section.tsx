import { clashDisplay } from "@/public/fonts/font";
import clsx from "clsx";

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

                <div className="box-border w-full rounded-lg border border-stone-600 sm:rounded-xl lg:rounded-2xl">
                    
                </div>
            </div>
        </section>
    );
}
