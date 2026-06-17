import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { serviceSlugs } from "@/data/services";
import { locationSlugs } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "/",
    "/services",
    "/locations",
    "/collection",
    "/about",
    "/r2v3-certification",
    "/contact",
  ];
  const servicePaths = serviceSlugs.map((s) => `/services/${s}`);
  const locationPaths = locationSlugs.map((l) => `/locations/${l}`);

  return [...staticPaths, ...servicePaths, ...locationPaths].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
