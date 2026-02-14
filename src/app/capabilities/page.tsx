import Link from "next/link";

const products = [
  { name: "Sodium Plus™ Container", spec: "3 MWh per container", use: "Utility, Industrial & Data Centers" },
  { name: "Sodium Plus™ Pod", spec: "250 kWh per stackable pod", use: "C&I and small industrial sites" },
  { name: "Mobile Plus™ Battery", spec: "Second-life EV modules", use: "Mobile & temporary power" },
  { name: "Pole Plus™ Battery", spec: "Pole-mounted", use: "Utility, telecom, traffic infrastructure" },
];

export default function CapabilitiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-6 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono tracking-widest uppercase text-text-muted mb-3">
            Capabilities
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
            Connecting the dots
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Four integrated pillars — from project development to energy hardware,
            field operations, and intelligent network software.
          </p>
        </div>
      </section>

      {/* PowerPath */}
      <section id="powerpath" className="py-20 px-6 bg-bg-secondary border-t border-border">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono tracking-wider uppercase text-accent mb-2">
            PowerPath™
          </p>
          <h2 className="text-2xl font-bold text-text-primary mb-3">
            Project Development
          </h2>
          <p className="text-sm text-text-secondary mb-2">
            Originate &bull; Develop &bull; Commission
          </p>
          <p className="text-text-secondary leading-relaxed max-w-3xl mb-8">
            PowerPath drives the expansion of the Dots Energy ecosystem through
            strategic project origination, partnerships, and end-to-end development.
            From community-based microgrids to utility-scale energy storage, we
            partner with cities, utilities, and private developers to deploy
            resilient, distributed energy infrastructure.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 border border-border rounded-lg bg-bg-card">
              <h3 className="text-sm font-semibold text-text-primary mb-2">
                Baltimore Community Resilience Hub Program
              </h3>
              <p className="text-sm text-text-secondary">
                16-site microgrid network advancing urban resilience across
                Baltimore. 1,035 kW solar and 3,500 kWh battery storage
                contracted for community-serving facilities.
              </p>
            </div>
            <div className="p-5 border border-border rounded-lg bg-bg-card">
              <h3 className="text-sm font-semibold text-text-primary mb-2">
                Utility-Scale BESS Pipeline
              </h3>
              <p className="text-sm text-text-secondary">
                Active development pipeline across PJM, CAISO, and ERCOT
                markets — from 5 MW community-scale to 100 MW grid-scale
                deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PowerCore */}
      <section id="powercore" className="py-20 px-6 bg-bg-primary border-t border-border">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono tracking-wider uppercase text-accent mb-2">
            PowerCore™
          </p>
          <h2 className="text-2xl font-bold text-text-primary mb-3">
            Energy Hardware
          </h2>
          <p className="text-sm text-text-secondary mb-2">
            Modular &bull; Scalable &bull; Reliable
          </p>
          <p className="text-text-secondary leading-relaxed max-w-3xl mb-8">
            A modular battery and controls platform engineered for flexibility,
            scalability, and intelligent integration — supporting utility-scale,
            distributed, and mobile power applications.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((p) => (
              <div key={p.name} className="p-4 border border-border rounded-lg bg-bg-card">
                <h3 className="text-sm font-semibold text-text-primary mb-1">
                  {p.name}
                </h3>
                <p className="text-xs text-accent font-mono mb-2">{p.spec}</p>
                <p className="text-xs text-text-muted">{p.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PowerOps */}
      <section id="powerops" className="py-20 px-6 bg-bg-secondary border-t border-border">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono tracking-wider uppercase text-accent mb-2">
            PowerOps™
          </p>
          <h2 className="text-2xl font-bold text-text-primary mb-3">
            Field Services
          </h2>
          <p className="text-sm text-text-secondary mb-2">
            Commission &bull; Operate &bull; Maintain
          </p>
          <p className="text-text-secondary leading-relaxed max-w-3xl mb-8">
            From commissioning to continuous performance, PowerOps keeps the
            network in motion. An agile, nationwide team delivering field
            services from California to Massachusetts.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 border border-border rounded-lg bg-bg-card text-center">
              <div className="text-2xl font-bold text-accent mb-1">6+ GWh</div>
              <div className="text-xs text-text-muted uppercase tracking-wider">
                Contracted O&M
              </div>
            </div>
            <div className="p-5 border border-border rounded-lg bg-bg-card text-center">
              <div className="text-2xl font-bold text-accent mb-1">20+</div>
              <div className="text-xs text-text-muted uppercase tracking-wider">
                Active Sites
              </div>
            </div>
            <div className="p-5 border border-border rounded-lg bg-bg-card text-center">
              <div className="text-2xl font-bold text-accent mb-1">5 States</div>
              <div className="text-xs text-text-muted uppercase tracking-wider">
                CA, AZ, TX, NJ, MA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NodeX */}
      <section id="nodex" className="py-20 px-6 bg-bg-primary border-t border-border">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono tracking-wider uppercase text-accent mb-2">
            NodeX™
          </p>
          <h2 className="text-2xl font-bold text-text-primary mb-3">
            Energy Software
          </h2>
          <p className="text-sm text-text-secondary mb-2">
            Connect &bull; Monitor &bull; Control
          </p>
          <p className="text-text-secondary leading-relaxed max-w-3xl mb-8">
            A modular, cloud-native platform that connects edge assets to a
            future-ready data, analytics, and control layer. NodeX transforms
            distributed power resources into an intelligent, self-configuring
            network — from edge to cloud, from physical to digital.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-5 border border-border rounded-lg bg-bg-card">
              <p className="text-xs font-mono tracking-wider uppercase text-accent mb-2">
                Connect Domain
              </p>
              <h3 className="text-sm font-semibold text-text-primary mb-2">
                Data Integration
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Unifies data and control across edge, cloud, and enterprise
                layers. MQTT for real-time telemetry, REST for configuration
                and integration.
              </p>
            </div>
            <div className="p-5 border border-border rounded-lg bg-bg-card">
              <p className="text-xs font-mono tracking-wider uppercase text-accent mb-2">
                Awareness Domain
              </p>
              <h3 className="text-sm font-semibold text-text-primary mb-2">
                Self-Configuration
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Semantic graph model creates a living representation of the
                network. Assets self-describe through digital birth
                certificates, enabling auto-discovery and configuration.
              </p>
            </div>
            <div className="p-5 border border-border rounded-lg bg-bg-card">
              <p className="text-xs font-mono tracking-wider uppercase text-accent mb-2">
                Intelligence Domain
              </p>
              <h3 className="text-sm font-semibold text-text-primary mb-2">
                Self-Optimization
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Predictive analytics, scenario simulation, and autonomous
                dispatch. Continuously learning from system feedback to
                optimize energy flow, cost, and reliability.
              </p>
            </div>
          </div>
          <p className="text-sm text-text-muted">
            NodeX Phase 1 MVP is in development, targeting 15-20 pilot sites in 2026.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-bg-secondary border-t border-border text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          See it in action
        </h2>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          Explore our global footprint or get in touch to discuss a project.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/assets"
            className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-md bg-accent text-white hover:bg-accent-hover transition-colors"
          >
            View Global Assets
          </Link>
          <Link
            href="/connect"
            className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-md bg-text-primary text-bg-primary hover:opacity-90 transition-opacity"
          >
            Connect
          </Link>
        </div>
      </section>
    </div>
  );
}
