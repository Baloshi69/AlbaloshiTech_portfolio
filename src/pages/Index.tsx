
import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import CalendlyFloat from "@/components/CalendlyFloat";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  SITE_NAME,
  TWITTER_HANDLE,
  buildCanonicalUrl,
} from "@/lib/seo";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{DEFAULT_TITLE}</title>
        <meta name="description" content={DEFAULT_DESCRIPTION} />
        <link rel="canonical" href={buildCanonicalUrl("/")} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={DEFAULT_TITLE} />
        <meta property="og:description" content={DEFAULT_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={buildCanonicalUrl("/")} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:image:alt" content="AlBaloshiTech logo with tagline" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={TWITTER_HANDLE} />
        <meta name="twitter:title" content={DEFAULT_TITLE} />
        <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <meta name="twitter:image:alt" content="AlBaloshiTech logo with tagline" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_NAME,
            url: buildCanonicalUrl("/"),
            slogan:
              "Building products at the speed of ideas with No-Code, Vibe Coding, and Automation.",
            sameAs: [
              "https://x.com/BaloShi69",
              "https://linkedin.com/company/albaloshitech",
            ],
            logo: DEFAULT_OG_IMAGE,
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-theme-dark text-theme-light">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <FAQSection />
        <ContactSection />
        <Footer />
        <CalendlyFloat />
        <WhatsappFloat />
      </div>
    </>
  );
};

export default Index;
