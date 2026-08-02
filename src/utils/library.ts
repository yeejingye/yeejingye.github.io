export type LibraryItemKind = "book" | "film";

export type BookStatus = "Reading" | "Finished";
export type FilmStatus = "Watching" | "Watched";

type BaseLibraryItem = {
  id: string;
  title: string;
  publishedYear?: string;
  consumedYear?: string;
  note?: string;
  tags?: string[];
  link?: string;
  imageSrc?: string;
};

export type BookItem = BaseLibraryItem & {
  kind: "book";
  author: string;
  status?: BookStatus;
};

export type FilmItem = BaseLibraryItem & {
  kind: "film";
  director: string;
  status?: FilmStatus;
};

export type LibraryItem = BookItem | FilmItem;

export const libraryItems: LibraryItem[] = [
  {
    id: "michael-j-sandels-justice-whats-the-right-thing-to-do",
    kind: "book",
    title: "Justice: What's the Right Thing to Do?",
    author: "Michael J. Sandels",
    publishedYear: "2009",
    consumedYear: "2025",
    status: "Finished",
    imageSrc: "/library/justice.jpg",
    tags: ["Justice", "Morality"],
    note: "An exploration of moral and political philosophy that challenges readers to think critically about our own concept of justice, equality, and morality.",
    // link: "https://www.basicbooks.com/titles/don-norman/the-design-of-everyday-things/9780465050659/",
  },
  {
    id: "jonathan-haidt-the-anxious-generation",
    kind: "book",
    title: "The Anxious Generation",
    author: "Jonathan Haidt",
    publishedYear: "2024",
    consumedYear: "2025",
    status: "Finished",
    imageSrc: "/library/the-anxious-generation.jpg",
    tags: ["Philosophy", "Critique of Technology"],
    note: "A compelling critique of how modern technology and social media shape the mental health and worldview of today's youth, leading to my own reflection of digital habits.",
  },
  {
    id: "amanda-lisetti-generations-reimagined",
    kind: "book",
    title: "Generations Reimagined",
    author: "Amanda Lisetti",
    publishedYear: "2023",
    consumedYear: "2023",
    status: "Finished",
    imageSrc: "/library/generations-reimagined.jpg",
    tags: ["Generational Studies", "Technology", "Society"],
    note: "An insightful examination of how different generations are shaped by untold stories and defining moments, unravelling the very fabric of our societal evolution.",
  },
  {
    id: "danny-silk-culture-of-honor",
    kind: "book",
    title: "Culture of Honor: Sustaining a Supernatural Environment",
    author: "Danny Silk",
    publishedYear: "2009",
    consumedYear: "2019",
    status: "Finished",
    imageSrc: "/library/culture-of-honor.jpeg",
    tags: ["Relationships", "Community", "Christian Living"],
    note: "A transformative book on building healthy relationships and communities based on honour, respect, and love, which has deeply influenced my approach to interpersonal dynamics.",
  },
  {
    id: "danny-silk-keep-your-love-on",
    kind: "book",
    title: "Keep Your Love On",
    author: "Danny Silk",
    publishedYear: "2013",
    consumedYear: "2018",
    status: "Finished",
    imageSrc: "/library/keep-your-love-on.jpg",
    tags: ["Relationships", "Love", "Christian Living"],
    note: "A practical guide on maintaining love and connection in relationships, emphasising the importance of intentionality and communication.",
  },
  {
    id: "ooi-kee-beng-the-reluctant-politician",
    kind: "book",
    title: "The Reluctant Politician: Tun Dr. Ismail and His Time",
    author: "Ooi Kee Beng",
    publishedYear: "2007",
    consumedYear: "2015",
    status: "Finished",
    imageSrc: "/library/the-reluctant-politician.jpg",
    tags: ["Politics", "Biography", "Malaysian History"],
    note: "A detailed biography of Tun Dr. Ismail, offering me insights into Malaysian political history and leadership during a transformative period.",
  },
  {
    id: "c-s-lewis-mere-christianity",
    kind: "book",
    title: "Mere Christianity",
    author: "C.S. Lewis",
    publishedYear: "1952",
    consumedYear: "2012",
    status: "Finished",
    imageSrc: "/library/mere-christianity.jpg",
    tags: ["Christianity", "Faith", "Philosophy", "Apologetics"],
    note: "A classic work of Christian apologetics that presents a rational case for the Christian faith, deeply influencing my understanding of morality, ethics, and spirituality.",
  },
  {
    id: "lee-strobel-the-case-for-christ",
    kind: "book",
    title: "The Case for Christ",
    author: "Lee Strobel",
    publishedYear: "1998",
    consumedYear: "2011",
    status: "Finished",
    imageSrc: "/library/the-case-for-christ.jpg",
    tags: ["Christianity", "Faith", "Journalism", "Apologetics"],
    note: "A journalistic investigation into the historical evidence for Jesus Christ, which played a significant role in my own faith journey and understanding of Christianity.",
  },
  {
    id: "the-bible",
    kind: "book",
    title: "The Bible",
    author: "Multiple Authors",
    // publishedYear: "2024",
    consumedYear: "2013",
    status: "Finished",
    imageSrc: "/library/bible.png",
    tags: ["History", "Philosophy", "Life Principles", "Wisdom", "Faith"],
    note: "The Bible has profoundly influenced my worldview, ethics, and understanding of human nature, with its main commandment to 'love God and love your neighbor as yourself'.",
  },
  {
    id: "brian-baugh-to-save-a-life",
    kind: "film",
    title: "To Save a Life",
    director: "Brian Baugh",
    publishedYear: "2009",
    consumedYear: "2010",
    status: "Watched",
    imageSrc: "/library/to-save-a-life.jpeg",
    tags: ["Drama", "Faith", "Youth"],
    note: "A faith-based drama that explores themes of friendship, redemption, and the impact of choices, which encouraged me to reflect on my own life and relationships.",
    // link: "https://www.imdb.com/title/tt1270286",
  },
  {
    id: "the-wachowskis-the-matrix-revolutions",
    kind: "film",
    title: "The Matrix Revolutions",
    director: "The Wachowskis",
    publishedYear: "2003",
    consumedYear: "2008",
    status: "Watched",
    imageSrc: "/library/the-matrix-revolutions.png",
    tags: ["Sci-Fi", "Technology", "Brain in the Vat"],
    note: "A philosophical sci-fi film that explores themes of reality, consciousness, and human agency in a technologically dominated world.",
    // link: "https://www.imdb.com/title/tt0242653",
  },
  {
    id: "jim-hanon-end-of-the-spear",
    kind: "film",
    title: "End of the Spear",
    director: "Jim Hanon",
    publishedYear: "2005",
    consumedYear: "2008",
    status: "Watched",
    imageSrc: "/library/end-of-the-spear.jpg",
    tags: ["Historical", "Biography", "Faith"],
    note: "A biographical adventure drama that tells the story of missionaries in Ecuador and their impact on indigenous tribes, teaching me more about selfless and sacrificial love.",
    // link: "https://www.imdb.com/title/tt0399862",
  },
];
