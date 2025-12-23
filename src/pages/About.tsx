import { PageLayout } from "@/components/layout/PageLayout";
import { PersonalArchive } from "@/components/archive/PersonalArchive";
import { EducationList } from "@/components/education/EducationList";
import { education } from "@/utils/education";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container-prose">
          <h1 className="animate-fade-up">About Me</h1>
        </div>
      </section>

      {/* Who I Am */}
      <section className="pb-16 md:pb-24">
        <div className="container-prose space-y-8">
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <p className="text-lg leading-relaxed">
              I'm a researcher and thinker driven by an enduring curiousity about how things work 
              and why they matter. My journey has taken me through academic inquiry, applied research, 
              and moments of quiet reflection, and each shaping how I approach problems today.
            </p>
            <p className="text-lg leading-relaxed">
              I believe that meaningful work requires more than technical skill. It demands patience, 
              integrity, and the humility to keep learning. I strive to bring these qualities to 
              everything I do, whether I'm analysing complex systems or having a simple conversation.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond the work, I'm someone who values depth over breadth, quality over quantity, 
              and substance over appearance. I find inspiration in thoughtful books, long walks, 
              and conversations that challenge my assumptions.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-prose">
        <hr className="border-border/50" />
      </div>

      {/* How I Think & Work */}
      <section className="py-16 md:py-24">
        <div className="container-prose space-y-8">
          <h2 className="text-muted-foreground font-normal">How I Think & Work</h2>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              My approach to research is shaped by a few core principles: start with genuine questions, 
              not predetermined answers; pursue rigour without losing sight of practical impact; 
              and always consider the human dimensions of technical problems.
            </p>
            <p className="text-lg leading-relaxed">
              I've learned that the best insights often emerge from patient attention rather than 
              rushed analysis. I try to create space for deep work, for second thoughts, 
              and for the kind of careful consideration that good research requires.
            </p>
            <p className="text-lg leading-relaxed">
              Collaboration matters to me. I believe that working with others and learning from their 
              perspectives, challenging and being challenged will make the work better. I approach 
              every project as an opportunity to grow alongside the people I'm working with.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-prose">
        <hr className="border-border/50" />
      </div>

      {/* Education */}
      <section className="py-16 md:py-24">
        <div className="container-prose space-y-8">
          <h2 className="text-muted-foreground font-normal">Education</h2>
          <EducationList items={education} />
        </div>
      </section>

      {/* Personal Archive */}
      <div className="container-prose">
        <PersonalArchive />
      </div>

      {/* Divider */}
      <div className="container-prose">
        <hr className="border-border/50" />
      </div>

      {/* Closing */}
      <section className="py-16 md:py-24">
        <div className="container-prose space-y-8">
          <p className="font-serif text-xl italic text-muted-foreground leading-relaxed">
            If you've made it this far, perhaps there's something here that resonates. 
            I'd be glad to connect and learn about what drives your work.
          </p>
          
          <Button asChild variant="hero-outline" size="lg">
            <Link to="/contact">
              Let's Connect
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
