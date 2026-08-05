"use client";

import { useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterForm() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale }),
      });

      if (!res.ok) throw new Error("request_failed");

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("newsletterPlaceholder")}
        className="w-full rounded-full border border-white/20 bg-transparent px-5 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-gold sm:max-w-xs"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-gold px-6 py-3 font-heading text-sm font-semibold text-black transition-opacity disabled:opacity-60"
      >
        {t("newsletterSubmit")}
      </button>
      {status === "success" ? (
        <p className="text-sm text-olive sm:self-center">{t("newsletterSuccess")}</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-400 sm:self-center">{t("newsletterError")}</p>
      ) : null}
    </form>
  );
}
