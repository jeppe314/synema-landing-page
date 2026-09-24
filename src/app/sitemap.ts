import type { MetadataRoute } from "next";
import { guides } from "@/content/guides";
import { guidePath } from "@/lib/guides";

const baseUrl = "https://synemaapp.com";

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
    url: new URL(path, baseUrl).toString(),
  }));

  const guideEntries: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: new URL(guidePath(guide.slug), baseUrl).toString(),
    lastModified: guide.updatedAt,
  }));

  return [...staticEntries, ...guideEntries];
}
