import React from "react";

const HighlightText = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold text-theme-accent">{children}</span>
);

export default HighlightText;
