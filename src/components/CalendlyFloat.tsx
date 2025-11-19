import React from 'react';
import { CalendarCheck } from "lucide-react";
import { buildCalendlyLink } from "@/lib/calendly";
import { useContactVisibility } from "@/hooks/useContactVisibility";

const getCurrentFormData = () => {
  const nameInput = document.getElementById("name") as HTMLInputElement | null;
  const emailInput = document.getElementById("email") as HTMLInputElement | null;
  const messageInput = document.getElementById("message") as HTMLTextAreaElement | null;

  return {
    name: nameInput?.value,
    email: emailInput?.value,
    message: messageInput?.value,
  };
};

const CalendlyFloat = () => {
  const shouldShowContact = useContactVisibility();

  if (!shouldShowContact) {
    return null;
  }

  const handleClick = () => {
    const calendlyLink = buildCalendlyLink(getCurrentFormData());
    window.open(calendlyLink, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Book a discovery call"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border border-white/20 bg-gradient-to-r from-theme-blue to-theme-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(0,85,255,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_25px_50px_rgba(0,85,255,0.45)] focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-white"
    >
      <CalendarCheck className="h-4 w-4" aria-hidden="true" />
      <span>Book a call</span>
    </button>
  );
};

export default CalendlyFloat;
