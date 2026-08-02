import { Button } from "@/components/ui/button";
import { useConsent } from "@/consent";

export function ConsentBanner() {
  const { consent, decide } = useConsent();

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Analytics consent"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 bg-background/95 backdrop-blur-md animate-fade-in motion-reduce:animate-none"
    >
      <div className="container-wide py-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            I'd like to use Google Analytics to understand which pages people find useful.
            Nothing is collected unless you agree, and the site works exactly the same either way.
          </p>

          <div className="flex flex-shrink-0 gap-3">
            <Button type="button" variant="ghost" size="sm" onClick={() => decide("denied")}>
              Decline
            </Button>
            <Button type="button" variant="outline" size="sm" onClick={() => decide("granted")}>
              Allow
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
