import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
};

const Logo: React.FC<LogoProps> = ({ className, size = "md" }) => {
  return (
    <div className={cn("flex items-center justify-center", sizeClasses[size], className)}>
      <svg
        viewBox="0 0 64 36"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        role="img"
        aria-hidden="true"
      >
        <path
          d="M22 28L10 18L22 8"
          stroke="#ff6b1a"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M42 8L54 18L42 28"
          stroke="#ff6b1a"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M30 28L36 8"
          stroke="#ff6b1a"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Logo;
