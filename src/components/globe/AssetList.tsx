import { allLocations, stats } from "@/lib/globe-data";
import type { GlobeLocation, BatteryProject, OfficeLocation, CommunityMicrogrid } from "@/lib/types";

function LocationCard({ location }: { location: GlobeLocation }) {
  const cityDisplay = location.state
    ? `${location.city}, ${location.state}, ${location.country}`
    : `${location.city}, ${location.country}`;

  return (
    <article className="p-4 bg-bg-card border border-border rounded-lg hover:bg-bg-card-hover transition-colors">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <h3 className="text-sm font-semibold text-text-primary">
            {location.name}
          </h3>
          <p className="text-xs text-text-secondary">{cityDisplay}</p>
        </div>
        <span
          className={`shrink-0 px-2 py-0.5 text-xs font-medium rounded-full ${
            location.status === "Operational"
              ? "bg-green-500/10 text-green-600"
              : location.status === "Under Construction"
              ? "bg-amber-500/10 text-amber-600"
              : location.status === "Contracted"
              ? "bg-purple-500/10 text-purple-600"
              : "bg-blue-500/10 text-blue-600"
          }`}
        >
          {location.status}
        </span>
      </div>

      <dl className="text-xs space-y-1">
        <div className="flex gap-2">
          <dt className="text-text-muted font-mono">Type</dt>
          <dd className="text-text-secondary">
            {location.type === "office"
              ? "Office"
              : location.type === "community-microgrid"
              ? "Community Microgrid"
              : "Battery Storage"}
          </dd>
        </div>
        {location.type === "battery-storage" && (
          <div className="flex gap-2">
            <dt className="text-text-muted font-mono">Capacity</dt>
            <dd className="text-text-secondary">
              {(location as BatteryProject).capacityMW} MW /{" "}
              {(location as BatteryProject).capacityMWh} MWh
            </dd>
          </div>
        )}
        {location.type === "battery-storage" && (
          <div className="flex gap-2">
            <dt className="text-text-muted font-mono">Market</dt>
            <dd className="text-text-secondary">
              {(location as BatteryProject).market}
            </dd>
          </div>
        )}
        {location.type === "community-microgrid" && (
          <div className="flex gap-2">
            <dt className="text-text-muted font-mono">Solar / Battery</dt>
            <dd className="text-text-secondary">
              {(location as CommunityMicrogrid).solarKW} kW /{" "}
              {(location as CommunityMicrogrid).batteryKWh} kWh
            </dd>
          </div>
        )}
        {location.type === "office" && (
          <div className="flex gap-2">
            <dt className="text-text-muted font-mono">Focus</dt>
            <dd className="text-text-secondary">
              {(location as OfficeLocation).focus}
            </dd>
          </div>
        )}
      </dl>
    </article>
  );
}

export function AssetList() {
  const offices = allLocations.filter((l) => l.type === "office");
  const projects = allLocations.filter((l) => l.type === "battery-storage");
  const microgrids = allLocations.filter((l) => l.type === "community-microgrid");

  return (
    <section aria-label="Asset locations" className="max-w-5xl mx-auto px-6">
      {/* Stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-10 py-6 border-y border-border">
        <div className="text-center">
          <p className="text-2xl font-bold text-text-primary">
            {stats.totalProjects}
          </p>
          <p className="text-xs text-text-muted font-mono uppercase tracking-wider">
            BESS Projects
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-text-primary">
            {stats.totalCapacityMW}
          </p>
          <p className="text-xs text-text-muted font-mono uppercase tracking-wider">
            Total MW
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-text-primary">
            {stats.totalCapacityMWh.toLocaleString()}
          </p>
          <p className="text-xs text-text-muted font-mono uppercase tracking-wider">
            Total MWh
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-text-primary">
            {stats.baltimoreSites}
          </p>
          <p className="text-xs text-text-muted font-mono uppercase tracking-wider">
            Baltimore Sites
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-text-primary">
            {stats.countries}
          </p>
          <p className="text-xs text-text-muted font-mono uppercase tracking-wider">
            Countries
          </p>
        </div>
      </div>

      {/* Offices */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-text-primary mb-4">
          Offices
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {offices.map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
      </div>

      {/* Battery Projects */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-text-primary mb-4">
          Battery Storage Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
      </div>

      {/* Baltimore Community Microgrids */}
      <div>
        <h2 className="text-lg font-semibold text-text-primary mb-2">
          Baltimore Community Resilience Hubs
        </h2>
        <p className="text-sm text-text-secondary mb-4">
          16-site microgrid network — {stats.baltimoreSolarKW.toLocaleString()} kW solar, {stats.baltimoreBatteryKWh.toLocaleString()} kWh battery
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {microgrids.map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
      </div>
    </section>
  );
}
