import React, { CSSProperties, useEffect, useMemo, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Github } from "lucide-react";
import {
  PortfolioProject,
  getPortfolioProjects,
  getStarProjects,
} from "@/data/projects";

const ProjectCard: React.FC<{ project: PortfolioProject }> = ({ project }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const cardFrameStyle: CSSProperties | undefined = project.backgroundGradient
    ? { background: project.backgroundGradient }
    : undefined;

  const handleNavigate = () => {
    navigate(`/portfolio/${project.slug}`, {
      state: {
        from: location.pathname + location.search + location.hash,
      },
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleNavigate();
    }
  };

  return (
    <div
      className="group relative w-[320px] flex-shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent"
      role="link"
      tabIndex={0}
      aria-label={`View ${project.title} project`}
      onClick={(event) => {
        const target = event.target as HTMLElement;
        if (target.closest("[data-external-link]")) {
          return;
        }
        handleNavigate();
      }}
      onKeyDown={handleKeyDown}
    >
      {cardFrameStyle && (
        <div
          className="pointer-events-none absolute -inset-[12px] rounded-[36px] opacity-55 blur-[44px] transition-opacity duration-500 group-hover:opacity-75"
          style={cardFrameStyle}
          aria-hidden="true"
        />
      )}

      <div className="relative z-[1] h-full w-full rounded-[26px] border border-theme-accent/20 bg-theme-secondary-dark/88 p-5 transition-all duration-500 hover:border-theme-accent/35 hover:shadow-[0_26px_90px_-55px_rgba(35,229,176,0.5)]">
        <div className="relative aspect-video overflow-hidden rounded-[18px] border border-theme-accent/12 bg-theme-dark/85">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>

        <div className="mt-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-theme-dark/70 text-theme-muted-text"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-2 transition-colors group-hover:text-theme-accent">
            {project.title}
          </h3>
          <p className="text-theme-light/95 mb-4 text-sm leading-relaxed line-clamp-4 drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)]">
            {project.excerpt}
          </p>

          <div className="flex items-center space-x-3">
            <button
              type="button"
              className="inline-flex items-center text-theme-accent hover:text-theme-accent/80 text-sm font-medium bg-transparent border-0 p-0"
              onClick={(event) => {
                event.stopPropagation();
                handleNavigate();
              }}
            >
              Preview
            </button>
            {project.githubUrl && !project.nocode && (
              <a
                href={project.githubUrl}
                className="inline-flex items-center text-theme-accent hover:text-theme-accent/80 text-sm font-medium"
                target="_blank"
                rel="noreferrer"
                data-external-link="true"
              >
                <Github size={16} className="mr-1" /> Source Code
              </a>
            )}

            {project.nocode && (
              <span className="inline-flex items-center text-theme-muted-text text-sm font-medium">
                Built with No-code
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const location = useLocation();
  const starProjects = getStarProjects();
  const orderedProjects = useMemo(
    () => (starProjects.length > 0 ? starProjects : getPortfolioProjects()),
    [starProjects]
  );
  const shouldLoop = orderedProjects.length > 1;
  const sliderProjects = useMemo(
    () => (shouldLoop ? [...orderedProjects, ...orderedProjects] : orderedProjects),
    [orderedProjects, shouldLoop]
  );

  const sliderRef = useRef<HTMLDivElement>(null);
  const loopWidthRef = useRef(0);
  const hoveringRef = useRef(false);
  const draggingRef = useRef(false);
  const pointerStateRef = useRef({
    pointerId: null as number | null,
    startX: 0,
    lastX: 0,
    isPointerDown: false,
    hasDragged: false,
  });

  const updateLoopWidth = () => {
    const container = sliderRef.current;
    if (!container) {
      return;
    }
    loopWidthRef.current = shouldLoop ? container.scrollWidth / 2 : container.scrollWidth;
  };

  const clampScrollPosition = (container: HTMLDivElement) => {
    if (!shouldLoop) {
      return;
    }

    const loopWidth = loopWidthRef.current;
    if (loopWidth === 0) {
      return;
    }

    if (container.scrollLeft >= loopWidth) {
      container.scrollLeft -= loopWidth;
    } else if (container.scrollLeft < 0) {
      container.scrollLeft += loopWidth;
    }
  };

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) {
      return;
    }

    const update = () => {
      updateLoopWidth();
      clampScrollPosition(container);
    };

    container.scrollLeft = 0;
    update();

    const images = Array.from(container.querySelectorAll("img")) as HTMLImageElement[];
    images.forEach((image) => {
      if (image.complete) {
        requestAnimationFrame(update);
      } else {
        image.addEventListener("load", update);
        image.addEventListener("error", update);
      }
    });

    let resizeObserver: ResizeObserver | undefined;

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => update());
      resizeObserver.observe(container);
    } else {
      window.addEventListener("resize", update);
    }

    return () => {
      images.forEach((image) => {
        image.removeEventListener("load", update);
        image.removeEventListener("error", update);
      });

      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener("resize", update);
      }
    };
  }, [sliderProjects, shouldLoop]);

  useEffect(() => {
    if (!shouldLoop) {
      return;
    }

    let animationFrame: number;

    const animate = () => {
      const container = sliderRef.current;
      if (!container) {
        return;
      }

      if (!hoveringRef.current && !draggingRef.current) {
        container.scrollLeft += 0.6;
        clampScrollPosition(container);
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [shouldLoop]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const container = sliderRef.current;
    if (!container) {
      return;
    }

    const pointerState = pointerStateRef.current;
    pointerState.pointerId = event.pointerId;
    pointerState.startX = event.clientX;
    pointerState.lastX = event.clientX;
    pointerState.isPointerDown = true;
    pointerState.hasDragged = false;
    container.classList.add("cursor-grabbing");
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const container = sliderRef.current;
    const pointerState = pointerStateRef.current;
    if (!container || !pointerState.isPointerDown) {
      return;
    }

    const delta = event.clientX - pointerState.lastX;
    pointerState.lastX = event.clientX;

    if (!pointerState.hasDragged) {
      const distanceFromStart = event.clientX - pointerState.startX;
      if (Math.abs(distanceFromStart) > 4) {
        pointerState.hasDragged = true;
        draggingRef.current = true;
        if (pointerState.pointerId !== null) {
          container.setPointerCapture(pointerState.pointerId);
        }
      }
    }

    if (pointerState.hasDragged) {
      container.scrollLeft -= delta;
      clampScrollPosition(container);
    }
  };

  const releasePointer = () => {
    const container = sliderRef.current;
    const pointerState = pointerStateRef.current;
    if (!container || !pointerState.isPointerDown) {
      draggingRef.current = false;
      return;
    }

    if (
      pointerState.pointerId !== null &&
      container.hasPointerCapture(pointerState.pointerId)
    ) {
      container.releasePointerCapture(pointerState.pointerId);
    }
    pointerState.pointerId = null;
    pointerState.isPointerDown = false;
    pointerState.hasDragged = false;
    draggingRef.current = false;
    container.classList.remove("cursor-grabbing");
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStateRef.current.hasDragged) {
      event.preventDefault();
    }
    releasePointer();
  };

  const handlePointerCancel = () => {
    releasePointer();
  };

  const handleMouseEnter = () => {
    hoveringRef.current = true;
  };

  const handleMouseLeave = () => {
    hoveringRef.current = false;
  };

  return (
    <section id="projects" className="bg-theme-secondary-dark">
      <div className="container">
        <div className="section-heading">
          <h2 className="flex flex-wrap items-center justify-center gap-3">
            <span>Our Work</span>
          </h2>
          <p>
            Recent product launches and platform builds crafted with no-code and
            low-code stacks
          </p>
        </div>

        <div
          ref={sliderRef}
          className="relative overflow-hidden cursor-grab select-none rounded-2xl bg-transparent"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex w-max gap-6 py-6">
            {sliderProjects.map((project, index) => (
              <ProjectCard
                key={`${project.slug}-${index}`}
                project={project}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/portfolio"
            state={{
              from: location.pathname + location.search + location.hash,
            }}
            className="text-sm font-medium text-theme-accent hover:text-theme-accent/80 underline-offset-4 hover:underline"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
