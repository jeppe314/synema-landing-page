import Image from "next/image";

type ScreenshotFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function ScreenshotFrame({
  src,
  alt,
  priority,
  className,
}: ScreenshotFrameProps) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[260px] sm:max-w-[280px] ${className ?? ""}`}
    >
      <div className="rounded-[2.25rem] border border-white/10 bg-black/30 p-2 shadow-xl shadow-black/40">
        <div className="overflow-hidden rounded-[1.75rem]">
          <Image
            src={src}
            alt={alt}
            width={1179}
            height={2556}
            priority={priority}
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
