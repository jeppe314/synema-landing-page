import Link from "next/link";
import type { Comparison } from "@/content/comparisons";
import {
  comparisonStructuredData,
  readingTimeMinutes,
} from "@/lib/comparisons";
import { formatGuideDate, relatedGuides } from "@/lib/guides";
import { ComparisonTable } from "./comparison-table";
import { ContentFaq } from "./content-faq";
import { GuideCta } from "./guide-cta";
import { JsonLd } from "./json-ld";
import { RelatedGuides } from "./related-guides";
import { RichText } from "./rich-text";

const bodyClass =
  "text-base leading-7 text-text-secondary md:text-[17px] md:leading-8";

const linkClass =
  "transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function ComparisonArticle({ comparison }: { comparison: Comparison }) {
  const minutes = readingTimeMinutes(comparison);
  const more = relatedGuides(comparison.related);

  return (
    <main className="flex-1 px-5 py-12 md:px-12 md:py-16 lg:px-20">
      <JsonLd data={comparisonStructuredData(comparison)} />
      <div className="mx-auto max-w-[760px]">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-text-secondary">
            <li>
              <Link href="/" className={linkClass}>
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-text">
              {comparison.breadcrumb}
            </li>
          </ol>
        </nav>

        <article className="mt-8">
          <header>
            <p className="text-sm text-text-secondary">
              <span className="font-medium text-text">Comparison</span>
              <span aria-hidden="true"> · </span>
              {minutes} min read
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              <time dateTime={comparison.updatedAt}>
                Updated {formatGuideDate(comparison.updatedAt)}
              </time>
            </p>
            <h1 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-tight text-pretty md:text-[40px]">
              {comparison.title}
            </h1>
          </header>

          {comparison.blocks.map((block, index) => {
            if (block.type === "cta") {
              return (
                <GuideCta
                  key={`${comparison.slug}-inline`}
                  slug={comparison.slug}
                  position="inline"
                  body={comparison.inlineCta}
                />
              );
            }

            if (block.type === "h2") {
              return (
                <h2
                  key={`${block.text}-${index}`}
                  className="mt-12 text-[1.375rem] font-semibold tracking-tight text-pretty text-text"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "h3") {
              return (
                <h3
                  key={`${block.text}-${index}`}
                  className="mt-8 text-lg font-semibold tracking-tight text-pretty text-text"
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

            if (block.type === "faq") {
              return <ContentFaq key={`faq-${index}`} items={block.items} />;
            }

            return (
              <p
                key={`p-${index}`}
                className={index === 0 ? `mt-8 ${bodyClass}` : `mt-4 ${bodyClass}`}
              >
                <RichText text={block.text} />
              </p>
            );
          })}

          <GuideCta
            slug={comparison.slug}
            position="bottom"
            kicker={comparison.bottomCta.kicker}
            title={comparison.bottomCta.title}
            body={comparison.bottomCta.body}
          />
        </article>

        <RelatedGuides guides={more} />
      </div>
    </main>
  );
}
