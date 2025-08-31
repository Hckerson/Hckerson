import {
  Document,
  Paragraph,
  Packer,
  TextRun,
  HeadingLevel,
  AlignmentType,
  Table,
  TableRow,
  TableCell,
  BorderStyle,
} from "docx";
import { saveAs } from "file-saver";

interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    socialMedia: {
      github: string;
      linkedin: string;
      portfolio: string;
      twitter: string;
      email: string;
    };
  };
  experience: Array<{
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    year: string;
    description: string;
  }>;
  skills: string[];
  certifications: Array<{
    name: string;
    issuer: string;
    year: string;
  }>;
}

export async function generateResume(data: ResumeData): Promise<void> {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          // Header with personal information
          new Paragraph({
            text: data.personalInfo.name,
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: `${data.personalInfo.email} | ${data.personalInfo.phone} | ${data.personalInfo.location}`,
                size: 24,
              }),
            ],
          }),
          new Paragraph({ text: "" }),

          // Experience Section
          new Paragraph({
            text: "Professional Experience",
            heading: HeadingLevel.HEADING_2,
            thematicBreak: true,
          }),
          ...data.experience
            .map((job) => [
              new Paragraph({
                children: [
                  new TextRun({ text: job.title, bold: true }),
                  new TextRun({ text: " for " }),
                  new TextRun({ text: job.company, bold: true }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${job.location} | ${job.period}`,
                    italics: true,
                  }),
                ],
              }),
              ...job.responsibilities.map(
                (resp) =>
                  new Paragraph({
                    bullet: { level: 0 },
                    text: resp,
                  })
              ),
              new Paragraph({ text: "" }),
            ])
            .flat(),

          // Education Section
          new Paragraph({
            text: "Education",
            heading: HeadingLevel.HEADING_2,
            thematicBreak: true,
          }),
          ...data.education
            .map((edu) => [
              new Paragraph({
                children: [
                  new TextRun({ text: edu.degree, bold: true }),
                  new TextRun({ text: " - " }),
                  new TextRun({ text: edu.institution }),
                ],
              }),
              new Paragraph({
                children: [new TextRun({ text: edu.year, italics: true })],
              }),
              new Paragraph({ text: edu.description }),
              new Paragraph({ text: "" }),
            ])
            .flat(),

          // Skills Section
          new Paragraph({
            text: "Technical Skills",
            heading: HeadingLevel.HEADING_2,
            thematicBreak: true,
          }),
          new Paragraph({
            text: data.skills.join(" • "),
          }),
          new Paragraph({ text: "" }),

          // Certifications Section
          new Paragraph({
            text: "Certifications",
            heading: HeadingLevel.HEADING_2,
            thematicBreak: true,
          }),
          ...data.certifications.map(
            (cert) =>
              new Paragraph({
                children: [
                  new TextRun({ text: cert.name, bold: true }),
                  new TextRun({ text: ` - ${cert.issuer} (${cert.year})` }),
                ],
              })
          ),

          new Paragraph({ text: "" }),
          
          new Paragraph({
            text: "Social Media & Links",
            heading: HeadingLevel.HEADING_2,
            thematicBreak: true,
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "GitHub: ", bold: true }),
              new TextRun({
                text: data.personalInfo.socialMedia.github,
                color: "0000FF",
                underline: { type: "single" },
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "LinkedIn: ", bold: true }),
              new TextRun({
                text: data.personalInfo.socialMedia.linkedin,
                color: "0000FF",
                underline: { type: "single" },
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Email: ", bold: true }),
              new TextRun({
                text: data.personalInfo.socialMedia.email,
                color: "0000FF",
                underline: { type: "single" },
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Portfolio: ", bold: true }),
              new TextRun({
                text: data.personalInfo.socialMedia.portfolio,
                color: "0000FF",
                underline: { type: "single" },
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Twitter: ", bold: true }),
              new TextRun({
                text: data.personalInfo.socialMedia.twitter,
                color: "0000FF",
                underline: { type: "single" },
              }),
            ],
          }),
        ],
      },
    ],
  });

  // Generate blob and trigger download
  const buffer = await Packer.toBuffer(doc);
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  });
  saveAs(blob, "resume.docx");
}
