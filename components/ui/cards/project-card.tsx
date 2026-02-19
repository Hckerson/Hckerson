import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/interface";
import { FolderClosed } from "lucide-react";
import { ProjectStatus, Color } from "@/lib/types";
import { CircleUserRound, UsersRound, Flag } from "lucide-react";
import clsx from "clsx";

const projectDefinitions: Record<ProjectStatus, { bg: Color; label: string }> =
    {
        active: { bg: "green", label: "Active" },
        planned: { bg: "ash", label: "Planned" },
        backlog: { bg: "orange", label: "Backlog" },
        completed: { bg: "blue", label: "Completed" },
    };

export default function ProjectCard({ data }: { data: Project }) {
    const { status, name, description, category, level, type, date } = data;
    const props = projectDefinitions[status];
    return (
        <div className="flex h-100 overflow-hidden rounded-xl border border-stone-500 p-5 md:rounded-2xl xl:rounded-3xl xl:p-6">
            <div className="flex flex-1">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span>
                            <FolderClosed />
                        </span>
                        <span className={clsx()}>{props.label}</span>
                    </div>
                    <p>{data.description}</p>
                    <div>
                        <p>{data.name}</p>
                    </div>
                    {type == "personal" ? <CircleUserRound /> : <UsersRound />}{" "}
                    <div className="flex w-full items-center justify-center">
                        <div className="flex items-center justify-center">
                            <span></span>
                            <p></p>
                        </div>
                        <div className="flex items-center justify-center">
                            <span></span>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="h-full w-full flex-1">
                    <Image src={""} alt="" className="aspect-9/16" />
                </div>
                <div className="w-full justify-between"></div>
            </div>
        </div>
    );
}
