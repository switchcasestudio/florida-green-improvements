import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav, CallBar } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { ContactBlock } from "@/components/contact-block";
import { getDictionary } from "@/lib/i18n";
import { alternatesFor, localePath, type Locale } from "@/lib/i18n/config";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const contactMetadata = (locale: Locale): Metadata => {
  const { meta } = getDictionary(locale);
  return {
    title: meta.contactTitle,
    description: meta.contactDescription,
    alternates: alternatesFor(locale, "/contact"),
  };
};

export function ContactPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: t.home_, path: localePath(locale, "/") }, { name: t.contactPage.nav, path: localePath(locale, "/contact") }])} />
      <SiteNav />
      <main id="main">
        <section className="relative overflow-hidden border-b border-line/40">
          <div className="absolute inset-0">
            <Image src="/atmosphere/interior-dark.webp" alt="" fill priority sizes="100vw" quality={62}
              className="object-cover opacity-[0.5] [filter:saturate(.95)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,250,248,.82),var(--fg-ground))]" />
          </div>
          <div className="relative mx-auto max-w-[1400px] px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-48">
            
              <p className="u-data mb-7 text-ink">{t.contactPage.eyebrow}</p>
              <h1 className="max-w-[14ch] text-[clamp(2.5rem,7.5vw,6rem)] text-ink">{t.contactPage.heading}</h1>
            
          </div>
        </section>

        <ContactBlock showHeading={false} />
      </main>
      <SiteFooter locale={locale} />
      <CallBar />
    </>
  );
}
