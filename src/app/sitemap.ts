import type { MetadataRoute } from "next";
import { comparisons } from "@/content/comparisons";
import { guides } from "@/content/guides";
import { comparisonPath } from "@/lib/comparisons";
import { guidePath } from "@/lib/guides";
import { siteUrl } from "@/lib/site";

const staticPaths = [
  "/",
  "/guides",
  "/privacy",
  "/terms",
  "/support",
  "/contact",
  "/delete-account",
  "/beta-testing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));

  const guideEntries: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: new URL(guidePath(guide.slug), siteUrl).toString(),
    lastModified: guide.updatedAt,
  }));

  const comparisonEntries: MetadataRoute.Sitemap = comparisons.map((comparison) => ({
    url: new URL(comparisonPath(comparison.slug), siteUrl).toString(),
    lastModified: comparison.updatedAt,
  }));

  return [...staticEntries, ...guideEntries, ...comparisonEntries];
}
