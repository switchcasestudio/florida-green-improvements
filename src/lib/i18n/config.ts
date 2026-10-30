/**
 * Locale routing rules. English stays at the unprefixed URLs it already ranks
 * on; Spanish lives under /es. No redirects and no browser-language sniffing:
 * a visitor stays in the language of the URL until they use the switcher.
 */
export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];

/** "/about" -> "/es/about", "/" -> "/es", "/#faq" -> "/es#faq". English passes through. */
export function localePath(locale: Locale, path: string): string {
  if (locale === "en") return path;
  if (path === "/") return "/es";
  if (path.startsWith("/#")) return `/es${path.slice(1)}`;
  return `/es${path}`;
}

/** The locale-free form of a pathname: "/es/about" -> "/about", "/es" -> "/". */
export function stripLocale(pathname: string): string {
  if (pathname === "/es") return "/";
  return pathname.startsWith("/es/") ? pathname.slice(3) : pathname;
}

/** canonical + hreflang for one page. `path` is the English, locale-free path. */
export function alternatesFor(locale: Locale, path: string) {
  return {
    canonical: localePath(locale, path),
    languages: { en: path, es: localePath("es", path), "x-default": path },
  };
}
