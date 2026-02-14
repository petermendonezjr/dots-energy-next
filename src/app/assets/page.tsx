import type { Metadata } from "next";
import { Globe } from "@/components/globe/Globe";
import { AssetList } from "@/components/globe/AssetList";
import { allLocations } from "@/lib/globe-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Global Footprint — Dots Energy",
  description:
    "Explore Dots Energy global operations. R&D in South Korea, battery storage deployment across the United States.",
};

// JSON-LD structured data for locations
function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dots Energy",
    description:
      "An infrastructure systems company anchored in battery energy storage.",
    location: allLocations.map((loc) => ({
      "@type": "Place",
      name: loc.name,
      description: loc.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: loc.city,
        ...(loc.state && { addressRegion: loc.state }),
        addressCountry: loc.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: loc.lat,
        longitude: loc.lng,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function AssetsPage() {
  return (
    <>
      <StructuredData />

      {/* Page Hero */}
      <section className="pt-16 pb-8 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-xs font-mono text-accent uppercase tracking-widest mb-3">
            Global Footprint
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-4">
            Connected Across Continents
          </h1>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            R&D in South Korea. Deployment across the United States. Explore our
            growing network of battery energy storage projects and operations.
          </p>
        </div>
      </section>

      {/* Globe */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <Globe />
        </div>
      </section>

      {/* Asset List */}
      <section className="py-16">
        <AssetList />
      </section>

      {/* CTA Band */}
      <section className="bg-text-primary py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-bg-primary mb-4">
            Ready to build resilient energy infrastructure?
          </h2>
          <p className="text-bg-secondary/70 mb-6">
            From community resilience to utility-scale storage — let&apos;s
            start a conversation about your energy needs.
          </p>
          <Link
            href="/connect"
            className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-md bg-bg-primary text-text-primary hover:opacity-90 transition-opacity"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
