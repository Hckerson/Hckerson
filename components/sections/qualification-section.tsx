import { clashDisplay } from "@/public/fonts/font";
import clsx from "clsx";

export default function QualificationSection() {
    return (
        <section className="xlarge-pady flex w-full bg-stone-950">
            <div className="large-pad relative mx-auto w-full max-w-7xl">
                <div>
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

                <div className="w-full box-border border lg:rounded-2xl sm:rounded-xl border-stone-600 rounded-lg">

                </div>
            </div>
        </section>
    );
}
