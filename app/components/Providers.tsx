"use client";

import { ThemeProvider } from "next-themes";
import { FC, ReactNode, useEffect, useState } from "react";
import Footer from "./Footer";
import { Toaster } from "sonner";

export default (({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted)
    return (
      <ThemeProvider attribute="class">
        <div className="flex min-h-screen justify-center">
          <div className="w-[90vw] sm:w-content">{children}</div>
        </div>
        <Footer />
        <Toaster richColors />
      </ThemeProvider>
    );
}) as FC<{ children: ReactNode }>;
