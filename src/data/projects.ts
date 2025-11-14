export interface PortfolioProject {
  slug: string;
  title: string;
  excerpt: string;
  description: string[];
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  nocode?: boolean;
  services: string[];
  outcomes: string[];
  order: number;
  isStar?: boolean;
  starOrder?: number;
  heroImage?: string;
  heroTagline?: string;
  heroMeta?: {
    year?: string;
    expertise?: string[];
    market?: string;
    ctaLabel?: string;
  };
  gallery?: {
    src: string;
    alt: string;
    caption?: string;
    title?: string;
    description?: string;
  }[];
  stats?: {
    label: string;
    value: string;
    description?: string;
  }[];
  problem?: string;
  solution?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
  productSections?: {
    title: string;
    body: string;
  }[];
  results?: string;
  backgroundGradient?: string;
  showHeroVisual?: boolean;
  heroCtas?: {
    label: string;
    href: string;
    style?: "primary" | "secondary";
    external?: boolean;
  }[];
  outcomesCtaLabel?: string;
  outcomesCtaHref?: string;
  storeLinks?: {
    label: string;
    href: string;
    alt?: string;
    icon?: string;
  }[];
  relatedProject?: {
    label: string;
    href: string;
    blurb?: string;
  };
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "closy",
    title: "Closy",
    excerpt:
      "Sales control center for fractional closers with live revenue dashboards, automated logging, and coaching insights.",
    description: [
      "This platform is built for agencies to streamline their sales tracking process. It centralizes all key sales metrics, offers full visibility into each closer's performance, and highlights trends in essential indicators such as show-up and close rates so teams can make decisions with clarity and confidence.",
      "Closy turns deal updates, commission tracking, and closer performance into a single, living source of truth. Teams can see who is bringing in revenue, which offers are converting, and where follow-ups are slipping without spreadsheets or guesswork.",
      "We architected the entire platform in Bubble with reusable primitives for accounts, offers, contracts, and performance metrics. Automations in Make reconcile CRM data, generate daily scorecards, and notify leaders when deals stall.",
    ],
    image: "/closy/00 - Cloasy Main Pic.png",
    heroImage: "/closy/00 - Cloasy Main Pic.png",
    gallery: [
      {
        src: "/closy/closy-performance.avif",
        alt: "Closy performance dashboard",
        caption: "Performance Dashboard: View every core sales metric in one place, including show-up rate, close rate, monthly deal volume, and total cash collected with month-over-month comparisons.",
        title: "Performance Dashboard",
        description:
          "View all of your agency's core sales metrics in one place. Track show-up rate, close rate, monthly deals, and total cash collected with clear month-over-month comparisons.",
      },
      {
        src: "/closy/closy-tracking.avif",
        alt: "Closy closer tracking view",
        caption: "Individual Closer Analytics: Keep a pulse on each closer's performance to identify top performers and uncover coaching opportunities fast.",
        title: "Individual Closer Analytics",
        description:
          "Easily monitor every closer's performance to spotlight top performers and immediately surface opportunities for targeted coaching.",
      },
      {
        src: "/closy/closy-log-metrics.avif",
        alt: "Closy activity log automation",
        caption: "Daily Activity Logging: Equip every closer with a dedicated tab to log activity so the data stays accurate, timely, and ready for analysis.",
        title: "Daily Activity Logging",
        description:
          "Each closer has a dedicated workspace to log daily touchpoints, so every note, objection, and follow-up is captured and ready for analysis.",
      },
      {
        src: "/closy/closy-custom-metrics.avif",
        alt: "Closy custom metrics builder",
        caption: "Custom Metric Builder: Let agency owners craft bespoke metric packages that reflect their exact sales process and KPIs.",
        title: "Custom Metric Builder",
        description:
          "Agency owners can spin up personalized metric packages that mirror their unique sales process and keep teams focused on the KPIs that move revenue.",
      },
    ],
    stats: [
      {
        label: "Go-live timeline",
        value: "4 weeks",
        description: "From product mapping to production Bubble app with multi-tenant access.",
      },
      {
        label: "Manual updates reduced",
        value: "85%",
        description: "Automations reconcile deals, commissions, and activity logs every hour.",
      },
      {
        label: "Visibility gained",
        value: "100%",
        description: "Every closer, offer, and contract tracked in a single dashboard.",
      },
    ],
    tags: ["Bubble"],
    liveUrl: "https://app.closy.io/",
    nocode: true,
    services: [
      "Product strategy & KPI architecture",
      "Bubble development",
      "Operational analytics enablement",
      "Revenue workflow coaching",
    ],
    problem:
      "Closy needed a way to give founders and fractional closers real-time control over pipeline health. Spreadsheets and ad-hoc trackers created blind spots around commissions, offer performance, and follow-up actions.",
    solution: [
      "Mapped the end-to-end revenue workflow and structured it into reusable Bubble components for accounts, offers, deals, and scorecards.",
      "Designed tailored dashboards for founders, lead closers, and trainees that surface next-best actions, pacing toward targets, and retention risk.",
      "Added a configurable metrics layer so operators can introduce new KPIs or contests in minutes without touching the database.",
      "Embedded coaching playbooks and alerts so leadership can reinforce revenue best practices in real time.",
    ],
    productSections: [
      {
        title: "Performance Dashboard",
        body: "View all of your agency's core sales metrics in one place. The dashboard displays show-up rate, close rate, number of deals closed each month, and total cash collected, with month-over-month comparisons to help track progress and monitor performance trends.",
      },
      {
        title: "Individual Closer Analytics",
        body: "Easily monitor the performance of each closer to identify top performers and uncover opportunities for improvement.",
      },
      {
        title: "Daily Activity Logging",
        body: "Each closer has a dedicated tab to log their daily activity, ensuring the data is always accurate, up-to-date, and ready for analysis.",
      },
      {
        title: "Custom Metric Builder",
        body: "Agency owners can set up personalized metric packages tailored to their specific sales processes, creating a fully customizable performance tracking system.",
      },
    ],
    results:
      "The platform is currently being piloted by multiple agencies doing 500k+/month in revenue, and it is actively powering their sales operations with sharper performance visibility.",
    outcomes: [
      "Launched the MVP in 4 weeks with a production-ready Bubble app and branded experience.",
      "Eliminated most manual spreadsheet updates by syncing CRM activities, payments, and coaching notes automatically.",
      "Gave leadership on-demand dashboards to monitor closer performance, pipeline velocity, and win rates in real time.",
    ],
    order: 1,
    isStar: true,
    starOrder: 1,
    backgroundGradient:
      "linear-gradient(115deg, #00ff57 0%, #00e676 18%, #1c9e8a 50%, #1e8072 68%, #66ff99 100%)",
  },
  {
    slug: "eai",
    title: "Euclides",
    excerpt:
      "AI-Powered Teaching Assistant for K-12 Students\nGuiding students to discover answers, not just receive them.",
    heroMeta: {
      year: "2024",
      expertise: ["AI", "UI/UX", "Development"],
      market: "United States & Greece",
    },
    showHeroVisual: true,
    description: [
      "EAI is a next-generation AI learning assistant built to transform how students engage with education. Rather than dumping answers, it uses interactive questioning, intelligent prompting, and curriculum-based reasoning to guide learners toward deep understanding.",
      "Created for K-12 students, the platform supports eight academic subjects with adaptive pathways that respond to each learner's strengths, gaps, and pace. Every interaction feels like a guided mentoring session that strengthens independent thinking.",
      "The experience blends a warm, modern UI with a conversational AI mentor so schools can bridge the gap between human tutoring and digital learning at scale.",
    ],
    image: "/EAI/00 - EAI main pic.png",
    heroImage: "/EAI/00 - EAI main pic.png",
    gallery: [
      {
        src: "/EAI/eai-topic-selection.avif",
        alt: "EAI topic selection screen",
        title: "Topic Selection",
        description:
          "Students explore mathematics, science, AI fundamentals, and more through an adaptive interface that mirrors real classroom pathways and standards.",
      },
      {
        src: "/EAI/eai-ai-teacher.avif",
        alt: "EAI Socratic AI mentor interface",
        title: "AI Teacher (Socratic Learning Engine)",
        description:
          "EAI acts like a mentor, not a shortcut. It asks guiding questions, offers hints, and nudges learners toward the correct solution without revealing answers immediately.",
      },
      {
        src: "/EAI/eai-engagement-status.avif",
        alt: "EAI engagement dashboard",
        title: "Engagement Dashboard",
        description:
          "Learning streaks, time on task, and interaction insights keep students motivated while giving educators the analytics they need to tailor instruction.",
      },
    ],
    stats: [
      {
        label: "Go-live timeline",
        value: "8 weeks",
        description:
          "From educator discovery to a production Bubble app launching the full Socratic AI mentor and analytics suite.",
      },
      {
        label: "Tech stack",
        value: "OpenAI + Bubble.io + Custom code",
        description:
          "Prompt engineering, Bubble workflows, and bespoke integrations orchestrate safe, responsive tutoring sessions.",
      },
      {
        label: "Learning focus",
        value: "Improved study habits",
        description:
          "Guided questioning keeps K-12 students engaged, strengthening independent learning across US and Greek classrooms.",
      },
    ],
    tags: ["Bubble.io", "OpenAI", "Stripe", "Custom Code"],
    liveUrl: "https://euclides.ai/",
    nocode: true,
    services: [
      "AI & prompt engineering for the Socratic tutor engine",
      "Adaptive learning experience design for K-12 pathways",
      "Hybrid no-code plus custom development architecture",
      "Learning analytics and engagement instrumentation",
    ],
    problem:
      "School leaders needed an AI assistant that could mentor K-12 students without handing out answers, stay aligned to curriculum pacing, and give teachers clear visibility into each learner's progress.",
    solution: [
      "Crafted a Socratic tutoring engine that adapts hints, scaffolding, and follow-up questions so students work through math, science, and language problems step by step.",
      "Connected Bubble workflows with a teacher-facing command center that surfaces transcripts, skill mastery, and suggested interventions in real time.",
      "Embedded classroom-friendly guardrails - multi-language pathways, streak-based engagement, and privacy protections - so districts in the US and Greece could deploy confidently.",
    ],
    outcomes: [
      "Transforms passive answer-seeking into active problem-solving.",
      "Increases subject comprehension through adaptive questioning.",
      "Delivers measurable engagement insights across US and Greek classrooms.",
    ],
    productSections: [
      {
        title: "Topic Selection",
        body: "Students explore a wide range of subjects, from mathematics and science to AI fundamentals, through a personalized interface powered by adaptive AI. Each topic is structured to match real educational pathways and classroom standards.",
      },
      {
        title: "AI Teacher (Socratic Learning Engine)",
        body: "Unlike traditional AI chatbots, EAI does not reveal answers instantly. Instead, it acts as a mentor, asking guiding questions, offering hints, and building the student's critical thinking skills to help them arrive at the correct solution independently.",
      },
      {
        title: "Engagement Dashboard",
        body: "Students can easily track their activity, learning streaks, and time spent interacting with the AI tutor. Engagement metrics personalize the learning journey and encourage consistent practice.",
      },
    ],
    results:
      "A fully functional AI-powered educational platform that delivers meaningful learning outcomes through intelligent guidance instead of answer generation, positioned to disrupt K-12 learning in the US and Greece.",
    order: 2,
    isStar: true,
    starOrder: 2,
    backgroundGradient:
      "linear-gradient(135deg, #fff9e6 0%, #fde7a8 45%, #f6d463 100%)",
  },
  {
    slug: "clear-showings",
    title: "Clear Showing",
    excerpt:
      "Real estate variant of our Test Drive Check platform, tailored for brokerages with branded listing funnels, agent routing, and showing automation.",
    description: [
      "Clear Showing takes the security and identity controls we built for Test Drive Check and repackages them for brokerages. Prospective buyers still pass through rapid KYC, but now every step is wrapped in property marketing landing pages and agent-friendly workflows.",
      "Listings sync from the brokerage CMS into a polished Webflow front end, complete with interactive galleries, neighborhood highlights, and pre-qualified lead forms geared toward high-intent buyers.",
      "Behind the scenes, the shared core app handles OFAC checks, photo ID capture, and audit logs, while a real estate specific layer routes qualified leads to the right agent, triggers calendar holds, and keeps sellers informed automatically.",
      "Because it inherits the Test Drive Check architecture, Clear Showing stays compliant and secure, yet it feels like a native brokerage experience built just for agents and their clients.",
      "This deployment is a direct clone of Test Drive Check refitted for brokerages, preserving the same compliance core with real estate-specific workflows.",
    ],
    image: "/TestDriveCheck/01 - Test Drive Presentation.avif",
    heroImage: "/TestDriveCheck/01 - Test Drive Presentation.avif",
    tags: ["Bubble.io", "Webflow", "Veriff", "Integrations"],
    liveUrl: "https://clearshowings.com/",
    nocode: true,
    services: [
      "Test Drive Check core reuse with real estate-specific UX",
      "Webflow marketing site and property landing pages",
      "MLS and CMS data integrations with automated syncing",
      "Agent routing, calendar automation, and notification design",
    ],
    outcomes: [
      "Branded listing funnels go live in hours, powered by the proven Test Drive Check compliance engine.",
      "Agents receive only pre-screened showing requests, improving response speed and deal velocity.",
      "Brokerage leadership gains unified audit trails across automotive and real estate deployments.",
    ],
    order: 3,
    productSections: [
      {
        title: "Property-First Landing Pages",
        body: "Webflow front-of-house pages showcase listings with rich galleries, neighborhood amenities, and agent bios while quietly triggering the same compliance workflows that power Test Drive Check.",
      },
      {
        title: "Agent Routing & Calendars",
        body: "Qualified leads automatically route to the correct agent pool, reserve calendar slots, and send branded notifications so buyers know exactly what to bring to their showing.",
      },
      {
        title: "MLS & CMS Sync",
        body: "Listing updates flow from the brokerage CMS and MLS feeds into Webflow and Bubble without manual duplication, keeping every property page current.",
      },
    ],
    results:
      "Clear Showing repurposes the Test Drive Check architecture for brokerages, delivering high-trust buyer onboarding, automated showing coordination, and a polished Webflow marketing layer in a fraction of the typical build time.",
    relatedProject: {
      label: "View Test Drive Check",
      href: "/portfolio/testdrivecheck",
      blurb: "Built from the same compliance core as Test Drive Check with a real estate twist.",
    },
  },
  {
    slug: "testdrivecheck",
    title: "Test Drive Check",
    excerpt:
      "Verify drivers in seconds, flag risky profiles with AI, and lock down sensitive data before anyone turns the key.",
    description: [
      "Test Drive Check is a security platform built for car dealerships to keep inventory and customer records safe during test drives. It replaces clipboards and manual lookups with a digital flow that is fast enough for the sales floor and strong enough for compliance teams.",
      "Drivers scan their license once and the platform completes a full identity check in about 30 seconds, tapping national data sources, validating document security features, and running OFAC screening where allowed. A proprietary fraud model weighs those findings, known records, and geospatial anomalies to deliver an instant risk score.",
      "Every interaction is encrypted, audit-logged, and embedded directly inside the dealer workflow so sales teams can approve, escalate, or refuse a drive without leaving their tools. Inventory access stays protected, sensitive data is locked down, and leadership finally gets the traceability regulators expect.",
    ],
    image: "/TestDriveCheck/01 - Test Drive Presentation.avif",
    heroImage: "/TestDriveCheck/01 - Test Drive Presentation.avif",
    heroTagline: "Plug-and-play identity and fraud protection for dealership test drives.",
    heroMeta: {
      year: "2025",
      expertise: ["OFAC Integration", "KYC Verification", "AI Fraud Analysis"],
      market: "United States",
      ctaLabel: "Go to site",
    },
    gallery: [
      {
        src: "/TestDriveCheck/02 - KYC Verificaiotn.avif",
        alt: "Driver license scan returning a 30-second KYC decision",
        title: "KYC Verification",
        description:
          "Scan a driver's license once to trigger a full KYC check in roughly 30 seconds. Computer vision validates security features, national databases confirm identity, and the result returns with traceable evidence.",
      },
      {
        src: "/TestDriveCheck/03 - AI Analysis.avif",
        alt: "AI risk score shown with green, amber, and red indicators",
        title: "AI Fraud Analysis",
        description:
          "A proprietary model scores every test drive using license integrity, historic records, geospatial anomalies, and document tamper signals to forecast risk before the keys leave the desk.",
      },
      {
        src: "/TestDriveCheck/04 - Red Flage Risk Analytics.avif",
        alt: "Traffic light dashboard for approving, escalating, or refusing a test drive",
        title: "Red-Flag Risk Analytics",
        description:
          "Insights snap into a green, amber, or red decision view so sales teams can approve, escalate, or decline in one click while audit trails record every action by user ID and timestamp.",
      },
      {
        src: "/TestDriveCheck/05 - White Labeling.avif",
        alt: "White-labeled interface showing dealership branding across the workflow",
        title: "White-Labeling",
        description:
          "Dealerships brand the experience with their colors, logo, and optional custom domain so Test Drive Check feels native inside every store's workflow.",
      },
    ],
    stats: [
      {
        label: "Identity verification time",
        value: "~30 seconds",
        description:
          "License scans hit national data sources, surface recorded offenses where permitted, and return a clear pass or fail with evidence.",
      },
      {
        label: "Rapid adoption",
        value: "10+ dealerships",
        description:
          "Rolled out nationwide within the first two weeks, giving sales and compliance teams shared visibility.",
      },
      {
        label: "Security posture",
        value: "OFAC, KYC, encrypted",
        description:
          "Encryption at rest and in transit, role-based access controls, and full audit logs meet dealer compliance expectations.",
      },
    ],
    tags: ["Bubble.io", "OpenAI", "Stripe", "CheckrTrust", "Veriff"],
    liveUrl: "https://testdrivecheck.ai/",
    nocode: true,
    services: [
      "Identity verification workflow design",
      "Bubble.io build with OFAC and data source integrations",
      "AI fraud risk modeling and analytics",
      "Dealer CRM and document automation",
    ],
    problem:
      "Dealerships were relying on paper forms and cursory license checks, leaving them exposed to synthetic identities, unlogged test drives, and compliance gaps when vehicles went missing.",
    solution: [
      "Replaced legacy paperwork with a mobile-first flow that captures driver identity, signatures, and vehicle assignments in one guided experience.",
      "Integrated national data sources, OFAC screening, and a custom fraud score so managers spot risky profiles before releasing inventory.",
      "Encrypted every touchpoint, layered role-based access, and piped structured audit logs into the dealer's source of truth for regulatory traceability.",
    ],
    outcomes: [
      "Adopted by 10+ dealerships nationwide within two weeks of launch.",
      "Faster handovers, fewer manual checks, stronger compliance posture.",
      "Sales teams approve, escalate, or refuse at a glance with complete audit trails.",
    ],
    productSections: [
      {
        title: "KYC Verification",
        body: "Scan a driver's license and run a complete identity check in about 30 seconds. Hidden document security elements are validated with computer vision, while national databases and watchlists confirm who is behind the wheel.",
      },
      {
        title: "AI Analysis",
        body: "Fraud indicators are scored by a proprietary model trained on auto theft and synthetic identity patterns. It weighs license integrity, known records, geospatial anomalies, and tamper signals to return a single risk score plus a pass or fail.",
      },
      {
        title: "Red-Flag Risk Analytics",
        body: "Results resolve into a green, amber, or red decision frame. Every action is timestamped and linked to a user ID so managers can approve, escalate, or decline with full accountability.",
      },
      {
        title: "White-Labeling",
        body: "Dealership-level branding keeps the product feeling native. Colors, logos, and optional custom domains mirror each store's customer experience while the security engine works behind the scenes.",
      },
    ],
    results:
      "Test Drive Check keeps test drives moving fast while enforcing OFAC screening, KYC verification, encryption, and audit logging across every dealership touchpoint. The same core also powers Clear Showing, our real estate-focused adaptation for brokerage listing showings.",
    outcomesCtaLabel: "View Live Product",
    outcomesCtaHref: "https://testdrivecheck.ai/",
    order: 4,
    isStar: true,
    starOrder: 3,
    backgroundGradient: "linear-gradient(180deg, #2E7FE8 0%, #3CA8F0 100%)",
    relatedProject: {
      label: "See Clear Showing",
      href: "/portfolio/clear-showings",
      blurb: "Cloned for real estate brokerages with property marketing layers and agent workflows.",
    },
  },
  {
    slug: "youfirsthk",
    title: "Total Sport",
    excerpt:
      "All-in-one Hong Kong marketplace to book sports coaches, tutors, beauty and wellness pros with native apps and package billing.",
    description: [
      "Total Sport HK is YouFirst’s consumer marketplace that centralizes sports coaching, tutoring, beauty, and lifestyle bookings into a single experience for Hong Kong families.",
      "Shoppers can discover vetted providers, compare by rating, price, and proximity, and lock in sessions in seconds with automated reminders and rescheduling flows built into the app.",
      "We delivered the marketplace in Bubble with native app wrappers, Stripe packages, and provider tooling so the team can launch new services and partners without rebuilding their operations stack.",
    ],
    image: "/TotalSport/total-sport-hero.png",
    heroImage: "/TotalSport/total-sport-hero.png",
    heroTagline: "Find your favourite sports coach, tutor, beautician and more.",
    heroMeta: {
      year: "2025",
      expertise: ["Marketplace UX", "Subscription Billing", "Mobile Apps"],
      market: "Hong Kong",
    },
    backgroundGradient: "linear-gradient(135deg, #020617 0%, #0B1B35 45%, #1E3A8A 100%)",
    tags: ["Bubble.io", "Stripe", "Mobile Apps"],
    liveUrl: "https://youfirsthk.com/",
    nocode: true,
    services: [
      "Bubble.io marketplace architecture for multi-vertical providers",
      "iOS and Android app wrappers with App Store and Google Play launch",
      "Stripe subscriptions, package credits, and payout automation",
      "Provider onboarding workflows and analytics instrumentation",
    ],
    stats: [
      {
        label: "Monthly active users",
        value: "8.5k",
        description: "Trusted by over 8,500 customers searching for sports, tutoring, beauty, and wellness pros.",
      },
      {
        label: "Registered businesses",
        value: "100+",
        description: "Service providers onboarded across Hong Kong with curated profiles and package offers.",
      },
      {
        label: "Bookings processed",
        value: "20k+",
        description: "End-to-end booking, reminders, and rescheduling managed directly inside the marketplace.",
      },
      {
        label: "Customer satisfaction",
        value: "4.9",
        description: "High ratings sustained through instant support, verified providers, and seamless rebooking.",
      },
    ],
    outcomes: [
      "8.5k+ monthly active users with repeat sessions across sports, tutoring, and wellness verticals.",
      "100+ registered businesses using package discounts and loyalty incentives to drive retention.",
      "20k+ bookings completed while maintaining a 4.9 satisfaction score from consumers.",
    ],
    storeLinks: [
      {
        href: "https://play.google.com/store/apps/details?id=com.vEADzemyyEFM.natively",
        icon: "/TotalSport/google-play.svg",
        alt: "Get Total Sport on Google Play",
      },
      {
        href: "https://apps.apple.com/au/app/total-sports-hk/id6741154482",
        icon: "/TotalSport/app-store.svg",
        alt: "Download Total Sport on the App Store",
      },
    ],
    productSections: [
      {
        title: "Effortless Reservations",
        body: "A single mobile-first flow lets customers discover services, compare options, and confirm sessions without hopping between messaging apps or spreadsheets.",
      },
      {
        title: "Smart Booking Management",
        body: "Customers can book, manage, or reschedule appointments in seconds while providers see live calendars, automated reminders, and attendance tracking.",
      },
      {
        title: "Package Credits & Loyalty",
        body: "Stripe-powered packages and discounts encourage multi-session commitments, unlocking predictable revenue for partner businesses.",
      },
      {
        title: "Curated Discovery",
        body: "Personalized rankings surface the most affordable, closest, or highest-rated providers so families in Hong Kong find the perfect fit fast.",
      },
    ],
    gallery: [
      {
        src: "/TotalSport/total_Sport_main.avif",
        alt: "Total Sport marketplace hero artwork with booking callouts",
      },
    ],
    results:
      "Total Sport HK unifies Hong Kong’s sports, tutoring, beauty, and wellness bookings into one marketplace with native apps, Stripe-powered packages, and high-satisfaction customer journeys.",
    order: 5,
    isStar: true,
    starOrder: 4,
  },
];

export const getPortfolioProjects = () =>
  [...portfolioProjects].sort((a, b) => a.order - b.order);

export const getStarProjects = () =>
  getPortfolioProjects()
    .filter((project) => project.isStar)
    .sort(
      (a, b) =>
        (a.starOrder ?? a.order) - (b.starOrder ?? b.order)
    );







