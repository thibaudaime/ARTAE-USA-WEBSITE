import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.hero" });
  return { title: t("title"), description: t("subtitle") };
}

function ServicesHero() {
  const t = useTranslations("services.hero");
  return (
    <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />
  );
}

function WhyUs() {
  const t = useTranslations("services.whyUs");
  const items = t.raw("items") as { title: string; description: string }[];
  return <FeatureGrid eyebrow={t("eyebrow")} title={t("title")} items={items} />;
}

function ServicesCta() {
  const t = useTranslations("services.cta");
  return <CtaBanner title={t("title")} subtitle={t("subtitle")} button={t("button")} />;
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ServicesHero />
      <ProcessSteps />
      <WhyUs />
      <ServicesCta />
    </>
  );
}
