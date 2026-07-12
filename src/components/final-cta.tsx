import { WaitlistForm } from "./waitlist-form";

export function FinalCTA() {
  return (
    <section id="waitlist" className="px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="rounded-3xl bg-gradient-primary p-10 text-center md:p-16">
          <h2 className="text-[28px] font-bold tracking-tight md:text-[36px]">
            Ready for better movie nights?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/80">
            Join the waitlist and we&apos;ll notify you when Synema launches.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center">
            <WaitlistForm variant="cta" platform="both" />
          </div>
        </div>
      </div>
    </section>
  );
}
