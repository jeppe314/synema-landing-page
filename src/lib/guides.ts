import type { Metadata } from "next";
import {
  getGuide,
  guides,
  type Guide,
  type GuideBlock,
} from "@/content/guides";

export { getGuide, guides };
export type { Guide, GuideBlock };

const WORDS_PER_MINUTE = 230;

function visibleText(text: string) {
  return text.replace(/\[([^\]]+)\]\(\/[^)\s]+\)/g, "$1");
}

function blockText(block: GuideBlock) {
  switch (block.type) {
    case "p":
    case "h2":
    case "h3":
    case "tip":
    case "pullout":
      return block.text;
    case "ul":
    case "checklist":
      return block.items.join(" ");
    case "steps":
      return block.items.map((item) => `${item.title} ${item.text}`).join(" ");
    case "figure":
      return block.caption ?? "";
    case "cta":
      return "";
  }
}

export function guideWordCount(guide: Guide) {
  const raw = [guide.title, guide.inlineCta, ...guide.blocks.map(blockText)].join(
    " ",
  );
  return visibleText(raw).trim().split(/\s+/).filter(Boolean).length;
}

export function readingTimeMinutes(guide: Guide) {
  return Math.max(1, Math.round(guideWordCount(guide) / WORDS_PER_MINUTE));
}

export function formatGuideDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

export function relatedGuides(guide: Guide) {
  return guide.related
    .map((slug) => getGuide(slug))
    .filter((item): item is Guide => Boolean(item));
}

export function guidePath(slug: string) {
  return `/guides/${slug}`;
}

export function guideMetadata(guide: Guide): Metadata {
  const path = guidePath(guide.slug);
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: path,
      type: "article",
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
  };
}
