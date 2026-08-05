"use client";

import { useEffect } from "react";
import Button from "@/components/ui/button";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-y-4 px-6 text-center">
            <h1 className="font-clash base-text text-text-primary font-semibold">
                Something went wrong.
            </h1>
            <p className="xs-text text-text-muted max-w-[50ch]">
                An unexpected error occurred while rendering this page.
            </p>
            <Button
                size="sm"
                onClick={reset}
                className="bg-accent-cyan text-background mt-2"
            >
                Try again
            </Button>
        </div>
    );
}
