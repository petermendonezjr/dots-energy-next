"use client";

import { useState, useCallback } from "react";
import { MapView } from "./MapView";
import { MarkerPopup } from "./MarkerPopup";
import type { GlobeLocation } from "@/lib/types";

export function Globe() {
  const [selectedMarker, setSelectedMarker] = useState<GlobeLocation | null>(
    null
  );

  const handleMarkerClick = useCallback((location: GlobeLocation) => {
    setSelectedMarker(location);
  }, []);

  return (
    <div
      className="relative w-full"
      role="img"
      aria-label="World map showing Dots Energy operations in South Korea and the United States"
    >
      <MapView onMarkerClick={handleMarkerClick} />

      {selectedMarker && (
        <MarkerPopup
          location={selectedMarker}
          onClose={() => setSelectedMarker(null)}
        />
      )}
    </div>
  );
}
