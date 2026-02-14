import { latLngToSvg } from "./world-path";
import type { ArcData } from "@/lib/types";

interface SvgArcSegment {
  path: string;
  id: string;
}

/**
 * Generate SVG path for an arc between two lat/lng points.
 * With Pacific-centered projection, Seoul→US arcs are straightforward
 * (both appear on the same map without wrapping).
 */
export function arcToSvgPaths(arc: ArcData): SvgArcSegment[] {
  const start = latLngToSvg(arc.startLat, arc.startLng);
  const end = latLngToSvg(arc.endLat, arc.endLng);

  // Quadratic Bezier with control point elevated above the midpoint
  const midX = (start.x + end.x) / 2;
  const midY = (start.y + end.y) / 2;
  // Curve upward — the higher the distance, the bigger the arc
  const dist = Math.abs(end.x - start.x);
  const curveHeight = midY - (dist * 0.15);

  return [
    {
      id: arc.id,
      path: `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} Q ${midX.toFixed(1)} ${curveHeight.toFixed(1)} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`,
    },
  ];
}
