import { Download } from "lucide-react";
import Button from "@/components/ui/button";
import { resumeFileName, routes } from "@/lib/constant";

export default function ResumeSection() {
    return (
        <section
            id="resume"
            className="large-pady bg-surface-primary flex w-full"
        >
            <div className="md-pad relative mx-auto flex w-full max-w-7xl flex-wrap items-end justify-between gap-6">
                <div className="leading-[1.2]">
                    <h2 className="font-clash base-text font-semibold">
                        Resume
                    </h2>
                    <p className="xs-text text-text-muted">
                        The projects, experience and education above, as a PDF.
                    </p>
                </div>
                <Button
                    href={routes.resume}
                    download={resumeFileName}
                    size="lg"
                    className="bg-accent-cyan text-background"
                >
                    <span className="flex items-center gap-x-2">
                        <Download className="size-4" aria-hidden="true" />
                        Download PDF
                    </span>
                </Button>
            </div>
        </section>
    );
}
