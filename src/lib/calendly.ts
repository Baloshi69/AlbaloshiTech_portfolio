export const CALENDLY_URL = "https://calendly.com/albaloshitech/project-discussion";

type CalendlyPrefill = {
  name?: string;
  email?: string;
  message?: string;
};

export const buildCalendlyLink = (prefill: CalendlyPrefill = {}) => {
  const params = new URLSearchParams();

  if (prefill.name && prefill.name.trim()) {
    params.set("name", prefill.name.trim());
  }

  if (prefill.email && prefill.email.trim()) {
    params.set("email", prefill.email.trim());
  }

  if (prefill.message && prefill.message.trim()) {
    params.set("a1", prefill.message.trim());
  }

  const query = params.toString();
  return query ? `${CALENDLY_URL}?${query}` : CALENDLY_URL;
};
