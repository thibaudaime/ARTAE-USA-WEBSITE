import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Story() {
  const t = useTranslations("about.story");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <SectionTitle eyebrow={t("eyebrow")} title={t("title")} />

        <div className="flex flex-col gap-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-ink/70">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <PlaceholderImage className="mx-6 h-72 rounded-2xl lg:mx-auto lg:h-96 lg:max-w-6xl" />
      <div className="h-20" />
    </section>
  );
}
