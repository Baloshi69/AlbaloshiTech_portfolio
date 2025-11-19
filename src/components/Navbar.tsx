
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home as HomeIcon, LayoutGrid, Menu, X } from "lucide-react";
import BrandName from "@/components/BrandName";
import { cn } from "@/lib/utils";
import { useContactVisibility } from "@/hooks/useContactVisibility";

type PortfolioNavState = {
  from?: string;
  fromProject?: string;
  returnTo?: string;
};

type NavLink = {
  name: string;
  href: string;
  type: "anchor" | "route";
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const locationState = (location.state as PortfolioNavState) || {};
  const currentPath = location.pathname + location.search + location.hash;
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const isPortfolioList = location.pathname === "/portfolio";
  const shouldShowContact = useContactVisibility();
  const isPortfolioDetail =
    pathSegments[0] === "portfolio" && pathSegments.length === 2;
  const isLandingPage = location.pathname === "/";
  const isCertificationsPage = location.pathname === "/certifications";
  const currentSlug = isPortfolioDetail ? pathSegments[1] : undefined;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const baseNavLinks: NavLink[] = [
    {
      name: "About",
      href: "#about",
      type: "anchor",
    },
    {
      name: "Certifications",
      href: "/certifications",
      type: "route",
    },
    {
      name: "Projects",
      href: "#projects",
      type: "anchor",
    },
    {
      name: "Why Me",
      href: "#why-me",
      type: "anchor",
    },
    {
      name: "Contact",
      href: "#contact",
      type: "anchor",
    },
  ];

  const navLinks = shouldShowContact ? baseNavLinks : baseNavLinks.filter((link) => link.name !== "Contact");

  const handleBack = () => {
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  const handleViewFullPortfolio = () => {
    setIsMobileMenuOpen(false);
    if (!isPortfolioDetail || !currentSlug) {
      return;
    }

    navigate("/portfolio", {
      state: {
        fromProject: currentSlug,
        returnTo: currentPath,
        from: locationState.from ?? "/",
      },
    });
  };

  const backLabel = "Home";

  const hasMobileMenu =
    isLandingPage || isPortfolioList || isPortfolioDetail || isCertificationsPage;

  const renderMobileMenuContent = () => {
    if (isLandingPage) {
      return (
        <div className="space-y-2">
          {navLinks.map((link) =>
            link.type === "route" ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="nav-link block rounded-lg px-4 py-2 text-sm hover:bg-[#F4F7FF]"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="nav-link block rounded-lg px-4 py-2 text-sm hover:bg-[#F4F7FF]"
              >
                {link.name}
              </a>
            ),
          )}
        </div>
      );
    }

    if (isPortfolioList) {
      return (
        <button
          type="button"
          onClick={handleBack}
          className="flex w-full items-center gap-2 rounded-lg border border-[#ffb48a] px-4 py-2 text-sm font-medium text-[#d85a1a] transition-colors hover:border-[#ff8c4c] hover:text-[#ff8c4c]"
        >
          <HomeIcon className="h-4 w-4" aria-hidden="true" />
          <span>{backLabel}</span>
        </button>
      );
    }

    if (isCertificationsPage) {
      return (
        <button
          type="button"
          onClick={handleBack}
          className="flex w-full items-center gap-2 rounded-lg border border-[#ffb48a] px-4 py-2 text-sm font-medium text-[#d85a1a] transition-colors hover:border-[#ff8c4c] hover:text-[#ff8c4c]"
        >
          <HomeIcon className="h-4 w-4" aria-hidden="true" />
          <span>{backLabel}</span>
        </button>
      );
    }

    if (isPortfolioDetail) {
      return (
        <div className="space-y-2">
          <button
            type="button"
            onClick={handleBack}
            className="flex w-full items-center gap-2 rounded-lg border border-[#ffb48a] px-4 py-2 text-sm font-medium text-[#d85a1a] transition-colors hover:border-[#ff8c4c] hover:text-[#ff8c4c]"
          >
            <HomeIcon className="h-4 w-4" aria-hidden="true" />
            <span>{backLabel}</span>
          </button>
          <button
            type="button"
            onClick={handleViewFullPortfolio}
            className="flex w-full items-center gap-2 rounded-lg bg-gradient-to-r from-[#ff8c4c] via-[#f96f4a] to-[#ffb347] px-4 py-2 text-sm font-semibold text-white shadow-[0_15px_30px_rgba(249,111,74,0.35)] transition hover:shadow-[0_20px_40px_rgba(249,111,74,0.4)]"
          >
            <LayoutGrid className="h-4 w-4" aria-hidden="true" />
            <span>View Full Portfolio</span>
          </button>
        </div>
      );
    }

    return null;
  };

  const showSolidHeader = isScrolled || isPortfolioDetail || isPortfolioList || isCertificationsPage;

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        showSolidHeader
          ? "bg-white/45 backdrop-blur-xl border-b border-white/30 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.18)]"
          : "bg-white/80 backdrop-blur-sm py-6",
      )}
    >
      <nav className="container relative flex items-center justify-between">
        {isLandingPage ? (
          <a
            href="#hero"
            className="flex items-center text-xl transition-all hover:opacity-80"
          >
            <BrandName
              className="gap-3"
              iconClassName="text-base md:text-lg"
              textClassName="text-base md:text-lg"
            />
          </a>
        ) : (
          <Link
            to="/"
            className="flex items-center text-xl transition-all hover:opacity-80"
          >
            <BrandName
              className="gap-3"
              iconClassName="text-base md:text-lg"
              textClassName="text-base md:text-lg"
            />
          </Link>
        )}

        {isLandingPage && (
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.type === "route" ? (
                <Link key={link.name} to={link.href} className="nav-link text-sm transition-all">
                  {link.name}
                </Link>
              ) : (
                <a key={link.name} href={link.href} className="nav-link text-sm transition-all">
                  {link.name}
                </a>
              ),
            )}
          </div>
        )}

        {hasMobileMenu && (
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="flex items-center rounded-md p-2 text-slate-900 hover:text-[#ff8c4c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8c4c]"
              aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        )}

        {isPortfolioList && (
          <div className="hidden items-center space-x-3 md:flex md:space-x-4">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 rounded-lg border border-[#ffb48a] bg-transparent px-4 py-2 text-sm font-medium text-[#d85a1a] transition-colors hover:border-[#ff8c4c] hover:text-[#ff8c4c]"
            >
              <HomeIcon className="h-4 w-4" aria-hidden="true" />
              <span>{backLabel}</span>
            </button>
          </div>
        )}

        {isCertificationsPage && (
          <div className="hidden items-center space-x-3 md:flex md:space-x-4">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 rounded-lg border border-[#ffb48a] bg-transparent px-4 py-2 text-sm font-medium text-[#d85a1a] transition-colors hover:border-[#ff8c4c] hover:text-[#ff8c4c]"
            >
              <HomeIcon className="h-4 w-4" aria-hidden="true" />
              <span>{backLabel}</span>
            </button>
          </div>
        )}

        {isPortfolioDetail && (
          <div className="hidden items-center space-x-3 md:flex md:space-x-4">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 rounded-lg border border-[#ffb48a] bg-transparent px-4 py-2 text-sm font-medium text-[#d85a1a] transition-colors hover:border-[#ff8c4c] hover:text-[#ff8c4c]"
            >
              <HomeIcon className="h-4 w-4" aria-hidden="true" />
              <span>{backLabel}</span>
            </button>
            <button
              type="button"
              onClick={handleViewFullPortfolio}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#ff8c4c] via-[#f96f4a] to-[#ffb347] px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(249,111,74,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(249,111,74,0.45)]"
            >
              <LayoutGrid className="h-4 w-4" aria-hidden="true" />
              <span>View Full Portfolio</span>
            </button>
          </div>
        )}

        {isMobileMenuOpen && hasMobileMenu && (
          <div className="absolute left-0 right-0 top-full mt-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-blue-200/60 md:hidden">
            {renderMobileMenuContent()}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
