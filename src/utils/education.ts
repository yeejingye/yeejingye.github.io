export type EducationItem = {
  id: string;
  institution: string;
  degree: string;
  startYear?: number;
  endYear?: number;
  location?: string;
  logoSrc?: string;
  thesisTitle?: string;
  supervisor?: string;
  thesisLink?: {
    href: string;
    label?: string;
  };
};

export const education: EducationItem[] = [
  {
    id: "university",
    institution: "Universiti Tun Hussein Onn Malaysia",
    degree: "Doctor of Philosophy (PhD) in Mechanical Engineering",
    startYear: 2017,
    endYear: 2023,
    location: "Parit Raja, Malaysia",
    thesisTitle: "Clinically Compliant Smart Diagnosis System for Upper Limb Spasticity",
    supervisor: "Assoc. Prof. Ir. Dr.-Ing. Low Cheng Yee",
    // thesisLink: {
    //   href: "https://example.com",
    //   label: "Read thesis",
    // },
    logoSrc: "/education/uthm.png",
  },
  {
    id: "university",
    institution: "Heilbronn University of Applied Sciences",
    degree: "Master in Mechatronics and Robotics (Research Exchange Semester)",
    startYear: 2021,
    endYear: 2022,
    location: "Heilbronn, Germany",
    logoSrc: "/education/hhn.png",
  },
  {
    id: "university",
    institution: "Universiti Tun Hussein Onn Malaysia",
    degree: "Bachelor Degree in Mechanical Engineering with Honours",
    startYear: 2014,
    endYear: 2017,
    location: "Parit Raja, Malaysia",
    logoSrc: "/education/uthm.png",
  },
  {
    id: "university",
    institution: "Nagaoka University of Technology",
    degree: "Bachelor Degree in Mechanical Engineering (Research Exchange Semester)",
    startYear: 2016,
    endYear: 2016,
    location: "Nagaoka, Japan",
    logoSrc: "/education/nut.jpeg",
  },
  {
    id: "university",
    institution: "Universiti Tun Hussein Onn Malaysia",
    degree: "Diploma in Mechanical Engineering",
    startYear: 2011,
    endYear: 2014,
    location: "Parit Raja, Malaysia",
    logoSrc: "/education/uthm.png",
  },
];

export function sortEducationLatestFirst(items: EducationItem[]): EducationItem[] {
  return [...items].sort((a, b) => {
    const aEnd = a.endYear ?? a.startYear ?? 0;
    const bEnd = b.endYear ?? b.startYear ?? 0;

    if (bEnd !== aEnd) return bEnd - aEnd;

    const aStart = a.startYear ?? 0;
    const bStart = b.startYear ?? 0;

    if (bStart !== aStart) return bStart - aStart;

    return a.institution.localeCompare(b.institution);
  });
}
