import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
} from "@react-pdf/renderer";

// Register fonts if needed, but we'll use defaults for now for simplicity and compatibility
// Standard PDF fonts: Helvetica, Times-Roman, Courier

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#333",
  },
  header: {
    marginBottom: 20,
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
    marginBottom: 15,
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
  experienceItem: {
    marginBottom: 10,
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
    lineHeight: 1.4,
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  skillTag: {
    backgroundColor: "#f0f0f0",
    padding: "3 6",
    borderRadius: 3,
    fontSize: 9,
  },
  educationItem: {
    marginBottom: 8,
  },
  certificationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
});

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

export const ResumePDF = ({ data }: { data: ResumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{data.personalInfo.name}</Text>
        <View style={styles.contactInfo}>
          <Text>{data.personalInfo.location}</Text>
          <Text>•</Text>
          <Text>{data.personalInfo.phone}</Text>
          <Text>•</Text>
          <Link style={styles.link} src={`mailto:${data.personalInfo.email}`}>
            {data.personalInfo.email}
          </Link>
          <Text>•</Text>
          <Link
            style={styles.link}
            src={data.personalInfo.socialMedia.portfolio}
          >
            Portfolio
          </Link>
          <Text>•</Text>
          <Link
            style={styles.link}
            src={data.personalInfo.socialMedia.linkedin}
          >
            LinkedIn
          </Link>
          <Text>•</Text>
          <Link style={styles.link} src={data.personalInfo.socialMedia.github}>
            GitHub
          </Link>
        </View>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {data.experience.map((job, index) => (
          <View key={index} style={styles.experienceItem}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{job.title}</Text>
              <Text style={styles.itemPeriod}>{job.period}</Text>
            </View>
            <View style={styles.itemSubHeader}>
              <Text style={styles.itemCompany}>{job.company}</Text>
              <Text style={styles.itemLocation}>{job.location}</Text>
            </View>
            <View style={styles.bulletList}>
              {job.responsibilities.map((resp, i) => (
                <View key={i} style={styles.bulletPoint}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{resp}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {data.education.map((edu, index) => (
          <View key={index} style={styles.educationItem}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{edu.degree}</Text>
              <Text style={styles.itemPeriod}>{edu.year}</Text>
            </View>
            <Text style={styles.itemCompany}>{edu.institution}</Text>
            {edu.description && (
              <Text style={{ marginTop: 2, color: "#555", fontSize: 9 }}>
                {edu.description}
              </Text>
            )}
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsGrid}>
          {data.skills.map((skill, index) => (
            <View key={index} style={styles.skillTag}>
              <Text>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Certifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        {data.certifications.map((cert, index) => (
          <View key={index} style={styles.certificationItem}>
            <Text style={{ fontWeight: "bold" }}>{cert.name}</Text>
            <Text style={{ fontSize: 9, color: "#666" }}>
              {cert.issuer} | {cert.year}
            </Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);
