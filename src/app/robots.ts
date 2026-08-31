import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.floridagreenimprovements.com";

/**
 * Bandwidth cleanup (Aug 2026, see PROJECT_LOG.md): named AI/content-scraping
 * crawlers are disallowed outright. Everything else — including Googlebot and
 * Bingbot, which get no rule of their own and fall through to the wildcard —
 * keeps full access. This is voluntary compliance, not a security control: it
 * only reduces load from bots that honor robots.txt (most of the ones listed
 * do), and does nothing against a scraper that ignores the file entirely.
 */
const DISALLOWED_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "CCBot",
  "Bytespider",
  "PerplexityBot",
  "PerplexityUser",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "Amazonbot",
  "Applebot-Extended",
  "Google-Extended",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "Diffbot",
  "ImagesiftBot",
  "Timpibot",
  "YouBot",
  "cohere-ai",
  "Bytedance",
];

/** One sitemap. One that works. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...DISALLOWED_CRAWLERS.map((userAgent) => ({ userAgent, disallow: "/" })),
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
