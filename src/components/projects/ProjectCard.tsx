import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { resolveTechStackLogo, type TechStackItem } from "@/utils/techstack";

interface ProjectCardProps {
  title: string;
  icon?: ReactNode;
  description: string;
  problem: string;
  learning: string;
  techStack?: TechStackItem[];
  tags?: string[];
  link?: string;
  className?: string;
}

export function ProjectCard({
  title,
  icon,
  description,
  problem,
  learning,
  techStack = [],
  tags = [],
  link,
  className,
}: ProjectCardProps) {
  const Wrapper = link ? "a" : "div";
  const wrapperProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        "block p-6 md:p-8 rounded-lg border border-border/50 bg-card",
        "transition-all duration-200",
        link && "hover:shadow-elevated hover:-translate-y-0.5 cursor-pointer group",
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
            <h3 className="text-lg font-semibold leading-snug truncate">{title}</h3>
          </div>
          {link && (
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
          )}
        </div>

        <p className="text-muted-foreground">{description}</p>

        <div className="space-y-3 pt-2">
          <div>
            <span className="text-xs font-medium text-muted-foreground/70 uppercase tracking-wide">
              Problem
            </span>
            <p className="text-sm text-muted-foreground mt-1">{problem}</p>
          </div>
          <div>
            <span className="text-xs font-medium text-muted-foreground/70 uppercase tracking-wide">
              Learning
            </span>
            <p className="text-sm text-muted-foreground mt-1">{learning}</p>
          </div>

          {techStack.length > 0 && (
            <div>
              <span className="text-xs font-medium text-muted-foreground/70 uppercase tracking-wide">
                Tech stack
              </span>
              <div
                className="mt-2 -mx-1 px-1 overflow-x-auto"
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
                        className="h-6 w-auto max-w-none object-contain opacity-80 transition-opacity duration-200 hover:opacity-100"
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
                        className="flex items-center"
                        aria-label={`${item.name} (opens in new tab)`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={item.name} className="flex items-center">
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
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
      </div>
    </Wrapper>
  );
}
