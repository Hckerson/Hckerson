import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { ResumePDF } from "../../components/resume-pdf";
import React from "react";

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
  summary?: string;
  projects?: Array<{
    name: string;
    description: string;
    link?: string;
    technologies?: string[];
  }>;
  languages?: string[];
  awards?: Array<{
    name: string;
    year: string;
    description?: string;
  }>;
  interests?: string[];
}

export async function generateResume(data: ResumeData): Promise<void> {
  try {
    // We cast to any here because the types of @react-pdf/renderer's pdf function
    // and React.createElement can sometimes mismatch in complex component structures
    // even when they are valid @react-pdf documents.
    const blob = await pdf(
      React.createElement(ResumePDF, { data }) as any,
    ).toBlob();
    saveAs(blob, "resume.pdf");
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error;
  }
}
