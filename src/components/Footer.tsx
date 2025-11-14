import React from 'react';
import BrandName from "./BrandName";
import { socialLinks } from "@/lib/social-links";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-theme-dark border-t border-theme-accent/10 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
          <div className="max-w-sm">
            <a href="#hero" className="flex items-center text-xl transition-colors hover:text-theme-accent">
              <BrandName
                className="gap-3"
                iconClassName="text-base md:text-lg"
                textClassName="text-base md:text-lg"
              />
            </a>
            <p className="text-theme-muted-text text-sm mt-2">
              A no-code, vibe coding and automation studio crafting high-performance products with AI precision—delivered faster than traditional development, without compromising craft.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4 md:gap-6 w-full md:w-auto">
            <div className="flex flex-wrap justify-start md:justify-end gap-4 text-theme-muted-text">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:text-theme-accent"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 text-theme-muted-text text-sm">
              <span>&copy; {year}</span>
              <BrandName
                className="gap-2 items-center"
                iconClassName="h-5 w-auto"
                textClassName="text-theme-muted-text text-sm"
              />
              <span className="whitespace-nowrap">All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
