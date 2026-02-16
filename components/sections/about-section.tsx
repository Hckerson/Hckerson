import { initial } from "@/lib/constant";

export default function AboutSection() {
    return (
        <section className="flex h-screen w-full items-center justify-center bg-stone-900 opacity-90    ">
            <div className="flex items-center gap-x-10 md:gap-x-20 xl:gap-x-30">
                <div className="flex size-75 xl:rounded-3xl md:rounded-2xl rounded-xl items-center justify-center bg-[repeating-linear-gradient(135deg,#292524,#1c1917)]">
                    <p className="font-bold text-stone-500 md-text">{initial}</p>
                </div>
                <div></div>
            </div>
        </section>
    );
}
