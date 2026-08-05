import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { KeyNumbers } from "@/components/sections/KeyNumbers";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBanner } from "@/components/sections/CtaBanner";

function HomeCta() {
  const t = useTranslations("home.cta");
  return <CtaBanner title={t("title")} subtitle={t("subtitle")} button={t("button")} />;
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <KeyNumbers />
      <ServicesOverview />
      <FeaturedProjects />
      <Testimonials />
      <FAQ />
      <HomeCta />
    </>
  );
}
