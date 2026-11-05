import { Text, View } from "@react-pdf/renderer";
import type { Certification } from "@/lib/interface";
import { pdfStyles } from "@/components/resume/pdf-styles";
import PdfSection from "@/components/resume/pdf-section";

export default function PdfCertifications({
    certifications,
}: {
    certifications: Certification[];
}) {
    return (
        <PdfSection title="Certifications">
            {certifications.map((cert) => (
                <View
                    key={`${cert.issuer}-${cert.name}`}
                    style={pdfStyles.certification}
                >
                    <Text style={pdfStyles.certificationName}>{cert.name}</Text>
                    <Text style={pdfStyles.certificationMeta}>
                        {cert.issuer} · {cert.year}
                    </Text>
                </View>
            ))}
        </PdfSection>
    );
}
