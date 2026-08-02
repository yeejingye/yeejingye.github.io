import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <PageLayout>
      <section className="py-24 md:py-32">
        <div className="container-prose space-y-8">
          <div className="space-y-4 animate-fade-up motion-reduce:animate-none">
            <p className="text-sm text-muted-foreground">404</p>
            <h1>This page doesn't exist</h1>
          </div>

          <p
            className="text-lg text-muted-foreground leading-relaxed animate-fade-up motion-reduce:animate-none"
            style={{ animationDelay: "100ms" }}
          >
            The page you're looking for may have moved, or the link may be incomplete.
          </p>

          <Button asChild variant="hero-outline" size="lg">
            <Link to="/">
              Return home
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
