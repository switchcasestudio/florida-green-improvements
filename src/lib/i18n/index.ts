import type { Locale } from "./config";
import { en, type Dictionary } from "./en";
import { es } from "./es";

/** Server-side only by convention: importing this from a Client Component would ship both languages. */
export const getDictionary = (locale: Locale): Dictionary => (locale === "es" ? es : en);
