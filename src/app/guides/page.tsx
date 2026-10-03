import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  comparisonPath,
  getComparison,
  readingTimeMinutes as comparisonMinutes,
} from "@/lib/comparisons";
import { getGuide, guidePath, readingTimeMinutes } from "@/lib/guides";

const title = "Guides for spending less time choosing and more time watching";
const description =
  "Short, practical guides on choosing a movie with your partner, friends, or a group — and spending less of the night scrolling.";

export const metadata: Metadata = {
  title: `${title} – Synema`,
  description,
  alternates: { canonical: "/guides" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${title} – Synema`,
    description,
    url: "/guides",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} – Synema`,
    description,
  },
};

type HubLink = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  action: string;
};

function guideLink(slug: string): HubLink | null {
  const guide = getGuide(slug);
  if (!guide) return null;
  return {
    href: guidePath(guide.slug),
    eyebrow: `${guide.category} · ${readingTimeMinutes(guide)} min`,
    title: guide.title,
    description: guide.description,
    action: "Read guide",
  };
}

function comparisonLink(slug: string): HubLink | null {
  const comparison = getComparison(slug);
  if (!comparison) return null;
  return {
    href: comparisonPath(comparison.slug),
    eyebrow: `Comparison · ${comparisonMinutes(comparison)} min`,
    title: comparison.title,
    description: comparison.description,
    action: "Read comparison",
  };
}

const sections: { title: string; intro: string; items: HubLink[] }[] = [
  {
    title: "Choosing together",
    intro:
      "The decision itself. Who has a say, what counts as a yes, and when to stop scrolling.",
    items: [
      guideLink("how-to-choose-a-movie-together"),
      guideLink("how-to-decide-what-movie-to-watch"),
      guideLink("what-to-watch-tonight"),
    ].filter((item): item is HubLink => item !== null),
  },
  {
    title: "Movie night",
    intro: "A constraint for the evening, and a few films that tend to survive a room.",
    items: [
      guideLink("movie-night-ideas"),
      guideLink("best-movies-to-watch-with-friends"),
    ].filter((item): item is HubLink => item !== null),
  },
  {
    title: "Movie picker tools",
    intro:
      "When you already want a tool. Couples, friends, and how to tell a picker from a diary or a streaming search.",
    items: [
      guideLink("movie-picker-for-couples"),
      guideLink("movie-picker-for-friends"),
      guideLink("best-movie-picker-apps"),
    ].filter((item): item is HubLink => item !== null),
  },
  {
    title: "Comparisons",
    intro:
      "How Letterboxd, a streaming search, and a group picker differ, and when each one fits.",
    items: [
      comparisonLink("synema-vs-letterboxd"),
      guideLink("letterboxd-alternatives-for-movie-discovery"),
    ].filter((item): item is HubLink => item !== null),
  },
];

export default function GuidesPage() {
  return (
    <main className="flex-1">
      <section className="px-5 pt-14 pb-4 md:px-12 md:pt-20 lg:px-20">
        <div className="mx-auto max-w-[760px]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
            Movie night, solved.
          </p>
          <h1 className="mt-3 text-[clamp(2rem,5vw,2.75rem)] font-bold leading-[1.12] tracking-tight text-pretty">
            {title}
          </h1>
          <p className="mt-5 max-w-[40rem] text-lg leading-relaxed text-text-secondary">
            Practical notes on choosing a movie with a partner, a friend, or a
            whole couch of people. Less menu, more movie.
          </p>
        </div>
      </section>

      {sections.map((section) => (
        <section
          key={section.title}
          aria-labelledby={section.title.replace(/\s+/g, "-").toLowerCase()}
          className="px-5 py-10 md:px-12 md:py-12 lg:px-20"
        >
          <div className="mx-auto max-w-[760px]">
            <h2
              id={section.title.replace(/\s+/g, "-").toLowerCase()}
              className="text-[1.375rem] font-semibold tracking-tight text-pretty"
            >
              {section.title}
            </h2>
            <p className="mt-2 max-w-[40rem] text-[15px] leading-relaxed text-text-secondary">
              {section.intro}
            </p>
            <ul className="mt-5 grid gap-4">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group block rounded-2xl border border-border bg-card px-5 py-5 transition-colors hover:border-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 md:px-6 md:py-6"
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-pretty transition-colors group-hover:text-primary-light">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      {item.action}
                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </main>
  );
}
