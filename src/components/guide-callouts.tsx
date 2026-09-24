import { Check } from "lucide-react";
import { RichText } from "./rich-text";

export function GuideSteps({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <ol className="mt-8 space-y-3">
      {items.map((item, index) => (
        <li
          key={item.title}
          className="flex gap-4 rounded-2xl border border-border bg-card px-5 py-4"
        >
          <span className="mt-0.5 w-5 shrink-0 text-sm font-semibold tabular-nums text-primary-light">
            {index + 1}
          </span>
          <div className="min-w-0">
            <p className="font-semibold tracking-tight text-text">{item.title}</p>
            <p className="mt-1.5 text-base leading-7 text-text-secondary">
              <RichText text={item.text} />
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function GuideTip({ text }: { text: string }) {
  return (
    <aside className="mt-8 rounded-2xl border border-border bg-card px-5 py-5 md:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
        A useful standard
      </p>
      <p className="mt-2 text-base leading-7 text-text-secondary">
        <RichText text={text} />
      </p>
    </aside>
  );
}

export function GuideChecklist({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3 rounded-2xl border border-border bg-card px-5 py-5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-7 text-text-secondary">
          <Check
            size={16}
            aria-hidden="true"
            className="mt-1.5 shrink-0 text-primary-light"
          />
          <span>
            <RichText text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export function GuidePullout({ text }: { text: string }) {
  return (
    <blockquote className="my-10 border-l-2 border-primary/70 pl-5 text-xl font-medium leading-snug tracking-tight text-pretty text-text md:text-[1.375rem]">
      <RichText text={text} />
    </blockquote>
  );
}
