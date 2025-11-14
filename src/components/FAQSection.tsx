import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold text-theme-accent">{children}</span>
);

type AnswerBlock =
  | { type: "text"; content: React.ReactNode }
  | { type: "list"; items: React.ReactNode[] };

type FAQItem = {
  id: string;
  question: string;
  answer: AnswerBlock[];
};

const FAQS: FAQItem[] = [
  {
    id: "tech-stack",
    question: "⚙️ What tech stack do you use?",
    answer: [
      { type: "text", content: <>We build using <Highlight>Bubble.io enhanced with Vibe Coding (AI-powered development)</Highlight> to create fast, scalable, and intelligent applications.</> },
      {
        type: "list",
        items: [
          "✅ Use third-party cloud hosting",
          "✅ Host on your own private server",
          "✅ Let us set up secure AI automations (like n8n) on infrastructure you fully control",
        ],
      },
      { type: "text", content: <span className="italic">💡 You are not locked into one platform—you stay in control. And if you prefer, we can <Highlight>build and deploy your entire app or automation system on your own server</Highlight>, giving you full ownership and flexibility.</span> },
    ],
  },
  {
    id: "security",
    question: "🔒 Are the apps you build secure?",
    answer: [
      { type: "text", content: "Security and quality are built into every layer of our development process. We use:" },
      {
        type: "list",
        items: [
          "🔐 Encrypted data flows",
          "🛡️ Role-based permissions and privacy rules",
          "⚙️ Server-side logic for sensitive operations",
          "📊 Continuous quality checks with AI-driven validation",
        ],
      },
      { type: "text", content: <span className="italic">✨ No matter where your system is hosted, we ensure enterprise-grade security, reliability, and long-term stability.</span> },
    ],
  },
  {
    id: "pricing",
    question: "💰 How much does it cost to build an app?",
    answer: [
      { type: "text", content: <>Our MVP projects typically range from <Highlight>$2.5K to $10K</Highlight>, depending on feature complexity and automation depth. After Discovery, you receive:</> },
      {
        type: "list",
        items: ["• A fixed scope", "• Clear milestones", "• Transparent pricing"],
      },
      { type: "text", content: <span className="italic">So you always know what you are getting—no guesswork, no hidden fees.</span> },
    ],
  },
  {
    id: "post-launch",
    question: "🚀 Do you offer post-launch support?",
    answer: [
      { type: "text", content: <>Yes. We offer a <Highlight>flexible growth subscription</Highlight> where we continuously add new features, improve performance, automate processes, and integrate AI capabilities.</> },
      { type: "text", content: <span className="italic">✨ There are no long-term contracts—you can pause or cancel anytime.</span> },
    ],
  },
  {
    id: "getting-started",
    question: "🎯 How do I get started?",
    answer: [
      { type: "text", content: "Just book a call or share your idea. We will map your vision, define the exact scope, and move into our proven process:" },
      { type: "text", content: <span className="font-semibold text-theme-accent">Discovery → Design → Build → Launch → Growth</span> },
      { type: "text", content: <span className="italic">🔍 You will have full clarity from day one.</span> },
    ],
  },
  {
    id: "fit",
    question: "⭐ How do I know this is right for me?",
    answer: [
      { type: "text", content: <>If you want to <Highlight>validate your idea quickly</Highlight>, <Highlight>avoid heavy engineering costs</Highlight>, and <Highlight>maintain scale, ownership, and flexibility</Highlight>, this is for you.</> },
      { type: "text", content: "We have helped founders go from idea to revenue using Bubble, AI, and automation-powered infrastructure." },
    ],
  },
  {
    id: "success",
    question: "📈 How do you maximize a founder’s chance of success?",
    answer: [
      { type: "text", content: "We don’t just build an app—we engineer momentum. Our framework includes:" },
      {
        type: "list",
        items: [
          "✅ Lean MVP strategy",
          "✅ AI-enhanced development",
          "✅ Built-in analytics & automation",
          "✅ Rapid iteration cycles",
        ],
      },
      { type: "text", content: <span className="italic">🔥 This gives your product a performance advantage from day one.</span> },
    ],
  },
  {
    id: "communication",
    question: "💬 What is your communication style?",
    answer: [
      { type: "text", content: <>We believe in clarity, speed, and transparency. We use <Highlight>Trello for task tracking</Highlight> and stay connected through <Highlight>Slack, WhatsApp, or Telegram</Highlight>—whichever you prefer.</> },
      { type: "text", content: <span className="italic">🔔 You are always in the loop with weekly updates and demos.</span> },
    ],
  },
  {
    id: "process",
    question: "🧭 What does your process look like?",
    answer: [
      { type: "text", content: "Our development journey is streamlined for quality and scalability:" },
      { type: "text", content: <span className="font-semibold text-theme-accent">Discovery → Design (Figma Prototype) → Build (Bubble + AI + Your Hosting Choice) → Launch → Growth Subscription</span> },
      { type: "text", content: <>Each phase has <Highlight>clear deliverables, milestone approvals, and payment only after your satisfaction.</Highlight></> },
    ],
  },
  {
    id: "satisfaction",
    question: "🤝 What if I am not satisfied?",
    answer: [
      { type: "text", content: <>We follow a <Highlight>phase-based payment system</Highlight>. You only pay once a phase is completed and you are fully satisfied.</> },
      { type: "text", content: "We don’t offer refunds—but you never pay ahead of work." },
      { type: "text", content: <span className="italic">✨ Your satisfaction is built into the process, giving you confidence and full control at every step.</span> },
    ],
  },
];

const FAQIntroCard = () => (
  <div className="flex-1 rounded-2xl border border-theme-accent/15 bg-theme-dark/80 p-8 shadow-[0_28px_80px_-40px_rgba(45,206,172,0.4)] backdrop-blur">
    <h3 className="text-2xl font-semibold text-theme-light">Build faster without losing control</h3>
    <p className="mt-4 text-theme-muted-text leading-relaxed">
      Every answer reflects real conversations we have had with founders and operators. If you are looking for a partner
      that blends no-code velocity with engineered reliability, you are in the right place.
    </p>
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      <div className="rounded-xl border border-theme-accent/15 bg-theme-secondary-dark/70 px-4 py-3 text-sm text-theme-muted-text leading-relaxed">
        “We expected a build. We got a reliable growth engine.” — Client feedback we hear often.
      </div>
      <div className="rounded-xl border border-theme-accent/15 bg-theme-secondary-dark/70 px-4 py-3 text-sm text-theme-muted-text leading-relaxed">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-theme-accent/10 text-theme-accent">
            {"🔁"}
          </span>
          <p className="flex-1">Iterative releases with analytics, automations, and AI copilots baked in.</p>
        </div>
      </div>
    </div>
  </div>
);

const FAQReasonsCard = () => (
  <div className="flex-1 rounded-2xl border border-theme-accent/15 bg-gradient-to-br from-theme-dark/80 via-theme-secondary-dark/70 to-theme-dark/85 p-8 shadow-[0_30px_80px_-40px_rgba(45,206,172,0.45)] backdrop-blur">
    <h4 className="text-lg font-semibold text-theme-accent/90">Why founders choose AlBaloshiTech</h4>
    <ul className="mt-4 space-y-3 text-sm text-theme-muted-text leading-relaxed">
      <li className="flex items-start gap-3">
        <span className="mt-1 text-theme-accent">{"⚡"}</span>
        <span>Launch-grade builds in weeks, not months.</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 text-theme-accent">{"🧠"}</span>
        <span>AI copilots and automations layered into every engagement.</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 text-theme-accent">{"🧭"}</span>
        <span>Guided playbook with approvals and milestones at every phase.</span>
      </li>
    </ul>
  </div>
);

const renderAnswerBlock = (block: AnswerBlock, key: string) => {
  if (block.type === "text") {
    return (
      <p key={key} className="leading-relaxed text-sm sm:text-base text-theme-muted-text">
        {block.content}
      </p>
    );
  }

  return (
    <ul key={key} className="space-y-2 pl-5 text-sm sm:text-base leading-relaxed text-theme-muted-text list-disc">
      {block.items.map((item, idx) => (
        <li key={`${key}-item-${idx}`}>{item}</li>
      ))}
    </ul>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className="relative overflow-hidden bg-theme-secondary-dark">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-theme-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-theme-accent/5 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-theme-accent/20 bg-theme-dark/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-theme-accent/80">
            <span>{"🌟"}</span>
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-light">
            Clarity from the first conversation to long-term growth
          </h2>
          <p className="text-theme-muted-text text-base sm:text-lg">
            You stay in control at every stage. Explore how we build momentum for founders, teams, and operators who
            need launch-ready products and sustainable growth.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <FAQIntroCard />
            <FAQReasonsCard />
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className={cn(
                  "group overflow-hidden rounded-3xl border border-theme-accent/15 bg-gradient-to-br from-theme-dark/85 via-theme-secondary-dark/80 to-theme-dark/75 backdrop-blur-sm",
                  "transition-all duration-300 hover:border-theme-accent/45 hover:-translate-y-1 hover:shadow-[0_30px_70px_-40px_rgba(45,206,172,0.55)]",
                  "data-[state=open]:border-theme-accent/60 data-[state=open]:shadow-[0_35px_80px_-35px_rgba(45,206,172,0.6)]"
                )}
              >
                <AccordionTrigger className="px-6 py-5 text-left text-base font-semibold text-theme-light hover:no-underline sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-theme-muted-text">
                  <div className="space-y-4 rounded-2xl border border-theme-accent/10 bg-theme-dark/80 p-6 shadow-[0_16px_36px_-28px_rgba(45,206,172,0.45)]">
                    {faq.answer.map((block, blockIndex) =>
                      renderAnswerBlock(block, `${faq.id}-block-${blockIndex}`)
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
