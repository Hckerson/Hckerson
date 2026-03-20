import { Mail } from "lucide-react";
import { Copyright } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { LuGithub } from "react-icons/lu";

export default function Footer() {
    return (
        <footer className="bg-surface-secondary w-full pb-3.5">
            <div className="border-border mx-auto w-full max-w-7xl border-t px-3 pt-2">
                <div className="flex items-center justify-between">
                    <div className="text-text-muted sm-text flex items-center gap-x-1 font-medium">
                        <Copyright className="size-4" />
                        <span>/</span>
                        {new Date().getFullYear()}
                        <span>/</span>
                        <p className="text-text-primary font-semibold">
                            Hckerson
                        </p>
                        <span>/</span>
                        <p>All rights reserved</p>
                    </div>
                    <div className="flex gap-x-4">
                        <BsTwitterX className="size-3 sm:size-4 lg:size-5" />
                        <LuGithub className="size-3 sm:size-4 lg:size-5" />
                        <Mail className="size-3 sm:size-4 lg:size-5" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
