import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { portfolioProjects } from "../src/data/projects";
import {
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  buildCanonicalUrl,
  toAbsoluteUrl,
} from "../src/lib/seo";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");
const templatePath = path.join(distDir, "index.html");

let lineEnding = "\n";

try {
  const template = await fs.readFile(templatePath, "utf8");
  lineEnding = template.includes("\r\n") ? "\r\n" : "\n";

  for (const project of portfolioProjects) {
    const canonicalUrl = buildCanonicalUrl(`/portfolio/${project.slug}`);
    const pageTitle = `${project.title} | Portfolio Case Study | ${SITE_NAME}`;
    const description =
      project.heroTagline ?? project.excerpt ?? DEFAULT_DESCRIPTION;
    const ogImage = toAbsoluteUrl(project.heroImage ?? project.image);
    const imageAlt = `${project.title} showcase image`;

    let pageHtml = template;
    pageHtml = setTitle(pageHtml, pageTitle);
    pageHtml = setMeta(pageHtml, "name", "description", description, lineEnding);
    pageHtml = setMeta(pageHtml, "property", "og:title", pageTitle, lineEnding);
    pageHtml = setMeta(
      pageHtml,
      "property",
      "og:description",
      description,
      lineEnding
    );
    pageHtml = setMeta(pageHtml, "property", "og:type", "article", lineEnding);
    pageHtml = setMeta(pageHtml, "property", "og:image", ogImage, lineEnding);
    pageHtml = setMeta(
      pageHtml,
      "property",
      "og:image:alt",
      imageAlt,
      lineEnding
    );
    pageHtml = setMeta(pageHtml, "name", "twitter:title", pageTitle, lineEnding);
    pageHtml = setMeta(
      pageHtml,
      "name",
      "twitter:description",
      description,
      lineEnding
    );
    pageHtml = setMeta(pageHtml, "name", "twitter:image", ogImage, lineEnding);
    pageHtml = setMeta(
      pageHtml,
      "name",
      "twitter:image:alt",
      imageAlt,
      lineEnding
    );
    pageHtml = ensureCanonical(pageHtml, canonicalUrl, lineEnding);
    pageHtml = ensureOgUrl(pageHtml, canonicalUrl, lineEnding);
    pageHtml = injectStructuredData(
      pageHtml,
      buildStructuredData({
        canonicalUrl,
        description,
        ogImage,
        title: project.title,
        tags: project.tags,
      }),
      lineEnding
    );

    const normalizedHtml = normalizeEol(pageHtml, lineEnding);
    const outputDir = path.join(distDir, "portfolio", project.slug);
    await fs.mkdir(outputDir, { recursive: true });
    await fs.writeFile(
      path.join(outputDir, "index.html"),
      normalizedHtml,
      "utf8"
    );
  }
} catch (error) {
  console.error("Failed to generate share pages:", error);
  process.exitCode = 1;
}

function setTitle(html: string, value: string) {
  const escaped = escapeHtml(value);
  return html.replace(/<title>.*<\/title>/, `<title>${escaped}</title>`);
}

function setMeta(
  html: string,
  attr: "name" | "property",
  key: string,
  value: string,
  lineEnding: string
) {
  const escaped = escapeHtml(value);
  const regex = new RegExp(
    `(<meta[^>]+${attr}="${key}"[^>]+content=")([^"]*)(")`,
    "i"
  );

  if (regex.test(html)) {
    return html.replace(regex, `$1${escaped}$3`);
  }

  const metaTag = `    <meta ${attr}="${key}" content="${escaped}" />`;
  return html.replace("</head>", `${metaTag}${lineEnding}</head>`);
}

function ensureCanonical(html: string, canonicalUrl: string, lineEnding: string) {
  const escapedUrl = escapeHtml(canonicalUrl);
  const canonicalTag = `    <link rel="canonical" href="${escapedUrl}" />`;
  const regex = /<link\s+rel="canonical"[^>]*>/i;

  if (regex.test(html)) {
    return html.replace(regex, canonicalTag);
  }

  return html.replace(
    /<title>.*<\/title>/,
    (match) => `${match}${lineEnding}${canonicalTag}`
  );
}

function ensureOgUrl(html: string, canonicalUrl: string, lineEnding: string) {
  const escapedUrl = escapeHtml(canonicalUrl);
  const ogUrlTag = `    <meta property="og:url" content="${escapedUrl}" />`;
  const regex = /<meta[^>]+property="og:url"[^>]*>/i;

  if (regex.test(html)) {
    return setMeta(html, "property", "og:url", canonicalUrl, lineEnding);
  }

  return html.replace(
    /<meta[^>]+property="og:type"[^>]*>/i,
    (match) => `${match}${lineEnding}${ogUrlTag}`
  );
}

function injectStructuredData(
  html: string,
  data: Record<string, unknown>,
  lineEnding: string
) {
  const json = JSON.stringify(data, null, 2);
  const formattedJson = json
    .split("\n")
    .map((line) => `      ${line}`)
    .join(lineEnding);
  const scriptBlock = `    <script type="application/ld+json">${lineEnding}${formattedJson}${lineEnding}    </script>`;
  const marker = / {4}<script type="module" crossorigin src="[^"]+"><\/script>/i;

  if (marker.test(html)) {
    return html.replace(
      marker,
      `${scriptBlock}${lineEnding}$&`
    );
  }

  return html.replace(
    "</head>",
    `${scriptBlock}${lineEnding}  </head>`
  );
}

function buildStructuredData(params: {
  canonicalUrl: string;
  description: string;
  ogImage: string;
  title: string;
  tags: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: params.title,
    headline: params.title,
    description: params.description,
    url: params.canonicalUrl,
    image: [params.ogImage],
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: params.tags,
    keywords: params.tags,
    inLanguage: "en",
  };
}

function escapeHtml(raw: string) {
  return raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeEol(html: string, lineEnding: string) {
  return html.replace(/\r?\n/g, "\n").replace(/\n/g, lineEnding);
}
