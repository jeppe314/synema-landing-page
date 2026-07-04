import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-gradient text-[72px] font-bold leading-none tracking-tight sm:text-[96px]">
          404
        </p>
        <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">
          This page doesn&apos;t exist or may have moved. Head back home and keep
          looking for your next movie night.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
