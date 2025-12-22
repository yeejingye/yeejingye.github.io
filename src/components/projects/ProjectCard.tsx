import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  problem: string;
  learning: string;
  tags?: string[];
  link?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  problem,
  learning,
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
          <h3 className="text-lg font-semibold">{title}</h3>
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
