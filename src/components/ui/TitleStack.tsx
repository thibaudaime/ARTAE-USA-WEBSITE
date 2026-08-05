interface TitleStackProps {
  title: string;
  subtitle: string;
  className?: string;
}

/**
 * "Titre / sous-titre" overlap-and-tilt treatment from the brand guideline:
 * a beige cartouche (slightly rotated) with a second, olive cartouche
 * overlapping it below-right.
 */
export function TitleStack({ title, subtitle, className = "" }: TitleStackProps) {
  return (
    <div className={`relative flex w-fit flex-col ${className}`}>
      <span className="w-fit -rotate-2 rounded-lg bg-gold px-4 py-1.5 font-display text-2xl font-bold text-black shadow-sm sm:text-3xl">
        {title}
      </span>
      <span className="relative z-10 -mt-2 ml-6 w-fit max-w-[14rem] rounded-lg bg-olive px-3 py-1.5 text-xs font-semibold leading-snug text-white shadow-sm">
        {subtitle}
      </span>
    </div>
  );
}
