import React from 'react';
import { CalendarCheck } from "lucide-react";
import { buildCalendlyLink } from "@/lib/calendly";

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
  const handleClick = () => {
    const calendlyLink = buildCalendlyLink(getCurrentFormData());
    window.open(calendlyLink, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Book a discovery call"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-theme-accent/40 bg-theme-dark text-theme-light shadow-[0_12px_24px_-14px_rgba(35,229,176,0.65)] transition-transform hover:scale-105 hover:shadow-[0_18px_28px_-12px_rgba(35,229,176,0.85)] focus:outline-none focus:ring-2 focus:ring-theme-accent/80 focus:ring-offset-2 focus:ring-offset-theme-dark"
    >
      <CalendarCheck className="h-5 w-5 text-theme-accent" aria-hidden="true" />
    </button>
  );
};

export default CalendlyFloat;
