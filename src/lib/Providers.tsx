"use client";

import { TooltipProvider } from "@/components/plate-ui/tooltip";
import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider
        delayDuration={500}
        disableHoverableContent
        skipDelayDuration={0}
      >
        {children}
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default Providers;
