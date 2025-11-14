import React, { type CSSProperties } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import CalendlyFloat from "@/components/CalendlyFloat";
import WhatsappFloat from "@/components/WhatsappFloat";
import { getPortfolioProjects } from "@/data/projects";
import {
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE,
  buildCanonicalUrl,
  toAbsoluteUrl,
} from "@/lib/seo";

const formatOrder = (order: number) => `Project ${order.toString().padStart(2, "0")}`;

const PortfolioDetail: React.FC = () => {
  const { slug } = useParams();
  const project = getPortfolioProjects().find((item) => item.slug === slug);

  if (!project) {
    const fallbackTitle = "Project Not Found | AlBaloshiTech";
    const canonicalUrl = buildCanonicalUrl(`/portfolio/${slug ?? ""}`);

    return (
      <>
        <Helmet>
          <title>{fallbackTitle}</title>
          <meta name="description" content={DEFAULT_DESCRIPTION} />
          <link rel="canonical" href={canonicalUrl} />
          <meta property="robots" content="noindex, follow" />
        </Helmet>
        <div className="min-h-screen bg-theme-dark text-theme-light">
          <Navbar />
          <main className="pt-28 pb-20">
            <div className="container text-center space-y-6">
              <h1 className="text-4xl font-bold">Project not found</h1>
              <p className="text-theme-muted-text">
                This case study is no longer available. Browse our{" "}
                <Link to="/portfolio" className="text-theme-accent underline">
                  portfolio
                </Link>{" "}
                for more work.
              </p>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const heroImage = project.heroImage ?? project.image;
  const showHeroVisual = project.showHeroVisual ?? true;
  const gradientStyle: CSSProperties | undefined = project.backgroundGradient
    ? { background: project.backgroundGradient }
    : undefined;
  const heroFrameStyle: CSSProperties | undefined = project.backgroundGradient
    ? { background: project.backgroundGradient }
    : undefined;
  const heroCtas = project.heroCtas ?? [];
  const outcomesCtaHref = project.outcomesCtaHref ?? project.liveUrl;
  const outcomesCtaLabel = project.outcomesCtaLabel ?? "View Live Product";
  const outcomesCtaIsExternal = outcomesCtaHref
    ? /^https?:\/\//i.test(outcomesCtaHref)
    : false;

  const hasDetailedGallery =
    project.gallery?.some((item) => item.title || item.description) ?? false;

  const techItems = project.tags.map((tag) => {
    const lower = tag.toLowerCase();

    switch (lower) {
      case "bubble":
      case "bubble.io":
        return { key: tag, label: "Bubble.io", icon: "/tech/bubble.png" };
      case "openai":
        return { key: tag, label: "OpenAI", icon: "/tech/openai.svg" };
      case "stripe":
        return { key: tag, label: "Stripe", icon: "/tech/stripe.svg" };
      case "custom development":
        return { key: tag, label: "Custom Development", icon: "/tech/custom-dev.svg" };
      case "custom code":
        return { key: tag, label: "Custom Code", icon: "/tech/custom-code.svg" };
      case "learning analytics":
        return { key: tag, label: "Learning Analytics", icon: "/tech/custom-code.svg" };
      case "checkrtrust":
        return { key: tag, label: "CheckrTrust", icon: "/tech/checkrtrust.svg" };
      case "veriff":
        return { key: tag, label: "Veriff", icon: "/tech/veriff.png" };
      default:
        return { key: tag, label: tag };
    }
  });

  const canonicalUrl = buildCanonicalUrl(`/portfolio/${project.slug}`);
  const pageTitle = `${project.title} | Portfolio Case Study | AlBaloshiTech`;
  const pageDescription = project.heroTagline ?? project.excerpt;
  const ogImage = toAbsoluteUrl(heroImage);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: project.title,
    headline: project.title,
    description: pageDescription,
    url: canonicalUrl,
    image: ogImage,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: project.tags,
    keywords: project.tags,
    inLanguage: "en",
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
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={`${project.title} showcase image`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={TWITTER_HANDLE} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={`${project.title} showcase image`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="min-h-screen text-theme-light" style={gradientStyle}>
        <Navbar />
        <main className="pt-28 pb-20">
          <div className="container">
          <div className="space-y-8 rounded-[28px] border border-theme-accent/10 bg-theme-dark/90 p-6 sm:p-8 backdrop-blur-xl shadow-[0_40px_140px_-70px_rgba(35,229,176,0.55)]">
            <div className="grid gap-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3 text-sm text-theme-muted-text">
                  <span className="inline-flex items-center gap-2 rounded-full border border-theme-accent/20 bg-theme-dark/70 px-4 py-1 font-semibold uppercase tracking-[0.35em] text-theme-accent/80">
                    {formatOrder(project.order)}
                  </span>
                  {project.isStar && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-theme-secondary-dark/70 px-3 py-1 text-xs font-semibold text-theme-accent">
                      <Star size={14} className="fill-current text-theme-accent" />
                      Star Project
                    </span>
                  )}
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold">{project.title}</h1>
                <p className="text-theme-muted-text text-lg max-w-3xl">{project.excerpt}</p>
                {project.heroTagline && (
                  <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium tracking-tight text-theme-accent/90 shadow-[0_16px_40px_-28px_rgba(246,212,99,0.45)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-theme-accent"></span>
                    {project.heroTagline}
                  </p>
                )}
                {heroCtas.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {heroCtas.map((cta) => {
                      const isExternal = cta.external ?? /^https?:\/\//i.test(cta.href);
                      const variant = cta.style ?? "primary";
                      const baseClass =
                        variant === "secondary"
                          ? "inline-flex items-center gap-2 rounded-full border border-theme-accent/50 bg-theme-dark/80 px-6 py-2 text-sm font-semibold text-theme-accent transition-colors hover:bg-theme-accent/10"
                          : "inline-flex items-center gap-2 rounded-full bg-theme-accent px-6 py-2 text-sm font-semibold text-theme-dark shadow-[0_18px_40px_-24px_rgba(35,229,176,0.65)] transition-colors hover:bg-theme-accent/90";

                      return (
                        <a
                          key={`${cta.label}-${cta.href}`}
                          href={cta.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noreferrer" : undefined}
                          className={baseClass}
                        >
                          {cta.label}
                        </a>
                      );
                    })}
                  </div>
                )}
                {showHeroVisual && heroImage && (
                  <div className="relative">
                    <div
                      className="pointer-events-none absolute inset-0 rounded-[32px] blur-3xl opacity-65"
                      style={heroFrameStyle}
                      aria-hidden="true"
                    />
                    <div
                      className="relative z-[1] overflow-hidden rounded-[28px] border border-theme-accent/15 shadow-[0_0_120px_-40px_rgba(35,229,176,0.55)]"
                    >
                      <img
                        src={heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>

              <aside className="space-y-5">
                {project.problem && (
                  <div className="rounded-2xl border border-theme-accent/10 bg-gradient-to-br from-theme-secondary-dark/90 via-theme-secondary-dark/70 to-theme-secondary-dark/60 p-6 space-y-4 shadow-[0_24px_60px_-40px_rgba(35,229,176,0.45)]">
                    <div className="inline-flex items-center gap-2 rounded-full bg-theme-dark px-3 py-1">
                      <span className="h-2 w-2 rounded-full bg-theme-accent"></span>
                      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-theme-accent/80">
                        The Challenge
                      </span>
                    </div>
                    <div className="space-y-3 text-sm text-theme-muted-text leading-relaxed">
                      {project.problem.split("\n").map((paragraph, index) => (
                        <p key={index}>{paragraph.trim()}</p>
                      ))}
                    </div>
                  </div>
                )}

                <div className="rounded-2xl border border-theme-accent/10 bg-gradient-to-br from-theme-secondary-dark/90 via-theme-secondary-dark/70 to-theme-secondary-dark/60 p-6 space-y-3 shadow-[0_24px_60px_-40px_rgba(35,229,176,0.45)]">
                  <div className="inline-flex items-center gap-2 rounded-full bg-theme-dark px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-theme-accent"></span>
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-theme-accent/80">
                      Outcomes
                    </span>
                  </div>
                  <ul className="space-y-3 text-theme-muted-text text-sm leading-relaxed list-disc list-inside">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>

                  {outcomesCtaHref && (
                    <a
                      href={outcomesCtaHref}
                      target={outcomesCtaIsExternal ? "_blank" : undefined}
                      rel={outcomesCtaIsExternal ? "noreferrer" : undefined}
                      className="inline-flex items-center justify-center w-full rounded-lg bg-theme-accent text-theme-dark font-semibold py-2 transition-colors hover:bg-theme-accent/90"
                    >
                      {outcomesCtaLabel}
                    </a>
                  )}
                  {project.storeLinks &&
                    project.storeLinks.length > 0 &&
                    project.storeLinks.map((store) => (
                      <a
                        key={store.href}
                        href={store.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center"
                        aria-label={store.alt ?? store.href}
                      >
                        {store.icon && (
                          <img
                            src={store.icon}
                            alt={store.alt ?? "Store badge"}
                            className="h-12 w-auto"
                          />
                        )}
                      </a>
                    ))}
                </div>

                <div className="rounded-2xl border border-theme-accent/10 bg-gradient-to-br from-theme-secondary-dark/90 via-theme-secondary-dark/70 to-theme-secondary-dark/60 p-6 space-y-3 shadow-[0_24px_60px_-40px_rgba(35,229,176,0.45)]">
                  <h2 className="text-lg font-semibold">Technology Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {techItems.map((item) => (
                      <span
                        key={item.key}
                        className="inline-flex items-center gap-2 rounded-full border border-theme-accent/30 bg-white/10 px-3 py-1 text-xs text-theme-light shadow-[0_12px_30px_-24px_rgba(246,212,99,0.45)]"
                      >
                        {item.icon && (
                          <img src={item.icon} alt={item.label} className="h-4 w-4" />
                        )}
                        <span>{item.label}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>

            {project.heroMeta && (project.heroMeta.year || project.heroMeta.expertise?.length || project.heroMeta.market) && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-2">
                {project.heroMeta.year && (
                  <div className="rounded-2xl border border-theme-accent/10 bg-theme-dark/70 p-4 shadow-[0_16px_40px_-28px_rgba(35,229,176,0.4)]">
                    <p className="text-xs uppercase tracking-[0.35em] text-theme-accent/70 mb-1">Year</p>
                    <p className="text-lg font-semibold text-theme-light">{project.heroMeta.year}</p>
                  </div>
                )}
                {project.heroMeta.expertise && project.heroMeta.expertise.length > 0 && (
                  <div className="rounded-2xl border border-theme-accent/10 bg-theme-dark/70 p-4 shadow-[0_16px_40px_-28px_rgba(35,229,176,0.4)]">
                    <p className="text-xs uppercase tracking-[0.35em] text-theme-accent/70 mb-1">Expertise</p>
                    <p className="text-lg font-semibold text-theme-light">
                      {project.heroMeta.expertise.join(" / ")}
                    </p>
                  </div>
                )}
                {project.heroMeta.market && (
                  <div className="rounded-2xl border border-theme-accent/10 bg-theme-dark/70 p-4 shadow-[0_16px_40px_-28px_rgba(35,229,176,0.4)]">
                    <p className="text-xs uppercase tracking-[0.35em] text-theme-accent/70 mb-1">Market</p>
                    <p className="text-lg font-semibold text-theme-light">{project.heroMeta.market}</p>
                  </div>
                )}
              </div>
            )}

            {project.stats && project.stats.length > 0 && (
              <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-2">
                {project.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-theme-accent/10 bg-theme-secondary-dark/70 p-6 shadow-[0_20px_50px_-40px_rgba(35,229,176,0.6)]"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-theme-accent/70">{stat.label}</p>
                    <p className="mt-3 text-3xl font-semibold text-theme-light">{stat.value}</p>
                    {stat.description && (
                      <p className="mt-3 text-sm text-theme-muted-text">{stat.description}</p>
                    )}
                  </div>
                ))}
              </section>
            )}

            {(project.services.length > 0 || (project.solution && project.solution.length > 0)) && (
              <section className="grid gap-8 lg:grid-cols-2 pt-2">
                {project.services.length > 0 && (
                  <div className="rounded-2xl border border-theme-accent/10 bg-theme-secondary-dark/60 p-8">
                    <p className="text-xs uppercase tracking-[0.3em] text-theme-accent/70 mb-3">Services</p>
                    <h2 className="text-2xl font-semibold mb-4">What we delivered</h2>
                    <ul className="space-y-3 text-theme-muted-text leading-relaxed list-disc list-inside">
                      {project.services.map((service) => (
                        <li key={service}>{service}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.solution && project.solution.length > 0 && (
                  <div className="rounded-2xl border border-theme-accent/10 bg-theme-secondary-dark/60 p-8">
                    <p className="text-xs uppercase tracking-[0.3em] text-theme-accent/70 mb-3">What we built</p>
                    <h2 className="text-2xl font-semibold mb-4">How we delivered</h2>
                    <ul className="space-y-3 text-theme-muted-text leading-relaxed list-disc list-inside">
                      {project.solution.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}

            <section className="space-y-5 pt-2">
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <div className="space-y-4 text-theme-muted-text">
                {project.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            {project.gallery && project.gallery.length > 0 && (
              hasDetailedGallery ? (
                <section className="space-y-8 pt-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-theme-accent/70">Visual walkthrough</p>
                    <h2 className="text-2xl font-semibold mt-2">Feature-by-feature tour</h2>
                  </div>
                  <div className="space-y-10">
                    {project.gallery.map((item, index) => (
                      <div
                        key={item.src}
                        className="grid gap-10 md:grid-cols-2 items-center"
                      >
                        <div
                          className={`overflow-hidden rounded-[28px] border border-theme-accent/10 bg-theme-secondary-dark/60 shadow-[0_28px_80px_-48px_rgba(35,229,176,0.6)] ${
                            index % 2 !== 0 ? "md:order-2" : ""
                          }`}
                        >
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div
                          className={`space-y-3 ${
                            index % 2 !== 0 ? "md:order-1 md:pl-0 md:pr-6" : "md:pl-6"
                          }`}
                        >
                          {item.title && (
                            <h3 className="text-2xl font-semibold text-theme-light">{item.title}</h3>
                          )}
                          <p className="text-theme-muted-text text-base leading-relaxed">
                            {item.description ?? item.caption ?? item.alt}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ) : (
                <section className="space-y-5 pt-2">
                  <div className="flex flex-col gap-6">
                    {project.gallery.map((item) => (
                      <figure
                        key={item.src}
                        className="mx-auto w-full max-w-5xl overflow-hidden rounded-[32px] border border-theme-accent/12 bg-theme-secondary-dark/60 shadow-[0_32px_80px_-40px_rgba(35,229,176,0.55)]"
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-auto object-cover"
                        />
                        {(item.caption || item.alt) && (
                          <figcaption className="px-6 py-4 text-center text-sm text-theme-muted-text">
                            {item.caption ?? item.alt}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                </section>
              )
            )}

            {project.results && (
              <section className="rounded-2xl border border-theme-accent/15 bg-theme-secondary-dark/70 p-8 mt-4 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-theme-accent/70 mb-3">Results</p>
                  <p className="text-lg text-theme-muted-text leading-relaxed">{project.results}</p>
                </div>
                {project.relatedProject && (
                  <div className="rounded-2xl border border-theme-accent/15 bg-theme-dark/70 px-5 py-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-theme-accent/70 mb-1">Related</p>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-sm text-theme-muted-text">{project.relatedProject.blurb}</p>
                      <Link
                        to={project.relatedProject.href}
                        className="inline-flex items-center gap-2 rounded-full border border-theme-accent/30 px-4 py-1.5 text-sm font-semibold text-theme-accent hover:bg-theme-accent/10"
                      >
                        {project.relatedProject.label}
                      </Link>
                    </div>
                  </div>
                )}
              </section>
            )}

            {project.testimonial && (
              <section className="rounded-2xl border border-theme-accent/15 bg-theme-secondary-dark/60 p-8 shadow-[0_28px_80px_-48px_rgba(35,229,176,0.6)] mt-4">
                <p className="text-sm uppercase tracking-[0.3em] text-theme-accent/70 mb-4">Client feedback</p>
                <blockquote className="space-y-4">
                  <p className="text-xl font-medium leading-relaxed text-theme-light">&ldquo;{project.testimonial.quote}&rdquo;</p>
                  <footer className="text-sm text-theme-muted-text">
                    {project.testimonial.author}
                    {project.testimonial.role ? (
                      <span className="text-theme-accent/70"> &mdash; {project.testimonial.role}</span>
                    ) : null}
                  </footer>
                </blockquote>
              </section>
            )}
          </div>
        </div>
        </main>
        <ContactSection />
        <Footer />
        <CalendlyFloat />
        <WhatsappFloat />
      </div>
    </>
  );
};

export default PortfolioDetail;


