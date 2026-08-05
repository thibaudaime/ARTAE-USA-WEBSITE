import type { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
}

export function Input({ label, id, className = "", ...props }: InputProps) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-ink" htmlFor={id}>
      {label}
      <input
        id={id}
        className={`rounded-xl border border-ink/15 bg-white px-4 py-3 text-base text-ink outline-none transition-colors focus:border-gold ${className}`}
        {...props}
      />
    </label>
  );
}
