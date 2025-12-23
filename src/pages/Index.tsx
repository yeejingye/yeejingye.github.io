import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [heroImageSrc, setHeroImageSrc] = useState<string>("/profile.png");

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[calc(100vh-5rem)] flex items-center bg-secondary/30">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        </div>

        <div className="container-wide py-20 md:py-32 relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Portrait */}
            <div className="lg:col-span-5 animate-fade-up motion-reduce:animate-none">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted/30">
                <img
                  src={heroImageSrc}
                  onError={() => setHeroImageSrc("/placeholder.svg")}
                  alt="Portrait"
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            {/* Intro */}
            <div
              className="lg:col-span-7 space-y-6 animate-fade-up motion-reduce:animate-none"
              style={{ animationDelay: "100ms" }}
            >
              {/* <p className="text-sm text-muted-foreground tracking-wide">
                Postdoctoral Researcher
              </p> */}

              <h1 className="tracking-tight">
                Yee Jingye, Ph.D.
                <br />
                <span className="text-muted-foreground text-4xl">Postdoctoral Researcher</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                Applied AI · Mechatronics · Engineering
              </p>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row gap-4 pt-2"
                style={{ animationDelay: "200ms" }}
              >
                <Button asChild variant="hero" size="lg">
                  <Link to="/about">
                    About Me
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="hero-outline" size="lg">
                  <Link to="/projects">My Work</Link>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground max-w-2xl">
                Bridging the interface of physical systems and artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-20 md:py-32 border-t border-border/50">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="text-muted-foreground font-normal mb-6">
                What drives me
              </h2>
              <p className="text-lg leading-relaxed">
                I believe the best work emerges from the intersection of deep thinking and genuine care. 
                My research is shaped by a commitment to clarity, an appreciation for complexity, 
                and a quiet conviction that how we work matters as much as what we produce.
              </p>
            </div>
            <div>
              <h2 className="text-muted-foreground font-normal mb-6">
                Current focus
              </h2>
              <p className="text-lg leading-relaxed">
                Exploring problems that demand both technical precision and human understanding. 
                Each project is an opportunity to learn something meaningful and contribute 
                something lasting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container-prose text-center">
          <blockquote className="space-y-4">
            <p className="font-serif text-2xl md:text-3xl italic text-foreground/90 leading-relaxed">
              "This is the work I care about."
            </p>
            <p className="text-sm text-muted-foreground">
              Grounded thinking, carefully applied.
            </p>
          </blockquote>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
