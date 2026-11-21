import { describe, expect, it } from "vitest";
import { keyhold } from "@/lib/data/case-studies/keyhold";
import { profile } from "@/lib/data/profile";
import {
    caseStudyBreadcrumbJsonLd,
    caseStudyJsonLd,
    personJsonLd,
} from "@/lib/portfolio/structured-data";

describe("structured data", () => {
    it("lists only web channels as sameAs", () => {
        const { sameAs } = personJsonLd(profile);
        expect(sameAs.every((href) => href.startsWith("https://"))).toBe(true);
        expect(sameAs).toHaveLength(3);
    });

    it("uses absolute canonical URLs", () => {
        expect(caseStudyJsonLd(keyhold, profile).url).toBe(
            "https://hckerson.vercel.app/work/keyhold",
        );
        const trail = caseStudyBreadcrumbJsonLd(keyhold).itemListElement;
        expect(trail.map((item) => item.position)).toEqual([1, 2, 3]);
        expect(trail[2].item).toBe("https://hckerson.vercel.app/work/keyhold");
    });
});
