import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Guide } from "@/content/guides";
import {
  formatGuideDate,
  guidePath,
  readingTimeMinutes,
  relatedGuides,
} from "@/lib/guides";
import { GuideCta } from "./guide-cta";
import { RichText } from "./rich-text";

const bodyClass =
  "text-base leading-7 text-text-secondary md:text-[17px] md:leading-8";

export function GuideArticle({ guide }: { guide: Guide }) {
  const minutes = readingTimeMinutes(guide);
  const more = relatedGuides(guide);

  return (
    <main className="flex-1 px-5 py-12 md:px-12 md:py-16 lg:px-20">
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

        {more.length > 0 ? (
          <nav aria-label="More guides" className="mt-16 border-t border-border pt-10">
            <h2 className="text-lg font-semibold tracking-tight">More guides</h2>
            <ul className="mt-4 divide-y divide-border rounded-2xl border border-border">
              {more.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={guidePath(item.slug)}
                    className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/60"
                  >
                    <span className="min-w-0">
                      <span className="block font-medium tracking-tight group-hover:text-primary-light">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-text-secondary">
                        {item.description}
                      </span>
                    </span>
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="shrink-0 text-text-secondary transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </main>
  );
}
