import React from "react";
import { ArrowRight } from "lucide-react";
import { useContactVisibility } from "@/hooks/useContactVisibility";

const FAQSection = () => {
  const shouldShowContact = useContactVisibility();

  if (!shouldShowContact) {
    return null;
  }

  return (
    <section id="cta" className="bg-[#F9FBFF]">
      <div className="container">
        <div className="rounded-[36px] border border-white/70 bg-gradient-to-br from-white via-[#fff7f0] to-white px-8 py-12 shadow-[0_45px_120px_-80px_rgba(15,23,42,0.55)] md:px-16 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d85a1a]">Next step</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Let&rsquo;s build something great together -- Book a free consultation.
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Tell me about your product, timelines, and must-have workflows. I&rsquo;ll review everything and send over a plan, cost
            estimate, and build approach within one business day.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff8c4c] via-[#f96f4a] to-[#ffb347] px-8 py-4 text-base font-semibold text-white shadow-[0_22px_45px_rgba(249,111,74,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_28px_60px_rgba(249,111,74,0.45)]"
            >
              Book a free consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=923152637573"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#ffd3bf] px-8 py-4 text-base font-semibold text-[#d85a1a] transition hover:border-[#ff8c4c] hover:bg-[#fff1e8] hover:text-[#ff8c4c]"
            >
              Message me on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
