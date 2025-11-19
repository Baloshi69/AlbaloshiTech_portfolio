import { useEffect, useState } from "react";

const CONTACT_RESTRICTED_DOMAIN = "nasirnawaz.com";

const shouldHideContactForHost = (host?: string) => {
  if (!host) {
    return false;
  }

  const normalized = host.toLowerCase();
  return (
    normalized === CONTACT_RESTRICTED_DOMAIN ||
    normalized.endsWith(`.${CONTACT_RESTRICTED_DOMAIN}`)
  );
};

export const useContactVisibility = () => {
  const [shouldShowContact, setShouldShowContact] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }
    return !shouldHideContactForHost(window.location.hostname);
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    setShouldShowContact(!shouldHideContactForHost(window.location.hostname));
  }, []);

  return shouldShowContact;
};

export const isContactAllowed = () => {
  if (typeof window === "undefined") {
    return true;
  }

  return !shouldHideContactForHost(window.location.hostname);
};

export { CONTACT_RESTRICTED_DOMAIN };
