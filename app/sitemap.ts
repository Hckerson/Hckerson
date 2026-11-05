import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/mapped-data";
import { routes, showPricing, siteConfig } from "@/lib/constant";

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = [
        { path: "", priority: 1 },
        { path: routes.projects, priority: 0.8 },
        ...(showPricing ? [{ path: routes.pricing, priority: 0.6 }] : []),
    ].map(({ path, priority }) => ({
        url: `${siteConfig.url}${path}`,
        changeFrequency: "monthly" as const,
        priority,
    }));

    const projectRoutes = projects.map((project) => ({
        url: `${siteConfig.url}${routes.project(project.id)}`,
        changeFrequency: "yearly" as const,
        priority: 0.5,
    }));

    return [...pages, ...projectRoutes];
}
