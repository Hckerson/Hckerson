"use client";

import { Icon } from "@iconify-icon/react";

export default function Test() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex size-10 items-center justify-center bg-black">
                <Icon
                    icon="solar:hamburger-menu-broken"
                    width="24"
                    height="24"
                    className="my-auto flex text-white"
                />
            </div>
        </div>
    );
}
