import { StyleSheet } from "@react-pdf/renderer";

// The PDF cannot read the site's CSS tokens, so its print palette lives here.
// Two react-pdf 4.9 quirks, both measured:
// - Relative line heights are inflated (1.4 and "140%" render a 25pt gap on
//   10pt text), so 1.4 × 10pt is written "14pt".
// - A block whose trailing margin does not fit is pushed to the next page even
//   when the block itself fits, so sections are spaced with marginTop.
export const pdfStyles = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 10,
        fontFamily: "Helvetica",
        color: "#333",
    },
    header: {
        // With the first section's marginTop, leaves 20pt under the header.
        marginBottom: 8,
        borderBottom: 2,
        borderBottomColor: "#111",
        paddingBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#000",
    },
    contactInfo: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        fontSize: 9,
        color: "#666",
    },
    link: {
        color: "#0066cc",
        textDecoration: "none",
    },
    section: {
        marginTop: 12,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: "bold",
        textTransform: "uppercase",
        borderBottom: 1,
        borderBottomColor: "#eee",
        marginBottom: 8,
        paddingBottom: 2,
        color: "#000",
    },
    summary: {
        lineHeight: "15pt",
    },
    item: {
        marginBottom: 8,
    },
    itemHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 2,
    },
    itemTitle: {
        fontSize: 11,
        fontWeight: "bold",
        color: "#111",
    },
    itemPeriod: {
        fontSize: 9,
        color: "#666",
        fontStyle: "italic",
    },
    itemSubHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4,
    },
    itemCompany: {
        fontSize: 10,
        color: "#444",
    },
    itemLocation: {
        fontSize: 9,
        color: "#777",
    },
    itemNote: {
        marginTop: 2,
        fontSize: 9,
        color: "#555",
    },
    itemDescription: {
        marginBottom: 4,
        lineHeight: "14pt",
    },
    bulletList: {
        marginLeft: 10,
    },
    bulletPoint: {
        flexDirection: "row",
        marginBottom: 2,
    },
    bullet: {
        width: 10,
    },
    bulletText: {
        flex: 1,
        lineHeight: "14pt",
    },
    tagList: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 5,
    },
    tag: {
        backgroundColor: "#f0f0f0",
        padding: "3 6",
        borderRadius: 3,
        fontSize: 9,
    },
    award: {
        marginBottom: 5,
    },
    certification: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 3,
    },
    certificationName: {
        fontWeight: "bold",
    },
    certificationMeta: {
        fontSize: 9,
        color: "#666",
    },
    twoColumn: {
        flexDirection: "row",
        gap: 20,
    },
    column: {
        flex: 1,
    },
});
