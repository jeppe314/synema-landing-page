import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComparisonArticle } from "@/components/comparison-article";
import { GuideProgress } from "@/components/guide-progress";
import { GuideView } from "@/components/guide-view";
import {
  comparisonMetadata,
  comparisons,
  getComparison,
} from "@/lib/comparisons";

interface ComparisonPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return comparisons.map((comparison) => ({ slug: comparison.slug }));
}

export async function generateMetadata({
  params,
}: ComparisonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) notFound();
  return comparisonMetadata(comparison);
}

export default async function ComparisonPage({ params }: ComparisonPageProps) {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) notFound();

  return (
    <>
      <GuideView slug={comparison.slug} event="comparison_view" />
      <GuideProgress />
      <ComparisonArticle comparison={comparison} />
    </>
  );
}
