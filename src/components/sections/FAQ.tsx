"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface FaqItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const t = useTranslations("home.faq");
  const items = t.raw("items") as FaqItem[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <SectionTitle eyebrow={t("eyebrow")} title={t("title")} align="center" />

        <div className="mt-12 flex flex-col divide-y divide-ink/10 rounded-2xl bg-white">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="px-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-heading text-base font-semibold text-ink">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 text-xl text-gold transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen ? (
                  <p className="pb-5 text-sm leading-relaxed text-ink/70">
                    {item.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
