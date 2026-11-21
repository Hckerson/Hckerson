import type { CaseStudy } from "@/lib/types";

export const pipecraft: CaseStudy = {
    slug: "pipecraft",
    title: "Pipecraft",
    summary:
        "A typed Python data pipeline that extracts rows from CSV, validates them, loads them into SQLite and records every run. It is the first stage of a tool to collect, analyse and query job postings.",
    kind: "product",
    status: "in-development",
    role: "Author",
    period: { start: "2026-10" },
    problem:
        "Data from outside arrives messy: blank fields, numbers as text, missing dates. A pipeline that loads it as it comes fills the database with rows nobody can trust, and a run that fails quietly leaves no trace of what went wrong.",
    decisions: [
        {
            title: "Rows are validated before they are stored",
            choice: "Each row is cleaned (trimmed, blanks become null), normalised to real types, then validated by a frozen Pydantic model. An invalid row raises a typed error instead of being loaded.",
            reason: "Bad data stops at the boundary rather than reaching the database.",
        },
        {
            title: "Every run is recorded, including failures",
            choice: "A run record with rows in, rows out, status and error message is written in a finally block, so it is saved whether the run succeeds or fails.",
            reason: "A failed run leaves a record that says what failed, not silence.",
        },
        {
            title: "Strict tooling from the first commit",
            choice: "mypy, ruff, pytest with coverage and pre-commit hooks were set up before the pipeline code.",
            reason: "Types and tests are part of the project from the start, not added once it grows.",
        },
    ],
    outcome:
        "CSV extraction, validation and SQLite loading work end to end, with run tracking and tests. Collecting real job postings is the next stage.",
    learnings: [
        "Recording a failed run is as useful as recording a successful one.",
    ],
    stack: ["Python", "Pydantic", "SQLite", "pytest", "mypy", "ruff"],
    capabilities: ["testing"],
    links: {
        source: [
            { label: "Source", href: "https://github.com/Hckerson/pipecraft" },
        ],
    },
    featured: false,
    order: 3,
};
