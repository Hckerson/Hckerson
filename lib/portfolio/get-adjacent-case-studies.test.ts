import { describe, expect, it } from "vitest";
import { getAdjacentCaseStudies } from "@/lib/portfolio/get-adjacent-case-studies";
import { studyFixture } from "@/lib/portfolio/selectors.fixtures";

const studies = [
    studyFixture("c", 2),
    studyFixture("a", 0),
    studyFixture("b", 1),
];

describe("getAdjacentCaseStudies", () => {
    it("returns neighbours by order", () => {
        const { previous, next } = getAdjacentCaseStudies("b", studies);
        expect(previous?.slug).toBe("a");
        expect(next?.slug).toBe("c");
    });

    it("ends without wrapping at either edge", () => {
        expect(getAdjacentCaseStudies("a", studies).previous).toBeUndefined();
        expect(getAdjacentCaseStudies("c", studies).next).toBeUndefined();
    });

    it("returns nothing for an unknown slug", () => {
        expect(getAdjacentCaseStudies("z", studies)).toEqual({});
    });
});
