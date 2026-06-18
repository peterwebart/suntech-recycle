export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Build a locale-aware path. Default locale stays unprefixed (site root);
 *  other locales are prefixed. lp("fr","/services") -> "/fr/services". */
export function lp(locale: Locale, path: string): string {
  const clean = !path || path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean === "" ? "/" : clean;
  return `/${locale}${clean}`;
}

/** Swap locale on a pathname (default locale unprefixed, others prefixed). */
export function switchLocalePath(pathname: string, next: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length > 0 && isLocale(parts[0]) && parts[0] !== defaultLocale) {
    parts.shift();
  }
  const rest = parts.length ? `/${parts.join("/")}` : "/";
  return lp(next, rest);
}

export const localeLabels: Record<Locale, { short: string; long: string }> = {
  en: { short: "EN", long: "English" },
  fr: { short: "FR", long: "Français" },
};
