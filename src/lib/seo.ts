export const SITE_URL = "https://albaloshi.tech";

export const DEFAULT_TITLE = "AlBaloshiTech | No-Code & Automation Studio";
export const DEFAULT_DESCRIPTION =
  "Building products at the speed of ideas with No-Code, Vibe Coding, and Automation.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;
export const SITE_NAME = "AlBaloshiTech";
export const TWITTER_HANDLE = "@BaloShi69";

export const buildCanonicalUrl = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
};

export const toAbsoluteUrl = (path: string | undefined) => {
  if (!path) {
    return DEFAULT_OG_IMAGE;
  }

  if (/^https?:\/\//i.test(path)) {
    return encodeURI(path);
  }

  return encodeURI(buildCanonicalUrl(path));
};
