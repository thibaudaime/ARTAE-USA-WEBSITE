import { Button } from "@/components/ui/Button";

interface CtaBannerProps {
  title: string;
  subtitle: string;
  button: string;
}

export function CtaBanner({ title, subtitle, button }: CtaBannerProps) {
  return (
    <section className="bg-black">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-20 text-center lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-white/70">{subtitle}</p>
        <Button href="/contact" variant="gold">
          {button}
        </Button>
      </div>
    </section>
  );
}
