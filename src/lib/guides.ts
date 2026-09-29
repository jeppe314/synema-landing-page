import type { Metadata } from "next";
import {
  getGuide,
  guides,
  type Guide,
  type GuideBlock,
} from "@/content/guides";
import { absoluteUrl } from "@/lib/site";

export { getGuide, guides };
export type { Guide, GuideBlock };

const WORDS_PER_MINUTE = 230;

export function plainText(text: string) {
  return text.replace(/\[([^\]]+)\]\((\/[^)\s]*|https:\/\/[^)\s]+)\)/g, "$1");
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
    case "faq":
      return block.items.map((item) => `${item.q} ${item.a}`).join(" ");
    case "table":
      return [block.caption, ...block.columns, ...block.rows.flat()].join(" ");
    case "cta":
      return "";
  }
}

export function guideWordCount(guide: Guide) {
  const raw = [guide.title, guide.inlineCta, ...guide.blocks.map(blockText)].join(
    " ",
  );
  return plainText(raw).trim().split(/\s+/).filter(Boolean).length;
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

export function relatedGuides(slugs: string[]) {
  return slugs
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

export function guideStructuredData(guide: Guide) {
  const url = absoluteUrl(guidePath(guide.slug));
  const faqs = guide.blocks.flatMap((block) =>
    block.type === "faq" ? block.items : [],
  );

  const article = {
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    inLanguage: "en",
    mainEntityOfPage: url,
    author: {
      "@type": "Organization",
      name: "Synema",
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: "Synema",
      url: absoluteUrl("/"),
    },
  };

  const graph: Record<string, unknown>[] = [article];

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: plainText(item.a),
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
