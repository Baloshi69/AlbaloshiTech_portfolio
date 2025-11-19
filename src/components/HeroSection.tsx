import React from "react";
import { Button } from "@/components/ui/button";
import { useHoverTypewriter } from "@/hooks/useHoverTypewriter";
import { CTA_DEFAULT_TEXT, CTA_PAUSE_DURATION, CTA_PHRASES, CTA_TYPING_DELAY } from "@/lib/ctaMessages";
import { socialLinks } from "@/lib/social-links";

const UNIFIED_LOGO_SCALE = 0.75;

type FloatingLogo = {
  name: string;
  src?: string;
  top: string;
  left: string;
  delay?: number;
  duration?: number;
  scale?: number;
  rotation?: number;
};

const floatingLogos: FloatingLogo[] = [
  { name: "Bubble.io", src: "/tech/bubble.png", top: "10%", left: "14%", delay: 0, duration: 16, scale: 1, rotation: -8 },
  { name: "Webflow", src: "/tech/webflow.png", top: "36%", left: "8%", delay: -4, duration: 18, scale: 0.9, rotation: 10 },
  { name: "Make", src: "/tech/make.png", top: "60%", left: "10%", delay: -2, duration: 22, scale: 0.95, rotation: -6 },
  { name: "Zapier", src: "/tech/zapier.png", top: "14%", left: "32%", delay: -6, duration: 17, scale: 0.9, rotation: 12 },
  { name: "Loops", src: "/tech/loops.png", top: "72%", left: "8%", delay: -3, duration: 15, scale: 0.95, rotation: -12 },
  { name: "Zoho", src: "/tech/zoho.png", top: "90%", left: "24%", delay: -7, duration: 19, scale: 0.95, rotation: 6 },
  { name: "Grok", src: "/tech/grok.png", top: "12%", left: "40%", delay: -8, duration: 18, scale: 0.9, rotation: -10 },
  { name: "Gemini", src: "/tech/gemini.png", top: "42%", left: "53%", delay: -2, duration: 16, scale: 1, rotation: 4 },
  { name: "Daily", src: "/tech/daily.png", top: "86%", left: "42%", delay: -6, duration: 20, scale: 0.9, rotation: -6 },
  { name: "Custom APIs", src: "/tech/custom-api.svg", top: "26%", left: "52%", delay: -1, duration: 19, scale: 1, rotation: 5 },
  { name: "Webhooks", src: "/tech/webhook.svg", top: "58%", left: "52%", delay: -9, duration: 21, scale: 0.9, rotation: -10 },
  { name: "JavaScript", src: "/tech/javascript.svg", top: "20%", left: "64%", delay: -4, duration: 17, scale: 0.9, rotation: 12 },
  { name: "Anthropic", src: "/tech/anthropic.png", top: "34%", left: "54%", delay: -4, duration: 19, scale: 0.85, rotation: -4 },
  { name: "OpenAI", src: "/tech/openai.svg", top: "42%", left: "48%", delay: -5, duration: 20, scale: 0.75, rotation: -5 },
  { name: "Custom Code", src: "/tech/custom-code.svg", top: "70%", left: "60%", delay: -3, duration: 21, scale: 0.9, rotation: -6 },
  { name: "CheckrTrust", src: "/tech/checkrtrust.svg", top: "10%", left: "72%", delay: -7, duration: 18, scale: 0.9, rotation: 8 },
  { name: "Veriff", src: "/tech/veriff.png", top: "40%", left: "82%", delay: -5, duration: 17, scale: 0.9, rotation: -6 },
  { name: "OFAC", src: "/tech/ofac.svg", top: "66%", left: "76%", delay: -2, duration: 19, scale: 0.95, rotation: 4 },
  { name: "Stripe", src: "/tech/stripe.svg", top: "24%", left: "78%", delay: -8, duration: 18, scale: 0.9, rotation: -4 },
  { name: "PayPal", src: "/tech/paypal.png", top: "54%", left: "86%", delay: -5, duration: 20, scale: 0.9, rotation: 10 },
  { name: "SendGrid", src: "/tech/sendgrid.png", top: "22%", left: "8%", delay: -9, duration: 18, scale: 0.85, rotation: 12 },
  { name: "Xano", src: "/tech/xano.png", top: "76%", left: "48%", delay: -4, duration: 19, scale: 0.9, rotation: -10 },
  { name: "n8n", src: "/tech/n8n.png", top: "36%", left: "92%", delay: -6, duration: 22, scale: 0.85, rotation: 10 },
  { name: "Google Cloud", src: "/tech/google-cloud.png", top: "24%", left: "92%", delay: -9, duration: 18, scale: 0.9, rotation: 6 },
  { name: "Azure", src: "/tech/azure.png", top: "60%", left: "90%", delay: -3, duration: 19, scale: 0.9, rotation: -8 },
  { name: "AWS", src: "/tech/aws.png", top: "18%", left: "58%", delay: -5, duration: 21, scale: 1, rotation: 2 },
  { name: "Postman", src: "/tech/postman.png", top: "90%", left: "32%", delay: -8, duration: 18, scale: 0.85, rotation: 12 },
  { name: "RapidAPI", src: "/tech/rapidapi.png", top: "50%", left: "94%", delay: -4, duration: 18, scale: 0.9, rotation: -8 },
  { name: "GitHub", src: "/tech/github.png", top: "12%", left: "24%", delay: -7, duration: 20, scale: 0.9, rotation: 4 },
  { name: "Security", src: "/tech/security-shield.svg", top: "82%", left: "70%", delay: -6, duration: 19, scale: 0.95, rotation: -10 },
  { name: "Database", src: "/tech/database.svg", top: "86%", left: "58%", delay: -9, duration: 22, scale: 0.9, rotation: 8 },
  { name: "Performance", src: "/tech/performance.svg", top: "84%", left: "82%", delay: -5, duration: 20, scale: 0.9, rotation: -6 },
  { name: "Notion", src: "/tech/notion.png", top: "88%", left: "14%", delay: -3, duration: 18, scale: 0.85, rotation: 4 },
  { name: "Figma", src: "/tech/figma.png", top: "12%", left: "80%", delay: -8, duration: 19, scale: 0.8, rotation: -4 },
  { name: "Twilio", src: "/tech/twilio.png", top: "49%", left: "6%", delay: -6, duration: 21, scale: 0.85, rotation: 10 },
];

const HoverTypewriterCTA: React.FC = () => {
  const { displayText, startHover, stopHover, isActive } = useHoverTypewriter({
    defaultText: CTA_DEFAULT_TEXT,
    phrases: CTA_PHRASES,
    typingDelay: CTA_TYPING_DELAY,
    pauseDuration: CTA_PAUSE_DURATION,
  });

  return (
    <Button
      asChild
      className="rounded-full bg-gradient-to-r from-[#ff8c4c] via-[#f96f4a] to-[#ffb347] px-8 py-4 text-base font-semibold text-white shadow-[0_20px_40px_rgba(249,111,74,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_55px_rgba(249,111,74,0.4)]"
    >
      <a
        href="#contact"
        onMouseEnter={startHover}
        onMouseLeave={stopHover}
        className="inline-flex w-full justify-center sm:w-auto"
      >
        <span className={`cta-typewriter-text min-w-[15.5rem] justify-center ${isActive ? "cta-typewriter-text--active" : ""}`}>
          {displayText}
        </span>
      </a>
    </Button>
  );
};

const HeroSection = () => {
  const headline = "Fixing performance, workflows, and database issues in Bubble.io apps";
  const [displayedHeadline, setDisplayedHeadline] = React.useState("");
  const [isTypingComplete, setIsTypingComplete] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    setPrefersReducedMotion(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    setDisplayedHeadline("");
    setIsTypingComplete(false);

    if (prefersReducedMotion) {
      setDisplayedHeadline(headline);
      setIsTypingComplete(true);
      return;
    }

    let currentIndex = 0;
    const interval = window.setInterval(() => {
      currentIndex += 1;
      setDisplayedHeadline(headline.slice(0, currentIndex));

      if (currentIndex >= headline.length) {
        window.clearInterval(interval);
        setIsTypingComplete(true);
      }
    }, 65);

    return () => {
      window.clearInterval(interval);
    };
  }, [headline, prefersReducedMotion]);

  return (
    <section id="hero" className="relative overflow-hidden pt-48 md:pt-56 pb-20 md:pb-32 min-h-[90vh]">
      <div className="floating-logo-cloud pointer-events-none absolute inset-x-0 top-6 bottom-0 hidden md:block z-30">
        {floatingLogos.map((logo) => (
          <div
            key={logo.name}
            className="floating-logo group"
            style={{
              top: logo.top,
              left: logo.left,
              animationDelay: `${logo.delay ?? 0}s`,
              animationDuration: `${logo.duration ?? 18}s`,
            }}
          >
            <div
              className="capability-chip opacity-80 hover:opacity-100 transition-opacity"
              style={{ transform: `scale(${UNIFIED_LOGO_SCALE}) rotate(${logo.rotation ?? 0}deg)` }}
            >
              {logo.src ? <img src={logo.src} alt={logo.name} /> : <span>{logo.name}</span>}
            </div>
            <span className="floating-logo-label">{logo.name}</span>
          </div>
        ))}
      </div>
      <div className="container relative z-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div className="relative z-20 space-y-5 md:space-y-6">
            <div className="inline-flex flex-wrap items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-700">
              <span className="flex items-center gap-2 rounded-full bg-[#eef2ff] px-3 py-1 text-theme-blue tracking-[0.12em]">
                <img src="/tech/bubble.png" alt="Bubble.io certification" className="h-5 w-5 rounded-full border border-white/70 bg-white object-contain shadow-sm" />
                Bubble.io Certified
              </span>
              <span className="h-6 w-px bg-slate-200/70" aria-hidden="true" />
              <span className="flex items-center gap-2 rounded-full bg-[#fff3e6] px-3 py-1 text-[#4285F4] tracking-[0.12em]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M12 10.8v3.24h4.56c-.18 1.08-1.38 3.18-4.56 3.18-2.74 0-4.98-2.28-4.98-5.1s2.24-5.1 4.98-5.1c1.56 0 2.62.66 3.22 1.23l2.36-2.28C16.33 4.32 14.41 3.3 12 3.3 7.26 3.3 3.42 7.14 3.42 11.88S7.26 20.46 12 20.46c4.62 0 7.68-3.24 7.68-7.8 0-.52-.06-1.02-.12-1.38H12z"
                    fill="#4285F4"
                  />
                  <path d="M4.86 8.22l2.66 1.95c.72-1.62 2.24-2.67 4.48-2.67 1.56 0 2.62.66 3.22 1.23l2.36-2.28C16.33 4.32 14.41 3.3 12 3.3c-3.2 0-5.9 1.83-7.14 4.92z" fill="#EA4335" />
                  <path d="M12 20.46c2.94 0 5.4-.96 7.18-2.64l-3.32-2.7c-.9.6-2.08.99-3.86.99-3.18 0-4.38-2.1-4.56-3.18H3.9l-.04.3C4.86 17.28 8.04 20.46 12 20.46z" fill="#34A853" />
                  <path d="M3.9 12.93c-.18 1.08-.18 2.16 0 3.24l3.62-2.82c-.12-.36-.18-.78-.18-1.26s.06-.9.18-1.26L3.9 8.79c-.24.78-.36 1.62-.36 2.64s.12 1.86.36 2.64z" fill="#FBBC05" />
                </svg>
                Google IT Support Specialist
              </span>
            </div>
            <div className="space-y-5 md:space-y-6">
              <h1 className="text-3xl font-bold leading-snug text-slate-900 sm:text-4xl md:text-5xl min-h-[3.5rem] sm:min-h-[4.5rem] md:min-h-[5.5rem]">
                <span className={`typewriter-text ${isTypingComplete ? "typewriter-text-complete" : ""}`}>
                  {displayedHeadline}
                </span>
              </h1>
            </div>
            <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
              I refactor workflows, optimise databases, and add AI-driven automation so your Bubble app becomes faster, smarter,
              and production-ready. Whether you&rsquo;re building a new MVP, scaling an existing product, or fixing performance
              issues, I handle every review, integration, optimisation, and deployment personally&mdash;giving you the full focus,
              clarity, and expertise of a dedicated freelance Bubble.io developer.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:items-center">
              <HoverTypewriterCTA />
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-2 border-[#ffd3bf]/70 bg-white px-8 py-4 text-base font-semibold text-theme-blue shadow-[0_16px_35px_rgba(249,111,74,0.2)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#fff2e8] hover:shadow-[0_20px_60px_rgba(249,111,74,0.35)] sm:w-auto"
              >
                <a href="#projects">See my recent work</a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-slate-500">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-[#ff8c4c] hover:bg-[#fff4ec] hover:text-[#ff8c4c]"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center z-0">
            <div className="absolute -bottom-16 -left-6 hidden h-36 w-36 rounded-3xl bg-[#ffb347]/20 blur-3xl md:block" aria-hidden="true" />
            <div className="relative flex items-center justify-center">
              <div className="absolute -left-10 top-6 hidden h-20 w-20 rounded-full bg-[#f1f5ff] shadow-inner md:block" aria-hidden="true" />
              <div className="absolute -right-6 bottom-4 hidden h-24 w-24 rounded-[36px] bg-[#ffedd5] shadow-lg md:block" aria-hidden="true" />
              <div className="relative h-72 w-72 rounded-full border-[10px] border-white bg-white shadow-[0_45px_120px_-70px_rgba(15,23,42,0.55)] md:h-80 md:w-80">
                <img
                  src="/Hero_circle_pic.jpeg"
                  alt="Al Baloshi Nawaz headshot"
                  className="h-full w-full rounded-full object-cover"
                />
                <div className="absolute -bottom-6 right-0 flex flex-col items-end gap-1.5">
                  <div className="rounded-full bg-[#ff8c4c] px-4 py-2 text-sm font-semibold text-white shadow-[0_15px_30px_rgba(0,0,0,0.15)]">
                    Al Baloshi Nawaz
                  </div>
                  <div className="rounded-full border border-white/70 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-800 shadow-[0_15px_30px_rgba(15,23,42,0.12)]">
                    +4 Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
