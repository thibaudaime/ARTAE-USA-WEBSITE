"use client";

import { useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const locale = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });

      if (!res.ok) throw new Error("request_failed");

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input
        id="name"
        label={t("nameLabel")}
        placeholder={t("namePlaceholder")}
        required
        value={form.name}
        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
      />
      <Input
        id="email"
        type="email"
        label={t("emailLabel")}
        placeholder={t("emailPlaceholder")}
        required
        value={form.email}
        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
      />
      <Input
        id="phone"
        type="tel"
        label={t("phoneLabel")}
        placeholder={t("phonePlaceholder")}
        value={form.phone}
        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
      />
      <TextArea
        id="message"
        label={t("messageLabel")}
        placeholder={t("messagePlaceholder")}
        required
        minLength={10}
        value={form.message}
        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
      />

      <Button
        type="submit"
        variant="primary"
        disabled={status === "submitting"}
        className="self-start disabled:opacity-60"
      >
        {status === "submitting" ? t("submitting") : t("submit")}
      </Button>

      {status === "success" ? (
        <p className="text-sm font-medium text-olive">{t("success")}</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm font-medium text-red-600">{t("error")}</p>
      ) : null}
    </form>
  );
}
