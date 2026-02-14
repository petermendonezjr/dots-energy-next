import Link from "next/link";
import { stats } from "@/lib/globe-data";

const pillars = [
  {
    name: "PowerPath™",
    label: "Project Development",
    description:
      "From community resilience to grid-scale innovation — originating, developing, and commissioning energy projects.",
    href: "/capabilities#powerpath",
  },
  {
    name: "PowerCore™",
    label: "Energy Hardware",
    description:
      "Modular battery and controls platform engineered for flexibility, scalability, and intelligent integration.",
    href: "/capabilities#powercore",
  },
  {
    name: "PowerOps™",
    label: "Field Services",
    description:
      "From commissioning to optimized performance — keeping the network in motion across 20+ active sites.",
    href: "/capabilities#powerops",
  },
  {
    name: "NodeX™",
    label: "Energy Software",
    description:
      "From edge to cloud, from physical to digital — connecting, monitoring, and controlling the network in motion.",
    href: "/capabilities#nodex",
  },
];

const highlights = [
  { value: "16", label: "Baltimore Sites" },
  { value: `${stats.baltimoreSolarKW.toLocaleString()} kW`, label: "Solar Deployed" },
  { value: `${stats.baltimoreBatteryKWh.toLocaleString()} kWh`, label: "Battery Storage" },
  { value: "6+ GWh", label: "O&M Under Contract" },
  { value: "20+", label: "Active Sites" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 text-center bg-bg-primary">
        <div className="flex items-center gap-2 mb-6">
          <span className="block w-4 h-4 rounded-full bg-text-primary" />
          <span className="block w-4 h-4 rounded-full bg-text-muted" />
          <span className="block w-4 h-4 rounded-full bg-accent" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6 max-w-3xl">
          Turning static infrastructure into a living energy network
        </h1>
        <p className="text-lg text-text-secondary max-w-xl mb-10 leading-relaxed">
          An infrastructure systems company anchored in battery energy storage.
          Developing in Korea. Scaling in America.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/connect"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md bg-accent text-white hover:bg-accent-hover transition-colors"
          >
            Connect with Us
          </Link>
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md border border-border text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors"
          >
            Explore Capabilities
          </Link>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-24 px-6 bg-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono tracking-widest uppercase text-text-muted mb-3 text-center">
            The Ecosystem
          </p>
          <h2 className="text-3xl font-bold text-text-primary text-center mb-4">
            Four pillars. One network.
          </h2>
          <p className="text-text-secondary text-center max-w-xl mx-auto mb-16">
            Each pillar strengthens the others — from project origination to
            hardware, field operations, and intelligent software.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group p-6 border border-border rounded-lg hover:border-border-hover transition-colors bg-bg-card"
              >
                <p className="text-xs font-mono tracking-wider uppercase text-accent mb-2">
                  {p.name}
                </p>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {p.label}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {p.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights / Stats Bar */}
      <section className="py-16 px-6 bg-bg-primary border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {highlights.map((h) => (
              <div key={h.label}>
                <div className="text-3xl font-bold text-accent mb-1">
                  {h.value}
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider">
                  {h.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footprint Teaser */}
      <section className="py-24 px-6 bg-bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono tracking-widest uppercase text-text-muted mb-3">
            Global Presence
          </p>
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Connected across continents
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-10">
            R&D in Seoul. Operations across the United States. Explore our
            battery storage projects, community microgrids, and field service
            footprint.
          </p>
          <Link
            href="/assets"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md bg-accent text-white hover:bg-accent-hover transition-colors"
          >
            View Global Assets
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 px-6 bg-bg-primary border-t border-border text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Ready to connect?
        </h2>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          Whether you are a utility, developer, or community partner — we would
          like to hear from you.
        </p>
        <Link
          href="/connect"
          className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-md bg-text-primary text-bg-primary hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
