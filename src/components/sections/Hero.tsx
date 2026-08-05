import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(201,162,39,0.25),transparent_55%),radial-gradient(circle_at_10%_100%,rgba(139,142,62,0.25),transparent_55%)]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-28 lg:px-8 lg:py-40">
        <span className="font-heading text-sm font-semibold uppercase tracking-widest text-mustard">
          {t("eyebrow")}
        </span>
        <h1 className="max-w-3xl font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          {t("title")}
        </h1>
        <p className="max-w-xl text-lg text-white/70">{t("subtitle")}</p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href="/contact" variant="primary">
            {t("ctaPrimary")}
          </Button>
          <Button href="/services" variant="outline-light">
            {t("ctaSecondary")}
          </Button>
        </div>

        <div className="flex items-center gap-2 pt-4">
          <span className="text-mustard" aria-hidden>
            ★★★★★
          </span>
          <p className="text-sm text-white/60">{t("ratingText")}</p>
        </div>
      </div>
    </section>
  );
}
