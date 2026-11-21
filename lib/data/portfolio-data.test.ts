import { describe, expect, it } from "vitest";
import { caseStudies } from "@/lib/data/case-studies";
import { education } from "@/lib/data/education";
import { profile } from "@/lib/data/profile";
import { roles } from "@/lib/data/roles";
import { skills } from "@/lib/data/skills";
import {
    caseStudySchema,
    educationSchema,
    profileSchema,
    roleSchema,
    skillSchema,
} from "@/lib/validations/portfolio";

const unique = (values: unknown[]) => new Set(values).size === values.length;

describe("portfolio data", () => {
    it("parses every record against its schema", () => {
        expect(profileSchema.safeParse(profile).success).toBe(true);
        expect(educationSchema.safeParse(education).success).toBe(true);
        roles.forEach((role) =>
            expect(roleSchema.safeParse(role).success).toBe(true),
        );
        skills.forEach((skill) =>
            expect(skillSchema.safeParse(skill).success).toBe(true),
        );
        caseStudies.forEach((study) =>
            expect(caseStudySchema.safeParse(study).success).toBe(true),
        );
    });

    it("ships at least one case study", () => {
        expect(caseStudies.length).toBeGreaterThan(0);
    });

    it("keeps slugs, role ids and order values unique", () => {
        expect(unique(caseStudies.map((study) => study.slug))).toBe(true);
        expect(unique(caseStudies.map((study) => study.order))).toBe(true);
        expect(unique(roles.map((role) => role.id))).toBe(true);
        expect(unique(skills.map((skill) => skill.name))).toBe(true);
    });

    it("resolves every skill's evidence to a case study or role (BR-03)", () => {
        const known = new Set([
            ...caseStudies.map((study) => study.slug),
            ...roles.map((role) => role.id),
        ]);
        skills.forEach((skill) =>
            skill.evidence.forEach((id) =>
                expect(known.has(id), `${skill.name} → ${id}`).toBe(true),
            ),
        );
    });

    it("never links the source of a private case study (BR-04)", () => {
        caseStudies
            .filter((study) => study.status === "private")
            .forEach((study) => expect(study.links.source).toBeUndefined());
    });

    it("keeps availability on the profile only (BR-11)", () => {
        const records = [...caseStudies, ...roles, ...skills, education];
        records.forEach((record) =>
            expect(record).not.toHaveProperty("availability"),
        );
    });
});

describe("portfolio schemas", () => {
    const [study] = caseStudies;

    it("rejects a private case study with a source link (BR-04)", () => {
        const leaked = {
            ...study,
            status: "private",
            links: {
                source: [{ label: "Repo", href: "https://github.com/x/y" }],
            },
        };
        expect(caseStudySchema.safeParse(leaked).success).toBe(false);
    });

    it("rejects kinds outside the vocabulary (BR-02)", () => {
        expect(
            caseStudySchema.safeParse({ ...study, kind: "clone" }).success,
        ).toBe(false);
    });

    it("rejects non-https links (BR-09)", () => {
        const insecure = { ...study, links: { live: "http://example.com" } };
        expect(caseStudySchema.safeParse(insecure).success).toBe(false);
    });

    it("rejects a skill without evidence (BR-03)", () => {
        expect(
            skillSchema.safeParse({
                name: "Go",
                group: "languages",
                evidence: [],
            }).success,
        ).toBe(false);
    });

    it("rejects a profile missing a channel (BR-06)", () => {
        const partial = { ...profile, channels: profile.channels.slice(1) };
        expect(profileSchema.safeParse(partial).success).toBe(false);
    });
});
