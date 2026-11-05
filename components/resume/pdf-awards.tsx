import { Text, View } from "@react-pdf/renderer";
import type { Award } from "@/lib/interface";
import { pdfStyles } from "@/components/resume/pdf-styles";
import PdfSection from "@/components/resume/pdf-section";

export default function PdfAwards({ awards }: { awards: Award[] }) {
    return (
        <PdfSection title="Awards & Achievements">
            {awards.map((award) => (
                <View key={award.name} style={pdfStyles.award} wrap={false}>
                    <View style={pdfStyles.itemHeader}>
                        <Text style={pdfStyles.itemTitle}>{award.name}</Text>
                        <Text style={pdfStyles.itemPeriod}>{award.year}</Text>
                    </View>
                    {award.description && (
                        <Text style={pdfStyles.itemNote}>
                            {award.description}
                        </Text>
                    )}
                </View>
            ))}
        </PdfSection>
    );
}
