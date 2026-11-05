import { Link, Text, View } from "@react-pdf/renderer";
import type { PortfolioProject } from "@/lib/interface";
import { pdfStyles } from "@/components/resume/pdf-styles";
import PdfSection from "@/components/resume/pdf-section";
import PdfTagList from "@/components/resume/pdf-tag-list";

export default function PdfProjects({
    projects,
}: {
    projects: PortfolioProject[];
}) {
    return (
        <PdfSection title="Projects">
            {projects.map((project) => (
                <View key={project.id} style={pdfStyles.item} wrap={false}>
                    <View style={pdfStyles.itemHeader}>
                        <Text style={pdfStyles.itemTitle}>{project.title}</Text>
                        <Link style={pdfStyles.link} src={project.liveUrl}>
                            Live
                        </Link>
                    </View>
                    <Text style={pdfStyles.itemDescription}>
                        {project.description}
                    </Text>
                    <PdfTagList items={project.tags} />
                </View>
            ))}
        </PdfSection>
    );
}
