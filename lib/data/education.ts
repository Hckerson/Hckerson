import type { Certification, Education } from "@/lib/types";

const education: Education[] = [
    {
        degree: "B.Sc. Computer Science",
        institution: "Obafemi Awolowo University",
        start: "2023",
        end: "2028",
        inProgress: true,
        description:
            "Coursework spanning algorithms, data structures, database systems and software engineering, alongside self-directed work in full-stack web development.",
        coursework: [
            "Data Structures & Algorithms",
            "Database Systems",
            "Operating Systems",
            "Software Engineering",
            "Computer Networks",
        ],
    },
];

const certifications: Certification[] = [
    {
        name: "W3Schools JavaScript Certification",
        issuer: "W3Schools",
        year: "2024",
    },
    {
        name: "W3Schools React Certification",
        issuer: "W3Schools",
        year: "2024",
    },
];

export { education, certifications };
