import { ArchiveEntry } from "./ArchiveEntry";

const archiveData = [
  {
    year: "2025",
    motto: "Metamorphosis",
    mottoSubtitle: "A year of transformation",
    soundtrack: {
      title: "Oceans",
      artist: "Hillsong United",
    },
    scripture: {
      text: "Whatever you do, work at it with all your heart, as working for the Lord.",
      reference: "Colossians 3:23",
    },
    accentClass: "text-primary",
  },
  {
    year: "2023-2024",
    motto: "Wander into Wonders",
    mottoSubtitle: "Exploring the unknown with faith",
    soundtrack: {
      title: "Oceans (Where Feet May Fail)",
      artist: "Hillsong United",
    },
    scripture: {
      text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you.",
      reference: "Jeremiah 29:11",
    },
    accentClass: "text-year-2024",
  }
];

export function PersonalArchive() {
  return (
    <section className="py-12 md:py-16">
      <div className="space-y-2 mb-10">
        <h3 className="text-xl font-semibold">Personal Archive</h3>
        <p className="text-sm text-muted-foreground/70">
          Annual markers that quietly shape my work and life.
        </p>
      </div>

      <div className="border-t border-border/50">
        {archiveData.map((entry) => (
          <ArchiveEntry
            key={entry.year}
            year={entry.year}
            motto={entry.motto}
            mottoSubtitle={entry.mottoSubtitle}
            soundtrack={entry.soundtrack}
            scripture={entry.scripture}
            accentClass={entry.accentClass}
          />
        ))}
      </div>
    </section>
  );
}
