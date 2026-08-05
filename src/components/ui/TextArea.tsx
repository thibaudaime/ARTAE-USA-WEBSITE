import type { ComponentPropsWithoutRef } from "react";

interface TextAreaProps extends ComponentPropsWithoutRef<"textarea"> {
  label: string;
}

export function TextArea({ label, id, className = "", ...props }: TextAreaProps) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-ink" htmlFor={id}>
      {label}
      <textarea
        id={id}
        rows={5}
        className={`resize-none rounded-xl border border-ink/15 bg-white px-4 py-3 text-base text-ink outline-none transition-colors focus:border-gold ${className}`}
        {...props}
      />
    </label>
  );
}
