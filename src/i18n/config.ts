export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** First-path-segment slug translations for French routes.
 *  English (canonical, unprefixed at root) → French slug under /fr. */
const FR_SEG: Record<string, string> = {
  about: "a-propos",
  locations: "emplacements",
  collection: "collecte",
  "r2v3-certification": "certification-r2v3",
  "community-impact": "impact-communautaire",
};
const EN_SEG: Record<string, string> = Object.fromEntries(
  Object.entries(FR_SEG).map(([en, fr]) => [fr, en]),
);

function splitQuery(path: string): [string, string] {
  const i = path.search(/[?#]/);
  return i === -1 ? [path, ""] : [path.slice(0, i), path.slice(i)];
}

function translateFirstSegment(cleanPath: string, map: Record<string, string>): string {
  const segs = cleanPath.split("/").filter(Boolean);
  if (segs.length && map[segs[0]]) segs[0] = map[segs[0]];
  return segs.length ? `/${segs.join("/")}` : "";
}

/** Build a locale-aware path from an English (canonical) path.
 *  Default locale stays unprefixed; French is prefixed AND slug-translated.
 *  lp("fr","/about") -> "/fr/a-propos"; lp("fr","/locations/montreal") -> "/fr/emplacements/montreal". */
export function lp(locale: Locale, path: string): string {
  const [rawPath, query] = splitQuery(!path ? "/" : path);
  const clean = !rawPath || rawPath === "/" ? "" : rawPath.startsWith("/") ? rawPath : `/${rawPath}`;
  if (locale === defaultLocale) return (clean === "" ? "/" : clean) + query;
  const translated = locale === "fr" ? translateFirstSegment(clean, FR_SEG) : clean;
  return `/${locale}${translated}` + query;
}

/** Swap locale on a live pathname, translating slugs both ways. */
export function switchLocalePath(pathname: string, next: Locale): string {
  const [rawPath, query] = splitQuery(pathname);
  const parts = (rawPath || "/").split("/").filter(Boolean);
  let current: Locale = defaultLocale;
  if (parts.length && isLocale(parts[0])) {
    current = parts[0];
    if (parts[0] !== defaultLocale) parts.shift();
  }
  // Reverse-translate the current locale's slug back to the English canonical.
  if (current === "fr" && parts.length && EN_SEG[parts[0]]) parts[0] = EN_SEG[parts[0]];
  const enPath = parts.length ? `/${parts.join("/")}` : "/";
  return lp(next, enPath) + query;
}

export const localeLabels: Record<Locale, { short: string; long: string }> = {
  en: { short: "EN", long: "English" },
  fr: { short: "FR", long: "Français" },
};
