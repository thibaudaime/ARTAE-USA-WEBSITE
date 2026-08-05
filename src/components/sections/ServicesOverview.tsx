import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const icons = ["🏠", "🛠️", "🛋️", "🔑"];

export function ServicesOverview() {
  const t = useTranslations("home.services");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((item, index) => (
            <Card key={item.title} tone={index % 2 === 0 ? "dark" : "mustard"}>
              <span className="text-3xl" aria-hidden>
                {icons[index]}
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold">
                {item.title}
              </h3>
              <p
                className={`mt-3 text-sm ${
                  index % 2 === 0 ? "text-white/70" : "text-ink/80"
                }`}
              >
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/services" variant="outline">
            {t("cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
