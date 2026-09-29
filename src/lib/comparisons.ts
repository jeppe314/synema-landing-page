import type { Metadata } from "next";
import {
  comparisons,
  getComparison,
  type Comparison,
  type ComparisonBlock,
} from "@/content/comparisons";
import { plainText } from "@/lib/guides";
import { absoluteUrl } from "@/lib/site";

export { comparisons, getComparison };
export type { Comparison, ComparisonBlock };

const WORDS_PER_MINUTE = 230;

function blockText(block: ComparisonBlock) {
  switch (block.type) {
    case "p":
    case "h2":
    case "h3":
      return block.text;
    case "ul":
      return block.items.join(" ");
    case "table":
      return [block.caption, ...block.columns, ...block.rows.flat()].join(" ");
    case "faq":
      return block.items.map((item) => `${item.q} ${item.a}`).join(" ");
    case "cta":
      return "";
  }
}

export function readingTimeMinutes(comparison: Comparison) {
  const raw = [
    comparison.title,
    comparison.inlineCta,
    ...comparison.blocks.map(blockText),
  ].join(" ");
  const words = plainText(raw).trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function comparisonPath(slug: string) {
  return `/compare/${slug}`;
}

export function comparisonMetadata(comparison: Comparison): Metadata {
  const path = comparisonPath(comparison.slug);
  return {
    title: comparison.metaTitle,
    description: comparison.metaDescription,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: {
      title: comparison.metaTitle,
      description: comparison.metaDescription,
      url: path,
      type: "article",
      publishedTime: comparison.publishedAt,
      modifiedTime: comparison.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: comparison.metaTitle,
      description: comparison.metaDescription,
    },
  };
}

export function comparisonStructuredData(comparison: Comparison) {
  const url = absoluteUrl(comparisonPath(comparison.slug));
  const faqs = comparison.blocks.flatMap((block) =>
    block.type === "faq" ? block.items : [],
  );

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      headline: comparison.title,
      description: comparison.metaDescription,
      datePublished: comparison.publishedAt,
      dateModified: comparison.updatedAt,
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
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: comparison.breadcrumb,
          item: url,
        },
      ],
    },
  ];

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
