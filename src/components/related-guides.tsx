import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Guide } from "@/content/guides";
import { guidePath } from "@/lib/guides";

export function RelatedGuides({ guides }: { guides: Guide[] }) {
  if (guides.length === 0) return null;

  return (
    <nav aria-label="More guides" className="mt-16 border-t border-border pt-10">
      <h2 className="text-lg font-semibold tracking-tight">More guides</h2>
      <ul className="mt-4 divide-y divide-border rounded-2xl border border-border">
        {guides.map((item) => (
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
  );
}
