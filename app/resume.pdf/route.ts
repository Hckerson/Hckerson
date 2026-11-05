import { renderToBuffer } from "@react-pdf/renderer";
import ResumePdf from "@/components/resume/resume-pdf";
import { resumeData } from "@/lib/data/mapped-data";
import { resumeFileName } from "@/lib/constant";

// Rendered once at build time; the PDF changes only when the content does.
export const dynamic = "force-static";

export async function GET() {
    // Called as a function so renderToBuffer receives the <Document> element
    // it is typed for, rather than a wrapper element that needs a cast.
    const pdf = await renderToBuffer(ResumePdf({ data: resumeData }));

    return new Response(new Uint8Array(pdf), {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `inline; filename="${resumeFileName}"`,
        },
    });
}
