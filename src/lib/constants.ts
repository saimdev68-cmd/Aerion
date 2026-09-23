import { FrameChapter } from "@/types/animation";

export const BRAND = {
  name: "AERION",
  modelName: "THE ART OF MOTION",
  tagline: "THE ART OF MOTION",
  subtext: "A study in speed, form and movement.",
  year: "2026",
};

export const STORY_CHAPTERS: FrameChapter[] = [
  {
    id: "chapter-1",
    startFrame: 1,
    endFrame: 40,
    title: "SCULPTED BY SPEED",
    subtitle: "01 / AERODYNAMIC OBSESSION",
    description: "Every surface of AERION is shaped around movement, balance and aerodynamic precision.",
    positionClass: "items-start text-left",
  },
  {
    id: "chapter-2",
    startFrame: 41,
    endFrame: 80,
    title: "PURE PROPULSION",
    subtitle: "02 / CONCEPT DYNAMICS",
    description: "Instantaneous quad-motor vectoring delivering unfiltered velocity with race-bred precision.",
    stats: [
      { label: "0–100 KM/H", value: "2.4 S" },
      { label: "TOP SPEED", value: "350 KM/H" },
      { label: "PEAK OUTPUT", value: "900 HP" },
    ],
    positionClass: "items-end text-right",
  },
  {
    id: "chapter-3",
    startFrame: 81,
    endFrame: 120,
    title: "ENGINEERED WITHOUT COMPROMISE",
    subtitle: "03 / CARBON MONOCOQUE",
    description: "A bespoke autoclave-molded carbon-titanium composite safety cell with zero unnecessary mass.",
    positionClass: "items-start text-left",
  },
  {
    id: "chapter-4",
    startFrame: 121,
    endFrame: 170,
    title: "LIGHT. FORM. PRESENCE.",
    subtitle: "04 / MATRIX LED OPTICS",
    description: "Ultra-thin projector ribbons integrated seamlessly into the aerodynamic leading edge.",
    positionClass: "items-center text-center",
  },
  {
    id: "chapter-5",
    startFrame: 171,
    endFrame: 210,
    title: "BUILT FOR MOTION",
    subtitle: "05 / ACTIVE AERODYNAMICS",
    description: "Dynamic underbody Venturi channels and morphing active aerofoils delivering unrelenting downforce.",
    stats: [
      { label: "DOWNFORCE", value: "1,200 KG" },
      { label: "DRY MASS", value: "1,180 KG" },
      { label: "POWER/WEIGHT", value: "1.31 KG/HP" },
    ],
    positionClass: "items-start text-left",
  },
  {
    id: "chapter-6",
    startFrame: 211,
    endFrame: 240,
    title: "THE ART OF MOTION",
    subtitle: "06 / AERION CONCEPT",
    description: "A study in speed, form and movement. The culmination of digital automotive sculpture.",
    positionClass: "items-center text-center",
  },
];

export const SPECIFICATIONS = [
  {
    label: "0–100 KM/H",
    value: "2.4",
    unit: "S",
    description: "Instantaneous quad-motor vectoring launch response.",
  },
  {
    label: "TOP SPEED",
    value: "350",
    unit: "KM/H",
    description: "Aerodynamically unlocked high-speed stability threshold.",
  },
  {
    label: "PEAK POWER",
    value: "900",
    unit: "HP",
    description: "Permanent-magnet synchronous propulsion architecture.",
  },
  {
    label: "DRY MASS",
    value: "1,180",
    unit: "KG",
    description: "Extruded honeycomb carbon-titanium monocoque construction.",
  },
  {
    label: "POWER / WEIGHT",
    value: "1.31",
    unit: "KG/HP",
    description: "Uncompromising power density ratio for sharp dynamic agility.",
  },
  {
    label: "DOWNFORCE",
    value: "1,200",
    unit: "KG",
    description: "Underbody Venturi suction measured at 300 km/h velocity.",
  },
];

export const ENGINEERING_CARDS = [
  {
    title: "ACTIVE AERODYNAMICS",
    subtitle: "DYNAMIC FLOW REGULATION",
    description:
      "Continuous actuator-driven micro-flaps and dynamic underbody venturi diffusers adjust the aerodynamic footprint 500 times per second.",
  },
  {
    title: "CARBON-FIBER BODY",
    subtitle: "AUTOCLAVED COMPOSITE TUB",
    description:
      "Single-piece autoclave carbon monocoque with woven titanium threads, providing unparalleled crash integrity and flex rigidity.",
  },
  {
    title: "MATRIX LED LIGHTING",
    subtitle: "INTEGRATED AERO-OPTICS",
    description:
      "Micro-lens projection ribbons nestled seamlessly inside the leading aerodynamic air splitters to eradicate optical surface drag.",
  },
  {
    title: "PERFORMANCE ARCHITECTURE",
    subtitle: "QUAD-MOTOR VECTORING",
    description:
      "Independent wheel torque management instantaneously delivers negative or positive yaw momentum around apex corners.",
  },
];

export const NAV_LINKS = [
  { label: "DESIGN", href: "#design" },
  { label: "PERFORMANCE", href: "#performance" },
  { label: "TECHNOLOGY", href: "#technology" },
];
