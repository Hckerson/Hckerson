import { describe, expect, it } from "vitest";
import { getCaseStudy } from "@/lib/portfolio/get-case-study";

describe("getCaseStudy", () => {
    it("finds a case study by slug", () => {
        expect(getCaseStudy("keyhold")?.title).toBe("Keyhold");
    });

    it("returns undefined for an unknown slug", () => {
        expect(getCaseStudy("missing")).toBeUndefined();
    });
});
