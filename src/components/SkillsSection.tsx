
import React from "react";

type FloatingLogo = {
  name: string;
  src?: string;
  label?: string;
  top: string;
  left: string;
  delay?: number;
  duration?: number;
  scale?: number;
  rotation?: number;
};

const floatingLogos: FloatingLogo[] = [
  { name: "Bubble.io", src: "/tech/bubble.png", top: "12%", left: "8%", delay: 0, duration: 16, scale: 1, rotation: -6 },
  { name: "Webflow", src: "/tech/webflow.png", top: "30%", left: "5%", delay: -4, duration: 18, scale: 0.9, rotation: 8 },
  { name: "Make", src: "/tech/make.png", top: "60%", left: "10%", delay: -2, duration: 20, scale: 0.95, rotation: -4 },
  { name: "Zapier", src: "/tech/zapier.png", top: "20%", left: "22%", delay: -6, duration: 17, scale: 0.85, rotation: 10 },
  { name: "Loops", src: "/tech/loops.png", top: "48%", left: "22%", delay: -3, duration: 15, scale: 0.9, rotation: -12 },
  { name: "Zoho", src: "/tech/zoho.png", top: "68%", left: "26%", delay: -7, duration: 19, scale: 0.95, rotation: 6 },
  { name: "Grok", src: "/tech/grok.png", top: "12%", left: "34%", delay: -8, duration: 18, scale: 0.9, rotation: -8 },
  { name: "Gemini", src: "/tech/gemini.png", top: "42%", left: "34%", delay: -2, duration: 16, scale: 1, rotation: 4 },
  { name: "Daily", src: "/tech/daily.png", top: "70%", left: "38%", delay: -6, duration: 18, scale: 0.9, rotation: -6 },
  { name: "Custom APIs", src: "/tech/custom-api.svg", top: "20%", left: "48%", delay: -1, duration: 19, scale: 1, rotation: 5 },
  { name: "Webhooks", src: "/tech/webhook.svg", top: "58%", left: "48%", delay: -9, duration: 21, scale: 0.9, rotation: -10 },
  { name: "JavaScript", src: "/tech/javascript.png", top: "28%", left: "60%", delay: -4, duration: 17, scale: 0.85, rotation: 12 },
  { name: "Custom Code", src: "/tech/custom-code.svg", top: "72%", left: "58%", delay: -3, duration: 20, scale: 0.9, rotation: -6 },
  { name: "CheckrTrust", src: "/tech/checkrtrust.svg", top: "8%", left: "68%", delay: -7, duration: 18, scale: 0.9, rotation: 6 },
  { name: "Veriff", src: "/tech/veriff.png", top: "40%", left: "70%", delay: -5, duration: 17, scale: 0.9, rotation: -6 },
  { name: "OFAC Compliance", src: "/tech/ofac.svg", top: "64%", left: "72%", delay: -2, duration: 19, scale: 0.95, rotation: 4 },
  { name: "Stripe", src: "/tech/stripe.svg", top: "16%", left: "80%", delay: -8, duration: 18, scale: 0.9, rotation: -4 },
  { name: "PayPal", src: "/tech/paypal.png", top: "54%", left: "82%", delay: -5, duration: 20, scale: 0.9, rotation: 10 },
  { name: "Play Store", src: "/tech/google-play.png", top: "32%", left: "14%", delay: -10, duration: 20, scale: 0.85, rotation: 14 },
  { name: "App Store", src: "/tech/apple.png", top: "78%", left: "18%", delay: -1, duration: 16, scale: 0.9, rotation: -8 },
  { name: "Google Cloud", src: "/tech/google-cloud.png", top: "22%", left: "88%", delay: -9, duration: 18, scale: 0.9, rotation: 6 },
  { name: "Azure", src: "/tech/azure.png", top: "62%", left: "88%", delay: -3, duration: 19, scale: 0.9, rotation: -8 },
  { name: "AWS", src: "/tech/aws.png", top: "10%", left: "52%", delay: -5, duration: 21, scale: 1, rotation: 2 },
  { name: "Xano", src: "/tech/xano.png", top: "76%", left: "46%", delay: -4, duration: 17, scale: 0.9, rotation: -10 },
  { name: "n8n", src: "/tech/n8n.png", top: "36%", left: "92%", delay: -6, duration: 22, scale: 0.85, rotation: 10 },
  { name: "SendGrid", src: "/tech/sendgrid.png", top: "26%", left: "76%", delay: -2, duration: 16, scale: 0.8, rotation: -6 },
  { name: "Postman", src: "/tech/postman.png", top: "84%", left: "34%", delay: -8, duration: 18, scale: 0.85, rotation: 12 },
  { name: "RapidAPI", src: "/tech/rapidapi.png", top: "50%", left: "94%", delay: -4, duration: 18, scale: 0.9, rotation: -8 },
  { name: "Github", src: "/tech/github.png", top: "8%", left: "26%", delay: -7, duration: 20, scale: 0.9, rotation: 4 },
  { name: "Security", src: "/tech/security-shield.svg", top: "82%", left: "70%", delay: -6, duration: 19, scale: 0.95, rotation: -10 },
  { name: "Database", src: "/tech/database.svg", top: "90%", left: "58%", delay: -9, duration: 22, scale: 0.9, rotation: 8 },
  { name: "Performance", src: "/tech/performance.svg", top: "88%", left: "82%", delay: -5, duration: 20, scale: 0.9, rotation: -6 },
  { name: "Notion", src: "/tech/notion.png", top: "90%", left: "12%", delay: -3, duration: 18, scale: 0.85, rotation: 4 },
  { name: "Figma", src: "/tech/figma.png", top: "4%", left: "94%", delay: -8, duration: 19, scale: 0.8, rotation: -4 },
  { name: "Twilio", src: "/tech/twilio.png", top: "44%", left: "12%", delay: -6, duration: 21, scale: 0.85, rotation: 10 },
];

const capabilities = [
  {
    title: "Bubble.io Product Architecture",
    description:
      "Designing scalable Bubble and Webflow systems with reusable components, native mobile builds, and App/Play Store distribution.",
    logos: [
      { src: "/tech/bubble.png", alt: "Bubble.io" },
      { src: "/tech/webflow.png", alt: "Webflow" },
      { src: "/tech/google-play.png", alt: "Google Play" },
      { src: "/tech/apple.png", alt: "App Store" },
    ],
  },
  {
    title: "AI & LLM Automations",
    description:
      "Shipping ChatGPT, Gemini, Claude, and Grok powered copilots—prompt engineering, retrieval, and Make/Zapier automations baked in.",
    logos: [
      { src: "/tech/openai.svg", alt: "OpenAI" },
      { src: "/tech/gemini.png", alt: "Google Gemini" },
      { src: "/tech/anthropic.png", alt: "Anthropic Claude" },
      { src: "/tech/grok.png", alt: "Grok" },
      { src: "/tech/make.png", alt: "Make" },
      { src: "/tech/zapier.png", alt: "Zapier" },
    ],
  },
  {
    title: "Custom API Integrations",
    description:
      "Embedding Stripe, PayPal, SendGrid, RapidAPI, and bespoke REST/GraphQL endpoints—designed, tested, and documented in Postman.",
    logos: [
      { src: "/tech/stripe.svg", alt: "Stripe" },
      { src: "/tech/paypal.png", alt: "PayPal" },
      { src: "/tech/sendgrid.png", alt: "SendGrid" },
      { src: "/tech/postman.png", alt: "Postman" },
      { src: "/tech/rapidapi.png", alt: "RapidAPI" },
    ],
  },
  {
    title: "Custom Code & Advanced Workflows",
    description:
      "Extending workflows with JavaScript, Loops email sequences, Twilio comms, webhook orchestration, and GitHub-backed version control.",
    logos: [
      { src: "/tech/custom-code.svg", alt: "Custom code" },
      { src: "/tech/javascript.png", alt: "JavaScript" },
      { src: "/tech/loops.png", alt: "Loops" },
      { src: "/tech/twilio.png", alt: "Twilio" },
      { src: "/tech/github.png", alt: "GitHub" },
    ],
  },
  {
    title: "Backend & Automation Platforms",
    description:
      "Orchestrating Xano, n8n, Notion, and serverless workloads across AWS, Google Cloud, and Azure for resilient data pipelines.",
    logos: [
      { src: "/tech/xano.png", alt: "Xano" },
      { src: "/tech/n8n.png", alt: "n8n" },
      { src: "/tech/notion.png", alt: "Notion" },
      { src: "/tech/aws.png", alt: "AWS" },
      { src: "/tech/google-cloud.png", alt: "Google Cloud" },
      { src: "/tech/azure.png", alt: "Microsoft Azure" },
    ],
  },
  {
    title: "Identity, Compliance & Security",
    description:
      "Implementing Veriff, CheckrTrust, OFAC screening, secure databases, and performance tuning to keep sensitive workflows audit-ready.",
    logos: [
      { src: "/tech/veriff.png", alt: "Veriff" },
      { src: "/tech/checkrtrust.svg", alt: "CheckrTrust" },
      { src: "/tech/ofac.svg", alt: "OFAC" },
      { src: "/tech/security-shield.svg", alt: "Security" },
      { src: "/tech/database.svg", alt: "Database" },
      { src: "/tech/performance.svg", alt: "Performance" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-theme-dark">
      <div className="container">
        <div className="section-heading">
          <h2>Capabilities</h2>
          <p>
            The expert stack I ship with—battle-tested across production Bubble apps, AI automations, and compliance-heavy launches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="flex flex-col gap-4 rounded-xl border border-theme-accent/12 bg-theme-secondary-dark/90 p-6 md:p-7 shadow-[0_32px_80px_-60px_rgba(35,229,176,0.45)]"
            >
              <h3 className="text-xl font-semibold">{capability.title}</h3>
              <p className="text-sm text-theme-muted-text leading-relaxed">{capability.description}</p>
              <div className="flex flex-wrap items-center gap-3">
                {capability.logos.map((logo) => (
                  <span
                    key={`${capability.title}-${logo.alt}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-theme-dark/80 border border-theme-accent/10"
                  >
                    <img src={logo.src} alt={logo.alt} className="h-6 w-6 object-contain" />
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
