import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { serviceSlugs } from "@/data/services";
import { locationSlugs } from "@/data/locations";
import { locales, lp } from "@/i18n/config";

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
    "/community-impact",
  ];
  const servicePaths = serviceSlugs.map((s) => `/services/${s}`);
  const locationPaths = locationSlugs.map((l) => `/locations/${l}`);
  const paths = [...staticPaths, ...servicePaths, ...locationPaths];

  // Emit one entry per locale, each carrying hreflang alternates for both locales.
  return paths.flatMap((path) =>
    locales.map((loc) => ({
      url: absoluteUrl(lp(loc, path)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, absoluteUrl(lp(l, path))]),
        ),
      },
    })),
  );
}
