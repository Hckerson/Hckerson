import { describe, expect, it } from "vitest";
import { formatPeriod } from "@/lib/utils/format-period";

describe("formatPeriod", () => {
    it("labels an open period as present", () => {
        expect(formatPeriod({ start: "2025-09" })).toBe("Sep 2025 – Present");
    });

    it("keeps year-only points as years", () => {
        expect(formatPeriod({ start: "2023", end: "2028" })).toBe(
            "2023 – 2028",
        );
    });
});
