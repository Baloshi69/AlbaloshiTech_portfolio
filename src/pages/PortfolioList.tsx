import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPortfolioProjects } from "@/data/projects";
import { cn } from "@/lib/utils";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  TWITTER_HANDLE,
  buildCanonicalUrl,
} from "@/lib/seo";

const formatOrder = (order: number) => `#${order.toString().padStart(2, "0")}`;

const PortfolioList: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname + location.search + location.hash;
  const projects = getPortfolioProjects();
  const canonicalUrl = buildCanonicalUrl("/portfolio");
  const pageTitle = "Portfolio | AlBaloshiTech";
  const pageDescription =
    "Explore shipped no-code, low-code, and automation products crafted for high-velocity founders and operators.";
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AlBaloshiTech Portfolio",
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
        <meta property="og:image:alt" content="AlBaloshiTech logo with tagline" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={TWITTER_HANDLE} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <meta name="twitter:image:alt" content="AlBaloshiTech logo with tagline" />
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-theme-dark text-theme-light">
        <Navbar />
        <main className="pt-28 pb-20">
          <div className="container space-y-16">
            <div className="text-center mx-auto max-w-3xl space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold">Our Work</h1>
              <p className="text-theme-muted-text text-lg">
                Explore no-code and low-code products we have shipped for founders
                and operators around the world. Each engagement pairs rapid
                delivery with durable systems that scale.
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => {
                const cardFrameStyle = project.backgroundGradient
                  ? { background: project.backgroundGradient }
                  : undefined;
                const detailLinkState = { from: currentPath };

                return (
                  <article
                    key={project.slug}
                    className="relative group flex flex-col rounded-[28px] border border-theme-accent/18 bg-theme-secondary-dark/85 p-5 transition-all duration-500 hover:border-theme-accent/30 hover:shadow-[0_40px_140px_-70px_rgba(35,229,176,0.5)]"
                  >
                    {cardFrameStyle && (
                      <div
                        className="pointer-events-none absolute -inset-[12px] rounded-[36px] opacity-55 blur-[44px] transition-opacity duration-500 group-hover:opacity-75"
                        style={cardFrameStyle}
                        aria-hidden="true"
                      />
                    )}
                    <div className="relative z-[1] flex flex-col h-full">
                      <Link
                        to={`/portfolio/${project.slug}`}
                        state={detailLinkState}
                        className="relative block group"
                      >
                        <div className="relative aspect-video">
                          <div
                            className={cn(
                              "relative h-full w-full overflow-hidden rounded-[20px] border border-theme-accent/12 bg-theme-dark/85 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:shadow-[0_0_90px_-55px_rgba(35,229,176,0.55)]",
                            )}
                          >
                            <img
                              src={project.image}
                              alt={project.title}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                            />
                          </div>
                          <span className="absolute top-5 left-5 rounded-full border border-theme-accent/30 bg-theme-dark/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.4em] text-theme-accent/80 backdrop-blur">
                            {formatOrder(project.order)}
                          </span>
                          {project.isStar && (
                            <span className="absolute top-5 right-5 inline-flex items-center gap-1 rounded-full bg-theme-dark/75 px-3 py-1 text-xs font-semibold text-theme-accent backdrop-blur">
                              <Star size={14} className="fill-current text-theme-accent" />
                              Star
                            </span>
                          )}
                        </div>
                      </Link>

                      <div className="pt-6 flex flex-col flex-1">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-0.5 rounded-full bg-theme-dark/70 text-theme-muted-text"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          to={`/portfolio/${project.slug}`}
                          state={detailLinkState}
                          className="transition-colors hover:text-theme-accent"
                        >
                          <h2 className="text-2xl font-semibold mb-2">
                            {project.title}
                          </h2>
                        </Link>
                        <p className="text-theme-light/95 text-sm leading-relaxed flex-1 drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)]">
                          {project.excerpt}
                        </p>

                        <Link
                          to={`/portfolio/${project.slug}`}
                          state={detailLinkState}
                          className="mt-6 inline-flex items-center text-theme-accent hover:text-theme-accent/80 font-medium"
                        >
                          View Case Study
                        </Link>
                      </div>
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
