import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { ConsentProvider } from "@/components/consent";
import { BUSINESS } from "@/lib/business";
import { CopyProvider } from "@/lib/i18n/client";
import { alternatesFor, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import "@/app/globals.css";

/* ── TYPE ─────────────────────────────────────────────────────────────
   Display : Archivo variable — width axis pulled to condensed, set light
             and huge. The Vault never uses weight to shout.
   Body    : Inter — replaced Newsreader (editorial serif) at the client's
             request. The serif was a holdover from the dark "Vault" palette
             and read literary rather than trade. Inter is deliberately
             characterless: it lets the condensed Archivo headings carry the
             personality and does not compete with them.
   Data    : Archivo at normal width — labels, eyebrows, metrics. A tracked
             monospace at 10px was unreadable; this is the same superfamily
             as the display, differentiated by width rather than by face.   */
const display = Archivo({
  subsets: ["latin"],
  axes: ["wdth"], // variable width — the condensed cut is set in globals.css
  variable: "--font-archivo",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  // Not preloaded on purpose. The LCP element is the headline, set in Archivo;
  // preloading both fonts made them compete for bandwidth on throttled mobile
  // and pushed LCP out by ~1.8 s. Body copy can arrive a beat later.
  preload: false,
});

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.floridagreenimprovements.com";

/**
 * Social share card. ONE static 1200x630 JPEG, not a generated route.
 *
 * Baseline finding F-07: none of the 15 original pages carried an og:image,
 * so every link shared on WhatsApp, iMessage or Facebook rendered as a blank
 * grey card. In this market referrals travel by message, so that was a direct
 * conversion loss — and until now the rebuild reproduced it, because the
 * metadata below declared a `summary_large_image` twitter card with no image
 * behind it, which is the same blank card with extra steps.
 *
 * Deliberately not per-page. A card per service was considered and dropped:
 * the thing being shared is the company, and the three facts worth carrying
 * into someone else's chat window are the licence number, the rating and the
 * service area. Those do not vary by page.
 *
 * Built from /atmosphere/hero-luxury.webp, already licensed and already the
 * homepage hero, so the card matches the page it opens. IMG-01 still applies:
 * atmosphere only, no caption, nothing implying it is the client's own work.
 * Regenerate at 1200x630 — smaller and WhatsApp crops it, larger and some
 * clients refuse to fetch it.
 */
/**
 * Exported because Next.js does NOT deep-merge `openGraph`: any route that
 * declares its own block replaces the parent's outright. The seven service
 * pages declare one for their per-page title and description, which silently
 * dropped og:image from exactly the pages a homeowner is most likely to
 * forward. They import this and spread it back in. Anything that adds an
 * `openGraph` block from here on has to do the same.
 */
export const ogImage = (locale: Locale) => ({
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: getDictionary(locale).meta.ogAlt,
});

export const rootMetadata = (locale: Locale): Metadata => {
  const { meta } = getDictionary(locale);
  const image = ogImage(locale);
  return {
  metadataBase: new URL(SITE),
  title: {
    default: meta.title,
    template: `%s | ${BUSINESS.name}`,
  },
  description: meta.description,
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  alternates: alternatesFor(locale, "/"),
  openGraph: {
    type: "website",
    locale: meta.ogLocale,
    url: locale === "es" ? `${SITE}/es` : SITE,
    siteName: BUSINESS.name,
    title: meta.title,
    description: meta.ogDescription,
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    images: [image],
    title: meta.title,
    description: meta.twitterDescription,
  },
  /**
   * The site stays out of the index until it is live on the real domain.
   * Until then it is a review copy on a netlify.app subdomain, and letting
   * Google index that would create a duplicate competing with the client's
   * existing site. Flip NEXT_PUBLIC_INDEXABLE to "true" at DNS cutover.
   */
  robots:
    process.env.NEXT_PUBLIC_INDEXABLE === "true"
      ? {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
        }
      : { index: false, follow: false, nocache: true },
  // Self-verifies Search Console the moment this ships on the domain.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  formatDetection: { telephone: true, address: true },
  };
};

export const rootViewport: Viewport = {
  themeColor: "#FAFAF8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const t = getDictionary(locale);
  return (
    <html
      lang={locale}
      className={`${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Analytics origins are known at build time — preconnecting saves
            ~350ms of DNS + TLS on the first tracked event. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://c.clarity.ms" />
        {/* Set before first paint so the reveal styles apply with no flash —
            and so that a visitor without JS is never served a blank page. */}
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.classList.add("js")',
          }}
        />
      </head>
      {/* Extensions (ColorZilla, Grammarly, LastPass…) inject attributes onto
          <body> before React hydrates. Not our markup — but the mismatch is
          real, so <body> gets the same guard <html> already carries. */}
      <body suppressHydrationWarning>
        <a href="#main" className="skip-link">{t.skipLink}</a>
        <CopyProvider copy={t.client}>
          <ConsentProvider>
            {children}
            <Analytics />
          </ConsentProvider>
        </CopyProvider>
      </body>
    </html>
  );
}
