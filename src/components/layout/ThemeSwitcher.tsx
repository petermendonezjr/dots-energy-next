"use client";

import { useTheme } from "@/lib/theme-context";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 rounded-md bg-bg-secondary p-0.5 border border-border">
      <button
        onClick={() => setTheme("site-a")}
        className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
          theme === "site-a"
            ? "bg-accent text-white"
            : "text-text-secondary hover:text-text-primary"
        }`}
        aria-pressed={theme === "site-a"}
      >
        Deck
      </button>
      <button
        onClick={() => setTheme("site-b")}
        className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
          theme === "site-b"
            ? "bg-accent text-white"
            : "text-text-secondary hover:text-text-primary"
        }`}
        aria-pressed={theme === "site-b"}
      >
        Minimal
      </button>
    </div>
  );
}
