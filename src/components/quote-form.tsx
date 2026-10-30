"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@/components/analytics";
import { useCopy } from "@/lib/i18n/client";

type Errors = Partial<Record<"name" | "email" | "phone" | "service" | "message" | "form", string>>;

const field =
  "surface w-full border border-field bg-raise px-4 py-3.5 text-[15px] text-ink placeholder:text-mute " +
  "transition-colors focus:border-green focus:outline-none";
const label = "u-data mb-2.5 block";

export function QuoteForm() {
  const { locale, form: t } = useCopy();
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [started, setStarted] = useState(false);
  const serviceRef = useRef<HTMLSelectElement>(null);

  /**
   * The lead popup and the service pages link in with ?service=Kitchen.
   *
   * Read from `location` rather than with useSearchParams: that hook opts the
   * whole route out of static rendering unless it is wrapped in Suspense, and
   * these pages are worth keeping static.
   *
   * Written to the DOM node rather than to React state, which keeps the select
   * uncontrolled — state here would either render "" on the server and the
   * chosen value on the client (a hydration mismatch) or need a second render
   * to correct itself. Setting `.value` after mount is the one thing an effect
   * is unambiguously for.
   *
   * The value is only ever matched against the option list below, so a crafted
   * query string cannot inject anything: an unknown value leaves the select on
   * "Select a service".
   */
  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get("service");
    if (!wanted || !serviceRef.current) return;
    const allowed = t.serviceOptions.some((s) => s.value === wanted) || wanted === "Something else";
    if (allowed) serviceRef.current.value = wanted;
  }, [t.serviceOptions]);

  function onFirstInput() {
    if (started) return;
    setStarted(true);
    track("form_start", { form: "quote" });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setErrors({});

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });

      if (res.ok) {
        setState("sent");
        track("form_submit", { form: "quote" });
        track("quote_request", { service: String(data.service ?? "") });
        return;
      }

      const body = await res.json().catch(() => ({}));
      setErrors(body.errors ?? { form: body.error ?? t.genericError });
      setState("idle");
    } catch {
      setErrors({ form: t.networkError });
      setState("idle");
    }
  }

  if (state === "sent") {
    return (
      <div className="surface border border-green-deep bg-raise p-10" role="status">
        <p className="u-data mb-4 text-green">{t.received}</p>
        <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] text-ink">{t.thanks}</h2>
        <p className="mt-5 max-w-[44ch] text-[16px] leading-relaxed text-mute">
          {t.followUp}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} onInput={onFirstInput} noValidate className="flex flex-col gap-7">
      {errors.form ? (
        <p role="alert" className="surface border border-line bg-raise px-4 py-3 text-[15px] text-ink">
          {errors.form}
        </p>
      ) : null}

      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>{t.name} <span aria-hidden className="text-green">*</span></label>
          <input
            id="name" name="name" type="text" required autoComplete="name"
            className={field} placeholder={t.namePlaceholder}
            aria-invalid={!!errors.name} aria-describedby={errors.name ? "err-name" : undefined}
          />
          {errors.name ? <p id="err-name" role="alert" className="mt-2 text-[13px] text-amber-text">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className={label}>{t.phone} <span aria-hidden className="text-green">*</span></label>
          <input
            id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel"
            className={field} placeholder="(786) 000-0000"
            aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "err-phone" : undefined}
          />
          {errors.phone ? <p id="err-phone" role="alert" className="mt-2 text-[13px] text-amber-text">{errors.phone}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={label}>{t.email} <span aria-hidden className="text-green">*</span></label>
        <input
          id="email" name="email" type="email" required autoComplete="email" inputMode="email"
          className={field} placeholder={t.emailPlaceholder}
          aria-invalid={!!errors.email} aria-describedby={errors.email ? "err-email" : undefined}
        />
        {errors.email ? <p id="err-email" role="alert" className="mt-2 text-[13px] text-amber-text">{errors.email}</p> : null}
      </div>

      <div>
        <label htmlFor="service" className={label}>{t.need}</label>
        <select id="service" name="service" ref={serviceRef} defaultValue="" className={field}>
          <option value="">{t.selectService}</option>
          {t.serviceOptions.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
          <option value="Something else">{t.somethingElse}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={label}>{t.about} <span aria-hidden className="text-green">*</span></label>
        <textarea
          id="message" name="message" required rows={5} className={`${field} resize-y`}
          placeholder={t.aboutPlaceholder}
          aria-invalid={!!errors.message} aria-describedby={errors.message ? "err-message" : "help-message"}
        />
        {errors.message ? (
          <p id="err-message" role="alert" className="mt-2 text-[13px] text-amber-text">{errors.message}</p>
        ) : (
          <p id="help-message" className="mt-2 text-[13px] text-mute">
            {t.help}
          </p>
        )}
      </div>

      {/* Honeypot — hidden from people, irresistible to bots. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={state === "sending"}
        className="btn btn-amber mt-2 self-start disabled:opacity-50"
      >
        {state === "sending" ? t.sending : t.send}
      </button>
    </form>
  );
}
