import React from "react";
import { Helmet } from "react-helmet-async";
import { Award, BadgeCheck, Sparkles, ShieldCheck, Target, Database, GraduationCap, Cloud, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useContactVisibility } from "@/hooks/useContactVisibility";

type IconComponent = React.ElementType;

const certificates = [
  {
    title: "Certified Bubble Professional",
    issuer: "Bubble.io",
    year: "2024",
    highlights: ["Full-stack Bubble development", "Performance-first delivery"],
    image: "/certificaiton/01_bubble_certificaiton.jpeg",
  },
  {
    title: "Bubble Database Specialist",
    issuer: "NoCode Academy",
    year: "2023",
    highlights: ["Relational data design", "Future-proof scaling"],
    image: "/certificaiton/02_NCA - Professional Bubble Database - 1700721396433x595068971648024600.png",
  },
  {
    title: "Bubble Security Specialist",
    issuer: "NoCode Academy",
    year: "2024",
    highlights: ["Secure workflows", "Role-based access"],
    image: "/certificaiton/03_NCA - Professional Security_1702443927097x341926105597083650.png",
  },
  {
    title: "Bubble Workflow Specialist",
    issuer: "NoCode Academy",
    year: "2024",
    highlights: ["Complex automations", "Dependency mapping"],
    image: "/certificaiton/04_NCA - Professional workflow_1700046247770x454238762196271100.png",
  },
  {
    title: "Google IT Support Professional",
    issuer: "Google",
    year: "Apr 2023",
    highlights: ["Systems operations", "SLO-focused support"],
    image: "/certificaiton/05_google_it_support.png",
  },
  {
    title: "AirDev Bubble Bootcamp",
    issuer: "AirDev",
    year: "2022",
    highlights: ["Product strategy", "Ship-ready UX"],
    image: "/certificaiton/06_AirDev-bootcamp_certificate.jpg",
  },
  {
    title: "AWS Solutions Foundations",
    issuer: "AWS",
    year: "2021",
    highlights: ["Cloud primitives", "Security-by-default"],
    image: "/certificaiton/07_aws_certification.png",
  },
  {
    title: "CentOS / Linux Systems",
    issuer: "Linux Foundation",
    year: "2021",
    highlights: ["Server hardening", "Automation-ready setups"],
    image: "/certificaiton/08_centos_Linus_system.png",
  },
];

const skillCategories = [
  {
    title: "Payments & Billing",
    items: ["Stripe", "PayPal", "Paddle"],
  },
  {
    title: "Email, Messaging & Notifications",
    items: ["SendGrid", "Postmark", "Mailchimp", "Brevo", "Twilio"],
  },
  {
    title: "Authentication & Identity",
    items: ["Auth0", "Google OAuth", "Facebook Login", "Apple Sign-In", "Veriff", "CheckrTrust"],
  },
  {
    title: "AI & Intelligence",
    items: ["OpenAI", "Claude API", "Gemini API"],
  },
  {
    title: "Video & Communication",
    items: ["Google Meet API", "Daily.co"],
  },
  {
    title: "Design & UI",
    items: ["Figma", "Canva"],
  },
  {
    title: "Docs & Collaboration",
    items: ["Notion", "Google Docs", "Google Drive"],
  },
  {
    title: "Project Management",
    items: ["ClickUp", "Trello"],
  },
];

const certificationMeaningCards: { title: string; description: string; icon: IconComponent }[] = [
  {
    title: "Standard of excellence",
    description:
      "Bubble&rsquo;s internal reviewers validated that my architecture, debugging, and release rituals meet their bar for production-grade excellence.",
    icon: Sparkles,
  },
  {
    title: "Expertise across the stack",
    description:
      "The exam spans frontend, backend, APIs, database modeling, and performance profiling&mdash;so passing it proves end-to-end mastery.",
    icon: ShieldCheck,
  },
  {
    title: "Confidence in hiring",
    description:
      "You get a certified partner pre-vetted for reliability, documentation, and communication, which shortens onboarding and builds trust faster.",
    icon: Award,
  },
];

const spotlightCert = {
  title: "Certified Bubble Professional",
  year: "2024",
  subtitle: "Bubble's highest bar for architecture, resilience, and performance-first builds (earned June 2, 2024).",
  description:
    "The exam mirrors real founder engagements: a production-grade rebuild that verifies data modeling, custom logic, API governance, staging parity, and debugging rituals. Passing it proves that I can shepherd regulated workflows from audit to launch without plugins or shortcuts.",
  bullets: [
    "Modeled multi-tenant CRM and compliance dashboards with minimal technical debt.",
    "Documented release plans: feature flags, rollback scripts, and QA playbooks per sprint.",
    "Defended architecture decisions live with Bubble's assessors during performance reviews.",
  ],
  metrics: [
    { label: "Assessment hours", value: "24", detail: "Scenario lab + proctored review" },
    { label: "Use cases defended", value: "11 modules", detail: "Payments, AI, auth, comms" },
    { label: "Result", value: "Passed first attempt", detail: "Performance-first commendation" },
  ],
  image: "/certificaiton/01_bubble_certificaiton.jpeg",
};

const readinessPillars = [
  {
    title: "Security & Compliance",
    detail: "Role-based privacy rules, SOC2-ready logging, ID verification, and governance for sensitive workflows.",
  },
  {
    title: "Reliability Playbooks",
    detail: "Disaster recovery plans, backup and rollback patterns, and observability rituals baked into releases.",
  },
  {
    title: "AI & Workflow Fusion",
    detail: "Claude, GPT, and Gemini prompts embedded directly into Bubble actions and Make / Zapier ladders.",
  },
  {
    title: "Team Enablement",
    detail: "Structured documentation, async Loom walkthroughs, and ClickUp runbooks for internal teams.",
  },
];

const journeyTimeline: { year: string; title: string; description: string; icon: IconComponent }[] = [
  {
    year: "2024",
    title: "Certified Bubble Professional",
    description: "Validated enterprise-ready Bubble builds with architecture, QA, and live defensive reviews.",
    icon: Award,
  },
  {
    year: "2024",
    title: "Security & Workflow Specialist",
    description: "NoCode Academy labs on dependency mapping, incident drills, and least-privilege automation.",
    icon: ShieldCheck,
  },
  {
    year: "2023",
    title: "Bubble Database Specialist",
    description: "Relational modeling and future-proof scaling for CRMs, marketplaces, and analytics suites.",
    icon: Database,
  },
  {
    year: "2023",
    title: "Google IT Support Professional",
    description: "Ops rigor, SLO thinking, and root-cause analysis that now informs every Bubble build.",
    icon: GraduationCap,
  },
  {
    year: "2022",
    title: "AirDev Bubble Bootcamp",
    description: "Product strategy, UX heuristics, and scoping frameworks tuned for shipping founder MVPs.",
    icon: Target,
  },
  {
    year: "2021",
    title: "AWS & Linux Foundations",
    description: "Cloud primitives, CentOS administration, and automation-ready environments for Bubble backends.",
    icon: Cloud,
  },
];

const bubbleVerificationUrl = "https://bubble.io/certificate/1717326861532x553683627463259500";

const CertificationsPage = () => {
  const pageTitle = "Certifications & Skills | Nasir Nawaz";
  const pageDescription =
    "Verified certifications, badges, and product delivery skills that back every Bubble, AI, and automation project.";
  const shouldShowContact = useContactVisibility();

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      <div className="min-h-screen bg-[#F9FBFF] text-slate-900">
        <Navbar />
        <main className="pt-28 pb-24 space-y-20">
          <section className="container">
            <div className="relative overflow-hidden rounded-[48px] border border-white/70 bg-gradient-to-br from-[#fff8f4] via-white to-[#eef2ff] px-8 py-12 text-slate-900 shadow-[0_50px_120px_-70px_rgba(15,23,42,0.5)]">
              <div className="absolute inset-y-[-40%] right-[-10%] w-1/2 rounded-full bg-gradient-to-br from-[#ffd3bf] via-[#ffe6d8] to-[#cdd7ff] opacity-60 blur-[130px]" aria-hidden="true" />
              <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#d85a1a]">Certified bubble, AI & automation partner</p>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-slate-900">
                    Proof that your builder is ready for regulated products, compliance workflows, and AI-backed launches.
                  </h1>
                  <p className="text-lg text-slate-600">
                    Every certification below ties back to production work&mdash;from marketplace billing to KYC identity flows.
                    The gallery is more than badges: it is a research-backed log of the skills used on live client systems.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/80 bg-white/90 p-4 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.25)]">
                      <p className="text-sm font-semibold text-slate-900">Release rituals</p>
                      <p className="text-sm text-slate-600">Feature flags, regression suites, and multi-environment governance.</p>
                    </div>
                    <div className="rounded-3xl border border-white/80 bg-white/90 p-4 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.25)]">
                      <p className="text-sm font-semibold text-slate-900">Compliance focus</p>
                      <p className="text-sm text-slate-600">Privacy rules, SOC2-minded logging, and least-privilege access.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {shouldShowContact && (
                      <a
                        href="/#contact"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff8c4c] via-[#f96f4a] to-[#ffb347] px-7 py-3 text-base font-semibold text-white shadow-[0_20px_55px_rgba(249,111,74,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_30px_70px_rgba(249,111,74,0.45)]"
                      >
                        Book a certified review
                      </a>
                    )}
                    <a
                      href="#gallery"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d4dcff] px-7 py-3 text-base font-semibold text-slate-900 transition hover:bg-white"
                    >
                      Explore credentials
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-[36px] border border-white/80 bg-white/95 p-4 shadow-[0_35px_120px_-70px_rgba(15,23,42,0.4)]">
                    <div className="overflow-hidden rounded-[28px] border border-white bg-white">
                      <img src={certificates[0].image} alt={certificates[0].title} className="h-[360px] w-full object-cover" loading="lazy" />
                    </div>
                    <div className="mt-6 space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#94a3b8]">Spotlight</p>
                      <h2 className="text-2xl font-semibold text-slate-900">{certificates[0].title}</h2>
                      <p className="text-sm text-slate-600">Performance-first delivery, audited by Bubble&rsquo;s internal certification squad.</p>
                      <a
                        href={bubbleVerificationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#ffd3bf] bg-white px-4 py-2 text-sm font-semibold text-[#d85a1a] shadow-[0_12px_30px_-18px_rgba(249,140,76,0.45)] transition hover:-translate-y-0.5 hover:bg-[#fff2ea]"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        Verify on Bubble
                      </a>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-[#ffeadf]/80 bg-white/95 px-5 py-2 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.3)] text-sm font-semibold text-slate-800">
                    Backed by 8 verified programs
                  </div>
                </div>
              </div>
              <div className="mt-12 space-y-6">
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#94a3b8]">What Bubble certification means</p>
                  <p className="mt-2 text-base text-slate-600">
                    Directly from Bubble&rsquo;s rubric—why the credential matters when you bring someone onto a regulated build.
                  </p>
                </div>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {certificationMeaningCards.map(({ title, description, icon: Icon }) => (
                    <article key={title} className="rounded-[30px] border border-white/80 bg-gradient-to-br from-white via-[#fff8f4] to-white/90 p-5 text-left shadow-[0_25px_80px_-60px_rgba(15,23,42,0.35)]">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff0e4] text-[#ff8c4c] shadow-[0_10px_25px_rgba(249,140,76,0.25)]">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                      </div>
                      <p className="mt-3 text-sm text-slate-600">{description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="container space-y-10">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <article className="rounded-[40px] border border-white/70 bg-white/90 p-8 shadow-[0_45px_110px_-80px_rgba(15,23,42,0.5)]">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f96f4a]">Certification spotlight</p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                  {spotlightCert.title} <span className="text-base text-[#94a3b8]">({spotlightCert.year})</span>
                </h2>
                <p className="mt-3 text-base text-slate-600">{spotlightCert.subtitle}</p>
                <p className="mt-4 text-slate-600">{spotlightCert.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {spotlightCert.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 text-[#f96f4a]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  {spotlightCert.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-3xl border border-slate-100 bg-slate-50 p-4 text-center">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{metric.label}</p>
                      <p className="mt-2 text-2xl font-semibold text-slate-900">{metric.value}</p>
                      <p className="text-xs text-slate-500">{metric.detail}</p>
                    </div>
                  ))}
                </div>
              </article>
              <div className="space-y-6">
                {readinessPillars.map((pillar) => (
                  <article key={pillar.title} className="rounded-[32px] border border-white/80 bg-gradient-to-r from-white via-[#fff8f4] to-white/90 p-6 shadow-[0_30px_90px_-70px_rgba(15,23,42,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_30px_80px_-60px_rgba(249,140,76,0.35)]">
                    <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{pillar.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="gallery" className="container space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="max-w-3xl space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6572ff]">Credibility gallery</p>
                <h2 className="text-3xl font-semibold text-slate-900">See the programs behind every build</h2>
                <p className="text-base text-slate-600">
                  Each certificate links to a real client outcome: AI copilots, banking-grade workflows, enterprise reporting, and Bubble products that have paid users today.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.45)]">
                <Award className="h-4 w-4 text-[#f96f4a]" />
                8 verified programs
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {certificates.map((cert) => (
                <article
                  key={cert.title}
                  className="group relative flex flex-col rounded-[32px] border border-white/80 bg-white p-4 shadow-[0_35px_80px_-60px_rgba(15,23,42,0.4)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_50px_110px_-65px_rgba(15,23,42,0.55)]"
                >
                  <div className="overflow-hidden rounded-[24px] border border-slate-100 bg-slate-50">
                    <img src={cert.image} alt={cert.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#94a3b8]">{cert.issuer}</p>
                      <span className="rounded-full bg-[#fdf4ee] px-3 py-1 text-xs font-semibold text-[#d85a1a]">{cert.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{cert.title}</h3>
                    <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                      {cert.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <BadgeCheck className="h-4 w-4 text-[#f96f4a]" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="journey" className="container space-y-8">
            <div className="text-center space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d85a1a]">Journey & research</p>
              <h2 className="text-3xl font-semibold text-slate-900">How the toolkit was built</h2>
              <p className="mx-auto max-w-3xl text-base text-slate-600">
                Certifications were collected sequentially so each engagement got an immediate upgrade. You can see the research trail below&mdash;from Linux ops to Bubble database mastery to proctored professional exams.
              </p>
            </div>
            <div className="space-y-6">
              {journeyTimeline.map((step) => {
                const Icon = step.icon;
                return (
                  <article key={step.title} className="relative flex flex-col gap-4 rounded-[34px] border border-white/80 bg-white/90 p-6 shadow-[0_35px_100px_-70px_rgba(15,23,42,0.5)] md:flex-row md:items-center">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#94a3b8]">{step.year}</span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff4ec] text-[#d85a1a]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="container space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d85a1a]">Tool stack</p>
                <h2 className="text-3xl font-semibold text-slate-900">Platforms wired into current builds</h2>
                <p className="mt-2 text-base text-slate-600">
                  Pairing the right tool to the right workflow keeps founders out of vendor mazes. These are the services powering recent Bubble, AI, and automation programs.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ffdfcc] bg-[#fff8f4] px-4 py-2 text-sm font-medium text-[#d85a1a] shadow-[0_18px_45px_-35px_rgba(249,140,76,0.45)]">
                <Sparkles className="h-4 w-4" />
                Always testing new releases
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {skillCategories.map((category) => (
                <article key={category.title} className="rounded-[28px] border border-white/70 bg-gradient-to-br from-white via-[#fff8f4] to-white/90 p-6 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_40px_90px_-65px_rgba(15,23,42,0.45)]">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#94a3b8]">{category.items.length} tools</span>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <li key={skill} className="rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-slate-700 shadow-[0_8px_20px_-12px_rgba(15,23,42,0.45)]">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {shouldShowContact && (
            <section className="container">
              <div className="rounded-[32px] border border-white/70 bg-white/90 p-10 text-center shadow-[0_45px_120px_-80px_rgba(15,23,42,0.55)]">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d85a1a]">Ready when you are</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900">Need a certified partner for your build?</h2>
                <p className="mt-4 text-lg text-slate-600">
                  Let&rsquo;s connect on a quick call and map the exact workflows, compliance, and automations your launch deserves.
                  I&rsquo;ll bring proof-backed plans and references for every certificate here.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff8c4c] via-[#f96f4a] to-[#ffb347] px-8 py-3 text-base font-semibold text-white shadow-[0_20px_45px_rgba(249,111,74,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_25px_55px_rgba(249,111,74,0.45)]"
                  >
                    Book a discovery call
                  </a>
                  <a
                    href="/#projects"
                    className="inline-flex items-center gap-2 rounded-full border border-[#ffb48a] px-8 py-3 text-base font-semibold text-[#d85a1a] transition hover:border-[#ff8c4c] hover:text-[#ff8c4c]"
                  >
                    Review signature builds
                  </a>
                </div>
              </div>
            </section>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CertificationsPage;
