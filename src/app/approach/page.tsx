import Link from "next/link";

export default function ApproachPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-6 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono tracking-widest uppercase text-text-muted mb-3">
            Our Approach
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
            An infrastructure systems approach
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Most energy companies sell components. We build connected systems.
            From battery hardware to network software, from project development
            to field operations — every layer is designed to work together.
          </p>
        </div>
      </section>

      {/* Core Thesis */}
      <section className="py-20 px-6 bg-bg-secondary border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            From components to systems
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-text-secondary leading-relaxed mb-4">
                The energy transition is producing an explosion of distributed
                assets — batteries, solar, EV chargers, mobile power units.
                Individually, they are components. Connected through a unified
                architecture, they become an adaptive energy network.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Dots Energy bridges the gap between hardware innovation and
                system-level intelligence. We design battery systems, deploy them
                in the field, operate them at scale, and connect them through a
                cloud-native software platform that transforms isolated assets into
                a living network.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-5 border border-border rounded-lg bg-bg-card">
                <p className="text-xs font-mono tracking-wider uppercase text-text-muted mb-1">
                  Component Vendor
                </p>
                <p className="text-sm text-text-secondary">
                  Ships a battery. Integration is your problem.
                </p>
              </div>
              <div className="p-5 border border-border rounded-lg bg-bg-card">
                <p className="text-xs font-mono tracking-wider uppercase text-text-muted mb-1">
                  Systems Integrator
                </p>
                <p className="text-sm text-text-secondary">
                  Connects third-party parts. Limited control over the stack.
                </p>
              </div>
              <div className="p-5 border border-accent rounded-lg bg-accent-subtle">
                <p className="text-xs font-mono tracking-wider uppercase text-accent mb-1">
                  Dots Energy — Platform Approach
                </p>
                <p className="text-sm text-text-primary">
                  Hardware, software, deployment, and operations — purpose-built
                  to work as one system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 px-6 bg-bg-primary border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            Design philosophy
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Resilient-first
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Every system is designed to operate independently during grid
                disruptions. Local intelligence ensures continuity when the
                cloud is unavailable. Islanding, load prioritization, and
                autonomous control are built into the architecture — not bolted on.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Replication-first
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Modular hardware and self-describing software mean each new
                site deploys faster than the last. Standardized configurations,
                automated provisioning, and repeatable playbooks transform
                one-off projects into scalable programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Operating Model */}
      <section className="py-20 px-6 bg-bg-secondary border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            Develop in Korea. Scale in America.
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-mono tracking-wider uppercase text-text-muted mb-2">
                Seoul, South Korea
              </p>
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                R&D Center
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Battery system design, power electronics prototyping, precision
                manufacturing, and early-stage production. Leveraging Korea's
                advanced battery ecosystem and engineering talent.
              </p>
            </div>
            <div>
              <p className="text-xs font-mono tracking-wider uppercase text-text-muted mb-2">
                United States
              </p>
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Operations & Deployment
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Market deployment, system integration, field services,
                commissioning, and large-scale manufacturing. Operating across
                California, Texas, the Northeast, and the Mid-Atlantic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-bg-primary border-t border-border text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          See what we build
        </h2>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          Explore the four pillars of the Dots Energy ecosystem.
        </p>
        <Link
          href="/capabilities"
          className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-md bg-text-primary text-bg-primary hover:opacity-90 transition-opacity"
        >
          View Capabilities
        </Link>
      </section>
    </div>
  );
}
