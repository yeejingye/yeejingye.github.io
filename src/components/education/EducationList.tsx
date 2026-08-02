import type { EducationItem } from "@/utils/education";
import { sortEducationLatestFirst } from "@/utils/education";
import { SchoolCard } from "./SchoolCard";

export function EducationList({ items }: { items: EducationItem[] }) {
  const sorted = sortEducationLatestFirst(items);

  return (
    <div className="space-y-4">
      {sorted.map((item) => (
        <SchoolCard key={item.id} item={item} />
      ))}
    </div>
  );
}
