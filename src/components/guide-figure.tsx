import Image from "next/image";
import { ScreenshotFrame } from "./screenshot-frame";

type GuideFigureProps = {
  src: string;
  alt: string;
  caption?: string;
  wide?: boolean;
  priority?: boolean;
  variant?: "editorial" | "product";
};

export function GuideFigure({
  src,
  alt,
  caption,
  wide = false,
  priority = false,
  variant = "editorial",
}: GuideFigureProps) {
  if (variant === "product") {
    return (
      <figure className="mx-auto my-12 max-w-[240px]">
        <div className="relative">
          <div className="pointer-events-none absolute inset-x-6 top-1/4 -z-10 h-28 rounded-full bg-primary/15 blur-3xl" />
          <ScreenshotFrame src={src} alt={alt} priority={priority} sizes="240px" />
        </div>
        {caption ? (
          <figcaption className="mt-4 text-center text-sm leading-relaxed text-text-secondary">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className={wide ? "my-12 md:-mx-8" : "my-12"}>
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          sizes={
            wide
              ? "(min-width: 768px) 824px, 100vw"
              : "(min-width: 768px) 760px, 100vw"
          }
          quality={75}
          priority={priority}
          className="aspect-[16/9] w-full object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm leading-relaxed text-text-secondary">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
