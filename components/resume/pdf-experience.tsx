import { Text, View } from "@react-pdf/renderer";
import type { WorkExperience } from "@/lib/interface";
import { pdfStyles } from "@/components/resume/pdf-styles";
import PdfSection from "@/components/resume/pdf-section";

export default function PdfExperience({
    experience,
}: {
    experience: WorkExperience[];
}) {
    return (
        <PdfSection title="Experience">
            {experience.map((job) => (
                <View
                    key={`${job.company}-${job.title}`}
                    style={pdfStyles.item}
                    wrap={false}
                >
                    <View style={pdfStyles.itemHeader}>
                        <Text style={pdfStyles.itemTitle}>{job.title}</Text>
                        <Text style={pdfStyles.itemPeriod}>{job.period}</Text>
                    </View>
                    <View style={pdfStyles.itemSubHeader}>
                        <Text style={pdfStyles.itemCompany}>{job.company}</Text>
                        <Text style={pdfStyles.itemLocation}>
                            {job.location}
                        </Text>
                    </View>
                    <View style={pdfStyles.bulletList}>
                        {job.responsibilities.map((line) => (
                            <View key={line} style={pdfStyles.bulletPoint}>
                                <Text style={pdfStyles.bullet}>•</Text>
                                <Text style={pdfStyles.bulletText}>{line}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            ))}
        </PdfSection>
    );
}
