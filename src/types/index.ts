export interface CarColor {
  id: string;
  name: string;
  hex: string;
  roughness: number;
  metalness: number;
  clearcoat: number;
  clearcoatRoughness: number;
}

export interface Specification {
  label: string;
  value: string;
  unit?: string;
  description: string;
}

export interface Hotspot {
  id: string;
  title: string;
  description: string;
  position: [number, number, number];
  category: 'AERO' | 'CHASSIS' | 'POWERTRAIN' | 'OPTICS';
}

export interface SoundState {
  muted: boolean;
  playEngineRev: () => void;
  playHeadlightsOn: () => void;
  playClick: () => void;
  toggleMute: () => void;
}
