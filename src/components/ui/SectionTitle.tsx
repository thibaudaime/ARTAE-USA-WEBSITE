interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionTitleProps) {
  const alignClasses = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClasses}`}>
      {eyebrow ? (
        <span
          className={`font-heading text-sm font-semibold uppercase tracking-widest ${
            light ? "text-mustard" : "text-gold"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`font-heading text-3xl font-bold sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <span className="h-1 w-16 rounded-full bg-olive" aria-hidden />
      {subtitle ? (
        <p className={`text-base ${light ? "text-white/70" : "text-ink/70"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
