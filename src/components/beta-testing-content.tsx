import { Bug, Check, HelpCircle, Lightbulb } from "lucide-react";

const ANDROID_BETA_URL =
  "https://play.google.com/apps/internaltest/4701020442462809225";
const DISCORD_URL = "https://discord.gg/zc5dgRXMWD";

const accessSteps = [
  {
    title: "Send your Google email",
    description: "Use the same Google account you use on your Android device.",
  },
  {
    title: "Wait for confirmation",
    description: "Once you're added as a tester, the beta link will start working.",
  },
  {
    title: "Install and test",
    description:
      "Create a room, invite someone, swipe movies, and try to reach a match.",
  },
];

const testChecklist = [
  "Create a room",
  "Invite a friend with a link or code",
  "Join someone else's room",
  "Swipe at least 10 movies",
  "Try to reach a match",
  "Open movie details",
  "Test different streaming services / filters",
  "Report anything confusing",
];

const feedbackCards = [
  {
    icon: Bug,
    title: "Bugs",
    description: "Crashes, broken links, sync issues, weird UI behavior.",
  },
  {
    icon: Lightbulb,
    title: "Ideas",
    description:
      "Feature requests, missing filters, better flows, or anything that would make movie night easier.",
  },
  {
    icon: HelpCircle,
    title: "Confusing moments",
    description: 'Anything where you thought "what do I do now?"',
  },
];

const knownIssues = [
  "iOS version is not available yet.",
  "Some movie data may be missing or incomplete.",
  "The app is still early, so rooms and matching may have rough edges.",
];

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8 text-center md:mb-10">
      <h2 className="text-[28px] font-bold tracking-tight md:text-[32px]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-3 max-w-2xl text-[15px] text-text-secondary">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function BetaTestingContent() {
  return (
    <main>
      <section className="bg-cinema px-6 pb-16 pt-12 md:px-12 md:pb-20 md:pt-16 lg:px-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="mb-4 inline-flex rounded-full border border-border bg-card px-4 py-1 text-sm text-text-secondary">
            Invite-only beta
          </p>
          <h1 className="text-[36px] font-bold leading-[1.1] tracking-tight sm:text-[44px]">
            Synema Beta Testing
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-text-secondary md:text-lg">
            Help test Synema before launch and shape the app with your feedback.
          </p>

          <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-center">
            <div className="flex w-full flex-col items-center sm:w-auto sm:items-stretch">
              <a
                href={ANDROID_BETA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] sm:w-auto"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.004 1.004 0 01-.61-.92V2.734a1.004 1.004 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                Join Android Beta
              </a>
              <p className="mt-3 max-w-xs text-center text-xs leading-relaxed text-text-secondary sm:text-left">
                Only works if your Google account has been added as a tester.
              </p>
            </div>

            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-border px-6 py-3.5 text-sm font-medium text-text transition-transform hover:scale-[1.02] hover:border-white/20 sm:w-auto sm:self-start"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background-secondary px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading title="How to get access" />
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {accessSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading title="What to test" />
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-6 md:p-8">
            <ul className="space-y-4">
              {testChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-text">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background-secondary px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading title="Report feedback" />
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {feedbackCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <card.icon
                  className="mb-4 h-6 w-6 text-primary"
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              Join Discord to report feedback
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading title="Known issues" />
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-6 md:p-8">
            <ul className="space-y-3">
              {knownIssues.map((issue) => (
                <li
                  key={issue}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-text-secondary"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-light" />
                  {issue}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background-secondary px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[720px] text-center">
          <SectionHeading title="Beta expectations" />
          <p className="text-[15px] leading-relaxed text-text-secondary">
            This is an early beta. Things may break, change quickly, or feel
            unfinished. The goal is to find bugs, improve the flow, and make
            Synema easier to use before public launch.
          </p>
        </div>
      </section>
    </main>
  );
}
