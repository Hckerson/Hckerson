import { clashDisplay } from "@/public/fonts/font";
import clsx from "clsx";

export default function SkillSection() {
    return (
        <section className="xlarge-pady flex w-full bg-stone-950">
            <div className="relative mx-auto w-6xl">
                <div>
                    <p
                        className={clsx(
                            clashDisplay.className,
                            "base-text font-semibold",
                        )}
                    >
                        Skills and Technologies
                    </p>
                    <p className="xs-text text-stone-400">
                        {`Here are some of my skills. I'm always working on something new, so be sure to check back often.`}
                    </p>
                </div>
                <div className="grid w-full md:grid-cols-2 xl:grid-cols-3">
                    
                </div>
            </div>
        </section>
    );
}
