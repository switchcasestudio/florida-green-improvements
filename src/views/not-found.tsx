import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { BUSINESS } from "@/lib/business";
import { getDictionary } from "@/lib/i18n";
import { localePath, type Locale } from "@/lib/i18n/config";

export function NotFound({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <>
      <main id="main" className="mx-auto flex min-h-[76svh] max-w-[1400px] flex-col justify-center px-6 py-32 md:px-10">
        <p className="u-data mb-7 text-green">404</p>
        <h1 className="max-w-[16ch] text-[clamp(2.25rem,7vw,5rem)] text-ink">{t.notFound.heading}</h1>
        <p className="mt-8 max-w-[46ch] text-[17px] leading-relaxed text-mute">
          {t.notFound.body}
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Link href={localePath(locale, "/")} className="btn btn-amber">{t.notFound.back}</Link>
          <a href={BUSINESS.phoneHref} className="btn btn-ghost btn-tel">{BUSINESS.phone}</a>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
