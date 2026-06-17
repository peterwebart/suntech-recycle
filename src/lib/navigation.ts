import { services } from "@/data/services";

export type MenuEntry = { label: string; href: string; description?: string };

export type MainNavItem =
  | { kind: "link"; label: string; href: string }
  | {
      kind: "menu";
      label: string;
      href: string;
      columnTitle: string;
      featured: { title: string; body: string; href: string; cta: string };
      items: MenuEntry[];
    };

// Curated service-area entries (the full set is ~90 city/region pages).
const serviceAreaItems: MenuEntry[] = [
  { label: "Canada", href: "/locations/canada", description: "All Canadian cities" },
  { label: "United States", href: "/locations/united-states", description: "All US cities" },
  { label: "Mexico", href: "/locations/mexico", description: "All Mexican cities" },
  { label: "Montréal", href: "/locations/montreal", description: "Island of Montréal" },
  { label: "Laval", href: "/locations/laval", description: "North Shore" },
  { label: "Longueuil", href: "/locations/longueuil", description: "South Shore · facility" },
  { label: "Toronto", href: "/locations/toronto", description: "Ontario" },
  { label: "Vancouver", href: "/locations/vancouver", description: "British Columbia" },
  { label: "New York", href: "/locations/new-york", description: "United States" },
  { label: "Mexico City", href: "/locations/mexico-city", description: "Mexico" },
];

export const mainNav: MainNavItem[] = [
  {
    kind: "menu",
    label: "Services",
    href: "/services",
    columnTitle: "What we handle",
    featured: {
      title: "One R2v3-certified partner, dock to certificate",
      body: "Collection, secure data destruction, IT asset disposition and recovery under a single chain of custody.",
      href: "/services",
      cta: "View all services",
    },
    items: services.map((s) => ({
      label: s.shortName,
      href: `/services/${s.slug}`,
      description: s.summary,
    })),
  },
  {
    kind: "menu",
    label: "Service areas",
    href: "/locations",
    columnTitle: "Where we operate",
    featured: {
      title: "Across Canada, the US & Mexico",
      body: "Local collection across Greater Montréal, plus secure mail-in ITAD and data destruction North-America-wide.",
      href: "/locations",
      cta: "See all areas",
    },
    items: serviceAreaItems,
  },
  { kind: "link", label: "R2v3 Certified", href: "/r2v3-certification" },
  { kind: "link", label: "About", href: "/about" },
  { kind: "link", label: "Contact", href: "/contact" },
];
