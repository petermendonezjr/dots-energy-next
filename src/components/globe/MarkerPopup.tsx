"use client";

import { useEffect, useRef } from "react";
import type { GlobeLocation, BatteryProject, OfficeLocation, CommunityMicrogrid } from "@/lib/types";

interface MarkerPopupProps {
  location: GlobeLocation;
  onClose: () => void;
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Operational: "bg-green-500/20 text-green-400 [data-theme='site-b']_&:bg-green-100 [data-theme='site-b']_&:text-green-700",
    "Under Construction": "bg-amber-500/20 text-amber-400",
    Planned: "bg-blue-500/20 text-blue-400",
    Contracted: "bg-purple-500/20 text-purple-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${colors[status] ?? ""}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === "Operational"
            ? "bg-green-500"
            : status === "Under Construction"
            ? "bg-amber-500"
            : "bg-blue-500"
        }`}
      />
      {status}
    </span>
  );
}

function OfficeDetails({ location }: { location: OfficeLocation }) {
  return (
    <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-sm">
      <dt className="text-text-muted font-mono text-xs">Function</dt>
      <dd className="text-text-primary">{location.function}</dd>
      <dt className="text-text-muted font-mono text-xs">Focus</dt>
      <dd className="text-text-secondary text-xs">{location.focus}</dd>
    </dl>
  );
}

function BatteryDetails({ location }: { location: BatteryProject }) {
  return (
    <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-sm">
      <dt className="text-text-muted font-mono text-xs">Capacity</dt>
      <dd className="text-text-primary font-medium">
        {location.capacityMW} MW / {location.capacityMWh} MWh
      </dd>
      <dt className="text-text-muted font-mono text-xs">Market</dt>
      <dd className="text-text-secondary">{location.market}</dd>
      {location.commissioned && (
        <>
          <dt className="text-text-muted font-mono text-xs">Commissioned</dt>
          <dd className="text-text-secondary">{location.commissioned}</dd>
        </>
      )}
    </dl>
  );
}

function MicrogridDetails({ location }: { location: CommunityMicrogrid }) {
  return (
    <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-sm">
      <dt className="text-text-muted font-mono text-xs">Solar</dt>
      <dd className="text-text-primary font-medium">
        {location.solarKW} kW ({location.solarInstallation})
      </dd>
      <dt className="text-text-muted font-mono text-xs">Battery</dt>
      <dd className="text-text-primary font-medium">
        {location.batteryKWh} kWh
      </dd>
      <dt className="text-text-muted font-mono text-xs">Program</dt>
      <dd className="text-text-secondary">{location.program}</dd>
    </dl>
  );
}

export function MarkerPopup({ location, onClose }: MarkerPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Close on click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    // Delay to avoid the click that opened this popup from also closing it
    const timer = setTimeout(() => {
      window.addEventListener("click", handleClick);
    }, 100);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("click", handleClick);
    };
  }, [onClose]);

  const cityDisplay = location.state
    ? `${location.city}, ${location.state}`
    : `${location.city}, ${location.country}`;

  return (
    <div
      ref={popupRef}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-[320px] max-w-[90vw] bg-bg-card border border-border rounded-lg overflow-hidden"
      style={{ boxShadow: "var(--popup-shadow)" }}
      role="dialog"
      aria-label={`Details for ${location.name}`}
    >
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-border">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className={`w-2 h-2 rounded-full ${
                  location.type === "office" ? "bg-accent" : "bg-accent"
                }`}
              />
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                {location.type === "office"
                  ? "Office"
                  : location.type === "community-microgrid"
                  ? "Community Microgrid"
                  : "BESS Project"}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-text-primary">
              {location.name}
            </h3>
            <p className="text-xs text-text-secondary">{cityDisplay}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-text-muted hover:text-text-primary transition-colors rounded"
            aria-label="Close popup"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-2 mb-3">
          <StatusBadge status={location.status} />
        </div>

        {location.type === "office" ? (
          <OfficeDetails location={location} />
        ) : location.type === "community-microgrid" ? (
          <MicrogridDetails location={location} />
        ) : (
          <BatteryDetails location={location} />
        )}

        <p className="mt-3 text-xs text-text-muted leading-relaxed">
          {location.description}
        </p>
      </div>
    </div>
  );
}
