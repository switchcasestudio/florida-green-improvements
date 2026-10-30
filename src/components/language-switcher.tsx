"use client";

import { usePathname } from "next/navigation";
import { track } from "@/components/analytics";
import { useCopy } from "@/lib/i18n/client";
import { localePath, stripLocale, type Locale } from "@/lib/i18n/config";

/* Inline SVG, not emoji: Windows renders flag emoji as bare letters. */
function FlagUS() {
  return (
    <svg viewBox="0 0 26 18" width="23" height="16" aria-hidden className="shrink-0 overflow-hidden rounded-[2px] shadow-[0_0_0_1px_rgba(56,56,56,.18)]">
      <rect width="26" height="18" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={(i * 18) / 13} width="26" height={18 / 13} fill="#B22234" />
      ))}
      <rect width="11.5" height={(18 * 7) / 13} fill="#3C3B6E" />
      {[0, 1, 2].flatMap((r) =>
        [0, 1, 2, 3].map((c) => (
          <circle key={`${r}${c}`} cx={1.6 + c * 2.8} cy={1.6 + r * 2.9} r=".55" fill="#fff" />
        )),
      )}
    </svg>
  );
}

function FlagES() {
  return (
    <svg viewBox="0 0 26 18" width="23" height="16" aria-hidden className="shrink-0 overflow-hidden rounded-[2px] shadow-[0_0_0_1px_rgba(56,56,56,.18)]">
      <rect width="26" height="18" fill="#AA151B" />
      <rect y="4.5" width="26" height="9" fill="#F1BF00" />
    </svg>
  );
}

const OPTIONS: { locale: Locale; code: string; name: string; Flag: () => React.JSX.Element }[] = [
  { locale: "en", code: "EN", name: "English", Flag: FlagUS },
  { locale: "es", code: "ES", name: "Español", Flag: FlagES },
];

/**
 * EN | ES. Real links to the same page in the other language, so they work
 * without JavaScript and crawlers can follow them. The two languages have
 * separate root layouts, so switching is a full page load either way; the click
 * handler only carries the query string (?service=) and #section across.
 */
export function LanguageSwitcher({ onDark = false }: { onDark?: boolean }) {
  const { locale: current, nav } = useCopy();
  const base = stripLocale(usePathname());

  return (
    <div role="group" aria-label={nav.language} className="flex shrink-0 items-center">
      {OPTIONS.map(({ locale, code, name, Flag }, i) => {
        const active = locale === current;
        const href = localePath(locale, base);
        return (
          <div key={locale} className="flex items-center">
            {i > 0 ? <span aria-hidden className={`mx-1 h-5 w-px ${onDark ? "bg-white/40" : "bg-ink/25"}`} /> : null}
            <a
              href={href}
              hrefLang={locale}
              lang={locale}
              aria-label={name}
              aria-current={active ? "true" : undefined}
              onClick={(e) => {
                if (active) {
                  e.preventDefault();
                  return;
                }
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                e.preventDefault();
                track("language_switch", { to: locale });
                window.location.assign(`${href}${window.location.search}${window.location.hash}`);
              }}
              className={`flex min-h-11 items-center gap-1.5 px-1.5 font-data text-[12px] tracking-[0.08em] transition-opacity ${
                active ? "font-semibold" : "opacity-60 hover:opacity-100"
              } ${onDark ? "text-white" : "text-ink"}`}
            >
              <Flag />
              {code}
            </a>
          </div>
        );
      })}
    </div>
  );
}
