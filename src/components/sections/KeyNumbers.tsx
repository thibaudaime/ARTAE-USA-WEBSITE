import { useTranslations } from "next-intl";

export function KeyNumbers() {
  const t = useTranslations("home.stats");
  const items = t.raw("items") as { value: string; label: string }[];

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <span className="font-display text-4xl font-bold text-gold sm:text-5xl">
                {item.value}
              </span>
              <span className="text-sm text-ink/70">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
