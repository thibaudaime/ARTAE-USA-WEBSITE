import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.hero" });
  return { title: t("title"), description: t("subtitle") };
}

function ContactHero() {
  const t = useTranslations("contact.hero");
  return (
    <PageHero eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />
  );
}

function ContactInfo() {
  const t = useTranslations("contact.info");
  const company = useTranslations("company");

  return (
    <div className="flex flex-col gap-8 rounded-2xl bg-black p-8 text-white">
      <h2 className="font-heading text-xl font-semibold">{t("title")}</h2>

      <div className="flex flex-col gap-1">
        <span className="text-sm text-white/50">{t("addressLabel")}</span>
        <span className="text-white/90">{company("addressLine1")}</span>
        <span className="text-white/90">{company("addressLine2")}</span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-sm text-white/50">{t("emailLabel")}</span>
        <a
          href={`mailto:${company("email")}`}
          className="text-gold hover:underline"
        >
          {company("email")}
        </a>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-sm text-white/50">{t("phoneLabel")}</span>
        <a href={`tel:${company("phone")}`} className="text-white/90">
          {company("phone")}
        </a>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-sm text-white/50">{t("hoursLabel")}</span>
        <span className="text-white/90">{t("hoursValue")}</span>
      </div>
    </div>
  );
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ContactHero />
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-sm shadow-black/5">
            <ContactForm />
          </div>
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
