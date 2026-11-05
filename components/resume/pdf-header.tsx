import { Fragment } from "react";
import { Link, Text, View } from "@react-pdf/renderer";
import type { ResumeData } from "@/lib/interface";
import { contactHref } from "@/lib/constant";
import { pdfStyles } from "@/components/resume/pdf-styles";

export default function PdfHeader({
    profile,
}: {
    profile: ResumeData["profile"];
}) {
    const links = [
        { label: profile.email, src: contactHref },
        { label: "Portfolio", src: profile.url },
        { label: "LinkedIn", src: profile.linkedin },
        { label: "GitHub", src: profile.github },
    ];

    return (
        <View style={pdfStyles.header}>
            <Text style={pdfStyles.name}>
                {profile.legalName} ({profile.name})
            </Text>
            <View style={pdfStyles.contactInfo}>
                <Text>{profile.location}</Text>
                {links.map(({ label, src }) => (
                    <Fragment key={src}>
                        <Text>•</Text>
                        <Link style={pdfStyles.link} src={src}>
                            {label}
                        </Link>
                    </Fragment>
                ))}
            </View>
        </View>
    );
}
