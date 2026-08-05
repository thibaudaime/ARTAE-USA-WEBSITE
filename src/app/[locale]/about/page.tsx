import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Story } from "@/components/sections/Story";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.hero" });
  return { title: t("title"), description: t("subtitle") };
}

function AboutHero() {
  const t = useTranslations("about.hero");
  return (
    <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />
  );
}

function Values() {
  const t = useTranslations("about.values");
  const items = t.raw("items") as { title: string; description: string }[];
  return (
    <FeatureGrid eyebrow={t("eyebrow")} title={t("title")} items={items} tone="cream" />
  );
}

function AboutCta() {
  const t = useTranslations("about.cta");
  return <CtaBanner title={t("title")} subtitle={t("subtitle")} button={t("button")} />;
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <AboutHero />
      <Story />
      <Values />
      <AboutCta />
    </>
  );
}
