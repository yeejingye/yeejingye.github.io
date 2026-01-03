import { ArchiveEntry } from "./ArchiveEntry";

const archiveData = [
  {
    year: "2026",
    motto: "Panim el Panim",
    mottoSubtitle: "Choosing presence without mediation",
    logo: {
      src: "/archive/2026_pep.png",
      alt: "Panim el Panim Logo",
    },
    soundtrack: {
      title: "Known By You",
      artist: "Gateway Worship",
      link: "https://open.spotify.com/track/0vOw510PyX1EIuRZwURX9H?si=e5281b283076411d",
    },
    scripture: {
      text: "The Lord would speak to Moses face to face, as one speaks to a friend. Then Moses would return to the camp, but his young aide Joshua son of Nun did not leave the tent.",
      reference: "Exodus 33:11",
    },
    accentClass: "text-primary",
  },
  {
    year: "2025",
    motto: "Metamorphose",
    mottoSubtitle: "A year of transformation",
    logo: {
      src: "/archive/2025_metamorphose.png",
      alt: "Metamorphose Logo",
    },
    soundtrack: {
      title: "New Wine",
      artist: "Hillsong Worship",
      link: "https://open.spotify.com/track/5OMpZa1m8amJy7ICItG1Sc?si=6dcf1ea4932c4db8",
    },
    scripture: {
      text: "Whatever you do, work at it with all your heart, as working for the Lord.",
      reference: "Colossians 3:23",
    },
    accentClass: "text-year-2024",
  },
  {
    year: "2023-2024",
    motto: "Wander into Wonder",
    mottoSubtitle: "Exploring the unknown with faith",
    logo: {
      src: "/archive/2023_wiw.png",
      alt: "Wander into Wonder Logo",
    },
    soundtrack: {
      title: "Oceans (Where Feet May Fail)",
      artist: "Hillsong UNITED",
      link: "https://open.spotify.com/track/0Bn1DSXfisvfKjGUwI6rzW?si=fb825e5022ad4c73",
    },
    scripture: {
      text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you.",
      reference: "Jeremiah 29:11",
    },
    accentClass: "text-year-2023",
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
            logo={entry.logo}
            soundtrack={entry.soundtrack}
            scripture={entry.scripture}
            accentClass={entry.accentClass}
          />
        ))}
      </div>
    </section>
  );
}
