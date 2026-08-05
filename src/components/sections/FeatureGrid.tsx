import { SectionTitle } from "@/components/ui/SectionTitle";

interface Feature {
  title: string;
  description: string;
}

interface FeatureGridProps {
  eyebrow: string;
  title: string;
  items: Feature[];
  tone?: "cream" | "white";
}

export function FeatureGrid({ eyebrow, title, items, tone = "cream" }: FeatureGridProps) {
  return (
    <section className={tone === "cream" ? "bg-cream" : "bg-white"}>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle eyebrow={eyebrow} title={title} align="center" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl bg-white p-6 text-center shadow-sm shadow-black/5"
            >
              <span className="mx-auto h-1 w-8 rounded-full bg-olive" aria-hidden />
              <h3 className="font-heading text-base font-semibold text-ink">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
