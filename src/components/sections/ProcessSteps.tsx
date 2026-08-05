import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface Step {
  number: string;
  title: string;
  description: string;
}

export function ProcessSteps() {
  const t = useTranslations("services.steps");
  const items = t.raw("items") as Step[];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-3 rounded-2xl bg-cream p-8"
            >
              <span className="font-display text-3xl font-bold text-gold">
                {step.number}
              </span>
              <h3 className="font-heading text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
