import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/mapped-data";
import { siteConfig } from "@/lib/constant";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        { path: "", priority: 1 },
        { path: "/projects", priority: 0.8 },
        { path: "/pricing", priority: 0.6 },
    ].map(({ path, priority }) => ({
        url: `${siteConfig.url}${path}`,
        changeFrequency: "monthly" as const,
        priority,
    }));

    const projectRoutes = projects.map((project) => ({
        url: `${siteConfig.url}/projects/${project.id}`,
        changeFrequency: "yearly" as const,
        priority: 0.5,
    }));

    // /blog is excluded until it has posts; it is marked noindex.
    return [...routes, ...projectRoutes];
}
