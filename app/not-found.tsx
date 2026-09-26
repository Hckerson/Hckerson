import Link from "next/link";
import Button from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-y-4 px-6 text-center">
            <p className="font-clash md-text text-text-primary font-bold">
                404
            </p>
            <h1 className="font-clash base-text text-text-primary font-semibold">
                This page doesn&apos;t exist.
            </h1>
            <p className="xs-text text-text-muted max-w-[50ch]">
                The link may be outdated, or the page may have moved.
            </p>
            <Link href="/" className="mt-2">
                <Button size="sm" className="bg-accent-cyan text-background">
                    Back home
                </Button>
            </Link>
        </div>
    );
}
