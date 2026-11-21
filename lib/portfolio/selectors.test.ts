import { describe, expect, it } from "vitest";
import type { PortfolioProject, Skill, WorkExperience } from "@/lib/types";
import { getAdjacentProjects } from "./get-adjacent-projects";
import { getCompletedProjects } from "./get-completed-projects";
import { getEmployment } from "./get-employment";
import { getProject } from "./get-project";
import { getSkillsByCategory } from "./get-skills-by-category";

const project = (id: number, status: PortfolioProject["status"] = "completed") =>
    ({ id, status, title: `Project ${id}` }) as PortfolioProject;

const list = [project(1), project(2, "active"), project(3)];

describe("project lookup by route param", () => {
    it("finds a project from its id as it arrives in the url", () => {
        expect(getProject("2", list)?.id).toBe(2);
    });

    it("returns nothing for an unknown id so the page can 404", () => {
        expect(getProject("99", list)).toBeUndefined();
    });
});

describe("selected work", () => {
    it("keeps only finished projects", () => {
        expect(getCompletedProjects(list).map(({ id }) => id)).toEqual([1, 3]);
    });
});

describe("adjacent projects", () => {
    it("wraps around at both ends", () => {
        const adjacent = getAdjacentProjects(1, list);
        expect(adjacent?.previous.id).toBe(3);
        expect(adjacent?.next.id).toBe(2);
    });

    it("has no neighbours when there is only one project", () => {
        expect(getAdjacentProjects(1, [project(1)])).toBeNull();
    });

    it("has no neighbours for an unknown project", () => {
        expect(getAdjacentProjects(99, list)).toBeNull();
    });
});

describe("experience summary", () => {
    it("never counts a personal project as employment", () => {
        const entries = [
            { kind: "employment", company: "Vouchmark" },
            { kind: "personal-project", company: "Personal Project" },
        ] as WorkExperience[];
        expect(getEmployment(entries).map(({ company }) => company)).toEqual([
            "Vouchmark",
        ]);
    });
});

describe("skills by category", () => {
    it("lists a skill under every category it belongs to", () => {
        const firebase = { name: "Firebase", categories: ["Database", "Auth"] } as Skill;
        const groups = getSkillsByCategory([firebase]);
        expect(groups.get("Database")).toEqual([firebase]);
        expect(groups.get("Auth")).toEqual([firebase]);
    });
});
