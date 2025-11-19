import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getStarProjects } from "@/data/projects";

const FALLBACK_GRADIENT = "linear-gradient(135deg, #111827 0%, #1f2937 60%, #0f172a 100%)";

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

const ProjectsSection = () => {
  const featuredProjects = getStarProjects();
  const marqueeProjects = featuredProjects.length > 0 ? [...featuredProjects, ...featuredProjects] : [];

  return (
    <section id="projects" className="bg-[#F9FBFF]">
      <div className="container space-y-12">
        <div className="section-heading">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d85a1a]">Featured builds</p>
          <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-[#ff8c4c] via-[#f96f4a] to-[#ffb347] bg-clip-text">
            Signature builds & launches
          </h2>
          <p className="text-slate-600">
            Each build is a real story—scoped thoughtfully, crafted with care, and shipped with the polish your customers feel the first time they log in.
          </p>
        </div>

        {featuredProjects.length > 0 && (
          <div className="relative overflow-hidden rounded-[2.75rem] border border-white/50 bg-white/70 shadow-[0_45px_120px_-90px_rgba(15,23,42,0.45)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#F9FBFF] via-[#F9FBFF]/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#F9FBFF] via-[#F9FBFF]/80 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-10 bg-gradient-to-b from-[#F9FBFF]/90 via-[#F9FBFF]/60 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-12 bg-gradient-to-t from-[#F9FBFF]/95 via-[#F9FBFF]/60 to-transparent" />
            <div className="project-marquee-scroll overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab active:cursor-grabbing">
              <div className="project-marquee flex w-max gap-5 px-6 py-10 sm:px-8">
                {marqueeProjects.map((project, index) => {
                const detailHref = `/portfolio/${project.slug}`;
                const baseGradient = project.backgroundGradient ?? FALLBACK_GRADIENT;
                const gradientStyle = { background: baseGradient };
                const useDarkText = shouldUseDarkText(baseGradient);
                const highlightItems =
                  project.services?.slice(0, 2) ??
                  project.outcomes?.slice(0, 2) ??
                  project.description?.slice(0, 2) ??
                  [];
                const excerpt =
                  project.excerpt?.replace(/\s*\n\s*/g, " ").trim() ??
                  project.description?.[0] ??
                  "";
                const tagWrapClass = useDarkText
                  ? "flex flex-wrap gap-2 text-xs font-semibold text-slate-900/90"
                  : "flex flex-wrap gap-2 text-xs font-semibold text-white/80";
                const tagClass = useDarkText
                  ? "rounded-full bg-white/80 px-3 py-1 text-slate-900 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.65)]"
                  : "rounded-full bg-white/20 px-3 py-1 text-white/90";
                const headingClass = useDarkText ? "text-xl font-semibold text-slate-900" : "text-xl font-semibold text-white";
                const excerptClass = useDarkText ? "text-sm leading-relaxed text-slate-700" : "text-sm leading-relaxed text-white/80";
                const listClass = useDarkText ? "mt-4 space-y-1.5 text-[13px] text-slate-800" : "mt-4 space-y-1.5 text-[13px] text-white/90";
                const arrowClass = useDarkText ? "mt-0.5 h-4 w-4 text-slate-900" : "mt-0.5 h-4 w-4 text-white";
                const ctaBase =
                  "mt-auto inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
                const linkClass = useDarkText
                  ? `${ctaBase} bg-slate-900/5 text-slate-900 ring-slate-900/25 ring-offset-white hover:bg-slate-900/10`
                  : `${ctaBase} bg-white/20 text-white ring-white/40 ring-offset-transparent hover:bg-white/30`;

                return (
                  <article
                    key={`${project.slug}-${index}`}
                    aria-hidden={index >= featuredProjects.length}
                    className="group relative w-[280px] flex-shrink-0 sm:w-[320px] lg:w-[360px] xl:w-[380px]"
                  >
                    <div
                      className="pointer-events-none absolute -inset-3 rounded-[38px] opacity-45 blur-[48px] transition duration-500 group-hover:opacity-65"
                      style={gradientStyle}
                      aria-hidden="true"
                    />
                    <div
                      className={`relative flex h-full flex-col rounded-[32px] border border-white/30 p-5 sm:p-6 shadow-[0_35px_90px_-70px_rgba(15,23,42,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_55px_110px_-75px_rgba(15,23,42,0.55)] ${useDarkText ? "text-slate-900" : "text-white"}`}
                      style={gradientStyle}
                    >
                      <Link
                        to={detailHref}
                        className="relative -mx-5 -mt-5 mb-6 block aspect-[7/3] overflow-hidden rounded-t-[32px] sm:-mx-6 sm:-mt-6 sm:mb-8"
                      >
                        {project.image ? (
                          <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                        ) : (
                          <div className="flex h-full items-center justify-center text-sm font-semibold text-white/70">Preview coming soon</div>
                        )}
                      </Link>

                      <div className={tagWrapClass}>
                        {(project.tags ?? []).slice(0, 3).map((tag) => (
                          <span key={tag} className={tagClass}>{tag}</span>
                        ))}
                      </div>

                      <div className="mt-4 space-y-3">
                        <h3 className={headingClass}>{project.title}</h3>
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

                      <Link to={detailHref} className={linkClass}>
                        Explore project
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
            </div>
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-[32px] border border-white/80 bg-white/80 px-8 py-6 shadow-[0_35px_100px_-60px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d85a1a]">Need more context?</p>
            <h3 className="text-lg font-semibold text-slate-900">Browse the full archive of Bubble builds and experiments.</h3>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-[#ff8c4c] via-[#f96f4a] to-[#ffb347] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(249,111,74,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(249,111,74,0.4)]"
          >
            View full portfolio
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
