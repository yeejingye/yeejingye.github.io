import type { WorkItem } from "@/utils/work";
import { sortWorkLatestFirst } from "@/utils/work";
import { WorkCard } from "./WorkCard";

export function WorkList({ items }: { items: WorkItem[] }) {
  const sorted = sortWorkLatestFirst(items);

  return (
    <div className="space-y-4">
      {sorted.map((item) => (
        <WorkCard key={item.id} item={item} />
      ))}
    </div>
  );
}
