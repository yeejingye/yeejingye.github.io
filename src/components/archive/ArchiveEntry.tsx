import { useState } from "react";
import { ChevronDown, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArchiveEntryProps {
  year: string;
  motto: string;
  mottoSubtitle?: string;
  soundtrack: {
    title: string;
    artist: string;
    link?: string;
  };
  scripture: {
    text: string;
    reference: string;
  };
  accentClass?: string;
  logo?: {
    src: string;
    alt?: string;
  };
}

export function ArchiveEntry({
  year,
  motto,
  mottoSubtitle,
  logo,
  soundtrack,
  scripture,
  accentClass = "text-primary",
}: ArchiveEntryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-border/50 last:border-b-0">
      {/* Collapsed Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-6 flex items-center justify-between group text-left"
        aria-expanded={isExpanded}
      >
        <div className="flex items-baseline gap-3">
          <span className={cn("font-semibold text-lg", accentClass)}>
            {year}
          </span>
          <span className="text-muted-foreground">—</span>
          <span className="font-serif italic text-muted-foreground">
            {motto}
          </span>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform duration-300",
            isExpanded && "rotate-180"
          )}
        />
      </button>

      {/* Expanded Content */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-10 space-y-10">
            {/* Motto Artifact */}
            <div className="space-y-3">
              <div className="grid grid-cols-[4rem,1fr] md:grid-cols-[5rem,1fr] gap-x-5 gap-y-1 items-start">
                {logo ? (
                  <div
                    className={cn(
                      "w-16 h-16 md:w-20 md:h-20 bg-foreground/5 rounded-md flex items-center justify-center p-1.5 md:p-2",
                      mottoSubtitle ? "row-span-2" : "row-span-1"
                    )}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt ?? `Logo for ${year}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div
                    className={cn(
                      "w-16 h-16 md:w-20 md:h-20 bg-foreground/5 rounded-md flex items-center justify-center",
                      mottoSubtitle ? "row-span-2" : "row-span-1"
                    )}
                  >
                    <span className="text-xs font-semibold text-foreground/60">
                      {year.slice(-2)}
                    </span>
                  </div>
                )}

                <h4 className="font-serif text-xl font-medium tracking-wide uppercase">
                  {motto}
                </h4>

                {mottoSubtitle && (
                  <p className="text-sm text-muted-foreground">
                    {mottoSubtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Soundtrack Artifact */}
            <div className="flex items-center gap-3 text-muted-foreground">
              <Headphones className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm">
                Soundtrack:{" "}
                {soundtrack.link ? (
                  <a
                    href={soundtrack.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    "{soundtrack.title}" — {soundtrack.artist}
                  </a>
                ) : (
                  <>
                    "{soundtrack.title}" — {soundtrack.artist}
                  </>
                )}
              </span>
            </div>

            {/* Scripture Artifact */}
            <blockquote className="pt-4">
              <p className="font-serif text-lg md:text-xl italic text-muted-foreground leading-relaxed">
                "{scripture.text}"
              </p>
              <cite className="font-serif text-sm text-muted-foreground/60 not-italic mt-3 block">
                {scripture.reference}
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
