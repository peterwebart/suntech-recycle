import { getServices } from "@/data/services";
import { getDictionary } from "@/i18n/dictionaries";
import { lp, type Locale } from "@/i18n/config";

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

export function getMainNav(locale: Locale): MainNavItem[] {
  const t = getDictionary(locale);
  const n = t.nav;
  const countryLabels =
    locale === "fr"
      ? { ca: "Canada", us: "États-Unis", mx: "Mexique" }
      : { ca: "Canada", us: "United States", mx: "Mexico" };

  const serviceAreaItems: MenuEntry[] = [
    { label: countryLabels.ca, href: lp(locale, "/locations/canada"), description: n.areaAllCanada },
    { label: countryLabels.us, href: lp(locale, "/locations/united-states"), description: n.areaAllUs },
    { label: countryLabels.mx, href: lp(locale, "/locations/mexico"), description: n.areaAllMexico },
    { label: "Montréal", href: lp(locale, "/locations/montreal"), description: n.regionIslandMontreal },
    { label: "Laval", href: lp(locale, "/locations/laval"), description: n.regionNorthShore },
    { label: "Longueuil", href: lp(locale, "/locations/longueuil"), description: n.regionSouthShoreFacility },
    { label: "Toronto", href: lp(locale, "/locations/toronto"), description: n.regionOntario },
    { label: "Vancouver", href: lp(locale, "/locations/vancouver"), description: n.regionBC },
    { label: "New York", href: lp(locale, "/locations/new-york"), description: n.regionUS },
    { label: "Mexico City", href: lp(locale, "/locations/mexico-city"), description: n.regionMexico },
  ];

  return [
    {
      kind: "menu",
      label: n.services,
      href: lp(locale, "/services"),
      columnTitle: n.servicesColumn,
      featured: {
        title: n.servicesFeaturedTitle,
        body: n.servicesFeaturedBody,
        href: lp(locale, "/services"),
        cta: n.servicesFeaturedCta,
      },
      items: getServices(locale).map((s) => ({
        label: s.shortName,
        href: lp(locale, `/services/${s.slug}`),
        description: s.summary,
      })),
    },
    {
      kind: "menu",
      label: n.serviceAreas,
      href: lp(locale, "/locations"),
      columnTitle: n.areasColumn,
      featured: {
        title: n.areasFeaturedTitle,
        body: n.areasFeaturedBody,
        href: lp(locale, "/locations"),
        cta: n.areasFeaturedCta,
      },
      items: serviceAreaItems,
    },
    { kind: "link", label: n.r2v3Certified, href: lp(locale, "/r2v3-certification") },
    { kind: "link", label: n.about, href: lp(locale, "/about") },
    { kind: "link", label: n.contact, href: lp(locale, "/contact") },
  ];
}

export const mainNav: MainNavItem[] = getMainNav("en");
