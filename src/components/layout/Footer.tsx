import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1">
            <span className="block w-2 h-2 rounded-full bg-text-primary" />
            <span className="block w-2 h-2 rounded-full bg-text-muted" />
            <span className="block w-2 h-2 rounded-full bg-accent" />
          </div>
          <span className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Dots Energy. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          {["Privacy", "Terms", "Careers"].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase()}`}
              className="text-xs text-text-muted hover:text-text-secondary transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
