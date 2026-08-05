import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export function Testimonials() {
  const t = useTranslations("home.testimonials");
  const items = t.raw("items") as Testimonial[];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle eyebrow={t("eyebrow")} title={t("title")} align="center" />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <figure
              key={item.author}
              className="flex flex-col gap-4 rounded-2xl bg-cream p-8"
            >
              <span className="text-mustard" aria-hidden>
                ★★★★★
              </span>
              <blockquote className="text-sm leading-relaxed text-ink/80">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-auto">
                <p className="font-heading text-sm font-semibold text-ink">
                  {item.author}
                </p>
                <p className="text-xs text-ink/50">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
