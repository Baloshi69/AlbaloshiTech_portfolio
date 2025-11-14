import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import BrandName from "@/components/BrandName";
import Lottie from "lottie-react";
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
  const [animationData, setAnimationData] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch("/lovable-uploads/Coding.json");
        if (!response.ok) {
          throw new Error("Failed to load animation");
        }
        const data = (await response.json()) as Record<string, unknown>;
        setAnimationData(data);
      } catch (error) {
        console.error("Error loading hero animation:", error);
      }
    };

    loadAnimation();
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      <div className="floating-logo-cloud pointer-events-none hidden md:block">
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
      <div className="container relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="bg-theme-accent/10 text-theme-accent py-1 px-4 rounded-full inline-block text-sm font-medium">
                No-Code | Low-Code | AI Automation
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <BrandName textClassName="text-4xl sm:text-5xl md:text-6xl leading-tight" showIcon={false} /> is your on-demand
              product team.
            </h1>

            <p className="text-xl text-theme-muted-text max-w-xl">
              We help founders and operators ship production-ready platforms fast. From Bubble MVPs to AI-infused automation, our
              experts turn requirements into launch-ready products without the enterprise price tag.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-theme-accent hover:bg-theme-accent/90 text-theme-dark font-medium rounded-md">
                <a href="#projects">View Client Work</a>
              </Button>
              <Button asChild variant="outline" className="border-theme-accent text-theme-accent hover:bg-theme-accent/10">
                <a href="#contact">Book a Discovery Call</a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-6 text-theme-muted-text">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-theme-accent"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-end animate-fade-in">
            {animationData ? (
              <Lottie animationData={animationData} loop autoplay className="w-full max-w-[360px] sm:max-w-[420px] md:max-w-[520px]" />
            ) : (
              <div className="h-24 w-24 animate-pulse rounded-full bg-theme-accent/20" aria-hidden="true" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
