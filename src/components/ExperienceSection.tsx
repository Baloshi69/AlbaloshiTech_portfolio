import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import { cn } from "@/lib/utils";

type AnimationData = Record<string, unknown>;

interface StepDefinition {
  id: string;
  title: string;
  description: string;
  animationPath: string;
  orientation: 'left' | 'right';
}

const STEPS: StepDefinition[] = [
  {
    id: "01",
    title: "🔍 Discovery",
    description:
      "We begin by deeply understanding your vision, clarifying your goals, and defining a precise scope of work. Together, we establish expectations, success metrics, and service agreements that shape the core of your MVP or product roadmap.",
    animationPath: "/lovable-uploads/Descovery.json",
    orientation: "left",
  },
  {
    id: "02",
    title: "🎨 Design",
    description:
      "With your strategy in place, our team transforms ideas into interactive prototypes using Figma. This stage brings your product to life visually—refining user journeys, ensuring intuitive UX, and aligning every screen with your brand identity.",
    animationPath: "/lovable-uploads/Design.json",
    orientation: "right",
  },
  {
    id: "03",
    title: "🚀 Build & Launch",
    description:
      "Your product is developed rapidly using modern no-code and low-code tools—without sacrificing performance or scalability. In just 4–6 weeks, we deliver a launch-ready app, fully optimized and ready for real users. Just press 'Go Live'.",
    animationPath: "/lovable-uploads/Build_&_Launch.json",
    orientation: "left",
  },
  {
    id: "04",
    title: "📈 Scale & Grow",
    description:
      "Once launched, keep evolving. With our flexible development subscription, you can continuously add new features, optimize performance, and scale—without contracts or long-term commitments. Growth on your terms.",
    animationPath: "/lovable-uploads/Software Development.json",
    orientation: "right",
  },
];

const DESKTOP_CONNECTOR = {
  width: 460,
  height: 220,
  viewBox: "0 0 460 220",
  path: "M36 188 C 168 44, 298 214, 416 60",
  start: { cx: 36, cy: 188, r: 8 },
  end: { cx: 416, cy: 60, r: 11 },
};

const MOBILE_CONNECTOR = {
  width: 260,
  height: 190,
  viewBox: "0 0 260 190",
  path: "M34 178 C 18 152, 54 128, 124 118 S 218 100, 206 72",
  dashPattern: "88 48 88 48 88 480",
  start: { cx: 34, cy: 178, r: 7.5 },
  end: { cx: 206, cy: 72, r: 10.5 },
};

const ExperienceSection = () => {
  const [animations, setAnimations] = useState<Record<string, AnimationData>>({});

  useEffect(() => {
    let isMounted = true;

    const loadAnimations = async () => {
      const results = await Promise.allSettled(
        STEPS.map(async (step) => {
          const response = await fetch(step.animationPath);
          if (!response.ok) {
            throw new Error(`Failed to load animation for ${step.title}`);
          }
          const data = (await response.json()) as AnimationData;
          return [step.id, data] as const;
        })
      );

      if (!isMounted) {
        return;
      }

      const nextAnimations: Record<string, AnimationData> = {};

      results.forEach((result, index) => {
        const step = STEPS[index];
        if (result.status === "fulfilled") {
          const [id, data] = result.value;
          nextAnimations[id] = data;
        } else {
          console.error(`Error loading animation for ${step.title}:`, result.reason);
        }
      });

      setAnimations(nextAnimations);
    };

    loadAnimations();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="experience" className="bg-theme-dark">
      <div className="container">
        <div className="section-heading">
          <h2>We Turn Your Idea Into a Scalable Product</h2>
          <p>Our proven four-phase framework takes you smoothly from concept to continuous growth—fast, efficient, and stress-free.</p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {STEPS.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              animation={animations[step.id]}
              isLast={index === STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StepCard = ({
  step,
  animation,
  isLast,
}: {
  step: StepDefinition;
  animation?: AnimationData;
  isLast: boolean;
}) => {
  const isLeft = step.orientation === "left";
  const gradientId = `connector-gradient-${step.id}`;
  const mobileGradientId = `${gradientId}-mobile`;
  const mobileGlowStartId = `${gradientId}-mobile-glow-start`;
  const mobileGlowEndId = `${gradientId}-mobile-glow-end`;
  const desktopGlowStartId = `${gradientId}-desktop-glow-start`;
  const desktopGlowEndId = `${gradientId}-desktop-glow-end`;
  const connectorStyle: React.CSSProperties = {
    left: "50%",
    bottom: "-9rem",
    transform: isLeft ? "translateX(-50%)" : "translateX(-50%) scaleX(-1)",
  };
  const mobileConnectorTransform = isLeft ? "translateX(-26%)" : "translateX(26%) scaleX(-1)";

  return (
    <div className="relative">
      <div
        className={cn(
          "flex flex-col items-center gap-8 md:gap-12",
          isLeft ? "md:flex-row" : "md:flex-row-reverse"
        )}
      >
        <div className="w-full md:w-1/2 flex justify-center">
          {animation ? (
            <Lottie
              animationData={animation}
              loop
              autoplay
              className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[420px]"
            />
          ) : (
            <div
              className="h-24 w-24 animate-pulse rounded-full bg-theme-accent/20"
              aria-hidden="true"
            />
          )}
        </div>

        <div className="w-full md:w-1/2 space-y-4 text-left">
          <h3 className="text-3xl font-bold text-theme-light md:text-4xl">{step.title}</h3>
          <p className="text-theme-muted-text leading-relaxed text-base md:text-lg">
            {step.description}
          </p>
        </div>
      </div>

      {!isLast && (
          <>
            <div className="absolute inset-x-0 -bottom-[8rem] flex justify-center md:hidden pointer-events-none z-[1]" aria-hidden="true">
              <svg
                width={MOBILE_CONNECTOR.width}
                height={MOBILE_CONNECTOR.height}
                viewBox={MOBILE_CONNECTOR.viewBox}
                className="text-theme-accent/70 drop-shadow-[0_14px_38px_rgba(53,223,179,0.25)]"
                style={{ transform: mobileConnectorTransform }}
              >
                <defs>
                  <linearGradient id={mobileGradientId} x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(53, 223, 179, 0.1)" />
                    <stop offset="35%" stopColor="rgba(75, 244, 196, 0.45)" />
                    <stop offset="70%" stopColor="rgba(110, 255, 205, 0.8)" />
                    <stop offset="100%" stopColor="rgba(75, 244, 196, 0.5)" />
                  </linearGradient>
                  <filter id={mobileGlowStartId} x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id={mobileGlowEndId} x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d={MOBILE_CONNECTOR.path}
                  stroke={`url(#${mobileGradientId})`}
                  strokeWidth="4.5"
                  fill="none"
                  strokeDasharray={MOBILE_CONNECTOR.dashPattern}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.95"
                />
                <g filter={`url(#${mobileGlowStartId})`}>
                  <circle
                    cx={MOBILE_CONNECTOR.start.cx}
                    cy={MOBILE_CONNECTOR.start.cy}
                    r={MOBILE_CONNECTOR.start.r}
                    fill="rgba(110, 255, 205, 0.95)"
                    stroke="rgba(75, 244, 196, 0.45)"
                    strokeWidth="2.2"
                  />
                </g>
                <g filter={`url(#${mobileGlowEndId})`}>
                  <circle
                    cx={MOBILE_CONNECTOR.end.cx}
                    cy={MOBILE_CONNECTOR.end.cy}
                    r={MOBILE_CONNECTOR.end.r}
                    fill="rgba(45, 206, 172, 0.35)"
                    stroke="rgba(75, 244, 196, 0.55)"
                    strokeWidth="3"
                  />
                </g>
              </svg>
            </div>
          <svg
            className="absolute hidden md:block text-theme-accent pointer-events-none drop-shadow-[0_18px_46px_rgba(53,223,179,0.2)]"
            width={DESKTOP_CONNECTOR.width}
            height={DESKTOP_CONNECTOR.height}
            viewBox={DESKTOP_CONNECTOR.viewBox}
            aria-hidden="true"
            style={connectorStyle}
          >
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(53, 223, 179, 0)" />
                <stop offset="20%" stopColor="rgba(75, 244, 196, 0.45)" />
                <stop offset="55%" stopColor="rgba(110, 255, 205, 0.7)" />
                <stop offset="80%" stopColor="rgba(75, 244, 196, 0.45)" />
                <stop offset="100%" stopColor="rgba(53, 223, 179, 0)" />
              </linearGradient>
              <filter id={desktopGlowStartId} x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2.4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id={desktopGlowEndId} x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3.1" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d={DESKTOP_CONNECTOR.path}
              stroke={`url(#${gradientId})`}
              strokeWidth="4.5"
              fill="none"
              strokeDasharray="12 22"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.95"
            />
            <g filter={`url(#${desktopGlowStartId})`}>
              <circle
                cx={DESKTOP_CONNECTOR.start.cx}
                cy={DESKTOP_CONNECTOR.start.cy}
                r={DESKTOP_CONNECTOR.start.r}
                fill="rgba(110, 255, 205, 0.95)"
                stroke="rgba(75, 244, 196, 0.55)"
                strokeWidth="2.2"
              />
            </g>
            <g filter={`url(#${desktopGlowEndId})`}>
              <circle
                cx={DESKTOP_CONNECTOR.end.cx}
                cy={DESKTOP_CONNECTOR.end.cy}
                r={DESKTOP_CONNECTOR.end.r}
                fill="rgba(45, 206, 172, 0.35)"
                stroke="rgba(75, 244, 196, 0.55)"
                strokeWidth="3"
              />
            </g>
          </svg>
        </>
      )}
    </div>
  );
};

export default ExperienceSection;
