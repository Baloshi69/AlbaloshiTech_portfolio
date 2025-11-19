import React from "react";
import BrandName from "./BrandName";
import { socialLinks } from "@/lib/social-links";
import { useContactVisibility } from "@/hooks/useContactVisibility";

const Footer = () => {
  const year = new Date().getFullYear();
  const shouldShowContact = useContactVisibility();

  return (
    <footer className="bg-white border-t border-slate-200 py-10">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-12">
          <div className="max-w-sm space-y-2">
            <a href="#hero" className="flex items-center text-xl transition-colors hover:text-[#ff8c4c]">
              <BrandName className="gap-3" iconClassName="text-base md:text-lg" textClassName="text-base md:text-lg" />
            </a>
            <p className="text-sm text-slate-600">
              I&rsquo;m a certified Bubble.io developer building independent web apps, MVPs, and automation systems for founders who
              value direct collaboration.
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-4 md:w-auto md:items-end md:gap-6">
            {shouldShowContact && (
              <div className="flex flex-wrap gap-4 text-slate-500 md:justify-end">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-[#ff8c4c] hover:bg-[#fff4ec] hover:text-[#ff8c4c]"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <span>&copy; {year}</span>
              <BrandName className="items-center gap-2" iconClassName="h-5 w-auto" textClassName="text-sm text-slate-500" />
              <span className="whitespace-nowrap">All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
