import { Mail } from "lucide-react";
import { Copyright } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { LuGithub } from "react-icons/lu";

export default function Footer() {
    return (
        <footer className="mb-3.5 w-full">
            <div className="mx-auto w-full max-w-7xl border border-t border-stone-800">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-1 font-medium text-stone-400">
                        <Copyright className="size-4" />
                        <span>/</span>
                        {new Date().getFullYear()}
                        <span>/</span>
                        <p className="font-semibold text-white">Hckerson</p>
                        <span>/</span>
                        <p>All rights reserved</p>
                    </div>
                    <div className="flex gap-x-4">
                        <BsTwitterX className="size-5" />
                        <LuGithub className="size-5" />
                        <Mail className="size-5" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
