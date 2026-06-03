"use client";

import Link from "next/link";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function ReassuranceBlock() {
  const { messages } = useLanguage();

  return (
    <section className="py-16 border-t border-[rgba(28,43,33,0.08)] bg-[#F8F9F6]">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-10">

        {/* Reviews placeholder — à remplacer par les vrais avis lors de l'implémentation page par page */}
        <div>
          <h2 className="font-[family-name:var(--font-title)] text-2xl font-semibold text-[#1C2B21] mb-6">
            {messages.reassurance.reviewsTitle}
          </h2>
          {/* Les avis seront injectés ici depuis reviewsData */}
        </div>

        {/* CTA contact */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-[rgba(108,154,139,0.08)] border border-[rgba(108,154,139,0.14)]">
          <h3 className="font-[family-name:var(--font-title)] text-xl font-semibold text-[#1C2B21]">
            {messages.reassurance.contactTitle}
          </h3>
          <Link
            href="/contact"
            className="shrink-0 inline-block px-7 py-3 rounded-full bg-[#1C2B21] text-[#F8F9F6] text-sm font-medium font-[family-name:var(--font-body)] hover:bg-[#2d4a37] transition-colors"
          >
            {messages.reassurance.contactCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
