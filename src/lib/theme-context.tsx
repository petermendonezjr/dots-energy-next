"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Theme = "site-a" | "site-b";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("site-b");

  // Read saved theme from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("dots-theme") as Theme | null;
    if (stored === "site-a" || stored === "site-b") {
      setTheme(stored);
    }
  }, []);

  // Apply theme to <html> and persist
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("dots-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
