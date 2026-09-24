import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/guide-article";
import { GuideProgress } from "@/components/guide-progress";
import { GuideView } from "@/components/guide-view";
import { getGuide, guideMetadata, guides } from "@/lib/guides";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  return guideMetadata(guide);
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <>
      <GuideView slug={guide.slug} />
      <GuideProgress />
      <GuideArticle guide={guide} />
    </>
  );
}
