export type WorkItem = {
  id: string;
  company: string;
  role: string;
  startYear?: number;
  endYear?: number;
  location?: string;
  logoSrc?: string;
  highlights?: string[];
  link?: {
    href: string;
    label?: string;
  };
};

export const work: WorkItem[] = [
  {
    id: "role-4",
    company: "Fraunhofer Institute for Mechatronics System Design IEM",
    role: "Postdoctoral Researcher",
    startYear: 2023,
    location: "Paderborn, Germany",
    highlights: [
      "Innovation Transfer & Incubation, Advanced Systems Engineering.",
    ],
    logoSrc: "/work/fraunhofer.jpg",
    link: { href: "https://www.iem.fraunhofer.de/en.html", label: "Fraunhofer IEM Website" },
  },
  {
    id: "role-3",
    company: "Universiti Tun Hussein Onn Malaysia",
    role: "Postgraduate Research Assistant",
    startYear: 2017,
    endYear: 2022,
    location: "Parit Raja, Malaysia",
    highlights: [
      "Development of smart diagnosis system for upper limb spasticity using machine learning techniques.",
    ],
    logoSrc: "/work/uthm.png",
    link: { href: "https://www.uthm.edu.my/en/", label: "UTHM Website" },
  },
  {
    id: "role-2",
    company: "Nagaoka University of Technology",
    role: "Research Intern",
    startYear: 2016,
    endYear: 2016,
    location: "Nagaoka, Japan",
    highlights: [
      "Utilising Particle Imaging Velocimetry method to validate the CFD simulation.",
    ],
    logoSrc: "/work/nut.jpeg",
    link: { href: "https://www.nagaokaut.ac.jp/e/index.html", label: "Nagaoka University of Technology Website" },
  },
  {
    id: "role-1",
    company: "Mega Labels & Sticker",
    role: "Industrial Intern",
    startYear: 2013,
    endYear: 2013,
    location: "Sri Gading, Malaysia",
    highlights: [
      "Assist in monitoring and managing labels & sticker production processes.",
    ],
    logoSrc: "/work/megalb.png",
    link: { href: "https://www.megalb.com/", label: "Mega Label Website" },
  },
];

export function sortWorkLatestFirst(items: WorkItem[]): WorkItem[] {
  return [...items].sort((a, b) => {
    const aEnd = a.endYear ?? a.startYear ?? 0;
    const bEnd = b.endYear ?? b.startYear ?? 0;

    if (bEnd !== aEnd) return bEnd - aEnd;

    const aStart = a.startYear ?? 0;
    const bStart = b.startYear ?? 0;

    if (bStart !== aStart) return bStart - aStart;

    return a.company.localeCompare(b.company);
  });
}
