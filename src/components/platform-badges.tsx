function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M17.6 9.48l1.6-2.77a.58.58 0 00-.22-.79.58.58 0 00-.79.22l-1.63 2.82a8.66 8.66 0 00-4.72 0L10.21 6.14a.58.58 0 00-.79-.22.58.58 0 00-.22.79L10.8 9.48A8.28 8.28 0 004 16.16h16a8.28 8.28 0 00-6.4-6.68zM8.5 14.25a1 1 0 110-2 1 1 0 010 2zm7 0a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
  );
}

type PlatformBadgesProps = {
  className?: string;
  variant?: "hero" | "compact";
};

export function PlatformBadges({
  className = "",
  variant = "hero",
}: PlatformBadgesProps) {
  const badgeClassName =
    variant === "compact"
      ? "flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border bg-background-secondary px-2.5 py-1.5 text-[11px] text-text-secondary sm:flex-none"
      : "flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background-secondary/80 px-3 py-2.5 text-sm text-text-secondary sm:flex-none sm:justify-start sm:bg-card/60 sm:px-3.5 sm:py-2";

  return (
    <div
      className={`flex w-full items-stretch gap-2 sm:w-auto sm:items-center ${className}`}
      aria-label="Coming soon to iOS and Android"
    >
      <div className={badgeClassName}>
        <AppleIcon className="h-4 w-4 shrink-0" />
        iOS
      </div>
      <div className={badgeClassName}>
        <AndroidIcon className="h-4 w-4 shrink-0" />
        Android
      </div>
    </div>
  );
}
