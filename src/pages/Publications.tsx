import { PageLayout } from "@/components/layout/PageLayout";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ExternalLink, Filter } from "lucide-react";
import { useMemo, useState } from "react";

type PublicationType = "Journal" | "Proceedings";

type Publication = {
  year: string;
  title: string;
  publicationType: PublicationType;
  venue: string;
  note?: string;
  link: string;
  tags: string[];
};

const publications: Publication[] = [
  {
    year: "2025",
    title: "Real-time object detection and localization for airport aprons",
    publicationType: "Proceedings",
    venue: "Seventeenth International Conference on Digital Image Processing (ICDIP 2025)",
    note: "B. Wani, J. Yee, D. Eckertz, T. Seidenberg, R. Dumitrescu",
    link: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13709/137091Y/Real-time-object-detection-and-localization-for-airport-aprons/10.1117/12.3072877.full",
    tags: ["Computer Vision", "Object Detection", "Object Localisation"],
  },
  {
    year: "2025",
    title: "Locally hosted conversational process mining for production data via graph-based retrieval-augmented generation (GraphRAG)",
    publicationType: "Journal",
    venue: "Journal of Mechanical Engineering (JMechE)",
    note: "S. Wu, C.Y. Low, J. Yee, T. Schmieg, Y.H.P. Manurung",
    link: "https://ir.uitm.edu.my/id/eprint/126913/1/126913.pdf",
    tags: ["Process Mining", "RAG", "LLM"],
  },
  {
    year: "2025",
    title: "Quantifying spasticity: developing a data-driven approach through the modified Ashworth scale and simulated spasticity model",
    publicationType: "Journal",
    venue: "Journal of Mechanical Engineering (JMechE)",
    note: "N.A. Othman, N.A. Che Zakaria, K. Johar, F.A. Hanapiah, N. Mohamad Hashim, C.Y. Low, J. Yee",
    link: "https://ir.uitm.edu.my/id/eprint/110093/1/110093.pdf",
    tags: ["Spasticity", "Rehabilitation", "Machine Learning"],
  },
  {
    year: "2024",
    title: "Advancements in Spasticity Management: A Design Framework with PID Integration for Upper Limb Spasticity Training Device (ULSTraD)",
    publicationType: "Proceedings",
    venue: "2024 2nd International Conference on Mechatronics, Control and Robotics (ICMCR)",
    note: "N.A. Othman, N.A. Che Zakaria, C.Y. Low, N. Mohamad Hashim, K. Johar, M.A. Mohd Zohadi, J. Yee, F.A. Hanapiah",
    link: "https://ieeexplore.ieee.org/iel7/10481806/10481837/10481838.pdf",
    tags: ["Spasticity", "Rehabilitation", "Control"],
  },
  {
    year: "2024",
    title: "ULSMeD: Assisted Measurement Device for Quantitative Evaluation of Upper Limb Spasticity",
    publicationType: "Proceedings",
    venue: "2024 2nd International Conference on Mechatronics, Control and Robotics (ICMCR)",
    note: "K. Johar, N.A. Che Zakaria, W.N. Wan Zakaria, N.A. Othman, C.Y. Low, J. Yee, N. Mohamad Hashim, F.A. Hanapiah",
    link: "https://ieeexplore.ieee.org/iel7/10481806/10481837/10481865.pdf",
    tags: ["Spasticity", "Rehabilitation", "Mechatronics"],
  },
  {
    year: "2023",
    title: "Clinical Spasticity Assessment Assisted by Machine Learning Methods and Rule-Based Decision",
    publicationType: "Journal",
    venue: "Diagnostics",
    note: "J. Yee, C.Y. Low, N. Mohamad Hashim, N.A. Che Zakaria, K. Johar, N.A. Othman, H.H. Chieng, F.A. Hanapiah",
    link: "https://www.mdpi.com/2075-4418/13/4/739",
    tags: ["Spasticity", "Machine Learning"],
  },
  {
    year: "2022",
    title: "Quantifying the performance of wireless data acquisition system to assess upper limb spasticity",
    publicationType: "Proceedings",
    venue: "2022 IEEE 5th International Symposium in Robotics and Manufacturing Automation (ROMA)",
    note: "N.A. Othman, N.A. Che Zakaria, F.A. Hanapiah, N. Mohamad Hashim, K. Johar, C.Y. Low, J. Yee",
    link: "https://ieeexplore.ieee.org/abstract/document/9915667/",
    tags: ["Spasticity", "Mechatronics"],
  },
  {
    year: "2022",
    title: "Velocity-Dependent Analysis During Spasticity Assessment",
    publicationType: "Proceedings",
    venue: "2022 IEEE 5th International Symposium in Robotics and Manufacturing Automation (ROMA)",
    note: "K. Johar, N.A. Che Zakaria, F.A. Hanapiah, N. Mohamad Hashim, N.A. Othman, C.Y. Low, J. Yee",
    link: "https://ieeexplore.ieee.org/abstract/document/9915672/",
    tags: ["Spasticity"],
  },
  {
    year: "2022",
    title: "User Interface Design for Upper Limb Spasticity Smart Diagnosis System",
    publicationType: "Proceedings",
    venue: "Proceedings of the 11th International Conference on Robotics, Vision, Signal Processing and Power Applications: Enhancing Research and Innovation through the Fourth Industrial Revolution",
    note: "Z.Y. Hoe, C.Y. Low, J. Yee, C.T. Koh, N. Mohamad Hashim, F.A. Hanapiah, N.A. Che Zakaria, K. Johar, N.A. Othman",
    link: "https://link.springer.com/chapter/10.1007/978-981-16-8129-5_120",
    tags: ["Spasticity", "Human-Machine Interface"],
  },
  {
    year: "2021",
    title: "Elucidating Factors Influencing Machine Learning Algorithm Prediction in Spasticity Assessment: A Prospective Cross Sectional Observational Study",
    publicationType: "Journal",
    venue: "Movement Disorders",
    note: "N. Mohamad Hashim, J. Yee, N.A. Othman, K. Johar, C.Y. Low, F.A. Hanapiah, N.A. Che Zakaria",
    link: "https://www.researchgate.net/profile/Armando-Armas-Salazar-2/publication/366385878_Role_of_the_Stereotactic_Dentatotomy_for_the_management_of_Movement_Disorders/links/639e125f095a6a7774396063/Role-of-the-Stereotactic-Dentatotomy-for-the-management-of-Movement-Disorders.pdf",
    tags: ["Spasticity", "Machine Learning"],
  },
  {
    year: "2021",
    title: "Systematic development of machine for abnormal muscle activity detection",
    publicationType: "Proceedings",
    venue: "2021 IEEE 17th International Conference on Automation Science and Engineering (CASE)",
    note: "J. Yee, C.Y. Low, N. Mohamad Hashim, F.A. Hanapiah, C.T. Koh, N.A. Che Zakaria, K. Johar, N.A. Othman",
    link: "https://ieeexplore.ieee.org/iel7/9551387/9551265/09551525.pdf",
    tags: ["Spasticity", "Machine Learning"],
  },
  {
    year: "2021",
    title: "Data-Driven Model for Upper Limb Spasticity Detection",
    publicationType: "Journal",
    venue: "International Journal of Integrated Engineering",
    note: "J. Yee, C.Y. Low, N. Mohamad Hashim, F.A. Hanapiah, W.S. Soh, N.A. Che Zakaria, M.N. Nemah, L. Asmar, M. Rabe, S. von Enzberg, R. Dumitrescu",
    link: "https://penerbit.uthm.edu.my/ojs/index.php/ijie/article/download/3800/4211",
    tags: ["Spasticity", "Machine Learning"],
  },
  {
    year: "2020",
    title: "Verification of Mathematical Model for Upper Limb Spasticity with Clinical Data",
    publicationType: "Proceedings",
    venue: "IOP Conference Series: Materials Science and Engineering",
    note: "J. Yee, C.Y. Low, P. Ong, W.S. Soh, F.A. Hanapiah, N.A. Che Zakaria, S. von Enzberg, L. Asmar, R.s Dumitrescu",
    link: "https://iopscience.iop.org/article/10.1088/1757-899X/824/1/012013/pdf",
    tags: ["Spasticity", "Modelling"],
  },
  {
    year: "2020",
    title: "Data science platform for smart diagnosis of upper limb spasticity",
    publicationType: "Proceedings",
    venue: "Procedia Manufacturing",
    note: "J. Yee, C.Y. Low, C.T. Koh, S. von Enzberg, M. Rabe, A. Wegel, L. Asmar, F.A. Hanapiah, N. Mohamad Hashim, N.A. Che Zakaria",
    link: "https://www.sciencedirect.com/science/article/pii/S2351978920321855/pdf?md5=877e77f624a0120cac4d2f07851deb5b&pid=1-s2.0-S2351978920321855-main.pdf",
    tags: ["Spasticity", "Machine Learning", "Human-Machine Interface"],
  },
  {
    year: "2018",
    title: "PLC System to Optimize Training Device of Upper Limb Spasticity",
    publicationType: "Journal",
    venue: "Journal of Mechanical Engineering (JMechE)",
    note: "N.A. Othman, N.A. Che Zakaria, M.H. Mohd Ramli, F.A. Hanapiah, J. Yee, C.Y. Low, K. Takashi",
    link: "https://ir.uitm.edu.my/id/eprint/36333/1/36333.pdf",
    tags: ["Rehabilitation", "Control"],
  },
  {
    year: "2018",
    title: "Framework for the agile development of innovative Product-Service-Systems for existing physical rehabilitation systems",
    publicationType: "Proceedings",
    venue: "Procedia Manufacturing",
    note: "L. Asmar, M. Rabe, C.Y. Low, J. Yee, A. Kühn, R. Dumitrescu",
    link: "https://www.sciencedirect.com/science/article/pii/S2351978918305663/pdf?md5=ae79dd863ee765b2411f03c65ff96942&pid=1-s2.0-S2351978918305663-main.pdf",
    tags: ["Industry 4.0", "Product-Service Systems"],
  },
  {
    year: "2017",
    title: "Modelling and Control of Robotic Leg as Assistive Device",
    publicationType: "Proceedings",
    venue: "Journal of Physics: Conference Series",
    note: "J. Yee, B.A. Md Zain",
    link: "https://iopscience.iop.org/article/10.1088/1742-6596/914/1/012042/pdf",
    tags: ["Robotics", "Control"],
  },
  {
    year: "2017",
    title: "System-level design of a cloud-based training device for upper limb spasticity rehabilitation",
    publicationType: "Proceedings",
    venue: "2017 IEEE 3rd International Symposium on Robotics and Manufacturing Automation (ROMA)",
    note: "J. Yee, C.Y. Low, F.A. Hanapiah, N.A. Che Zakaria, U. Mohammad, R. Abd Rahman",
    link: "https://ieeexplore.ieee.org/abstract/document/8231732/",
    tags: ["Rehabilitation", "Cloud", "Spasticity", "System Engineering"],
  },
  {
    year: "2017",
    title: "Specification of principle solution for a smart factory exemplified by active structure",
    publicationType: "Proceedings",
    venue: "2017 IEEE 3rd International Symposium on Robotics and Manufacturing Automation (ROMA)",
    note: "U. Mohammad, C.Y. Low, J. Yee, R. Abd Rahman",
    link: "https://ieeexplore.ieee.org/abstract/document/8231731/",
    tags: ["Industry 4.0", "System Engineering"],
  },
];

const talks = [
  {
    year: "2024",
    title: "Industrie 4.0 & Digital Transformation",
    venue: "Innovation Lab, Universiti Tun Hussein Onn Malaysia",
    note: "Guest Lecture",
  },
];

const Publications = () => {
  const [afterYear, setAfterYear] = useState<string>("any");
  const [selectedTypes, setSelectedTypes] = useState<PublicationType[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const years = useMemo(() => {
    const uniqueYears = new Set(publications.map((pub) => pub.year));
    return Array.from(uniqueYears).sort((a, b) => Number(b) - Number(a));
  }, []);

  const tags = useMemo(() => {
    const uniqueTags = new Set(publications.flatMap((pub) => pub.tags));
    return Array.from(uniqueTags).sort((a, b) => a.localeCompare(b));
  }, []);

  const publicationTypes = useMemo(() => {
    const uniqueTypes = new Set(publications.map((pub) => pub.publicationType));
    const order: PublicationType[] = ["Journal", "Proceedings"];
    return order.filter((t) => uniqueTypes.has(t));
  }, []);

  const filteredPublications = useMemo(() => {
    const afterYearNumber = afterYear === "any" ? null : Number(afterYear);
    return publications.filter((pub) => {
      const yearMatch = afterYearNumber === null || Number(pub.year) >= afterYearNumber;
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(pub.publicationType);
      const tagMatch =
        selectedTags.length === 0 || selectedTags.some((tag) => pub.tags.includes(tag));
      return yearMatch && typeMatch && tagMatch;
    });
  }, [afterYear, selectedTags, selectedTypes]);

  const hasActiveFilters = afterYear !== "any" || selectedTypes.length > 0 || selectedTags.length > 0;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-2xl space-y-4">
            <h1 className="animate-fade-up">Publications & Lectures</h1>
            <p 
              className="text-lg text-muted-foreground animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Written and spoken contributions to the broader conversation. 
              Ideas shared with the hope they'll be useful to others.
            </p>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">Publications</h2>
              <p className="text-sm text-muted-foreground">
                Showing {filteredPublications.length} of {publications.length}
              </p>
            </div>

            <TooltipProvider>
              <Popover>
                <Tooltip>
                  <PopoverTrigger asChild>
                    <TooltipTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className={hasActiveFilters ? "bg-secondary/40" : undefined}
                        aria-label="Open publication filters"
                      >
                        <Filter className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                  </PopoverTrigger>
                  <TooltipContent>Filter</TooltipContent>
                </Tooltip>

                <PopoverContent align="end" className="w-[22rem]">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-medium">Filters</p>
                      {hasActiveFilters && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setAfterYear("any");
                            setSelectedTypes([]);
                            setSelectedTags([]);
                          }}
                        >
                          Clear
                        </Button>
                      )}
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">Year</p>
                      <Select value={afterYear} onValueChange={setAfterYear}>
                        <SelectTrigger aria-label="Filter publications after year">
                          <SelectValue placeholder="After year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any year</SelectItem>
                          {years.map((year) => (
                            <SelectItem key={year} value={year}>
                              After {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">Type</p>
                      <ToggleGroup
                        type="multiple"
                        value={selectedTypes}
                        onValueChange={(next) => setSelectedTypes(next as PublicationType[])}
                        variant="outline"
                        size="sm"
                        className="flex flex-wrap justify-start gap-2"
                        aria-label="Filter publications by type"
                      >
                        {publicationTypes.map((t) => (
                          <ToggleGroupItem key={t} value={t} aria-label={`Type: ${t}`}>
                            {t}
                          </ToggleGroupItem>
                        ))}
                      </ToggleGroup>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">Tags</p>
                      <ToggleGroup
                        type="multiple"
                        value={selectedTags}
                        onValueChange={setSelectedTags}
                        variant="outline"
                        size="sm"
                        className="flex flex-wrap justify-start gap-2"
                        aria-label="Filter publications by tag"
                      >
                        {tags.map((tag) => (
                          <ToggleGroupItem key={tag} value={tag} aria-label={`Tag: ${tag}`}>
                            {tag}
                          </ToggleGroupItem>
                        ))}
                      </ToggleGroup>
                      <p className="text-xs text-muted-foreground">Matches any selected tag.</p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </TooltipProvider>
          </div>
          
          <div className="space-y-1">
            {filteredPublications.map((pub, index) => (
              <a
                key={pub.title}
                href={pub.link}
                className="block py-5 border-b border-border/50 hover:bg-secondary/30 -mx-4 px-4 transition-colors group animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 50}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                  <span className="text-sm text-muted-foreground font-medium w-16 flex-shrink-0">
                    {pub.year}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2">
                      <h3 className="font-medium group-hover:text-primary transition-colors">
                        {pub.title}
                      </h3>
                      <ExternalLink className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <p className="text-sm text-muted-foreground">{pub.venue}</p>
                      <Badge
                        variant="outline"
                        className="text-muted-foreground border-border/60 font-normal"
                      >
                        {pub.publicationType}
                      </Badge>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {pub.tags.map((tag) => (
                        <Badge
                          key={`${pub.title}-${tag}`}
                          variant="outline"
                          className="text-muted-foreground border-border/60 font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {pub.note && (
                      <p className="text-xs text-primary mt-2 font-medium">
                        {pub.note}
                      </p>
                    )}
                  </div>
                </div>
              </a>
            ))}

            {filteredPublications.length === 0 && (
              <div className="py-10 text-sm text-muted-foreground">
                No publications match the current filters.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Talks */}
      <section className="pb-20 md:pb-32">
        <div className="container-wide">
          <h2 className="text-lg font-semibold mb-8">Lectures & Presentations</h2>
          
          <div className="space-y-1">
            {talks.map((talk, index) => (
              <div
                key={talk.title}
                className="py-5 border-b border-border/50 animate-fade-up"
                style={{ animationDelay: `${(index + publications.length + 2) * 50}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                  <span className="text-sm text-muted-foreground font-medium w-16 flex-shrink-0">
                    {talk.year}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium">{talk.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {talk.venue}
                    </p>
                    {talk.note && (
                      <p className="text-xs text-primary mt-2 font-medium">
                        {talk.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Publications;
