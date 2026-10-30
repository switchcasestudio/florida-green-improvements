"use client";

import { createContext, useContext } from "react";
import type { ClientDictionary } from "./en";

/**
 * The browser's copy of the strings its Client Components need. Filled by the
 * root layout, so only the current language reaches the page.
 */
const CopyContext = createContext<ClientDictionary | null>(null);

export function CopyProvider({ copy, children }: { copy: ClientDictionary; children: React.ReactNode }) {
  return <CopyContext.Provider value={copy}>{children}</CopyContext.Provider>;
}

export function useCopy(): ClientDictionary {
  const copy = useContext(CopyContext);
  if (!copy) throw new Error("useCopy must be used inside CopyProvider");
  return copy;
}
