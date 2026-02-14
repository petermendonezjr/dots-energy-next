"use client";

import { useState, useCallback, useMemo, useId } from "react";
import { WORLD_PATHS, MAP_WIDTH, MAP_HEIGHT, latLngToSvg } from "./world-path";
import { arcToSvgPaths } from "./arc-utils";
import { allLocations, arcs, baltimoreSites } from "@/lib/globe-data";
import type { GlobeLocation } from "@/lib/types";

interface MapViewProps {
  onMarkerClick?: (location: GlobeLocation) => void;
}

// Color coding by location type
const DOT_COLORS = {
  office: { fill: "#3B82F6", glow: "#3B82F6", label: "Offices" },             // Blue
  "battery-storage": { fill: "#F59E0B", glow: "#F59E0B", label: "BESS Projects" }, // Amber
  "community-microgrid": { fill: "#10B981", glow: "#10B981", label: "Community Microgrids" }, // Emerald
} as const;

// Baltimore cluster — all 16 overlap at world scale
const BALTIMORE_CENTER = { lat: 39.2904, lng: -76.6122 };
const nonBaltimoreLocations = allLocations.filter(
  (loc) => loc.type !== "community-microgrid"
);

export function MapView({ onMarkerClick }: MapViewProps) {
  const uid = useId().replace(/:/g, "");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [showBaltimoreList, setShowBaltimoreList] = useState(false);

  // Scoped SVG def IDs to avoid collisions on client-side nav
  const ids = {
    grid: `grid-${uid}`,
    landGrad: `land-grad-${uid}`,
    glowBlue: `glow-blue-${uid}`,
    glowAmber: `glow-amber-${uid}`,
    glowGreen: `glow-green-${uid}`,
    arcGrad: `arc-grad-${uid}`,
  };

  const arcPaths = useMemo(
    () => arcs.flatMap((arc) => arcToSvgPaths(arc)),
    []
  );

  const markers = useMemo(
    () =>
      nonBaltimoreLocations.map((loc) => ({
        ...loc,
        svg: latLngToSvg(loc.lat, loc.lng),
      })),
    []
  );

  const baltimorePos = useMemo(
    () => latLngToSvg(BALTIMORE_CENTER.lat, BALTIMORE_CENTER.lng),
    []
  );

  const handleMarkerClick = useCallback(
    (loc: GlobeLocation) => {
      setShowBaltimoreList(false);
      onMarkerClick?.(loc);
    },
    [onMarkerClick]
  );

  const handleBaltimoreClusterClick = useCallback(() => {
    setShowBaltimoreList((prev) => !prev);
  }, []);

  const handleBaltimoreSelect = useCallback(
    (loc: GlobeLocation) => {
      setShowBaltimoreList(false);
      onMarkerClick?.(loc);
    },
    [onMarkerClick]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, action: () => void) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        action();
      }
    },
    []
  );

  const handleSvgClick = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      const tag = (e.target as SVGElement).tagName;
      if (tag === "svg" || tag === "rect" || tag === "path") {
        setShowBaltimoreList(false);
      }
    },
    []
  );

  const getMarkerSize = (type: string) => {
    switch (type) {
      case "office":
        return { r: 7, glow: 15, pulse: 12 };
      case "battery-storage":
        return { r: 5.5, glow: 12, pulse: 0 };
      default:
        return { r: 4.5, glow: 10, pulse: 0 };
    }
  };

  // Legend items
  const legendItems = [
    { color: DOT_COLORS.office.fill, label: DOT_COLORS.office.label, count: 2 },
    { color: DOT_COLORS["battery-storage"].fill, label: DOT_COLORS["battery-storage"].label, count: 7 },
    { color: DOT_COLORS["community-microgrid"].fill, label: DOT_COLORS["community-microgrid"].label, count: 16 },
  ];

  // Bottom of SVG for legend (inside the SVG)
  const legendY = MAP_HEIGHT - 30;

  return (
    <div className="relative w-full max-w-[1000px] mx-auto">
      <svg
        viewBox="60 40 880 505"
        className="w-full h-auto rounded-xl border border-border overflow-hidden"
        role="img"
        aria-label="World map showing Dots Energy operations across South Korea and the United States"
        onClick={handleSvgClick}
      >
        <defs>
          {/* Grid pattern */}
          <pattern id={ids.grid} x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
            <circle cx="12.5" cy="12.5" r="0.5" style={{ fill: "var(--border-color)" }} opacity="0.25" />
          </pattern>

          {/* Land gradient */}
          <linearGradient id={ids.landGrad} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" style={{ stopColor: "var(--accent)" }} stopOpacity="0.12" />
            <stop offset="100%" style={{ stopColor: "var(--accent)" }} stopOpacity="0.04" />
          </linearGradient>

          {/* Glow filters per color */}
          <filter id={ids.glowBlue} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodColor="#3B82F6" floodOpacity="0.6" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id={ids.glowAmber} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodColor="#F59E0B" floodOpacity="0.6" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id={ids.glowGreen} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodColor="#10B981" floodOpacity="0.6" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>

          {/* Arc gradient */}
          <linearGradient id={ids.arcGrad} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" style={{ stopColor: "var(--globe-arc-color-start)" }} />
            <stop offset="100%" style={{ stopColor: "var(--globe-arc-color-end)" }} />
          </linearGradient>
        </defs>

        {/* Ocean */}
        <rect width={MAP_WIDTH} height={MAP_HEIGHT} style={{ fill: "var(--bg-secondary)" }} />
        <rect width={MAP_WIDTH} height={MAP_HEIGHT} fill={`url(#${ids.grid})`} />

        {/* Land */}
        <g>
          {WORLD_PATHS.map((path, i) => (
            <g key={i}>
              <path
                d={path}
                style={{ fill: "var(--map-land)", stroke: "var(--map-border)" }}
                strokeWidth="1"
                strokeLinejoin="round"
              />
              <path d={path} fill={`url(#${ids.landGrad})`} stroke="none" />
            </g>
          ))}
        </g>

        {/* Arcs */}
        <g>
          {arcPaths.map((seg) => (
            <path
              key={seg.id}
              d={seg.path}
              fill="none"
              stroke={`url(#${ids.arcGrad})`}
              strokeWidth="1.5"
              strokeDasharray="8 5"
              opacity="0.45"
              className="arc-flow"
              strokeLinecap="round"
            />
          ))}
        </g>

        {/* Markers */}
        <g>
          {markers.map((loc) => {
            const size = getMarkerSize(loc.type);
            const colors = DOT_COLORS[loc.type as keyof typeof DOT_COLORS];
            const isHovered = hoveredId === loc.id;
            const isOffice = loc.type === "office";
            const glowFilter = loc.type === "office" ? `url(#${ids.glowBlue})`
              : loc.type === "battery-storage" ? `url(#${ids.glowAmber})`
              : `url(#${ids.glowGreen})`;

            return (
              <g
                key={loc.id}
                className="cursor-pointer"
                onClick={(e) => { e.stopPropagation(); handleMarkerClick(loc); }}
                onKeyDown={(e) => handleKeyDown(e, () => handleMarkerClick(loc))}
                onMouseEnter={() => setHoveredId(loc.id)}
                onMouseLeave={() => setHoveredId(null)}
                role="button"
                tabIndex={0}
                aria-label={`${loc.name}, ${loc.city}${loc.state ? `, ${loc.state}` : ""}`}
              >
                {/* Hit area */}
                <circle cx={loc.svg.x} cy={loc.svg.y} r={16} fill="transparent" />

                {/* Outer glow */}
                <circle
                  cx={loc.svg.x}
                  cy={loc.svg.y}
                  r={isHovered ? size.glow * 1.4 : size.glow}
                  fill={colors.glow}
                  opacity={isHovered ? 0.2 : 0.08}
                  className="transition-all duration-300"
                />

                {/* Pulse rings (offices) */}
                {isOffice && (
                  <>
                    <circle
                      cx={loc.svg.x} cy={loc.svg.y} r={size.pulse}
                      fill="none" stroke={colors.fill} strokeWidth="1.5"
                      className="map-pulse"
                    />
                    <circle
                      cx={loc.svg.x} cy={loc.svg.y} r={size.pulse + 6}
                      fill="none" strokeWidth="0.8"
                      className="map-pulse"
                      style={{ stroke: colors.fill, animationDelay: "0.8s" }}
                    />
                  </>
                )}

                {/* Main dot */}
                <circle
                  cx={loc.svg.x}
                  cy={loc.svg.y}
                  r={isHovered ? size.r * 1.3 : size.r}
                  fill={colors.fill}
                  filter={glowFilter}
                  className="transition-all duration-200"
                />

                {/* Inner bright spot */}
                <circle
                  cx={loc.svg.x} cy={loc.svg.y}
                  r={size.r * 0.3}
                  fill="white" opacity={0.7}
                />

                {/* Hover label */}
                {isHovered && (
                  <g>
                    <rect
                      x={loc.svg.x - 65} y={loc.svg.y - size.r - 28}
                      width="130" height="20" rx="4"
                      style={{ fill: "var(--bg-card)" }}
                      stroke="var(--border-color)" strokeWidth="0.5" opacity="0.95"
                    />
                    <text
                      x={loc.svg.x} y={loc.svg.y - size.r - 15}
                      textAnchor="middle" dominantBaseline="middle"
                      style={{ fill: "var(--text-primary)" }}
                      fontSize="8" fontWeight="600" fontFamily="var(--font-body)"
                    >
                      {loc.name.length > 24 ? loc.name.slice(0, 22) + "…" : loc.name}
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* Baltimore cluster */}
          <g
            className="cursor-pointer"
            onClick={(e) => { e.stopPropagation(); handleBaltimoreClusterClick(); }}
            onKeyDown={(e) => handleKeyDown(e, handleBaltimoreClusterClick)}
            onMouseEnter={() => setHoveredId("baltimore-cluster")}
            onMouseLeave={() => setHoveredId(null)}
            role="button"
            tabIndex={0}
            aria-label={`Baltimore Community Resilience Hubs — ${baltimoreSites.length} sites`}
          >
            <circle cx={baltimorePos.x} cy={baltimorePos.y} r={20} fill="transparent" />

            {/* Glow */}
            <circle
              cx={baltimorePos.x} cy={baltimorePos.y}
              r={hoveredId === "baltimore-cluster" ? 22 : 18}
              fill={DOT_COLORS["community-microgrid"].glow}
              opacity={hoveredId === "baltimore-cluster" ? 0.25 : 0.1}
              className="transition-all duration-300"
            />

            {/* Pulse rings */}
            <circle
              cx={baltimorePos.x} cy={baltimorePos.y} r={16}
              fill="none" stroke={DOT_COLORS["community-microgrid"].fill}
              strokeWidth="1.5" className="map-pulse"
            />
            <circle
              cx={baltimorePos.x} cy={baltimorePos.y} r={22}
              fill="none" strokeWidth="0.8" className="map-pulse"
              style={{ stroke: DOT_COLORS["community-microgrid"].fill, animationDelay: "0.8s" }}
            />

            {/* Main dot */}
            <circle
              cx={baltimorePos.x} cy={baltimorePos.y}
              r={hoveredId === "baltimore-cluster" ? 11 : 9}
              fill={DOT_COLORS["community-microgrid"].fill}
              filter={`url(#${ids.glowGreen})`}
              className="transition-all duration-200"
            />

            {/* Count */}
            <text
              x={baltimorePos.x} y={baltimorePos.y + 0.5}
              textAnchor="middle" dominantBaseline="middle"
              fill="white" fontSize="7.5" fontWeight="700"
              fontFamily="var(--font-mono)"
            >
              {baltimoreSites.length}
            </text>

            {/* Hover label */}
            {hoveredId === "baltimore-cluster" && (
              <g>
                <rect
                  x={baltimorePos.x - 80} y={baltimorePos.y - 36}
                  width="160" height="20" rx="4"
                  style={{ fill: "var(--bg-card)" }}
                  stroke="var(--border-color)" strokeWidth="0.5" opacity="0.95"
                />
                <text
                  x={baltimorePos.x} y={baltimorePos.y - 23}
                  textAnchor="middle" dominantBaseline="middle"
                  style={{ fill: "var(--text-primary)" }}
                  fontSize="8" fontWeight="600" fontFamily="var(--font-body)"
                >
                  Baltimore — {baltimoreSites.length} Resilience Hubs
                </text>
              </g>
            )}
          </g>
        </g>

        {/* ═══════════ LEGEND ═══════════ */}
        <g transform={`translate(0, ${MAP_HEIGHT})`}>
          {/* Legend background */}
          <rect x="0" y="0" width={MAP_WIDTH} height="45" style={{ fill: "var(--bg-primary)" }} />
          <line x1="0" y1="0" x2={MAP_WIDTH} y2="0" style={{ stroke: "var(--border-color)" }} strokeWidth="1" />

          {/* Legend items — centered */}
          {legendItems.map((item, i) => {
            const spacing = 280;
            const totalWidth = legendItems.length * spacing;
            const startX = (MAP_WIDTH - totalWidth) / 2 + spacing / 2;
            const cx = startX + i * spacing;

            return (
              <g key={item.label} transform={`translate(${cx}, 22)`}>
                {/* Color dot */}
                <circle cx={-45} cy={0} r={5} fill={item.color} />
                <circle cx={-45} cy={0} r={2} fill="white" opacity={0.5} />

                {/* Label */}
                <text
                  x={-33} y={0}
                  dominantBaseline="middle"
                  style={{ fill: "var(--text-secondary)" }}
                  fontSize="10" fontWeight="500"
                  fontFamily="var(--font-body)"
                >
                  {item.label}
                </text>

                {/* Count badge */}
                <text
                  x={-33 + item.label.length * 5.5 + 12} y={0}
                  dominantBaseline="middle"
                  style={{ fill: "var(--text-muted)" }}
                  fontSize="9" fontWeight="600"
                  fontFamily="var(--font-mono)"
                >
                  ({item.count})
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Baltimore site picker */}
      {showBaltimoreList && (
        <div
          className="absolute z-30 bg-bg-card border border-border rounded-xl max-h-72 overflow-y-auto w-80"
          style={{
            left: `${(baltimorePos.x / MAP_WIDTH) * 100}%`,
            top: `${(baltimorePos.y / (MAP_HEIGHT + 45)) * 100 + 3}%`,
            transform: "translateX(-50%)",
            boxShadow: "var(--popup-shadow)",
          }}
        >
          <div className="sticky top-0 bg-bg-card px-4 py-3 border-b border-border rounded-t-xl">
            <p className="text-sm font-semibold text-text-primary" style={{ fontFamily: "var(--font-heading)" }}>
              Baltimore Community Resilience Hubs
            </p>
            <p className="text-xs text-text-muted mt-0.5">
              {baltimoreSites.length} sites · Select to view details
            </p>
          </div>
          <ul className="py-1">
            {baltimoreSites.map((site) => (
              <li key={site.id}>
                <button
                  className="w-full text-left px-4 py-2.5 text-sm hover:bg-bg-card-hover transition-colors flex justify-between items-center gap-3"
                  onClick={() => handleBaltimoreSelect(site)}
                >
                  <span className="font-medium text-text-primary truncate">{site.name}</span>
                  <span className="text-xs text-text-muted whitespace-nowrap" style={{ fontFamily: "var(--font-mono)" }}>
                    {site.solarKW}kW · {site.batteryKWh}kWh
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
