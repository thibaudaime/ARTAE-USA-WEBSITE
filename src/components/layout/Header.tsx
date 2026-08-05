"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { Button } from "@/components/ui/Button";

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t("home") },
    { href: "/services", label: t("services") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-bold text-gold">artae</span>
          <span className="font-heading text-xs font-medium tracking-[0.3em] text-white">
            USA
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LocaleSwitcher />
          <Button href="/contact" variant="primary">
            {t("cta")}
          </Button>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </div>

      {open ? (
        <div className="flex flex-col gap-6 border-t border-white/10 px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-heading text-base font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between gap-4">
            <LocaleSwitcher />
            <Button href="/contact" variant="primary" onClick={() => setOpen(false)}>
              {t("cta")}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
