import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/business";
import { LOCALES, localePath } from "@/lib/i18n/config";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.floridagreenimprovements.com";

/**
 * A real sitemap. The old site declared SEVENTY-NINE of these in robots.txt
 * and every single one returned HTML instead of XML (baseline finding F-01),
 * so Google has never had a usable map of this site.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; changeFrequency: "monthly" | "yearly"; priority: number }[] = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/about", changeFrequency: "yearly", priority: 0.6 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.9 },
    ...SERVICES.map((s) => ({
      path: `/services/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
  return LOCALES.flatMap((locale) =>
    pages.map(({ path, changeFrequency, priority }) => ({
      url: `${SITE}${localePath(locale, path)}`,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          en: `${SITE}${path}`,
          es: `${SITE}${localePath("es", path)}`,
          "x-default": `${SITE}${path}`,
        },
      },
    })),
  );
}
