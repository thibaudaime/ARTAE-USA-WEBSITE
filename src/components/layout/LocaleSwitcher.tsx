"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

interface LocaleSwitcherProps {
  light?: boolean;
}

export function LocaleSwitcher({ light = true }: LocaleSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={`flex items-center gap-1 rounded-full border px-1 py-1 text-xs font-semibold ${
        light ? "border-white/20" : "border-ink/15"
      }`}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          aria-current={loc === locale}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            loc === locale
              ? "bg-gold text-black"
              : light
                ? "text-white/70 hover:text-white"
                : "text-ink/60 hover:text-ink"
          }`}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
