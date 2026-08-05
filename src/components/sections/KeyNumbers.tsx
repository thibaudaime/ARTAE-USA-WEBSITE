import { useTranslations } from "next-intl";
import { TitleStack } from "@/components/ui/TitleStack";

export function KeyNumbers() {
  const t = useTranslations("home.stats");
  const items = t.raw("items") as { value: string; label: string }[];

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {items.map((item) => (
            <TitleStack key={item.label} title={item.value} subtitle={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
