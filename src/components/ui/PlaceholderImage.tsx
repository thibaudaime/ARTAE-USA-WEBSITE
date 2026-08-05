interface PlaceholderImageProps {
  label?: string;
  className?: string;
}

export function PlaceholderImage({ label, className = "" }: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-ink to-olive/60 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,39,0.35),transparent_60%)]" />
      {label ? (
        <span className="relative font-display text-sm tracking-wide text-white/50">
          {label}
        </span>
      ) : null}
    </div>
  );
}
