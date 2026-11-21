import { describe, expect, it } from "vitest";
import { getFeaturedCaseStudies } from "@/lib/portfolio/get-featured-case-studies";
import { studyFixture } from "@/lib/portfolio/selectors.fixtures";

const slugs = (studies: { slug: string }[]) =>
    studies.map((study) => study.slug);

describe("getFeaturedCaseStudies", () => {
    it("returns flagged studies in order", () => {
        const studies = [
            studyFixture("b", 1, true),
            studyFixture("a", 0),
            studyFixture("c", 2, true),
        ];
        expect(slugs(getFeaturedCaseStudies(studies))).toEqual(["b", "c"]);
    });

    it("falls back to the first three by order", () => {
        const studies = [3, 1, 0, 2].map((order) =>
            studyFixture(`s${order}`, order),
        );
        expect(slugs(getFeaturedCaseStudies(studies))).toEqual([
            "s0",
            "s1",
            "s2",
        ]);
    });
});
