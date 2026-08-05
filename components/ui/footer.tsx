import { Copyright, Mail } from "lucide-react";
import { GithubIcon, XIcon } from "./brand-icons";
import { contactHref, siteConfig } from "@/lib/constant";

// These were bare, unlabelled SVGs — visually social links, but not focusable,
// not clickable and invisible to assistive tech.
const socials = [
    { label: "X (Twitter)", href: siteConfig.twitter, Icon: XIcon },
    { label: "GitHub", href: siteConfig.github, Icon: GithubIcon },
    { label: "Email", href: contactHref, Icon: Mail },
];

export default function Footer() {
    return (
        <footer className="bg-surface-secondary w-full pb-3.5">
            <div className="border-border mx-auto w-full max-w-7xl border-t px-3 pt-2">
                <div className="flex items-center justify-between">
                    <div className="text-text-muted sm-text flex items-center gap-x-1 font-medium">
                        <Copyright className="size-4" aria-hidden="true" />
                        <span>/</span>
                        {new Date().getFullYear()}
                        <span>/</span>
                        <span className="text-text-primary font-semibold">
                            {siteConfig.name}
                        </span>
                        <span>/</span>
                        <span>All rights reserved</span>
                    </div>
                    <ul className="flex gap-x-4">
                        {socials.map(({ label, href, Icon }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    aria-label={label}
                                    target={
                                        href.startsWith("http")
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        href.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className="text-text-muted hover:text-text-primary block transition-colors"
                                >
                                    <Icon
                                        className="size-3 sm:size-4 lg:size-5"
                                        aria-hidden="true"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
