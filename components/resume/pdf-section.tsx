import { Children, type ReactNode } from "react";
import { Text, View } from "@react-pdf/renderer";
import { pdfStyles } from "@/components/resume/pdf-styles";

export default function PdfSection({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) {
    const [first, ...rest] = Children.toArray(children);

    return (
        <View style={pdfStyles.section}>
            {/* The title travels with the first entry, so it never ends a page alone. */}
            <View wrap={false}>
                <Text style={pdfStyles.sectionTitle}>{title}</Text>
                {first}
            </View>
            {rest}
        </View>
    );
}
