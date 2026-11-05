import { Text, View } from "@react-pdf/renderer";
import type { Education } from "@/lib/interface";
import { pdfStyles } from "@/components/resume/pdf-styles";
import PdfSection from "@/components/resume/pdf-section";

export default function PdfEducation({
    education,
}: {
    education: Education[];
}) {
    return (
        <PdfSection title="Education">
            {education.map((item) => (
                <View
                    key={`${item.institution}-${item.degree}`}
                    style={pdfStyles.item}
                    wrap={false}
                >
                    <View style={pdfStyles.itemHeader}>
                        <Text style={pdfStyles.itemTitle}>{item.degree}</Text>
                        <Text style={pdfStyles.itemPeriod}>
                            {item.start} –{" "}
                            {item.inProgress
                                ? `Expected ${item.end}`
                                : item.end}
                        </Text>
                    </View>
                    <Text style={pdfStyles.itemCompany}>
                        {item.institution}
                    </Text>
                    <Text style={pdfStyles.itemNote}>{item.description}</Text>
                </View>
            ))}
        </PdfSection>
    );
}
