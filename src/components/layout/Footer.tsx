import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const company = useTranslations("company");
  const year = new Date().getFullYear();

  const serviceLinks = [
    { href: "/services", label: nav("services") },
    { href: "/about", label: nav("about") },
    { href: "/contact", label: nav("contact") },
  ] as const;

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-bold text-gold">artae</span>
              <span className="font-heading text-xs font-medium tracking-[0.3em] text-white">
                USA
              </span>
            </Link>
            <p className="text-sm text-white/60">{t("tagline")}</p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-heading text-sm font-semibold text-white">
              {t("servicesTitle")}
            </span>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-heading text-sm font-semibold text-white">
              {t("contactTitle")}
            </span>
            <div className="flex flex-col gap-1 text-sm text-white/60">
              <span>{t("addressLabel")}</span>
              <span className="text-white/80">{company("addressLine1")}</span>
              <span className="text-white/80">{company("addressLine2")}</span>
            </div>
            <div className="flex flex-col gap-1 text-sm text-white/60">
              <span>{t("emailLabel")}</span>
              <a
                href={`mailto:${company("email")}`}
                className="text-white/80 hover:text-white"
              >
                {company("email")}
              </a>
            </div>
            <div className="flex flex-col gap-1 text-sm text-white/60">
              <span>{t("phoneLabel")}</span>
              <a
                href={`tel:${company("phone")}`}
                className="text-white/80 hover:text-white"
              >
                {company("phone")}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-heading text-sm font-semibold text-white">
              {t("newsletterTitle")}
            </span>
            <p className="text-sm text-white/60">{t("newsletterSubtitle")}</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-4 pt-8 text-sm text-white/50 sm:flex-row">
          <p>{t("rights", { year })}</p>
          <div className="flex items-center gap-6">
            <span className="cursor-default hover:text-white/70">{t("legal")}</span>
            <span className="cursor-default hover:text-white/70">{t("privacy")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
