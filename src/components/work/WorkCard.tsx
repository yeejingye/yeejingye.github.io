import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { WorkItem } from "@/utils/work";

function getInitials(name: string): string {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";

  return (first + last).toUpperCase();
}

function formatYears(item: WorkItem): string | null {
  const { startYear, endYear } = item;

  if (startYear && endYear) return `${startYear}–${endYear}`;
  if (startYear && !endYear) return `${startYear}–Present`;
  if (!startYear && endYear) return `Until ${endYear}`;

  return null;
}

export function WorkCard({ item, className }: { item: WorkItem; className?: string }) {
  const years = formatYears(item);
  const showMeta = Boolean(years || item.location);

  return (
    <Card className={cn("card-hover", className)}>
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div
            className="h-12 w-12 shrink-0 rounded-md border border-border/60 bg-muted/20 flex items-center justify-center overflow-hidden p-2"
            aria-hidden
          >
            {item.logoSrc ? (
              <img
                src={item.logoSrc}
                alt=""
                className="h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <span className="text-xs font-semibold tracking-wide text-muted-foreground">
                {getInitials(item.company)}
              </span>
            )}
          </div>

          <div className="min-w-0 flex-1 space-y-2">
            <div className="space-y-0.5">
              <h3 className="text-base font-semibold leading-snug truncate">{item.company}</h3>
              <p className="text-sm text-muted-foreground leading-snug">{item.role}</p>
            </div>

            {showMeta ? (
              <div className="text-sm text-muted-foreground/80 leading-snug">
                <span className="inline-flex flex-wrap gap-x-2 gap-y-0.5">
                  {years ? <span>{years}</span> : null}
                  {years && item.location ? <span aria-hidden>·</span> : null}
                  {item.location ? <span>{item.location}</span> : null}
                </span>
              </div>
            ) : null}

            {item.highlights && item.highlights.length ? (
              <div className="pt-1 space-y-1">
                {item.highlights.slice(0, 3).map((line, index) => (
                  <p key={index} className="text-sm text-muted-foreground leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            ) : null}

            {item.link ? (
              <a
                className="text-sm text-primary link-underline"
                href={item.link.href}
                target="_blank"
                rel="noreferrer"
              >
                {item.link.label ?? "Link"}
              </a>
            ) : null}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
