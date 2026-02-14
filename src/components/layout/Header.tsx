"use client";

import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

function DotsLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <div className="flex items-center gap-1">
        <span className="block w-2.5 h-2.5 rounded-full bg-text-primary" />
        <span className="block w-2.5 h-2.5 rounded-full bg-text-muted" />
        <span className="block w-2.5 h-2.5 rounded-full bg-accent" />
      </div>
      <span className="text-sm font-semibold tracking-tight text-text-primary">
        Dots Energy
      </span>
    </Link>
  );
}

const navLinks = [
  { label: "Approach", href: "/approach" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Assets", href: "/assets" },
  { label: "About", href: "/about" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-md bg-header-bg border-b border-border">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <DotsLogo />

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <Link
            href="/connect"
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-text-primary text-bg-primary hover:opacity-90 transition-opacity"
          >
            Connect
          </Link>
        </div>
      </div>
    </header>
  );
}
