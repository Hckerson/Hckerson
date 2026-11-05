import { Text, View } from "@react-pdf/renderer";
import { pdfStyles } from "@/components/resume/pdf-styles";

export default function PdfTagList({ items }: { items: string[] }) {
    return (
        <View style={pdfStyles.tagList}>
            {items.map((item) => (
                <View key={item} style={pdfStyles.tag}>
                    <Text>{item}</Text>
                </View>
            ))}
        </View>
    );
}
