import React from "react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/social-links";

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
  { name: "Webflow", src: "/tech/webflow.png", top: "24%", left: "6%", delay: -4, duration: 18, scale: 0.9, rotation: 10 },
  { name: "Make", src: "/tech/make.png", top: "60%", left: "10%", delay: -2, duration: 22, scale: 0.95, rotation: -6 },
  { name: "Zapier", src: "/tech/zapier.png", top: "14%", left: "32%", delay: -6, duration: 17, scale: 0.9, rotation: 12 },
  { name: "Loops", src: "/tech/loops.png", top: "72%", left: "14%", delay: -3, duration: 15, scale: 0.95, rotation: -12 },
  { name: "Zoho", src: "/tech/zoho.png", top: "86%", left: "24%", delay: -7, duration: 19, scale: 0.95, rotation: 6 },
  { name: "Grok", src: "/tech/grok.png", top: "12%", left: "40%", delay: -8, duration: 18, scale: 0.9, rotation: -10 },
  { name: "Gemini", src: "/tech/gemini.png", top: "42%", left: "44%", delay: -2, duration: 16, scale: 1, rotation: 4 },
  { name: "Daily", src: "/tech/daily.png", top: "68%", left: "38%", delay: -6, duration: 20, scale: 0.9, rotation: -6 },
  { name: "Custom APIs", src: "/tech/custom-api.svg", top: "20%", left: "52%", delay: -1, duration: 19, scale: 1, rotation: 5 },
  { name: "Webhooks", src: "/tech/webhook.svg", top: "58%", left: "48%", delay: -9, duration: 21, scale: 0.9, rotation: -10 },
  { name: "JavaScript", src: "/tech/javascript.png", top: "20%", left: "64%", delay: -4, duration: 17, scale: 0.9, rotation: 12 },
  { name: "Custom Code", src: "/tech/custom-code.svg", top: "70%", left: "60%", delay: -3, duration: 21, scale: 0.9, rotation: -6 },
  { name: "CheckrTrust", src: "/tech/checkrtrust.svg", top: "10%", left: "72%", delay: -7, duration: 18, scale: 0.9, rotation: 8 },
  { name: "Veriff", src: "/tech/veriff.png", top: "40%", left: "82%", delay: -5, duration: 17, scale: 0.9, rotation: -6 },
  { name: "OFAC", src: "/tech/ofac.svg", top: "66%", left: "76%", delay: -2, duration: 19, scale: 0.95, rotation: 4 },
  { name: "Stripe", src: "/tech/stripe.svg", top: "24%", left: "78%", delay: -8, duration: 18, scale: 0.9, rotation: -4 },
  { name: "PayPal", src: "/tech/paypal.png", top: "54%", left: "86%", delay: -5, duration: 20, scale: 0.9, rotation: 10 },
  { name: "SendGrid", src: "/tech/sendgrid.png", top: "26%", left: "12%", delay: -9, duration: 18, scale: 0.85, rotation: 12 },
  { name: "Xano", src: "/tech/xano.png", top: "76%", left: "46%", delay: -4, duration: 19, scale: 0.9, rotation: -10 },
  { name: "n8n", src: "/tech/n8n.png", top: "36%", left: "92%", delay: -6, duration: 22, scale: 0.85, rotation: 10 },
  { name: "Google Cloud", src: "/tech/google-cloud.png", top: "24%", left: "92%", delay: -9, duration: 18, scale: 0.9, rotation: 6 },
  { name: "Azure", src: "/tech/azure.png", top: "60%", left: "90%", delay: -3, duration: 19, scale: 0.9, rotation: -8 },
  { name: "AWS", src: "/tech/aws.png", top: "12%", left: "54%", delay: -5, duration: 21, scale: 1, rotation: 2 },
  { name: "Postman", src: "/tech/postman.png", top: "80%", left: "32%", delay: -8, duration: 18, scale: 0.85, rotation: 12 },
  { name: "RapidAPI", src: "/tech/rapidapi.png", top: "50%", left: "94%", delay: -4, duration: 18, scale: 0.9, rotation: -8 },
  { name: "GitHub", src: "/tech/github.png", top: "12%", left: "24%", delay: -7, duration: 20, scale: 0.9, rotation: 4 },
  { name: "Security", src: "/tech/security-shield.svg", top: "82%", left: "70%", delay: -6, duration: 19, scale: 0.95, rotation: -10 },
  { name: "Database", src: "/tech/database.svg", top: "86%", left: "58%", delay: -9, duration: 22, scale: 0.9, rotation: 8 },
  { name: "Performance", src: "/tech/performance.svg", top: "84%", left: "82%", delay: -5, duration: 20, scale: 0.9, rotation: -6 },
  { name: "Notion", src: "/tech/notion.png", top: "88%", left: "14%", delay: -3, duration: 18, scale: 0.85, rotation: 4 },
  { name: "Figma", src: "/tech/figma.png", top: "12%", left: "80%", delay: -8, duration: 19, scale: 0.8, rotation: -4 },
  { name: "Twilio", src: "/tech/twilio.png", top: "44%", left: "10%", delay: -6, duration: 21, scale: 0.85, rotation: 10 },
];

const HeroSection = () => {
  const headline = "Hey, I\u2019m Albalosh Nawaz\nYour Certified Bubble.io Developer";
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
    }, 45);

    return () => {
      window.clearInterval(interval);
    };
  }, [headline, prefersReducedMotion]);

  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-16">
      <div className="floating-logo-cloud pointer-events-none absolute inset-0 hidden md:block z-10">
        {floatingLogos.map((logo) => (
          <div
            key={logo.name}
            className="floating-logo"
            style={{
              top: logo.top,
              left: logo.left,
              animationDelay: `${logo.delay ?? 0}s`,
              animationDuration: `${logo.duration ?? 18}s`,
            }}
          >
            <div
              className="capability-chip opacity-80 hover:opacity-100 transition-opacity"
              style={{ transform: `scale(${logo.scale ?? 1}) rotate(${logo.rotation ?? 0}deg)` }}
            >
              {logo.src ? <img src={logo.src} alt={logo.name} /> : <span>{logo.name}</span>}
            </div>
          </div>
        ))}
      </div>
      <div className="container relative z-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-8 relative z-20">
            <div className="inline-flex items-center rounded-full bg-[#F4F7FF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-theme-blue">
              Certified Bubble.io Developer • Google IT Support Specialist
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
                <span className="typewriter-text">
                  {displayedHeadline}
                </span>
                <span
                  className={`typewriter-caret ${isTypingComplete ? "opacity-0" : "opacity-100"}`}
                  aria-hidden="true"
                />
              </h1>
            </div>
            <p className="text-lg leading-relaxed text-slate-600">
              I build reliable web apps, MVPs, and automation systems for founders, startups, and small businesses. Every plan,
              integration, test, and deployment is handled personally so you get the focus of a solo developer with five years of
              hands-on Bubble.io delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="rounded-full bg-gradient-to-r from-[#ff8c4c] via-[#f96f4a] to-[#ffb347] px-8 py-4 text-base font-semibold text-white shadow-[0_25px_50px_rgba(249,111,74,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_28px_60px_rgba(249,111,74,0.45)]"
              >
                <a href="#contact">Let&rsquo;s build something great together</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-2 border-theme-blue/30 bg-white px-8 py-4 text-base font-semibold text-theme-blue shadow-[0_18px_40px_rgba(0,85,255,0.15)] transition-all hover:-translate-y-0.5 hover:border-theme-blue"
              >
                <a href="#projects">See my recent work</a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-slate-500">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-theme-blue hover:text-theme-blue"
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
                <div className="absolute -bottom-6 right-0 flex flex-col items-end gap-3">
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
