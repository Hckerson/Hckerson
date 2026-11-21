import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/portfolio";
import { SHOW_PRICING, SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        { path: "", priority: 1 },
        { path: "/projects", priority: 0.8 },
        ...(SHOW_PRICING ? [{ path: "/pricing", priority: 0.6 }] : []),
    ].map(({ path, priority }) => ({
        url: `${SITE_CONFIG.url}${path}`,
        changeFrequency: "monthly" as const,
        priority,
    }));

    const projectRoutes = projects.map((project) => ({
        url: `${SITE_CONFIG.url}/projects/${project.id}`,
        changeFrequency: "yearly" as const,
        priority: 0.5,
    }));

    return [...routes, ...projectRoutes];
}
