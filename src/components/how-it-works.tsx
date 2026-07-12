import { ScreenshotFrame } from "./screenshot-frame";

const steps = [
  {
    title: "Create Room",
    description: "Create a room and invite your friends with a link or QR code.",
    screenshot: "/screenshots/create-room.png",
    alt: "Synema create room screen showing With friends and Just me options",
  },
  {
    title: "Swipe Together",
    description: "Everyone swipes movies in real time. Likes are shared instantly.",
    screenshot: "/screenshots/swipe-movies.png",
    alt: "Synema swipe screen showing The Dark Knight movie card",
  },
  {
    title: "It's a Match",
    description: "When everyone likes the same movie, it's a match. No more endless scrolling.",
    screenshot: "/screenshots/match.png",
    alt: "Synema swipe screen with a WATCH stamp showing a group match moment",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-5 py-14 sm:px-6 sm:py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-10 text-center text-[28px] font-bold tracking-tight sm:mb-14 sm:text-[32px]">
          How it works
        </h2>
        <div className="grid gap-10 sm:gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <ScreenshotFrame
                src={step.screenshot}
                alt={step.alt}
                priority={i === 0}
              />
              <h3 className="mt-8 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
