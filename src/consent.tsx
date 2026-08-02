import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type ConsentChoice = "granted" | "denied";

const STORAGE_KEY = "analytics-consent";

function readStoredConsent(): ConsentChoice | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "granted" || stored === "denied" ? stored : null;
  } catch {
    return null;
  }
}

function writeStoredConsent(choice: ConsentChoice | null): void {
  try {
    if (choice === null) localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Private browsing modes can reject writes; consent then lasts for the session only.
  }
}

interface ConsentContextValue {
  consent: ConsentChoice | null;
  decide: (choice: ConsentChoice) => void;
  reset: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentChoice | null>(() => readStoredConsent());

  const decide = useCallback((choice: ConsentChoice) => {
    writeStoredConsent(choice);
    setConsent(choice);
  }, []);

  const reset = useCallback(() => {
    writeStoredConsent(null);
    setConsent(null);
  }, []);

  const value = useMemo(() => ({ consent, decide, reset }), [consent, decide, reset]);

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent(): ConsentContextValue {
  const context = useContext(ConsentContext);
  if (!context) throw new Error("useConsent must be used within a ConsentProvider");
  return context;
}

/**
 * GA4 reads this global before every hit, so setting it blocks tracking even
 * after the script has already loaded in this page session.
 */
export function useAnalyticsOptOutFlag(measurementId: string | undefined, consent: ConsentChoice | null) {
  useEffect(() => {
    if (!measurementId) return;
    (window as unknown as Record<string, boolean>)[`ga-disable-${measurementId}`] =
      consent !== "granted";
  }, [measurementId, consent]);
}
