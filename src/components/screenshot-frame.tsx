import Image from "next/image";

type ScreenshotFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function ScreenshotFrame({
  src,
  alt,
  priority,
  className = "",
  sizes = "(max-width: 768px) 78vw, 300px",
}: ScreenshotFrameProps) {
  return (
    <div className={`relative mx-auto w-full max-w-[260px] ${className}`}>
      <div className="rounded-[2.25rem] border border-white/10 bg-black/30 p-2 shadow-xl shadow-black/40">
        <div className="overflow-hidden rounded-[1.75rem]">
          <Image
            src={src}
            alt={alt}
            width={1179}
            height={2556}
            sizes={sizes}
            priority={priority}
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
