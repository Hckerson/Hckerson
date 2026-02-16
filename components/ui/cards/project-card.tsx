import Image from "next/image";

export default function ProjectCard() {
    return (
        <div className="flex overflow-hidden rounded-xl md:rounded-2xl xl:rounded-3xl">
            <div className="flex-1 h-100 flex items-center justify-center">

            </div>
            <div className="h-full w-full flex-1">
                <Image src={""} alt="" className="aspect-9/16"/>
            </div>
        </div>
    );
}
