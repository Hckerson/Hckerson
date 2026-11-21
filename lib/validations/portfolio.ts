import { z } from "zod";
import {
    AVAILABILITY_STATES,
    CAPABILITIES,
    CASE_STUDY_KINDS,
    CASE_STUDY_STATUSES,
    CHANNEL_KINDS,
    OPPORTUNITY_TYPES,
    PERIOD_PATTERN,
    SKILL_GROUPS,
    SLUG_PATTERN,
} from "@/lib/portfolio/constants";

const text = z.string().trim().min(1);

const httpsUrl = z.url({ protocol: /^https$/ });

const keysOf = <T extends Record<string, unknown>>(record: T) =>
    Object.keys(record) as [keyof T & string, ...(keyof T & string)[]];

export const periodSchema = z.object({
    start: z.string().regex(PERIOD_PATTERN),
    end: z.string().regex(PERIOD_PATTERN).optional(),
});

export const capabilitySchema = z.enum(keysOf(CAPABILITIES));

export const availabilitySchema = z.object({
    status: z.enum(AVAILABILITY_STATES),
    openTo: z.array(z.enum(keysOf(OPPORTUNITY_TYPES))).min(1),
});

export const channelSchema = z.object({
    kind: z.enum(CHANNEL_KINDS),
    label: text,
    value: text,
    href: z.string().regex(/^(https:|mailto:|tel:)/),
});

export const imageSchema = z.object({
    src: z.string().startsWith("/"),
    alt: text,
    width: z.number().int().positive(),
    height: z.number().int().positive(),
});

export const profileSchema = z.object({
    name: text,
    handle: text,
    title: text,
    location: text,
    remoteFit: text,
    summary: text,
    availability: availabilitySchema,
    channels: z
        .array(channelSchema)
        .refine(
            (channels) =>
                new Set(channels.map((channel) => channel.kind)).size ===
                CHANNEL_KINDS.length,
        ),
    headshot: imageSchema,
    resume: z.object({
        path: z.string().startsWith("/"),
        updated: z.iso.date(),
    }),
});

export const decisionSchema = z.object({
    title: text,
    choice: text,
    reason: text,
});

export const sourceLinkSchema = z.object({ label: text, href: httpsUrl });

export const caseStudyLinksSchema = z.object({
    live: httpsUrl.optional(),
    source: z.array(sourceLinkSchema).min(1).optional(),
});

export const caseStudySchema = z
    .object({
        slug: z.string().regex(SLUG_PATTERN),
        title: text,
        summary: text,
        kind: z.enum(CASE_STUDY_KINDS),
        status: z.enum(CASE_STUDY_STATUSES),
        role: text,
        period: periodSchema,
        problem: text,
        decisions: z.array(decisionSchema).min(1),
        outcome: text,
        learnings: z.array(text).min(1),
        stack: z.array(text).min(1),
        capabilities: z.array(capabilitySchema).min(1),
        links: caseStudyLinksSchema,
        featured: z.boolean(),
        order: z.number().int().nonnegative(),
    })
    .refine((study) => study.status !== "private" || !study.links.source, {
        path: ["links", "source"],
    });

export const roleSchema = z.object({
    id: z.string().regex(SLUG_PATTERN),
    company: text,
    title: text,
    period: periodSchema,
    mode: text,
    summary: text,
    achievements: z.array(text).min(1),
});

export const educationSchema = z.object({
    degree: text,
    institution: text,
    location: text,
    period: periodSchema,
    expected: z.boolean(),
    standing: text,
    coursework: z.array(text).min(1),
});

export const skillGroupSchema = z.enum(keysOf(SKILL_GROUPS));

export const skillSchema = z.object({
    name: text,
    group: skillGroupSchema,
    evidence: z.array(z.string().regex(SLUG_PATTERN)).min(1),
});
