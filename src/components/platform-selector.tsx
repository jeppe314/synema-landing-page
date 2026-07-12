"use client";

export type PlatformChoice = "ios" | "android" | "both";

type PlatformSelectorProps = {
  value: PlatformChoice;
  onChange: (value: PlatformChoice) => void;
  id?: string;
};

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

const options: {
  value: PlatformChoice;
  label: string;
  icon?: "apple" | "android";
}[] = [
  { value: "ios", label: "iOS", icon: "apple" },
  { value: "android", label: "Android", icon: "android" },
  { value: "both", label: "Both" },
];

export function PlatformSelector({
  value,
  onChange,
  id = "platform-selector",
}: PlatformSelectorProps) {
  return (
    <div
      role="group"
      aria-labelledby={`${id}-label`}
      className="grid grid-cols-3 gap-1 rounded-xl border border-border bg-background-secondary p-1 md:inline-grid md:w-auto"
    >
      <span id={`${id}-label`} className="sr-only">
        Choose your platform
      </span>
      {options.map((option) => {
        const selected = value === option.value;

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(option.value)}
            className={`inline-flex min-h-[44px] touch-manipulation items-center justify-center gap-1.5 rounded-lg px-2 text-sm font-medium transition-colors md:min-h-[40px] md:px-4 ${
              selected
                ? "bg-card text-text shadow-sm ring-1 ring-primary/40"
                : "text-text-secondary hover:text-text"
            }`}
          >
            {option.icon === "apple" ? (
              <AppleIcon className="h-3.5 w-3.5 shrink-0" />
            ) : null}
            {option.icon === "android" ? (
              <AndroidIcon className="h-3.5 w-3.5 shrink-0" />
            ) : null}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
