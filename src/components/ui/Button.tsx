import type { ComponentPropsWithoutRef } from "react";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "gold" | "outline" | "outline-light";

const variantClasses: Record<Variant, string> = {
  primary: "bg-black text-gold hover:bg-black/90",
  gold: "bg-mustard text-ink hover:bg-gold",
  outline: "border border-ink/20 text-ink hover:border-ink/40",
  "outline-light": "border border-white/30 text-white hover:border-white/60",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-heading text-sm font-semibold transition-colors";

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

type LinkProps = ComponentPropsWithoutRef<typeof Link>;

type ButtonAsLink = CommonProps & {
  href: LinkProps["href"];
} & Omit<LinkProps, "href" | "className" | "children">;

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
