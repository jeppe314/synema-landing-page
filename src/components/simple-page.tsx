import Link from "next/link";

interface SimplePageProps {
  title: string;
  children: React.ReactNode;
}

export function SimplePage({ title, children }: SimplePageProps) {
  return (
    <main className="flex-1 px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[720px]">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-text-secondary transition-colors hover:text-text"
        >
          ← Back to home
        </Link>
        <h1 className="text-[32px] font-bold tracking-tight">{title}</h1>
        <div className="prose-synema mt-8 space-y-4 text-[15px] leading-relaxed text-text-secondary">
          {children}
        </div>
      </div>
    </main>
  );
}
