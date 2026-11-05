import { Document, Page, Text, View } from "@react-pdf/renderer";
import type { ResumeData } from "@/lib/interface";
import { pdfStyles } from "@/components/resume/pdf-styles";
import PdfHeader from "@/components/resume/pdf-header";
import PdfSection from "@/components/resume/pdf-section";
import PdfTagList from "@/components/resume/pdf-tag-list";
import PdfExperience from "@/components/resume/pdf-experience";
import PdfEducation from "@/components/resume/pdf-education";
import PdfProjects from "@/components/resume/pdf-projects";
import PdfAwards from "@/components/resume/pdf-awards";
import PdfCertifications from "@/components/resume/pdf-certifications";

/**
 * The resume document. Rendered only on the server, by `app/resume.pdf`,
 * so `@react-pdf/renderer` never ships to the browser.
 */
export default function ResumePdf({ data }: { data: ResumeData }) {
    return (
        <Document
            title={`${data.profile.legalName} resume`}
            author={data.profile.legalName}
        >
            <Page size="A4" style={pdfStyles.page}>
                <PdfHeader profile={data.profile} />
                <PdfSection title="Professional Summary">
                    <Text style={pdfStyles.summary}>{data.summary}</Text>
                </PdfSection>
                <PdfExperience experience={data.experience} />
                <PdfEducation education={data.education} />
                <PdfSection title="Skills">
                    <PdfTagList items={data.skills} />
                </PdfSection>
                {data.projects.length > 0 && (
                    <PdfProjects projects={data.projects} />
                )}
                {data.awards.length > 0 && <PdfAwards awards={data.awards} />}
                <View style={pdfStyles.twoColumn}>
                    <View style={pdfStyles.column}>
                        <PdfSection title="Languages">
                            <PdfTagList items={data.languages} />
                        </PdfSection>
                    </View>
                    <View style={pdfStyles.column}>
                        <PdfSection title="Interests">
                            <PdfTagList items={data.interests} />
                        </PdfSection>
                    </View>
                </View>
                {data.certifications.length > 0 && (
                    <PdfCertifications certifications={data.certifications} />
                )}
            </Page>
        </Document>
    );
}
