import { Cartouche } from "@/components/ui/Cartouche";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-black">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-24 text-center lg:px-8">
        <Cartouche className="mx-auto">{eyebrow}</Cartouche>
        <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-lg text-white/70">{subtitle}</p>
      </div>
    </section>
  );
}
