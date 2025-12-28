import { PageLayout } from "@/components/layout/PageLayout";
import { Mail, Linkedin, Github, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container-prose">
          <h1 className="animate-fade-up">Connect</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 md:pb-32">
        <div className="container-prose space-y-12">
          <div 
            className="space-y-6 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            <p className="text-xl leading-relaxed">
              If something here resonates, let's connect.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always interested in thoughtful conversations—whether about research, 
              potential collaboration, or simply exchanging ideas. I value genuine connection 
              over networking, and substance over small talk.
            </p>
          </div>

          {/* Contact Options */}
          <div 
            className="space-y-4 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <Button
              asChild
              variant="hero-outline"
              size="lg"
              className="w-full sm:w-auto justify-start"
            >
              <a href="mailto:yeejingye@gmail.com">
                <Mail className="h-4 w-4" />
                yeejingye@gmail.com
              </a>
            </Button>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="justify-start text-muted-foreground hover:text-foreground"
              >
                <a
                  href="https://linkedin.com/in/yeejingye"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="lg"
                className="justify-start text-muted-foreground hover:text-foreground"
              >
                <a
                  href="https://github.com/yeejingye"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="lg"
                className="justify-start text-muted-foreground hover:text-foreground"
              >
                <a
                  href="https://scholar.google.com/citations?user=4MBA_rcAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GraduationCap className="h-4 w-4" />
                  Google Scholar
                </a>
              </Button>
            </div>
          </div>

          {/* Closing Note */}
          <div 
            className="pt-8 border-t border-border/50 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <p className="font-serif text-lg italic text-muted-foreground">
              Thank you for taking the time to be here.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
