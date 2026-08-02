import { ArrowUpRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { useId, useMemo, useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { resolveTechStackLogo, type TechStackItem } from "@/utils/techstack";
import { resolvePartnerLogo, type PartnerItem } from "@/utils/partners";
import { resolveProjectImage, type ProjectImage } from "@/utils/projectImage";

interface ProjectCardProps {
  title: string;
  icon?: ReactNode;
  description: string;
  image?: ProjectImage;
  problem?: string;
  learning?: string;
  techStack?: TechStackItem[];
  partners?: PartnerItem[];
  tags?: string[];
  link?: string;
  className?: string;
}

export function ProjectCard({
  title,
  icon,
  description,
  image,
  problem,
  learning,
  techStack = [],
  partners = [],
  tags = [],
  link,
  className,
}: ProjectCardProps) {
  const reactId = useId();
  const safeId = useMemo(() => reactId.replace(/[^a-zA-Z0-9_-]/g, ""), [reactId]);
  const triggerId = `project-details-trigger-${safeId}`;
  const contentId = `project-details-content-${safeId}`;

  const hasDetails = Boolean(problem || learning || techStack.length > 0 || partners.length > 0);
  const [open, setOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imageSrc = resolveProjectImage(image?.file);

  return (
    <article
      className={cn(
        "group block p-6 md:p-8 rounded-lg border border-border/50 bg-card",
        "transition-shadow duration-200 hover:shadow-elevated",
        className
      )}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 min-w-0">
            {icon && (
              <span
                className="mt-0.5 flex-shrink-0 text-muted-foreground"
                aria-hidden="true"
              >
                {icon}
              </span>
            )}
            <h3 className="text-lg font-semibold leading-snug break-words">{title}</h3>
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`${title} (opens in new tab)`}
            >
              <ArrowUpRight className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
            </a>
          )}
        </div>

        {image && (
          <div className="pt-1">
            <AspectRatio
              ratio={16 / 9}
              className="rounded-md overflow-hidden border border-border/50 bg-muted"
            >
              {imageSrc && !imageError ? (
                <img
                  src={imageSrc}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center px-4 text-center">
                  <span className="text-xs text-muted-foreground">{image.alt}</span>
                </div>
              )}
            </AspectRatio>
          </div>
        )}

        <p className="text-muted-foreground">{description}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {hasDetails && (
          <Collapsible open={open} onOpenChange={setOpen}>
            <div className="pt-2">
              <CollapsibleTrigger asChild>
                <button
                  id={triggerId}
                  type="button"
                  aria-controls={contentId}
                  className={cn(
                    "inline-flex items-center gap-2 text-sm text-muted-foreground",
                    "transition-colors hover:text-foreground",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  )}
                >
                  <span>{open ? "Hide details" : "Details"}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200 motion-reduce:transition-none",
                      open && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent
              id={contentId}
              role="region"
              aria-labelledby={triggerId}
              className={cn(
                "overflow-hidden",
                "transition-opacity duration-200 motion-reduce:transition-none",
                "data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
                "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down motion-reduce:animate-none"
              )}
            >
              <div className="space-y-3 pt-4">
                {problem && (
                  <div>
                    <span className="text-xs font-medium text-muted-foreground/70 uppercase tracking-wide">
                      Problem
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">{problem}</p>
                  </div>
                )}

                {learning && (
                  <div>
                    <span className="text-xs font-medium text-muted-foreground/70 uppercase tracking-wide">
                      Learning
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">{learning}</p>
                  </div>
                )}

                {techStack.length > 0 && (
                  <div>
                    <span className="text-xs font-medium text-muted-foreground/70 uppercase tracking-wide">
                      Tech stack
                    </span>
                    <div
                      className="mt-2 -mx-1 px-1 overflow-x-auto snap-x snap-mandatory"
                      aria-label="Tech stack"
                    >
                      <div className="flex w-max items-center gap-4 pb-1">
                        {techStack.map((item) => {
                          const src = resolveTechStackLogo(item.logo);
                          const content = src ? (
                            <img
                              src={src}
                              alt={item.name}
                              title={item.name}
                              loading="lazy"
                              decoding="async"
                              className="h-6 w-auto max-w-none object-contain opacity-80 transition-opacity duration-200 hover:opacity-100 motion-reduce:transition-none"
                            />
                          ) : (
                            <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground whitespace-nowrap">
                              {item.name}
                            </span>
                          );

                          return item.href ? (
                            <a
                              key={item.name}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center snap-start"
                              aria-label={`${item.name} (opens in new tab)`}
                            >
                              {content}
                            </a>
                          ) : (
                            <div key={item.name} className="flex items-center snap-start">
                              {content}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {partners.length > 0 && (
                  <div>
                    <span className="text-xs font-medium text-muted-foreground/70 uppercase tracking-wide">
                      Partners
                    </span>
                    <div
                      className="mt-2 -mx-1 px-1 overflow-x-auto snap-x snap-mandatory"
                      aria-label="Project partners"
                    >
                      <div className="flex w-max items-center gap-4 pb-1">
                        {partners.map((item) => {
                          const src = resolvePartnerLogo(item.logo);
                          const content = src ? (
                            <img
                              src={src}
                              alt={item.name}
                              title={item.name}
                              loading="lazy"
                              decoding="async"
                              className="h-6 w-auto max-w-none object-contain opacity-80 transition-opacity duration-200 hover:opacity-100 motion-reduce:transition-none"
                            />
                          ) : (
                            <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground whitespace-nowrap">
                              {item.name}
                            </span>
                          );

                          return item.href ? (
                            <a
                              key={item.name}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center snap-start"
                              aria-label={`${item.name} (opens in new tab)`}
                            >
                              {content}
                            </a>
                          ) : (
                            <div key={item.name} className="flex items-center snap-start">
                              {content}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}
      </div>
    </article>
  );
}
