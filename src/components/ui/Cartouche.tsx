interface CartoucheProps {
  children: React.ReactNode;
  tone?: "gold" | "olive";
  className?: string;
}

const toneClasses: Record<NonNullable<CartoucheProps["tone"]>, string> = {
  gold: "bg-gold text-black",
  olive: "bg-olive text-white",
};

/**
 * Rounded color block used for eyebrows/accent words, per the brand
 * guideline's "cartouche de couleur à bords arrondis".
 */
export function Cartouche({ children, tone = "gold", className = "" }: CartoucheProps) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-lg px-3 py-1 font-heading text-xs font-semibold uppercase tracking-widest ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
