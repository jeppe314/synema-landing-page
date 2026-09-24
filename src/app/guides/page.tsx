import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { guidePath, guides, readingTimeMinutes } from "@/lib/guides";

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

export default function GuidesPage() {
  return (
    <main className="flex-1">
      <section className="bg-cinema px-5 pt-14 pb-12 md:px-12 md:pt-20 md:pb-16 lg:px-20">
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

      <section className="px-5 py-12 md:px-12 md:py-16 lg:px-20" aria-label="All guides">
        <div className="mx-auto grid max-w-[760px] gap-4">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={guidePath(guide.slug)}
              className="group rounded-2xl border border-border bg-card px-5 py-5 transition-colors hover:border-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 md:px-6 md:py-6"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
                {guide.category}
                <span aria-hidden="true"> · </span>
                {readingTimeMinutes(guide)} min
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-pretty transition-colors group-hover:text-primary-light">
                {guide.title}
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                {guide.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Read guide
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
