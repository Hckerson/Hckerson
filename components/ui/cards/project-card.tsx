import Image from "next/image";
import Link from "next/link";

export default function ProjectCard() {
    return (
        <div className="flex overflow-hidden rounded-xl md:rounded-2xl xl:rounded-3xl">
            <div className="flex h-100 flex-1 items-center justify-center">
                <div className="space-y-4">
                    <div>
                        <p></p>
                    </div>
                    <div>
                        <p></p>
                    </div>
                    <div>
                        <ul className="flex w-full gap-x-2">
                            <li></li>
                        </ul>
                    </div>
                    <Link href={"/projects"}>
                        <p></p>
                    </Link>
                    <Link href={"/projects"}>
                        <p></p>
                    </Link>
                </div>
            </div>
            <div className="h-full w-full flex-1">
                <Image src={""} alt="" className="aspect-9/16" />
            </div>
        </div>
    );
}
