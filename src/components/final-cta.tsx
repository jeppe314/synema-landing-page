export function FinalCTA() {
  return (
    <section id="download" className="px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="rounded-3xl bg-gradient-primary p-10 text-center md:p-16">
          <h2 className="text-[28px] font-bold tracking-tight md:text-[36px]">
            Ready for better movie nights?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/80">
            Download Synema and find your next favorite.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-transform hover:scale-[1.02] sm:w-auto"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.004 1.004 0 01-.61-.92V2.734a1.004 1.004 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              Get it on Google Play
            </a>
            <a
              href="mailto:hello@synemaapp.com?subject=iOS%20Waitlist"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/30 px-6 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.02] hover:border-white/50 sm:w-auto"
            >
              Notify me for iOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
