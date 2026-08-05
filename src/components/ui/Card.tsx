interface CardProps {
  tone?: "dark" | "mustard" | "light";
  className?: string;
  children: React.ReactNode;
}

const toneClasses: Record<NonNullable<CardProps["tone"]>, string> = {
  dark: "bg-black text-white",
  mustard: "bg-mustard text-ink",
  light: "bg-white text-ink shadow-sm shadow-black/5",
};

export function Card({ tone = "light", className = "", children }: CardProps) {
  return (
    <div className={`rounded-2xl p-8 ${toneClasses[tone]} ${className}`}>
      {children}
    </div>
  );
}
