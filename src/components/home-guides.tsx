import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getGuide, guidePath } from "@/lib/guides";

const featured = [
  {
    slug: "movie-picker-for-couples",
    label: "Movie picker for couples",
  },
  {
    slug: "how-to-decide-what-movie-to-watch",
    label: "How to decide what to watch",
  },
  {
    slug: "what-to-watch-tonight",
    label: "What should we watch tonight?",
  },
] as const;

export function HomeGuides() {
  const items = featured.flatMap((item) => {
    const guide = getGuide(item.slug);
    return guide ? [{ ...item, description: guide.description }] : [];
  });

  return (
    <section className="border-t border-border px-5 py-16 md:px-12 md:py-[5.5rem] lg:px-20">
      <div className="mx-auto max-w-[720px]">
        <h2 className="text-[28px] font-bold tracking-tight sm:text-[32px]">
          Still stuck choosing?
        </h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-text-secondary">
          A few short guides on the part of movie night that happens before the
          movie.
        </p>
        <ul className="mt-8 divide-y divide-border rounded-2xl border border-border">
          {items.map((item) => (
            <li key={item.slug}>
              <Link
                href={guidePath(item.slug)}
                className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/60"
              >
                <span className="min-w-0">
                  <span className="block font-medium tracking-tight group-hover:text-primary-light">
                    {item.label}
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
        <Link
          href="/guides"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          All guides
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
