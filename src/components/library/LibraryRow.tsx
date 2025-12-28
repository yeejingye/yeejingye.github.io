import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { LibraryItem } from "@/utils/library";

export function LibraryRow({ item }: { item: LibraryItem }) {
  const creator = item.kind === "book" ? item.author : item.director;
  const isCurrently =
    (item.kind === "book" && item.status === "Reading") ||
    (item.kind === "film" && item.status === "Watching");
  const currentLabel = item.kind === "book" ? "Currently reading" : "Currently watching";
  const consumedYear =
    item.status === "Finished" || item.status === "Watched" ? item.consumedYear : undefined;
  const imageAlt = item.kind === "book" ? `Cover of ${item.title}` : `Poster for ${item.title}`;

  return (
    <div className="py-5 border-b border-border/50 -mx-4 px-4 transition-colors hover:bg-secondary/30">
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
        <span className="text-sm text-muted-foreground font-medium w-16 flex-shrink-0">
          {consumedYear ?? ""}
        </span>

        {item.imageSrc ? (
          <div className="hidden sm:flex w-20 h-28 flex-shrink-0 items-center justify-center self-center md:self-center">
            <img
              src={item.imageSrc}
              alt={imageAlt}
              className="max-w-full max-h-full rounded-sm object-contain"
              loading="lazy"
              decoding="async"
              width={80}
              height={112}
            />
          </div>
        ) : (
          <div className="hidden sm:block w-20 h-28 flex-shrink-0" aria-hidden="true" />
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2">
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-primary transition-colors"
              >
                {item.title}
              </a>
            ) : (
              <h3 className="font-medium">{item.title}</h3>
            )}

            {item.link && (
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0 mt-1" aria-hidden="true" />
            )}

            {isCurrently && (
              <Badge
                variant="outline"
                className="ml-auto text-muted-foreground border-border/60 font-normal"
              >
                {currentLabel}
              </Badge>
            )}
          </div>

          <p className="text-sm text-muted-foreground mt-1">
            by {creator}
            {item.publishedYear ? (
              <span className="text-muted-foreground"> · Published {item.publishedYear}</span>
            ) : null}
          </p>

          {item.tags && item.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge
                  key={`${item.id}-${tag}`}
                  variant="outline"
                  className="text-muted-foreground border-border/60 font-normal"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {item.note && <p className="text-sm text-muted-foreground mt-3">{item.note}</p>}
        </div>
      </div>
    </div>
  );
}
