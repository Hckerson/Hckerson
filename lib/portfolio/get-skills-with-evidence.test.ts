import { describe, expect, it } from "vitest";
import { roles } from "@/lib/data/roles";
import { getSkillsWithEvidence } from "@/lib/portfolio/get-skills-with-evidence";
import { studyFixture } from "@/lib/portfolio/selectors.fixtures";
import type { Skill } from "@/lib/types";

const studies = [studyFixture("keyhold", 0)];

describe("getSkillsWithEvidence", () => {
    it("drops unresolved evidence, unevidenced skills and empty groups", () => {
        const skills: Skill[] = [
            { name: "Go", group: "languages", evidence: ["missing"] },
            {
                name: "Stripe",
                group: "security-payments",
                evidence: ["keyhold", "missing"],
            },
            {
                name: "TOTP MFA",
                group: "security-payments",
                evidence: ["tekcify"],
            },
        ];
        expect(getSkillsWithEvidence(skills, studies, roles)).toEqual([
            {
                group: "security-payments",
                skills: [
                    {
                        name: "Stripe",
                        group: "security-payments",
                        evidence: ["keyhold"],
                    },
                    {
                        name: "TOTP MFA",
                        group: "security-payments",
                        evidence: ["tekcify"],
                    },
                ],
            },
        ]);
    });

    it("keeps group order from the vocabulary", () => {
        const groups = getSkillsWithEvidence().map(({ group }) => group);
        expect(groups[0]).toBe("languages");
    });
});
