import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Guide } from "@/content/guides";
import {
  formatGuideDate,
  guideStructuredData,
  readingTimeMinutes,
  relatedGuides,
} from "@/lib/guides";
import { ComparisonTable } from "./comparison-table";
import { ContentFaq } from "./content-faq";
import {
  GuideChecklist,
  GuidePullout,
  GuideSteps,
  GuideTip,
} from "./guide-callouts";
import { GuideCta } from "./guide-cta";
import { GuideFigure } from "./guide-figure";
import { JsonLd } from "./json-ld";
import { RelatedGuides } from "./related-guides";
import { RichText } from "./rich-text";

const bodyClass =
  "text-base leading-7 text-text-secondary md:text-[17px] md:leading-8";

export function GuideArticle({ guide }: { guide: Guide }) {
  const minutes = readingTimeMinutes(guide);
  const more = relatedGuides(guide.related);

  return (
    <main className="flex-1 px-5 py-12 md:px-12 md:py-16 lg:px-20">
      <JsonLd data={guideStructuredData(guide)} />
      <div className="mx-auto max-w-[760px]">
        <nav aria-label="Guides">
          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Guides
          </Link>
        </nav>

        <article className="mt-8">
          <header>
            <p className="text-sm text-text-secondary">
              <span className="font-medium text-text">{guide.category}</span>
              <span aria-hidden="true"> · </span>
              {minutes} min read
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              <time dateTime={guide.updatedAt}>
                Updated {formatGuideDate(guide.updatedAt)}
              </time>
            </p>
            <h1 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-tight text-pretty md:text-[40px]">
              {guide.title}
            </h1>
          </header>

          {guide.blocks.map((block, index) => {
            if (block.type === "cta") {
              return (
                <GuideCta
                  key={`${guide.slug}-inline`}
                  slug={guide.slug}
                  position="inline"
                  body={guide.inlineCta}
                />
              );
            }

            if (block.type === "h2") {
              return (
                <h2
                  key={`${block.text}-${index}`}
                  className="mt-12 text-[1.375rem] font-semibold tracking-tight text-text text-pretty"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "h3") {
              return (
                <h3
                  key={`${block.text}-${index}`}
                  className="mt-8 text-lg font-semibold tracking-tight text-text text-pretty"
                >
                  {block.text}
                </h3>
              );
            }

            if (block.type === "ul") {
              return (
                <ul
                  key={`list-${index}`}
                  className={`mt-4 list-disc space-y-2 pl-5 ${bodyClass}`}
                >
                  {block.items.map((item) => (
                    <li key={item}>
                      <RichText text={item} />
                    </li>
                  ))}
                </ul>
              );
            }

            if (block.type === "table") {
              return (
                <ComparisonTable
                  key={`table-${index}`}
                  caption={block.caption}
                  columns={block.columns}
                  rows={block.rows}
                />
              );
            }

            if (block.type === "figure") {
              return (
                <GuideFigure
                  key={`figure-${index}`}
                  src={block.src}
                  alt={block.alt}
                  caption={block.caption}
                  wide={block.wide}
                  priority={block.priority}
                  variant={block.variant}
                />
              );
            }

            if (block.type === "steps") {
              return <GuideSteps key={`steps-${index}`} items={block.items} />;
            }

            if (block.type === "tip") {
              return <GuideTip key={`tip-${index}`} text={block.text} />;
            }

            if (block.type === "checklist") {
              return <GuideChecklist key={`check-${index}`} items={block.items} />;
            }

            if (block.type === "pullout") {
              return <GuidePullout key={`pullout-${index}`} text={block.text} />;
            }

            if (block.type === "faq") {
              return <ContentFaq key={`faq-${index}`} items={block.items} />;
            }

            return (
              <p key={`p-${index}`} className={index === 0 ? `mt-8 ${bodyClass}` : `mt-4 ${bodyClass}`}>
                <RichText text={block.text} />
              </p>
            );
          })}

          <GuideCta
            slug={guide.slug}
            position="bottom"
            kicker={guide.bottomCta.kicker}
            title={guide.bottomCta.title}
            body={guide.bottomCta.body}
          />
        </article>

        <RelatedGuides guides={more} />
      </div>
    </main>
  );
}
