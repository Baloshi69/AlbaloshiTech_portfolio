import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPortfolioProjects } from "@/data/projects";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  TWITTER_HANDLE,
  buildCanonicalUrl,
} from "@/lib/seo";

const FALLBACK_GRADIENT =
  "linear-gradient(135deg, #111827 0%, #1f2937 60%, #0f172a 100%)";

const shouldUseDarkText = (gradient?: string) => {
  if (!gradient) return false;
  const hexMatches = gradient.toLowerCase().match(/#([0-9a-f]{3,8})/gi);
  if (!hexMatches) return false;

  const luminanceScores = hexMatches.map((match) => {
    let hex = match.slice(1);
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((char) => char + char)
        .join("");
    }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  });

  const maxLuminance = Math.max(...luminanceScores);
  return maxLuminance > 0.75;
};

const PortfolioList: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname + location.search + location.hash;
  const projects = getPortfolioProjects();
  const canonicalUrl = buildCanonicalUrl("/portfolio");
  const pageTitle = "Portfolio | Nasir Nawaz";
  const pageDescription =
    "Explore shipped no-code, low-code, and automation products crafted for high-velocity founders and operators.";
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Nasir Nawaz Portfolio",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: buildCanonicalUrl(`/portfolio/${project.slug}`),
      name: project.title,
      description: project.excerpt,
    })),
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:image:alt" content="Nasir Nawaz logo with tagline" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={TWITTER_HANDLE} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <meta name="twitter:image:alt" content="Nasir Nawaz logo with tagline" />
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-[#F9FBFF] text-slate-900">
        <Navbar />
        <main className="pt-28 pb-20">
          <div className="container space-y-16">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h1 className="text-4xl sm:text-5xl font-bold">Our Work</h1>
              <p className="text-slate-600 text-lg">
                Explore no-code and low-code products we have shipped for founders
                and operators around the world. Each engagement pairs rapid
                delivery with durable systems that scale.
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => {
                const detailLinkState = { from: currentPath };
                const accentGradient = project.backgroundGradient ?? FALLBACK_GRADIENT;
                const accentStyle = { background: accentGradient };
                const useDarkText = shouldUseDarkText(accentGradient);
                const tagWrapClass = useDarkText
                  ? "flex flex-wrap gap-2 text-xs font-semibold text-slate-900/90"
                  : "flex flex-wrap gap-2 text-xs font-semibold text-white/80";
                const tagClass = useDarkText
                  ? "rounded-full bg-white/80 px-3 py-1 text-slate-900 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.65)]"
                  : "rounded-full bg-white/20 px-3 py-1 text-white/90";
                const headingClass = useDarkText ? "text-2xl font-semibold text-slate-900" : "text-2xl font-semibold text-white";
                const excerptClass = useDarkText ? "text-sm leading-relaxed text-slate-700" : "text-sm leading-relaxed text-white/85";
                const listClass = useDarkText ? "mt-5 space-y-2 text-sm text-slate-800" : "mt-5 space-y-2 text-sm text-white/90";
                const arrowClass = useDarkText ? "mt-0.5 h-4 w-4 text-slate-900" : "mt-0.5 h-4 w-4 text-white";
                const ctaBase =
                  "mt-auto inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
                const linkClass = useDarkText
                  ? `${ctaBase} bg-slate-900/5 text-slate-900 ring-slate-900/25 ring-offset-white hover:bg-slate-900/10`
                  : `${ctaBase} bg-white/20 text-white ring-white/40 ring-offset-transparent hover:bg-white/30`;
                const excerpt =
                  project.excerpt?.replace(/\s*\n\s*/g, " ").trim() ??
                  project.description?.[0] ??
                  "";
                const highlightItems =
                  project.services?.slice(0, 3) ??
                  project.outcomes?.slice(0, 3) ??
                  project.description?.slice(0, 3) ??
                  [];

                return (
                  <article
                    key={project.slug}
                    className="group relative"
                  >
                    <div
                      className="pointer-events-none absolute -inset-3 rounded-[40px] opacity-50 blur-[65px] transition duration-500 group-hover:opacity-70"
                      style={accentStyle}
                      aria-hidden="true"
                    />
                    <div
                      className={`relative flex h-full flex-col rounded-[32px] border border-white/30 p-6 shadow-[0_35px_90px_-70px_rgba(15,23,42,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_55px_110px_-75px_rgba(15,23,42,0.55)] ${useDarkText ? "text-slate-900" : "text-white"}`}
                      style={accentStyle}
                    >
                      <Link
                        to={`/portfolio/${project.slug}`}
                        state={detailLinkState}
                        className="relative -mx-6 -mt-6 mb-6 block aspect-[16/9] overflow-hidden rounded-t-[32px]"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                        />
                      </Link>

                      <div className={tagWrapClass}>
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className={tagClass}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 space-y-3">
                        <Link
                          to={`/portfolio/${project.slug}`}
                          state={detailLinkState}
                          className="block"
                        >
                          <h2 className={headingClass}>{project.title}</h2>
                        </Link>
                        <p className={excerptClass}>{excerpt}</p>
                      </div>

                      <ul className={listClass}>
                        {highlightItems.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <ArrowUpRight className={arrowClass} aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to={`/portfolio/${project.slug}`}
                        state={detailLinkState}
                        className={linkClass}
                      >
                        Explore project
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PortfolioList;
