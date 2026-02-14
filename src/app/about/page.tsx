import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-6 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono tracking-widest uppercase text-text-muted mb-3">
            About Dots Energy
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
            Connected across continents
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Leveraging global innovation and U.S. scale to power the next
            generation of energy systems.
          </p>
        </div>
      </section>

      {/* Two-geography model */}
      <section className="py-20 px-6 bg-bg-secondary border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Korea */}
            <div>
              <p className="text-xs font-mono tracking-wider uppercase text-accent mb-3">
                Seoul, South Korea
              </p>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Design & Prototyping
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our Seoul R&D center drives battery energy storage system design,
                power electronics prototyping, precision manufacturing, and
                early-stage production. Located in one of the world's leading
                battery innovation ecosystems.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#9679;</span>
                  BESS system architecture and design
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#9679;</span>
                  Power electronics prototyping
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#9679;</span>
                  Precision manufacturing and quality control
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#9679;</span>
                  Software platform development
                </li>
              </ul>
            </div>

            {/* United States */}
            <div>
              <p className="text-xs font-mono tracking-wider uppercase text-accent mb-3">
                United States
              </p>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Deployment & Operations
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our U.S. operations span market deployment, system integration,
                commissioning, field services, and large-scale manufacturing.
                Active across California, Texas, the Northeast, and the
                Mid-Atlantic.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#9679;</span>
                  Project development and commissioning
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#9679;</span>
                  Operations & maintenance (6+ GWh under contract)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#9679;</span>
                  Community microgrid deployment (Baltimore 16-site program)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#9679;</span>
                  Large-scale production and field services
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-bg-primary border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-mono tracking-widest uppercase text-text-muted mb-3">
            Our Vision
          </p>
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Our mission
          </h2>
          <p className="text-text-secondary leading-relaxed text-lg">
            Dots Energy is redefining how power moves — transforming isolated
            assets into connected, adaptive systems, turning static infrastructure
            into a living energy network. Through the Dots Energy ecosystem,
            energy becomes networked, communities become resilient, and every
            connection becomes a source of strength.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-bg-secondary border-t border-border text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Work with us
        </h2>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          We partner with utilities, cities, developers, and communities
          building the next generation of energy infrastructure.
        </p>
        <Link
          href="/connect"
          className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-md bg-text-primary text-bg-primary hover:opacity-90 transition-opacity"
        >
          Connect with Us
        </Link>
      </section>
    </div>
  );
}
