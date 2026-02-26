import { clashDisplay } from "@/public/fonts/font";
import clsx from "clsx";

export default function QualificationSection() {
    return (
        <section className="xlarge-pady flex w-full bg-stone-950">
            <div className="large-pad relative mx-auto w-full max-w-6xl">
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

                <div className="g grid md:grid-cols-2 md:gap-5 xl:grid-cols-3"></div>
            </div>
        </section>
    );
}
