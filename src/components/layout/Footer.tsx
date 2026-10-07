import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-12 md:py-16">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Yee Jingye
            </p>
            <p className="text-xs text-muted-foreground/70">
              © {currentYear}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy / Datenschutz</Link>
            <Link to="/legal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Impressum</Link>
            <Link
              to="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Connect
            </Link>
            <a
              href="https://linkedin.com/in/yeejingye"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yeejingye"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://scholar.google.com/citations?user=4MBA_rcAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Google Scholar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
