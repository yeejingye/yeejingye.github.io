import { useMemo } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { LibraryRow } from "@/components/library/LibraryRow";
import { libraryItems } from "@/utils/library";

const Library = () => {
  const { books, films } = useMemo(() => {
    const toYearNumber = (value?: string) => {
      if (!value) return -1;
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : -1;
    };

    const books = libraryItems
      .filter((item) => item.kind === "book")
      .slice()
      .sort((a, b) => {
        if (a.status === "Reading" && b.status !== "Reading") return -1;
        if (b.status === "Reading" && a.status !== "Reading") return 1;

        const ay = toYearNumber(a.consumedYear ?? a.publishedYear);
        const by = toYearNumber(b.consumedYear ?? b.publishedYear);
        return by - ay;
      });

    const films = libraryItems
      .filter((item) => item.kind === "film")
      .slice()
      .sort((a, b) => {
        if (a.status === "Watching" && b.status !== "Watching") return -1;
        if (b.status === "Watching" && a.status !== "Watching") return 1;

        const ay = toYearNumber(a.consumedYear ?? a.publishedYear);
        const by = toYearNumber(b.consumedYear ?? b.publishedYear);
        return by - ay;
      });

    return { books, films };
  }, []);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-2xl space-y-4">
            <h1 className="animate-fade-up motion-reduce:animate-none">Library</h1>
            <p
              className="text-lg text-muted-foreground animate-fade-up motion-reduce:animate-none"
              style={{ animationDelay: "100ms" }}
            >
              A small, curated list of books and films that impacted my thinking and worldview.
            </p>
          </div>
        </div>
      </section>

      {/* List */}
      <section className="pb-20 md:pb-32">
        <div className="container-wide">
          <div className="space-y-1">
            <div className="py-2">
              <h2 className="text-lg font-semibold">Books</h2>
            </div>

            {books.map((item, index) => (
              <div
                key={item.id}
                className="animate-fade-up motion-reduce:animate-none"
                style={{ animationDelay: `${(index + 2) * 50}ms` }}
              >
                <LibraryRow item={item} />
              </div>
            ))}

            <div className="py-8">
              <h2 className="text-lg font-semibold">Films</h2>
            </div>

            {films.map((item, index) => (
              <div
                key={item.id}
                className="animate-fade-up motion-reduce:animate-none"
                style={{ animationDelay: `${(index + books.length + 2) * 50}ms` }}
              >
                <LibraryRow item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Library;
