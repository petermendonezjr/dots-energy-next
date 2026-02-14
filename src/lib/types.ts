export type LocationType = "office" | "battery-storage" | "community-microgrid";
export type ProjectStatus = "Operational" | "Under Construction" | "Planned" | "Contracted";

export interface BaseLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  city: string;
  state?: string;
  country: string;
  type: LocationType;
  status: ProjectStatus;
  description: string;
}

export interface OfficeLocation extends BaseLocation {
  type: "office";
  function: string;
  focus: string;
}

export interface BatteryProject extends BaseLocation {
  type: "battery-storage";
  capacityMWh: number;
  capacityMW: number;
  market: string;
  commissioned?: string;
}

export interface CommunityMicrogrid extends BaseLocation {
  type: "community-microgrid";
  solarKW: number;
  batteryKWh: number;
  solarInstallation: string;
  program: string;
}

export type GlobeLocation = OfficeLocation | BatteryProject | CommunityMicrogrid;

export interface ArcData {
  id: string;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  label: string;
}
