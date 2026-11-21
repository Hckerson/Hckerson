import { describe, expect, it } from "vitest";
import { roles } from "@/lib/data/roles";
import { getRoles } from "@/lib/portfolio/get-roles";

describe("getRoles", () => {
    it("orders roles newest first without mutating the source", () => {
        const before = roles.map((role) => role.id);
        expect(getRoles().map((role) => role.id)).toEqual([
            "tekcify",
            "vouchmark",
        ]);
        expect(roles.map((role) => role.id)).toEqual(before);
    });
});
