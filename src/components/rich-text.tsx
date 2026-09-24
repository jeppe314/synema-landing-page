import Link from "next/link";
import type { ReactNode } from "react";

export function RichText({ text }: { text: string }) {
  const pattern = /\[([^\]]+)\]\((\/[^)\s]+)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index));
    }

    const label = match[1];
    const href = match[2];
    nodes.push(
      <Link
        key={`${href}-${index}`}
        href={href}
        className="font-medium text-primary underline decoration-primary/40 underline-offset-[3px] transition-colors hover:text-primary-light hover:decoration-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {label}
      </Link>,
    );

    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <>{nodes}</>;
}
